const path = require('path');

const rootPath = path.resolve(__dirname, '..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);
const capitalizeString = s => s.charAt(0).toUpperCase() + s.slice(1);
const pascalizeString = dashedName =>
  dashedName
    .split('-')
    .map(capitalizeString)
    .join('');

exports.bundleName = process.env.npm_package_name;
exports.bundleNameCapitals = pascalizeString(process.env.npm_package_name);
exports.versionName = JSON.stringify(process.env.npm_package_version).replace(
  /"/g,
  ''
);
exports.rootPath = rootPath;
exports.srcPath = resolveFromRootPath('src');
exports.buildPath = resolveFromRootPath('build');
exports.distPath = resolveFromRootPath('build', 'dist');
exports.libPath = resolveFromRootPath('build', 'lib');
