// Pull container base class and it's helpers
const { createContainer, asClass, asFunction, asValue } = require('awilix');

// Load configs
const config = require('../configs')

const Application = require('./app/Application')
const Server = require('./app/http/Server')
const router = require('./app/http/router')

const container = createContainer();

/**
 * System
 *---------------------------*/
container
    .register({
        app: asClass(Application).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        router: asFunction(router).singleton(),
    })
    .register({
        config: asValue(config)
    })

/**
 * Middlewares
 *---------------------------*/


module.exports = container;
