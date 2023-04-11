/*  logging.js
    author: zudsniper
    winston logging
 */
// set environment variables
require("dotenv").config();

const chalk = require('chalk');
const winston = require('winston');
console.log(chalk.inverse("INITIALIZING LOGGER") + ": level - " + chalk.bold.underline(process.env.LOG_LEVEL.toString()));

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: format.combine(
		format.colorize({error: 'red', warn: 'yellow', info: 'white', http: 'blue', verbose: 'grey', debug: 'purple', silly: 'black'}),
		format.timestamp(),
		format.printf(({timestamp: string, level: string, message: string }) => {
			return `[${level}] ${message} | @ ${timestamp}`;
		})
	),
    defaultMeta: { service: 'user-service', winston: winston}, // TODO: figure out what the fuck this does
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error', options: { flags: 'w' }}),
        new winston.transports.File({ filename: 'logs/combined.log', level: 'silly', options: { flags: (process.env.NODE_ENV !== "production") ? 'a' : 'w' }}),
    ],
});

// Check for Node environment value -- and set things accordingly
if (process.env.NODE_ENV === 'production') {
    logger.configure({ level: 'info' });
    logger.warn("ENVIRONMENT: " + chalk.bold.white.bgRed("PRODUCTION"));
    logger.silly(chalk.white.bold("Head Honcho") + ": " + "alright alright this is the real thing people! let's KEEP IT MOVING!");
    logger.silly(chalk.white("Team Lead: ") + ": " + chalk.italic.brightGrey("Look alive Soldier. We've got a job to do."));
    // I'm really roleplaying in my own template with myself... 
    // sad
}
else if(process.env.NODE_ENV === 'development') {
    logger.configure({ level: 'debug' });
    logger.warn("ENVIRONMENT: " + chalk.bold.white.bgYellow("Staging"));

} else if(process.env.NODE_ENV === 'staging') {
    logger.configure({ level: 'debug' });
    logger.warn("ENVIRONMENT: " + chalk.bold.white.bgGreen("development") + ", we chillin");
} else if(process.env.NODE_ENV) {
    logger.warn("ENVIRONMENT: " + chalk.bold.brightGrey(process.env.NODE_ENV))
} else {
    logger.warn("ENVIRONMENT: " + chalk.bold.red.inverse("NOT SET"));
}

// allow DEBUG env var to override LOG_LEVEL without changing NODE_ENV
if(process.env.DEBUG) {
    logger.configure({ level: 'debug' });
    logger.warn(chalk.bold.purple("DEBUG enabled."));
}

logger.info(chalk.bgGreen.white("Winston logger enabled."));

// export myself 
module.exports = logger;