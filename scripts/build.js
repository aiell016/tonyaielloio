const fs = require('node:fs')
const path = require('node:path')
const ejs = require('ejs')
const { pages, notFound, categories, navigation, siteUrl } = require('../src/data/pages')
const projects = require('../src/data/projects.json')
const profile = require('../src/data/profile')

const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const layoutFile = path.join(root, 'src/templates/layout.html')
const render = ejs.compile(fs.readFileSync(layoutFile, 'utf8'), { filename: layoutFile })
const defaultImage = { file: 'lakefront-sunrise.webp', alt: 'Sunrise reflecting off Lake Michigan below a bank of clouds.' }
const person = { '@type': 'Person', '@id': siteUrl + '/about/#anthony-aiello', name: profile.name, alternateName: 'Tony Aiello', url: siteUrl + '/about/' }
const website = { '@type': 'WebSite', '@id': siteUrl + '/#website', url: siteUrl + '/', name: 'Tony Aiello’s Portfolio', author: { '@id': person['@id'] } }

function websiteFor(project, image) {
  const site = image && image.site
    ? project.links.find(link => link.id === image.site)
    : project.links[0]
  if (!site || (project.links.length > 1 && image && !image.site)) {
    throw new Error('Missing website for ' + project.slug + (image ? ' / ' + image.file : ''))
  }
  return site
}

function metadata(page, canonical, breadcrumbs) {
  if (!canonical) return null
  const item = { '@type': 'WebPage', '@id': canonical + '#webpage', url: canonical,
    name: page.title, description: page.description, isPartOf: { '@id': website['@id'] } }
  const graph = [item]
  if (page.path === '/') graph.push(website, person)
  if (page.template === 'about') {
    item['@type'] = 'ProfilePage'
    item.mainEntity = { '@id': person['@id'] }
    graph.push(person)
  }
  if (breadcrumbs.length) {
    item.breadcrumb = { '@id': canonical + '#breadcrumb' }
    graph.push({ '@type': 'BreadcrumbList', '@id': item.breadcrumb['@id'],
      itemListElement: breadcrumbs.map((entry, index) => ({
        '@type': 'ListItem', position: index + 1, name: entry.name, item: siteUrl + entry.path
      })) })
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
}

fs.rmSync(dist, { recursive: true, force: true })
fs.cpSync(path.join(root, 'public'), dist, { recursive: true })
const fontDir = path.join(dist, 'fonts')
fs.mkdirSync(fontDir, { recursive: true })
const fonts = {
  '@fontsource-variable/dm-sans': ['dm-sans-latin-wght-normal.woff2']
}
for (const [packageName, files] of Object.entries(fonts)) {
  const dir = path.dirname(require.resolve(packageName + '/package.json'))
  for (const file of files) fs.copyFileSync(path.join(dir, 'files', file), path.join(fontDir, file))
}
for (const page of [...pages, notFound]) {
  const canonical = page === notFound ? null : siteUrl + page.path
  const breadcrumbs = page.project ? [
    { name: 'Home', path: '/' }, { name: 'Projects', path: '/projects/' }, { name: page.project.title, path: page.path }
  ] : []
  const html = render({ page, canonical, breadcrumbs, categories, navigation, siteUrl, projects, profile,
    websiteFor, shareImage: page.image || defaultImage,
    structuredData: metadata(page, canonical, breadcrumbs) })
  const output = path.join(dist, page === notFound ? '404.html' : page.path.slice(1) + 'index.html')
  fs.mkdirSync(path.dirname(output), { recursive: true })
  fs.writeFileSync(output, html)
}
const urls = pages.map(page => '  <url><loc>' + siteUrl + page.path + '</loc></url>').join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n')
fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + siteUrl + '/sitemap.xml\n')
process.stdout.write('Built ' + pages.length + ' static pages, the error page and the sitemap.\n')
