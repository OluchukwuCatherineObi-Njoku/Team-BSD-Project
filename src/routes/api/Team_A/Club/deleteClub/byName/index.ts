import { Request, Response } from 'express';
import Db from '../../../../../../TEAM_A/database';
import logger from '../../../../../../logger';

/*
  Api to get a delete a club from the database via name
  
  Query parameters:
  name: string - the name of the club

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/name
*/
export default async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name) {
    logger.error(
      'Could not delete club, must provide a name via query parameter to delete the club'
    );
    return res.status(400).send('Must provide a name via query parameter to delete the club.');
  }

  if (typeof name != 'string') {
    logger.error('Could not delete club, name provided must be of type string');
    return res.status(400).send('Name must be of type string');
  }

  try {
    const db = new Db();

    logger.error(`Deleted club with name: [${name}]`);

    await db.deleteClubByName(name);

    return res.status(200).send(`Deleted club with name: [${name}]`);
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not delete club: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
