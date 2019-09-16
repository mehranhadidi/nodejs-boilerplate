// append .env vars to global environments variables
require('dotenv').config()

const path = require('path')

// Resolve current env
const ENV = process.env.NODE_ENV || 'development'

// Resolve ENV specific config file
const envConfig = require(path.join(__dirname, 'environments', ENV))

// Default configs
defaultConfig = {
    env: ENV
}

module.exports = Object.assign(defaultConfig, envConfig)