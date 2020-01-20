const helpers = require('../helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => ({
  entry: {
    [helpers.bundleName]: ['./app.tsx']
  },
  output: {
    path: helpers.libPath,
    filename: '[name].js',
    library: {
      root: helpers.bundleNameCapitals,
      amd: helpers.bundleName,
      commonjs: helpers.bundleName
    },
    libraryTarget: 'umd'
  },
  externals: {
    'global-store': 'global-store'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `${helpers.rootPath}/package.json`,
        to: `${helpers.buildPath}/package.json`
      },
      {
        from: `${helpers.srcPath}/index.d.ts`,
        to: `${helpers.buildPath}/index.d.ts`
      }
    ])
  ]
});
