import { RowDataPacket } from 'mysql2/promise';   
import connection from './connection';
import { Product } from '../types/products';

type Products = Product & RowDataPacket;

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<Products[]>('SELECT * FROM Trybesmith.Products');
  return rows;
};

export default {
  getAll,
};
