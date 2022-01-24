const { merge } = require('webpack-merge')
const path = require('path')
const root = path.join(__dirname, '../')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pkgJSON = require('../package.json')
const commonPublicPath = `//s1.wacdn.com/finance/`
const publicPath = `${commonPublicPath}${pkgJSON.name}/`
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(root, 'build'),
    publicPath: publicPath,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    hashDigestLength: 21,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash:21].css',
    }),
  ],
})
