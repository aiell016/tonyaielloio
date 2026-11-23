const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { parse } = require('parse5')
const { pages, notFound, siteUrl, categories } = require('../src/data/pages')
const profile = require('../src/data/profile')
const projects = require('../src/data/projects.json')
const publications = require('../src/data/publications.json')
const reviews = require('../src/data/conference-reviews.json')
const courses = require('../src/data/courses.json')

const dist = path.resolve(__dirname, '../dist')
const documents = new Map()
const titles = new Set()
const descriptions = new Set()

function elements(node) {
  return [node, ...(node.childNodes || []).flatMap(elements)]
}
function attr(node, name) {
  return node.attrs?.find(item => item.name === name)?.value
}
function content(node) {
  if (node.nodeName === '#text') return node.value
  return (node.childNodes || []).map(content).join('').trim()
}
function fileFor(urlPath) {
  return path.join(dist, urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath)
}
function enclosingLink(node) {
  for (let parent = node.parentNode; parent; parent = parent.parentNode) {
    if (parent.tagName === 'a') return parent
  }
}

for (const page of [...pages, notFound]) {
  const source = fs.readFileSync(fileFor(page.path), 'utf8')
  const errors = []
  const nodes = elements(parse(source, { onParseError: error => errors.push(error.code) }))
  assert.deepEqual(errors, [], 'Invalid HTML on ' + page.path)
  const all = tag => nodes.filter(node => node.tagName === tag)
  const ids = nodes.map(node => attr(node, 'id')).filter(Boolean)
  assert.equal(new Set(ids).size, ids.length, 'Duplicate IDs on ' + page.path)
  const links = all('a')
  const hrefs = links.map(link => attr(link, 'href'))
  const main = all('main')[0]
  assert(main && content(main).length > 120, 'Missing static content on ' + page.path)
  assert.equal(all('h1').length, 1, 'Expected one primary heading on ' + page.path)
  assert.equal(content(all('title')[0]), page.title)
  assert(!titles.has(page.title) && !descriptions.has(page.description), 'Duplicate metadata on ' + page.path)
  titles.add(page.title)
  descriptions.add(page.description)
  assert(all('meta').some(tag => attr(tag, 'name') === 'description' && attr(tag, 'content') === page.description))
  const footer = all('footer')[0]
  const year = new Date().getUTCFullYear()
  assert(footer && content(footer).includes('© ' + year + ' Aiello.io'), 'Missing copyright credit on ' + page.path)
  const footerNodes = elements(footer)
  assert(footerNodes.some(node => attr(node, 'id') === 'copyright-year' && content(node) === String(year)))
  assert(footerNodes.some(node => node.tagName === 'a' && attr(node, 'href') === 'https://aiello.io/' && content(node) === 'Aiello.io'))
  assert(hrefs.includes('mailto:' + profile.email))
  const canonical = all('link').find(tag => attr(tag, 'rel') === 'canonical')
  const shareImage = all('meta').find(tag => attr(tag, 'property') === 'og:image')
  assert(fs.existsSync(fileFor(new URL(attr(shareImage, 'content')).pathname)))
  if (page === notFound) {
    assert(!canonical && all('meta').some(tag => attr(tag, 'name') === 'robots' && attr(tag, 'content') === 'noindex'))
  } else {
    assert.equal(attr(canonical, 'href'), siteUrl + page.path)
    assert(!all('meta').some(tag => attr(tag, 'name') === 'robots' && /noindex/i.test(attr(tag, 'content'))))
    const schema = JSON.parse(content(all('script').find(tag => attr(tag, 'type') === 'application/ld+json')))
    assert(schema['@graph'].some(item => item.url === siteUrl + page.path))
  }
  for (const img of all('img')) {
    assert(attr(img, 'alt') && +attr(img, 'width') > 0 && +attr(img, 'height') > 0, 'Missing image metadata on ' + page.path)
  }
  for (const node of nodes) {
    const local = node.tagName === 'link' ? attr(node, 'href') : attr(node, 'src')
    if (local?.startsWith('/')) assert(fs.existsSync(fileFor(local)), 'Missing file ' + local)
    if (node.tagName === 'a') assert(!enclosingLink(node), 'Nested anchors on ' + page.path)
  }
  documents.set(page.path, { nodes, ids: new Set(ids), links, hrefs, main })
}

