const path = require('path');
// 載入 prerender-spa-plugin (第一步)
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// 載入 PuppeteerRenderer (第二步)
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: '/vue/',
  outputDir: 'docs/vue/',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // 創建實例 (第三步)
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'docs'),
          indexPath: path.join(__dirname, 'docs/vue/index.html'),
          routes: ['/vue', '/vue/about'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
          }),
        })
      );
    }
  },
};