import productsModel from '../models/productsModel';
import { Product } from '../types/products';

const getAll = async (): Promise<Product[]> => {
  const products = await productsModel.getAll();
  return products;
};

export default {
  getAll,
};
