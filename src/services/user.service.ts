import { User } from "../models/User";


export const createUser = async (data: { name: string; email: string }) => {
  return await User.create(data);
};

export const getAllUsers = async () => {
  return await User.findAll();
};