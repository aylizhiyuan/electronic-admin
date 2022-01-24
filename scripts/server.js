const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const webpack = require('webpack')
const ip = require('dev-ip')
const webpackDevServer = require('webpack-dev-server')

const env = 'development'
const devIp = ip()[0] || 'localhost'
const root = path.join(__dirname, '..')
const configPath = path.join(root, `config/webpack.config.development`)
const appConfigPath = path.join(root, 'config/app.yaml')

const config = require(configPath)
const appConfig = yaml.load(fs.readFileSync(appConfigPath))

const entry = config.entry

const compiler = webpack(config)
const devServerOptions = { ...config.devServer, open: true }
const server = new webpackDevServer(devServerOptions, compiler)
const runServer = async () => {
  await server.start()
}
runServer()
