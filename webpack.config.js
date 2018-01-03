const path = require("path");
const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV);

module.exports = {
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public',
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/api/**': {
        target: 'http://localhost:8081'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: removeEmpty([
    ifProduction(new HtmlWebpackPlugin({ title: 'Tree-shaking' })),
    ifProduction(new webpack.optimize.UglifyJsPlugin())
  ])
}
