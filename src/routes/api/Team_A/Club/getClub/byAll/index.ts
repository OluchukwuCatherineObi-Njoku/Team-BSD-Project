import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_A/database';
import logger from '../../../../../../../src/logger';

/*
  Api to get a club from the database via name
  
  Query parameters:

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/
*/
export default async (req: Request, res: Response) => {

  try {
    const db = new Db();

    logger.error(`Retrieve all clubs`);

    return res.status(200).send(await db.getAllClubs());
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not retrieve clubs: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
