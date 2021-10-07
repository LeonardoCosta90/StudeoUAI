import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import { AppError } from '@shared/errors/app-error';
import auth from '@config/auth';
import { DayjsDateProvider } from '@shared/providers/date-provider/dayjs-date-provider';
import { UsersRepository } from '../typeorm/repositories/users-repository';
import { UsersTokensRepository } from '../typeorm/repositories/users-tokens-repository';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

export class AuthenticateUserService {
  async auth({ email, password }: LoginRequest): Promise<LoginResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const daysProvider = new DayjsDateProvider();
    const userTokenRepository = new UsersTokensRepository();

    const {
      expires_in,
      expires_in_refresh_token,
      secret_refresh_token,
      secret_token,
      expires_refresh_token_days,
    } = auth;

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect.', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect.', 401);
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in,
    });

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = daysProvider.addDays(
      expires_refresh_token_days,
      null,
    );

    await userTokenRepository.generate({
      user_id: user.id,
      refresh_token,
      expires_date: refresh_token_expires_date,
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
      refresh_token,
    };
  }
}
