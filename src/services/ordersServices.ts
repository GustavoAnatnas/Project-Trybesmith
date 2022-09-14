import ordersModel from '../models/ordersModel';
import { Order } from '../types/orders';

const getAll = async (): Promise<Order[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

export default {
  getAll,
};