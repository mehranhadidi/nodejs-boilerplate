const { Router } = require('express');
const controller = require('../utils/createControllerRoutes');

module.exports = ({ config }) => {
    // Main Router
    const router = Router()

    // Api Router
    const apiRouter = Router()

    // TODO add some api specific middlewares

    /**
     * Routes
     *-------------------------------------*/
    apiRouter.use('/users', controller('UserController'));


    /** End of routes --------------------*/

    // Add API routes to main router
    router.use('/api', apiRouter)

    // export router
    return router
}