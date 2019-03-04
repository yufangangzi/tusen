const webpackDevConfig = require('./webpack.base.config')
const merge = require('webpack-merge');
const webpack = require('webpack')
module.exports = merge(webpackDevConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true
  } // webpack-dev-derver
})