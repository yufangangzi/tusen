const path = require('path')
const webpackDevConfig = require('./webpack.base.config')
const CleanWebpackPlaugin = require('clean-webpack-plugin') // 清空dist 文件
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin')
const extractTextPlugin = require('mini-css-extract-plugin')
module.exports = merge(webpackDevConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlaugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new uglify({
      uglifyOptions: {
        mangle: true,
        output: {
            beautify: true,
        },
      }
    }),
    new extractTextPlugin({
      filename: './style/[name].css'
    })
  ]
})