// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../src/TEAM_E/database';
import logger from '../../../../../../src/logger';
import { IPost } from '../../../../../../src/interfaces/TEAM_E';

/*
  Api to add a post to the database
  
  Accepts in req.body the following:
  title: string - title of the post
  description: string - text of the post
  image: string - image of the post

  Must have at least one of [title, description, image]

  On success: status code 201
  On failure: status code 400

  Method: Post
  Route: /team_e/post
*/
export default async (req: Request, res: Response) => {
  const new_post: IPost = req.body;

  if (!new_post.title && !new_post.description && !new_post.image) {
    logger.error(
      'Could not add a new post, must provide at least one of [title, description, image] to add a post!'
    );
    return res
      .status(400)
      .send('Must provide at least one of [title, description, image] to add a post');
  }

  if (new_post.title && typeof new_post.title != 'string') {
    logger.error('Could not add a new post, title is not a string');
    return res.status(400).send('Title must be string');
  }

  if (new_post.description && typeof new_post.description != 'string') {
    logger.error('Could not add a new post, description is not a string');
    return res.status(400).send('Description must be string');
  }

  if (new_post.image && typeof new_post.image != 'string') {
    logger.error('Could not add a new post, image is not a string');
    return res.status(400).send('Image must be string');
  }

  try {
    const db = new Db();

    await db.addPost(new_post.title, new_post.description, new_post.image);

    logger.info(`Added a new post with title: [${new_post.title}]`);

    return res.status(201).send('Added post');
  } catch (err) {
    const error = err as Error;

    logger.error(`Could not add new post: ${error.message}`);
    return res.status(400).send(error.message);
  }
};
