// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_E/database';
import logger from '../../../../../../../src/logger';
import { IPost } from '../../../../../../../src/interfaces/TEAM_E';

/*
  Api to delete a post in the database

  req.body:
  The post to be deleted, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
export default async (req: Request, res: Response) => {
  const new_post: IPost = req.body;

  logger.info('req.body', new_post);

  if (!new_post.title && !new_post.description && !new_post.image) {
    logger.error(
      'Could not delete post, post to be deleted provided via req.body must contain at least one of [title, description, image] and an id'
    );
    return res
      .status(400)
      .send(
        'Post to be deleted provided via req.body must contain at least one of [title, description, image].'
      );
  }

  if (new_post.id == undefined) {
    logger.error(
      'Could not delete post, post to be deleted provided via req.body must contain an id.'
    );
    return res.status(400).send('Post to be deleted provided via req.body must contain an id.');
  }

  if (isNaN(new_post.id)) {
    logger.error('Could not delete post, id provided is not a number');
    return res.status(400).send('id must be a number');
  }

  if (new_post.title && typeof new_post.title != 'string') {
    logger.error('Could not delete post, title provided must be of type string');
    return res.status(400).send('Title must be string');
  }

  if (new_post.description && typeof new_post.description != 'string') {
    logger.error('Could not delete post, description provided must be of type string');
    return res.status(400).send('Description must be string');
  }

  if (new_post.image && typeof new_post.image != 'string') {
    logger.error('Could not delete post, image provided must be of type string');
    return res.status(400).send('Image must be string');
  }

  try {
    const db = new Db();

    await db.deletePost(new_post);

    logger.info(`Deleted post with id: [${new_post.id}]`);

    return res.status(200).send(`Deleted post with id: [${new_post.id}]`);
  } catch (err) {
    const error = err as Error;
    logger.error(`Could not delete post: ${error.message}`);
    return res.status(400).send(error.message);
  }
};
