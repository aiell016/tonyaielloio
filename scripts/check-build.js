const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { pages, siteUrl } = require('../src/data/pages')
const projects = require('../src/data/projects.json')
const publications = require('../src/data/publications.json')
const profile = require('../src/data/profile')

const dist = path.resolve(__dirname, '../dist')
const slugs = projects.map(project => project.slug)
assert.strictEqual(slugs.length, new Set(slugs).size, 'Project slugs must be unique')
assert(fs.existsSync(path.join(dist, '.htaccess')), 'Missing Apache configuration in the production build')
assert(fs.existsSync(path.join(dist, '404.html')), 'Missing error page')

// A fresh request must work without an existing Vue Router session.
for (const route of Object.keys(pages)) {
  const html = fs.readFileSync(path.join(dist, route.slice(1), 'index.html'), 'utf8')
  assert(html.includes('href="' + siteUrl + route + '"'), 'Wrong canonical URL for ' + route)
  assert(html.includes('href="' + profile.linkedIn + '"'), 'Missing permanent LinkedIn link on ' + route)
  const scripts = Array.from(html.matchAll(/<script\b[^>]*\bsrc="(\/[^"]+)"/g), match => match[1])
  assert(scripts.length > 0, 'Missing Vue bundle for ' + route)
  for (const url of scripts) assert(fs.existsSync(path.join(dist, url.slice(1))), 'Missing script ' + url)
}
for (const project of projects) {
  assert(project.detail && project.detail.body && slugs.includes(project.detail.related) && project.detail.related !== project.slug, 'Missing project detail or related project for ' + project.slug)
  assert(project.images.length > 0, 'No images for ' + project.slug)
  for (const image of project.images) {
    assert(image.alt && image.width > 0 && image.height > 0, 'Missing image description or dimensions for ' + image.file)
    assert(fs.existsSync(path.join(dist, 'media', image.file)), 'Missing screenshot ' + image.file)
  }
  for (const link of project.links) {
    assert(new URL(link.url).protocol === 'https:', 'Project destinations must be absolute HTTPS URLs')
  }
}
const bibliography = fs.readFileSync(path.join(dist, 'research/index.html'), 'utf8')
for (const paper of publications) {
  assert(bibliography.includes('https://doi.org/' + paper.doi), 'Missing DOI for ' + paper.title)
  assert(bibliography.includes(paper.authors.join(', ')), 'Missing author list for ' + paper.title)
}
process.stdout.write('Verified route documents, bundles, gallery images, project links, publications, and profile links.\n')
