const webpack = require('webpack');
const helpers = require('../helpers');

module.exports = (env = {}) => ({
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: helpers.distPath,
    inline: true,
    host: 'localhost',
    port: 8081,
    stats: 'minimal',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});
