/*  logging.js
    author: zudsniper
    winston logging
 */
const chalk = require('chalk');
const winston = require('winston');
console.log(chalk.inverse("INITIALIZING LOGGER") + ": level - " + chalk.bold.underline(process.env.LOG_LEVE.toString()));

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service', winston: winston},
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console({
            format: winston.format.cli({colors: {error: 'red', warn: 'yellow', info: 'white', http: 'purple', verbose: 'grey', debug: 'white', silly: 'black'}})
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error', options: { flags: 'w' }}),
        new winston.transports.File({ filename: 'logs/combined.log', level: 'verbose', options: { flags: 'w' }}),
    ],
});

//globalThis.LOGGER = logger;
logger.info(chalk.bgGreen.white("Winston global LOGGER enabled."));

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    //logger.configure({ level: 'info' });
    //logger.warn("environment is PRODUCTION");

}
if(process.env.NODE_ENV === 'testing') {
    //logger.configure({ level: 'debug' });
    //logger.warn("environment is TESTING");
}

if(process.env.DEBUG) {
    //logger.configure({ level: 'debug' });
    //logger.warn("environment is DEBUG");

}


module.exports = logger;