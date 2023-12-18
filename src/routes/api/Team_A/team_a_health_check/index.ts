// Example api
import { Request, Response } from 'express';
import logger from '../../../../../src/logger';

// This route is a health check for team_a
// Route access: /team_a/team_a_health_check
export default (req: Request, res: Response) => {
  logger.error('Someone accessed this route');

  res.status(200).send(`From Team A, Health is Good!`);
};
