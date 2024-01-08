import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_A/database';
import logger from '../../../../../../../src/logger';

/*
  Api to get a club from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/id
*/
export default async (req: Request, res: Response) => {
  const { id } = req.query;

  if (!id || typeof id != 'string') {
    logger.error(
      'Could not retrieve club, must provide an id number via query parameter to retrieve the club'
    );
    return res.status(400).send('Must provide an id via query parameter to retrieve the club.');
  }

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    logger.error('Could not retrieve club, id is not a number');
    return res.status(400).send('id must be a number');
  }

  try {
    const db = new Db();

    logger.info(`Retrieved club with id : [${parsedId}]`);

    return res.status(200).send(await db.getClubByID(parsedId));
  } catch (err) {
    const error = err as Error;
    logger.error(`Could not retrieve club: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
