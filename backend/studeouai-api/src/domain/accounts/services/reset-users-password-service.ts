import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { AppError } from '@shared/errors/app-error';
import { DayjsDateProvider } from '@shared/providers/date-provider/dayjs-date-provider';

import { ResetUserPasswordRequest } from '../models/reset-user-password-request';
import { UsersRepository } from '../typeorm/repositories/users-repository';
import { UsersTokensRepository } from '../typeorm/repositories/users-tokens-repository';
import { StatusCode } from '@shared/errors/status-code';
import { ErrorMessage } from '@shared/errors/error-message';

export class ResetUsersPasswordService {
  async resetUsersPassword({
    token,
    password,
  }: ResetUserPasswordRequest): Promise<void> {
    const daysProvider = new DayjsDateProvider();
    const usersRepository = getCustomRepository(UsersRepository);
    const usersTokenRepository = getCustomRepository(UsersTokensRepository);
    const userToken = await usersTokenRepository.findByRefreshToken(token);

    if (!userToken) {
      throw new AppError(ErrorMessage.TOKEN_INVALID, StatusCode.UNAUTHORIZED);
    }
    if (
      daysProvider.checkIsBefore(userToken.expires_date, daysProvider.dateNow())
    ) {
      throw new AppError(ErrorMessage.TOKEN_INVALID, StatusCode.UNAUTHORIZED);
    }

    const user = await usersRepository.findById(userToken.user_id);
    user.password = await hash(
      password,
      Number(process.env.DEFAULT_HASH_SAULT),
    );
    usersRepository.save(user);

    await usersTokenRepository.deleteById(userToken.id);
  }
}
