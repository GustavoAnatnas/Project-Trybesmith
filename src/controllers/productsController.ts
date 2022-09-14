import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  const product = await productsServices.create(body);
  res.status(201).json(product);
};

export default {
  getAll,
  create,
};
