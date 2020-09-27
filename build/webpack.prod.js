const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  optimization: {
    usedExports: true
  }
}

module.exports = merge(baseConfig, prodConfig)