const commonConfig = require('./webpack.general')
const webpackMerge = require('webpack-merge')

/* eslint import/no-dynamic-require:0 */
/* eslint global-require:0 */
const addons = (args) =>
  [].concat.apply([], [args])
    .filter(Boolean)
    .map(
      (name) => require(`./addons/webpack.${name}`)
    )

module.exports = (env) => {
  const envConfig = require(`./webpack.${env.env}`)
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons))
}
