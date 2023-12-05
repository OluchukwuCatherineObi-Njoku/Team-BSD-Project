// Get the full path to our env.jest file
import path from 'path';
import dotenv from 'dotenv';
import logger from './src/logger';

const envFile = path.join(__dirname, '.env.jest');

// Read the environment variables we use for Jest from our env.jest file
dotenv.config({ path: envFile });

// Log a message to remind developers how to see more detail from log messages
logger.info(`Using LOG_LEVEL=${process.env.LOG_LEVEL}. Use 'debug' in env.jest for more detail`);

// Set our Jest options, see https://jestjs.io/docs/configuration
export default {
  verbose: true,
  testTimeout: 5000,
};
