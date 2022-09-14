import { Request, Response } from 'express';
import ordersServices from '../services/ordersServices';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const orders = await ordersServices.getAll();
  res.status(200).json(orders);
};

export default {
  getAll,
};
