const path = require('path');
// 載入 prerender-spa-plugin (第一步)
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// 載入 PuppeteerRenderer (第二步)
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-prerender/' : '/',
  outputDir: 'dist/vue-prerender',
  assetsDir: './',
  indexPath: './index.html',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // 創建實例 (第三步)
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          indexPath: path.join(__dirname, 'dist/vue-prerender/index.html'),
          routes: ['/vue-prerender', '/vue-prerender/home'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
          }),
        })
      );
    }
  },
};