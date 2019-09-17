// Pull container base class and it's helpers
const { createContainer, asClass, asFunction, asValue } = require('awilix');

// Load configs
const config = require('../configs')

const Application = require('./app/Application')
const Server = require('./app/http/Server')
const router = require('./app/http/router')
const logger = require('./app/logging/Logger')

const container = createContainer();

/**
 * System
 *---------------------------*/
container
    // Classes
    .register({
        app: asClass(Application).singleton(),
        server: asClass(Server).singleton(),
    })

    // Functions
    .register({
        router: asFunction(router).singleton(),
        logger: asFunction(logger).singleton()
    })

    // Values
    .register({
        config: asValue(config),
    })

/**
 * Middlewares
 *---------------------------*/


module.exports = container;
