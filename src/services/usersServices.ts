import usersModel from '../models/usersModel';
import { UserBody } from '../types/users';

const create = async (newUser: UserBody) => {
  const user = await usersModel.create(newUser);
  return user;
};

export default {
  create,
};
