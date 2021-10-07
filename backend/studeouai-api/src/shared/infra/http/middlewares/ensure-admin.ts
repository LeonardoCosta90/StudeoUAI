import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@domain/accounts/typeorm/repositories/users-repository';
import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.user;

  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError('Is not a admin', 401);
  }
  next();
}
