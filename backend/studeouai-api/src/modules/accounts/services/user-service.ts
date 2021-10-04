import { AppError } from '@shared/errors/app-error';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { CreateUserRequest } from '../models/create-user-request';
import { User } from '../typeorm/entities/user';
import { UsersRepository } from '../typeorm/repositories/users-repository';

export class UserService {
  async createUser({
    name,
    password,
    email,
  }: CreateUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const passwordHash = await hash(
      password,
      Number(process.env.DEFAULT_HASH_SAULT),
    );

    const user = await usersRepository.create({
      name,
      password: passwordHash,
      email,
      isAdmin: false,
      avatar: null,
    });

    await usersRepository.save(user);

    return user;
  }

  async findUserById(id: string): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
