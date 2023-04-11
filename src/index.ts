/**
 * @name index.ts
 * @description an entrypoint file for your typescriptApp. Made to be modified. 
 * @author zudsniper
 *         on GitHub 
 * ------------------
 * created 01/15/2023
 * updated 04/09/2023
 */

// use dotenv to fill `process.env` with environment variables
require('dotenv').config();

// external imports
const chalk = require('chalk');

// local imports 
const {logger} = require('./utils/logging');

// tell the world 
logger.info(chalk.bold.greenBg.white("STARTING") + "...");

// place for other code (not for financial crimes -- note to self)
// TODO: use this template & delete this line
