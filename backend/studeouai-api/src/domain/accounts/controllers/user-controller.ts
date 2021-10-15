import { Request, Response } from 'express';
import { UserService } from '../services/user-service';

async function findUserById(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.body;
  const userService = new UserService();

  const user = await userService.findUserById(id);

  return response.status(200).json(user);
}

async function findUserByEmail(
  request: Request,
  response: Response,
): Promise<Response> {
  const { email } = request.body;
  const userService = new UserService();

  const user = await userService.findUserByEmail(email);

  return response.status(200).json(user);
}

async function createUser(
  request: Request,
  response: Response,
): Promise<Response> {
  const { name, password, email } = request.body;

  const createUser = new UserService();

  const user = await createUser.createUser({
    name,
    password,
    email,
  });

  return response.status(201).json(user);
}

export default {
  createUser,
  findUserById,
  findUserByEmail,
};
