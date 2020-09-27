const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

// 引入webpack
const webpack = require('webpack')
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',// 自动定位哪里出错了，帮助我们快速定位出错内容（开发环境）
  devServer: {
    // contentBase: './dist',
    open: true, // 是否自动打开浏览器
    hot: true
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, devConfig)