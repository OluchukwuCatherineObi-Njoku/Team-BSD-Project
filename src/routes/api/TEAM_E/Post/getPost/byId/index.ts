// Example api
import { Request, Response } from 'express';
import Db from '../../../../../../../src/TEAM_E/database';

/*
  Api to get a post from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/id
*/
export default async (req: Request, res: Response) => {
  const { id } = req.query;

  if (!id || typeof id != 'string') {
    return res.status(400).send('Must provide an id via query parameter to retrieve the post.');
  }

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return res.status(400).send('id must be a number');
  }

  try {
    const db = new Db();

    return res.status(200).send(await db.getPostByID(parsedId));
  } catch (err) {
    const error = err as Error;
    return res.status(400).send(error.message);
  }
};
