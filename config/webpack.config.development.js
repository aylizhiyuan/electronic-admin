const { merge } = require('webpack-merge')
const path = require('path')
const ip = require('dev-ip')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const yaml = require('js-yaml')
const fs = require('fs-extra')
const root = path.join(__dirname, '../')
const devIp = ip()[0] || 'localhost'
const appConfigPath = path.join(root, 'config/app.yaml')
const appConfig = yaml.load(fs.readFileSync(appConfigPath))
const devPort = appConfig.server.devPort
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    hot: 'react-hot-loader/patch',
  },
  output: {
    pathinfo: true,
    path: path.join(root, 'build'),
    publicPath: `http://${devIp}:${devPort}/build/`, // 为了加载dev-server中的资源
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
})
