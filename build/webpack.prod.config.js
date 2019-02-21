const path = require('path')
const webpackDevConfig = require('./webpack.base.config')
const CleanWebpackPlaugin = require('clean-webpack-plugin') // 清空dist 文件
const merge = require('webpack-merge');
module.exports = merge(webpackDevConfig, {
  plugins: [
    new CleanWebpackPlaugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
  }),
  ]
})