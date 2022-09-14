import { RowDataPacket } from 'mysql2/promise';   
import connection from './connection';
import { Order } from '../types/orders';

type Orders = Order & RowDataPacket;

const getAll = async (): Promise<Order[]> => {
  const [rows] = await connection.execute<Orders[]>(
    `SELECT ord.id, ord.userId, JSON_ARRAYAGG(products.id)
     AS productsIds FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS products
    ON ord.id = products.orderId
    GROUP BY ord.id, ord.userId
    ORDER BY ord.userId;`,
  );
  return rows;
};

export default {
  getAll,
};
