import express from 'express';
import helmet from 'helmet';
import stoppable from 'stoppable';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import logger from './logger';
import router from './routes';

const app = express();
// Middleware for security headers
app.use(helmet());

// Cross origin resource sharing
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(router);

const port = 8080;

const server = stoppable(
  app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
  })
);

process.on('SIGINT', () => {
  logger.info('Received SIGINT. Shutting down gracefully...');
  server.stop(() => {
    logger.info('Server stopped.');
  });
});

process.on('SIGTERM', () => {
  logger.info('Received SIGTERM. Shutting down gracefully...');
  server.stop(() => {
    logger.info('Server stopped.');
  });
});
