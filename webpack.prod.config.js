const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
/**
 * TODO: 
 * - TERSER
 * - MINIMIZE
 * configure a server that always return the routes
 */
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
});
