import productsModel from '../models/productsModel';
import { Product, ProductBody } from '../types/products';

const getAll = async (): Promise<Product[]> => {
  const products = await productsModel.getAll();
  return products;
};

const create = async (newProduct: ProductBody): Promise<Product> => {
  const product = await productsModel.create(newProduct);
  return product;
};

export default {
  getAll,
  create,
};
