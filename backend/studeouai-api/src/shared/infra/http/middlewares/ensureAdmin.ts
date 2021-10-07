import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/accounts/typeorm/repositories/users-repository';
import { AppError } from '@shared/errors/app-error';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError('Is not a admin', 401);
  }
  next();
}
