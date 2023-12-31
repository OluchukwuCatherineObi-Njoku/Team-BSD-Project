// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_E/database';
import logger from '../../../../../../../src/logger';

/*
  Api to get a delete a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
export default async (req: Request, res: Response) => {
  const { title } = req.query;

  if (!title) {
    logger.error(
      'Could not delete post, must provide a title via query parameter to delete the post'
    );
    return res.status(400).send('Must provide a title via query parameter to delete the post.');
  }

  if (typeof title != 'string') {
    logger.error('Could not delete post, title provided must be of type string');
    return res.status(400).send('Title must be of type string');
  }

  try {
    const db = new Db();

    logger.error(`Deleted post with title: [${title}]`);

    await db.deletePostByTitle(title);

    return res.status(200).send(`Deleted post with title: [${title}]`);
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not delete post: ${error.message}`);
    return res.status(404).send(error.message);
  }
};
