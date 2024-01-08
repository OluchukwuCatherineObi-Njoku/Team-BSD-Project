import { Request, Response } from 'express';
import Db from '../../../../../TEAM_A/database'
import logger from '../../../../../../src/logger';
import { ICLUB } from 'src/interfaces/TEAM_A';

/*
  Api to add a club to the database
  
  Accepts in req.body the following:
  name: string - title of the post
  about_club: string - text of the post
  image: string - image of the post

  Must have at least name

  On success: status code 201
  On failure: status code 400

  Method: Post
  Route: /team_a/club
*/
export default async (req: Request, res: Response) => {
  const new_club: ICLUB = req.body;

  if (!new_club.name) {
    logger.error(
      'Could not add a new post, must provide at least a name to create a club!'
    );
    return res
      .status(400)
      .send('Must provide a club name at least to add a club');
  }

  if (new_club.name && typeof new_club.name != 'string') {
    logger.error('Could not add a new club, name is not a string');
    return res.status(400).send('Name must be string');
  }

  if (new_club.about_club && typeof new_club.about_club != 'string') {
    logger.error('Could not add a new club, about_club is not a string');
    return res.status(400).send('about_club must be string');
  }

  if (new_club.image && typeof new_club.image != 'string') {
    logger.error('Could not add a new club, image is not a string');
    return res.status(400).send('Image must be string');
  }

  try {
    const db = new Db();

    await db.addClub(new_club.name, new_club.about_club, new_club.image);

    logger.info(`Added a new club with name: [${new_club.name}]`);

    return res.status(201).send('Added club');
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not add new club: ${error.message}`);
    return res.status(400).send(error.message);
  }
};
