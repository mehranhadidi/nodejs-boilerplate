const express = require('express');

class Server {
    constructor({ config }) {
        this.config = config;
        this.express = express();
    }

    async start() {
        const http = this.express.listen(this.config.web.port, () => {
            // Extract port from express instance
            const { port } = http.address()

            // Log express start
            console.log(`${process.pid} is running on port ${port}`);
        })
    }
}

module.exports = Server