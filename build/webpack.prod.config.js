const path = require('path')
const webpackDevConfig = require('./webpack.base.config')
const CleanWebpackPlaugin = require('clean-webpack-plugin') // 清空dist 文件
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin')
const extractTextPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(webpackDevConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {loader: extractTextPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: extractTextPlugin.loader},
          {loader: 'css-loader'}
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlaugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new uglify({
      uglifyOptions: {
        mangle: true,
        output: {
            beautify: false,
        },
      }
    }),
    new extractTextPlugin({
      filename: './style/[name].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions:{
        safe: true
      }
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            common: {
                chunks: "initial",
                name: "common",
                enforce: true,
                minChunks: 2,       //表示提取公共部分最少的文件数
                minSize: 0          //表示提取公共部分最小的大小
            }
        }
    }
  },
})