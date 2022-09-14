import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, UserBody } from '../types/users';

const create = async (user: UserBody): Promise<User> => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return { id: rows.insertId, ...user };
};

export default {
  create,
};
