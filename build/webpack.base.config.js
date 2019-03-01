const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    map: './src/map.js',
    brand: './src/brand.js'
  }, // 入口文件
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist')
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
        test: /\.art$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'art-template-loader',
        }
      },
      
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
        // 从右到左， loader安装后无需引入可直接使用
        // use: ['style-loader', 'css-loader']
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader'
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
    new CopyWebpackPlugin([
      {from: 'src/common'},
      {from: 'src/commonimg'}
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['app','common']
    }),
    new HtmlWebpackPlugin({
      filename: 'map.html',
      template: './src/map.html',
      chunks: ['map','common'],
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'brand.html',
      template: './src/brand.html',
      chunks: ['brand','common'],
      minify: {
        removeComments: true
      },
      hash: true
    }),
    
    extractCSS,
    extractLESS
  ], // 插件
  optimization: {
    splitChunks: {
        cacheGroups: {
            lib1: {
                chunks: "initial",
                name: "common",
                enforce: true
            }
        }
    }
  },
  resolve: {}, //为引入的模块起别名
}