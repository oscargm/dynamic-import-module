const merge = require('webpack-merge');
const configCommon = require('./config.base');
const configStandalone = require('./config.standalone');
const configDev = require('./config.dev');

// [!] Order of the configs matter.
module.exports = env =>
  merge(configCommon(env), configStandalone(env), configDev(env));
