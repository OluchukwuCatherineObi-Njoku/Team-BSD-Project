// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_E/database';
import logger from '../../../../../../../src/logger';

/*
  Api to get a delete from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Delete
  Route: /team_e/post/id
*/
export default async (req: Request, res: Response) => {
  const { id } = req.query;

  if (!id || typeof id != 'string') {
    logger.error(
      'Could not delete post, must provide an id number via query parameter to delete the post'
    );
    return res.status(400).send('Must provide an id via query parameter to delete the post.');
  }

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    logger.error('Could not delete post, id is not a number');
    return res.status(400).send('id must be a number');
  }

  try {
    const db = new Db();

    logger.info(`Deleted post with id : [${parsedId}]`);

    await db.deletePostByID(parsedId);

    return res.status(200).send(`Post with id [${parsedId}] has been deleted.`);
  } catch (err) {
    const error = err as Error;
    logger.error(`Could not delete post: ${error.message}`);
    return res.status(400).send(error.message);
  }
};
