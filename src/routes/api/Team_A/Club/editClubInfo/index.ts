import { Request, Response } from 'express';
import Db from '../../../../../../src/TEAM_A/database';
import logger from '../../../../../../src/logger';
import { ICLUB } from 'src/interfaces/TEAM_A';

/*
  Api to edit a club in the database

  req.body:
  The new club to replace the old one, must contain id and name

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_a/club
*/
export default async (req: Request, res: Response) => {
  const new_club: ICLUB = req.body;

  logger.info('req.body', new_club);

  if (!new_club.name) {
    logger.error(
      'Could not edit club, updated club provided via req.body must contain a name'
    );
    return res
      .status(400)
      .send(
        'Updated club provided via req.body must contain a name.'
      );
  }

  if (new_club.id == undefined) {
    logger.error('Could not edit club, updated club provided via req.body must contain an id.');
    return res.status(400).send('Updated club provided via req.body must contain an id.');
  }

  if (isNaN(new_club.id)) {
    logger.error('Could not update club, id provided is not a number');
    return res.status(400).send('id must be a number');
  }

  if (new_club.name && typeof new_club.name != 'string') {
    logger.error('Could not edit a club, name is not a string');
    return res.status(400).send('Name must be string');
  }

  if (new_club.about_club && typeof new_club.about_club != 'string') {
    logger.error('Could not edit a club, about_club is not a string');
    return res.status(400).send('about_club must be string');
  }

  if (new_club.image && typeof new_club.image != 'string') {
    logger.error('Could not edit a club, image is not a string');
    return res.status(400).send('Image must be string');
  }

  try {
    const db = new Db();

    await db.editClubInfo(new_club);

    logger.info(`Edited club with id: [${new_club.id}]`);

    return res.status(200).send(`Edited club with id: [${new_club.id}]`);
  } catch (err) {
    const error = err as Error;
    logger.error(`Could not update club: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
