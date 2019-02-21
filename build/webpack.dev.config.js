const webpackDevConfig = require('./webpack.base.config')
const merge = require('webpack-merge');
const webpack = require('webpack')
module.exports = merge(webpackDevConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true
  } // webpack-dev-derver
})