// Check links against the HTML that an ordinary crawler or a browser without JavaScript receives.
for (const [route, doc] of documents) {
  for (const href of doc.hrefs) {
    assert(href, 'Empty link on ' + route)
    const url = new URL(href, siteUrl + route)
    if (url.origin !== siteUrl) continue
    assert(fs.existsSync(fileFor(url.pathname)), 'Broken link from ' + route + ' to ' + href)
    if (url.hash) assert(documents.get(url.pathname)?.ids.has(decodeURIComponent(url.hash.slice(1))), 'Broken fragment from ' + route + ' to ' + href)
  }
}
const sitemap = fs.readFileSync(fileFor('/sitemap.xml'), 'utf8')
const listed = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), match => match[1])
assert.deepEqual(listed.sort(), pages.map(page => siteUrl + page.path).sort())
assert(fs.readFileSync(fileFor('/robots.txt'), 'utf8').includes('Sitemap: ' + siteUrl + '/sitemap.xml'))

function checkScreenshot(doc, project, image) {
  const img = doc.nodes.find(node => node.tagName === 'img' && attr(node, 'src') === '/media/' + image.file)
  assert(img, 'Missing screenshot ' + image.file)
  const site = image.site ? project.links.find(link => link.id === image.site) : project.links[0]
  const anchor = enclosingLink(img)
  assert(site && anchor, 'Screenshot has no website ' + image.file)
  assert.equal(attr(anchor, 'href'), site.url, 'Wrong screenshot destination for ' + image.file)
  assert.equal(attr(anchor, 'target'), '_blank')
}

const projectIndex = documents.get('/projects/')
for (const project of projects) {
  const url = '/projects/' + project.slug + '/'
  const detail = documents.get(url)
  assert(projectIndex.hrefs.includes(url), 'Unlinked case study ' + url)
  assert(project.links.length, 'Project has no destination ' + project.slug)
  for (const link of project.links) {
    assert(link.label && new URL(link.url).protocol === 'https:' && detail.hrefs.includes(link.url))
  }
  for (const image of project.images) {
    checkScreenshot(detail, project, image)
    assert(detail.hrefs.includes('/media/' + image.file), 'Missing full-size image link for ' + image.file)
  }
  const category = categories.find(item => item.label === project.group)
  for (const route of ['/projects/', category.path]) {
    const archive = documents.get(route)
    assert(archive.hrefs.includes(url) && archive.hrefs.includes(project.links[0].url))
    if (project.images.length) checkScreenshot(archive, project, project.images[0])
  }
  for (const other of categories.slice(1).filter(item => item !== category)) {
    assert(!documents.get(other.path).hrefs.includes(url), 'Incorrect category for ' + project.slug)
  }
}
for (const slug of ['project-volga', 'mission-got-your-six']) {
  const project = projects.find(item => item.slug === slug)
  checkScreenshot(documents.get('/'), project, project.images[0])
}
const research = documents.get('/research/')
for (const paper of publications) {
  assert(research.hrefs.includes('https://doi.org/' + paper.doi))
  assert(content(research.main).includes(paper.authors.join(', ')), 'Missing publication authors for ' + paper.id)
}
for (const year of reviews) for (const conference of year.conferences) assert(research.hrefs.includes(conference.url))
const teaching = content(documents.get('/teaching/').main)
for (const group of courses) for (const [name, description] of group.courses) assert(teaching.includes(name) && teaching.includes(description))
assert(fs.existsSync(fileFor('/.htaccess')))
process.stdout.write('Verified static content, internal links and fragments, screenshot destinations, metadata, sitemap, publications and courses.\n')
