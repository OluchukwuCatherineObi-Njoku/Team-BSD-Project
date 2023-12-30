// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../src/TEAM_E/database';

/*
  Api to add a post to the database
  Must at least have one parameter of [title, description, image]

  Query Parameters:
  title: string - title of the post
  description: string - text of the post
  image: string - image of the post

  On success: status code 201
  On failure: status code 400

  Method: Post
  Route: /team_e/post
*/
export default async (req: Request, res: Response) => {
  const { title, description, image } = req.query;

  if (!title && !description && !image) {
    return res
      .status(400)
      .send('Must provide at least one of [title, description, image] to add a post');
  }

  if (typeof title != 'string') {
    return res.status(400).send('Title must be string');
  }

  if (typeof description != 'string') {
    return res.status(400).send('Description must be string');
  }

  if (typeof image != 'string') {
    return res.status(400).send('Image must be string');
  }

  try {
    const db = new Db();

    await db.addPost(title, description, image);

    return res.status(201).send('Added post');
  } catch (err) {
    const error = err as Error;
    return res.status(400).send(error.message);
  }
};
