const { merge } = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config.base')
const pkgJSON = require('../package.json')
const root = path.join(__dirname, '../')
const publicPath = `//test.wacdn.com/${pkgJSON.name}/`
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
