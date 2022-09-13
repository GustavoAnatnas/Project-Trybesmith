import { Request, Response } from 'express';
import productsServices from '../services/productsServices';
// import { Product } from '../types/products';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

export default {
  getAll,
};
