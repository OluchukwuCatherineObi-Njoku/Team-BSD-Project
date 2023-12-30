// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_E/database';

/*
  Api to get a post from the database via title
  
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
    return res.status(400).send('Must provide a title via query parameter to retrieve the post.');
  }

  if (typeof title != 'string') {
    return res.status(400).send('Title must be of type string');
  }

  try {
    const db = new Db();

    return res.status(200).send(await db.getPostByTitle(title));
  } catch (err) {
    const error = err as Error;
    return res.status(400).send(error.message);
  }
};
