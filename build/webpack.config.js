const path = require('path')
const CleanWebpackPlaugin = require('clean-webpack-plugin') // 清空dist 文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
  disable: process.env.NOOE_ENV === 'development' ? true : false,
  filename: 'style/[name].css'
})

const extractLESS = new ExtractTextPlugin({
  filename: 'style/[name].less'
})
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    utils: './src/utils.js'
  }, // 入口文件
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist')
  }, //输出配置
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        // 从右到左， loader安装后无需引入可直接使用
        // use: ['style-loader', 'css-loader']
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        // use: [
        //   {loader: 'style-loader'},
        //   {loader: 'css-loader'},
        //   {loader: 'less-loader'}
        // ]
        use: extractLESS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024*8, // 8k 以下的 base64 内联，不产生图片
            fallback: 'file-loader',
            name: '[name].[ext]?[hash]',
            outputPath: 'image/', // 输出路径
            publicPath: '../image' // 可以问到图片的引用路径
          }
        }
      },
      
    ]
  }, // 放置loader 加载器
  plugins: [
    new CleanWebpackPlaugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['utils', 'app']
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      chunks: ['app'],
      minify: {
        removeComments: true
      },
      hash: true
    }),
    extractCSS,
    extractLESS
  ], // 插件
  resolve: {}, //为引入的模块起别名
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true
  } // webpack-dev-derver
}