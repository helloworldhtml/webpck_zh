// 导入path模块
const path = require('path')
// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 插件先引入在实例化
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入webpack
const webpack = require('webpack')
// 性能分析
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  // 打包入口
  entry: './src/main.js',
  // 打包出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  // 配置打包规则
  // 总结：1. webpack本身只能打包js文件，如果要打包其他文件就需要借助于loader
  // 2. loader其实就是专门用于打包特定文件的处理程序
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.vue$/,
      loader: 'vue-loader'
    },{
      test: /\.(jpg|jpeg|png|svg)$/,
      loader: 'url-loader', // 先安装file-loader
      options: {
        name: '[name].[ext]',
        limit: 2048 // 单位是b，如果文件小于2kb,直接base64打包进去，减少请求，如果大于2kb，使用file-loader
      }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // 顺序是从右到左，从下到上的顺序依次执行
      // css-loader是把所有css文件打包成一个css,解决文件之间的依赖关系
      // style-loader是将css-loader打包完成后生成的文件挂载到页面的head标签的style中，所以要按照顺序
    },{
      test: /\.styl(us)?$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',  // 给样式自动加前缀
        'stylus-loader'
      ]
      // 先用stylus-loader处理成css文件
    }]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    // 在打包结束，在dist目录下自动生成index.html文件，并把打包好的js文件注入到注入html文件中
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // 打包之前先删掉原来的dist目录
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    alias: { // 起一个别名
      'vue': 'vue/dist/vue.js'
    }
  }
}