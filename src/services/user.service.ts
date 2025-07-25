import prisma from "../db";

export const createUser = async (data: { name: string; email: string }) => {
  return await prisma.users.create({ data });
};

export const getAllUsers = async () => {
  return await prisma.users.findMany();
};