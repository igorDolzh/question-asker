/* eslint-env node */

const webpack = require('webpack')
const SentryCliPlugin = require('@sentry/webpack-plugin')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const childProcess = require('child_process')
const RELEASE_HASH = childProcess.execSync('git rev-parse HEAD').toString().trim()

module.exports = {
  devtool: 'hidden-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Question Asker',
      template: resolve(__dirname, '../src/template.ejs'),
      filename: 'index.html',
      elasticPaymentsEngine: 'https://engine.elastic-payments.com',
      fbPixel: 1570402453106497,
    }),
    new webpack.DefinePlugin({
      'process.env.BUILD_ENV': JSON.stringify('production'),
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.RELEASE_HASH': JSON.stringify(RELEASE_HASH),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          beautify: false,
        },
      },
    }),
    /*
      Sentry plugin creates source maps and uploads them to sentry.io
    */
    new SentryCliPlugin({
      include: resolve(__dirname, '../public'),
      ignoreFile: '.gitignore',
      release: RELEASE_HASH,
      configFile: resolve(__dirname, './.sentry.properties'),
    }),
  ],
}
