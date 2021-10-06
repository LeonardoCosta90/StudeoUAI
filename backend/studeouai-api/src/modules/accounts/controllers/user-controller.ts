import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user-service';

async function findUserById(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { id } = request.body;
    const userService = new UserService();

    const user = await userService.findUserById(id);

    return response.status(200).json(user);
  } catch (err) {
    next();
  }
}

async function createUser(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { name, password, email } = request.body;

    const createUser = new UserService();

    const user = await createUser.createUser({
      name,
      password,
      email,
    });

    return response.status(201).json(user);
  } catch (err) {
    next();
  }
}

export default {
  createUser,
  findUserById,
};
