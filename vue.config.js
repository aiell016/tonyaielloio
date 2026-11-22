const { pages, notFound, siteUrl } = require('./src/data/pages')
const publications = require('./src/data/publications.json')
const conferenceReviews = require('./src/data/conference-reviews.json')
const profile = require('./src/data/profile')

// One shared Vue bundle, with a real entry document for each shareable URL.
module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  chainWebpack(config) {
    const html = config.plugin('html')
    const HtmlPlugin = html.get('plugin')
    const [defaults] = html.get('args')
    function pageOptions(path, page, filename) {
      return Object.assign({}, defaults, {
        filename, page, siteUrl, canonical: path === null ? null : siteUrl + path,
        publications: path === '/research' ? publications : [],
        conferenceReviews: path === '/research' ? conferenceReviews : [],
        profile
      })
    }
    html.tap(() => [pageOptions('/', pages['/'], 'index.html')])
    for (const [path, page] of Object.entries(pages)) {
      if (path !== '/') {
        config.plugin('page-' + path).use(HtmlPlugin, [pageOptions(path, page, path.slice(1) + '/index.html')])
      }
    }
    config.plugin('page-not-found').use(HtmlPlugin, [pageOptions(null, notFound, '404.html')])
  }
}
