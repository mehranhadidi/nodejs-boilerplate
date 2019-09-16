const container = require('./src/container');

const app = container.resolve('app');

// Start the application
app.start()
    .catch((error) => {
        // TODO move this to a dedicated logger instance
        console.log(error)

        // Exit application
        process.exit()
    })