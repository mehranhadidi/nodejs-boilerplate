const path = require('path');

module.exports = function createControllerRoutes(controllerUri) {
    // Resolve controller
    const controllerPath = path.resolve('src/app/controllers', controllerUri)
    const Controller = require(controllerPath)

    // Get a router from controller and send it back to express router
    return Controller.router;
};