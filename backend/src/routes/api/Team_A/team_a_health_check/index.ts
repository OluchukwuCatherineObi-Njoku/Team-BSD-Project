// Example api
import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  res.status(200).send(`From Team A, Health is Good!`);
};
