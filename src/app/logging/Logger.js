const winston = require('winston')

module.exports = ({ config }) => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [

        ],

    })

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }

    return logger;
}