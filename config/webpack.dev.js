/* eslint-env node */
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    filename: 'assets/bundle.js',
    chunkFilename: 'assets/[name].js',
  },

  devServer: {
    // proxy: [{
    //   context: ['/'],
    //   target: 'https://localhost:3000/',
    // }],
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    historyApiFallback: true,
    publicPath: '/',
    stats: {
      colors: true,
      errors: true,
      errorDetails: false,
      warnings: true,
      timings: true,
      hash: false,
      assets: false,
      chunks: false,
      modules: false,
    },
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Question Asker',
      template: resolve(__dirname, '../src/template.ejs'),
      filename: 'index.html',
      elasticPaymentsEngine: 'https://sandbox-engine.thesolution.com',
      fbPixel: 281922122547067,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.BUILD_ENV': JSON.stringify('development'),
    }),
  ],
}
