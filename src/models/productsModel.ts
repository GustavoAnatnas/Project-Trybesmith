import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';   
import connection from './connection';
import { Product, ProductBody } from '../types/products';

type Products = Product & RowDataPacket;

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<Products[]>('SELECT * FROM Trybesmith.Products');
  return rows;
};

const create = async (product: ProductBody): Promise<Product> => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return { id: rows.insertId, ...product };
};

export default {
  getAll,
  create,
};
