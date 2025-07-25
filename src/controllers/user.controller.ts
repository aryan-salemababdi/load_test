import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await userService.createUser({ name, email });
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};