import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_A/database';
import logger from '../../../../../../../src/logger';

/*
  Api to get a club from the database via name
  
  Query parameters:
  nameSubStr: string - the substring of the club name

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/nameSubStr
*/
export default async (req: Request, res: Response) => {
  const { nameSubStr } = req.query;

  if (!nameSubStr) {
    logger.error(
      'Could not retrieve club, must provide a substring via query parameter to retrieve the club'
    );
    return res.status(400).send('Must provide a substring via query parameter to retrieve the club.');
  }

  if (typeof nameSubStr != 'string') {
    logger.error('Could not retrieve club, substring provided must be of type string');
    return res.status(400).send('Substring must be of type string');
  }

  try {
    const db = new Db();

    logger.error(`Retrieve clubs with substring: [${nameSubStr}]`);

    return res.status(200).send(await db.getClubsByNameSubString(nameSubStr));
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not retrieve clubs: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
