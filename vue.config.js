const path = require('path');
// 載入 prerender-spa-plugin (第一步)
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// 載入 PuppeteerRenderer (第二步)
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const glob = require('glob')
const urlPath = 'vue-prerender'
const vueReg = /([a-zA-Z1-9]+)\.vue/
const routes = glob.sync("./src/pages/*.vue").reduce((acc, cur) => {
  const filename = cur.match(vueReg)[1]
  let newRoute = `/${urlPath}/${filename}`
  acc.push(newRoute)
  return acc
}, [])

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${urlPath}/` : '/',
  outputDir: `dist/${urlPath}`,
  assetsDir: './',
  indexPath: './index.html',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // 創建實例 (第三步)
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          indexPath: path.join(__dirname, `dist/${urlPath}/index.html`),
          routes,
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
          }),
        })
      );
    }
  },
};