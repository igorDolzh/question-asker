const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app',
  ],

  output: {
    filename: 'assets/bundle.[chunkhash].js',
    chunkFilename: 'assets/[name].[chunkhash].js',
    path: resolve(__dirname, '../public/app'),
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /src\/.*/,
      ],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]', 'stylus-loader'],
    }, {
      test: /\.(png|jpg|jpeg)$/,   // images in /assets are loaded as files
      loader: 'file-loader',
      include: [
        /assets/,
      ],
      options: {
        name: '[path][name].[hash:4].[ext]',
        context: resolve(__dirname, '../src'),
      },
    }, {
      test: /\.(png|jpg|jpeg)$/,  // images not in /assets are uri-encoded
      use: ['url-loader?name=[hash:8].[ext]'],
      exclude: [
        /assets/,
      ],
    }, {
      test: /\.(svg|gif)$/,
      use: ['url-loader?name=[hash:8].[ext]'],
    }, {
      test: /\.(mp4|webm)$/, // videos
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash:4].[ext]',
        context: resolve(__dirname, '../src'),
      },
    }, {
      test: /\.(woff2?)$/, // fonts
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash:4].[ext]',
        context: resolve(__dirname, '../src'),
      },
    }],
  },

  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, '../src'),
    ],
    alias: {
      app: resolve(__dirname, '../src/'),
      components: resolve(__dirname, '../src/lib/components'),
    },
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      stylus: {
        default: {
          import: [resolve(__dirname, '../src/global.styl')],
        },
      },
    }),
  ],
}
