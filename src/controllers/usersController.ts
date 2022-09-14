import { Request, Response } from 'express';
import usersServices from '../services/usersServices';
import * as jwtToken from '../helpers/jwtToken';

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const user = await usersServices.create(body);
  const token = jwtToken.default(user);
  return res.status(201).json({ token });
};

export default {
  create,
};
