const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const Promise = require('bluebird')
const webpack = require('webpack')
const ip = require('dev-ip')
const bodyParser = require('body-parser')
const WebpackDevServer = require('webpack-dev-server')

Promise.promisifyAll(fs)

const env = 'development'
const devIp = ip()[0] || 'localhost'
const root = path.join(__dirname, '..')
const configPath = path.join(root, `config/webpack.config.development`)
const appConfigPath = path.join(root, 'config/app.yaml')

const config = require(configPath)
const appConfig = yaml.load(fs.readFileSync(appConfigPath))

const entry = config.entry
const devPort = appConfig.server.devPort

