const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../helpers');

module.exports = (env = {}) => ({
  entry: {
    [helpers.bundleName]: ['./app.tsx']
  },
  output: {
    path: helpers.distPath
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendorGroup: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      chunksSortMode: 'manual',
      chunks: ['manifest', 'vendor', helpers.bundleName]
    })
  ]
});
