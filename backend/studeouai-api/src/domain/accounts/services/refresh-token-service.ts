import { sign, verify } from 'jsonwebtoken';

import auth from '@config/auth';

import { UsersTokensRepository } from '../typeorm/repositories/users-tokens-repository';
import { RefreshTokenRequest } from '../models/refresh-token-request';
import { RefreshTokenResponse } from '../models/refresh-token-response';
import { DayjsDateProvider } from '@shared/providers/date-provider/dayjs-date-provider';
import { AppError } from '@shared/errors/app-error';

export class RefreshTokenService {
  async refreshToken(token: string): Promise<RefreshTokenResponse> {
    const daysProvider = new DayjsDateProvider();
    const userTokenRepository = new UsersTokensRepository();

    const { email, sub: user_id } = verify(
      token,
      auth.secret_refresh_token,
    ) as RefreshTokenRequest;

    const userToken = await userTokenRepository.findByUserIdAndRefreshToken(
      user_id,
      token,
    );

    if (!userToken) {
      throw new AppError('Refresh token does not exists!', 401);
    }

    await userTokenRepository.deleteById(userToken.id);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: user_id,
      expiresIn: auth.expires_in_refresh_token,
    });

    const expires_date = daysProvider.addDays(
      auth.expires_refresh_token_days,
      null,
    );

    await userTokenRepository.generate({
      refresh_token,
      user_id,
      expires_date,
    });

    const newToken = sign({}, auth.secret_token, {
      subject: user_id,
      expiresIn: auth.expires_in,
    });

    return {
      token: newToken,
      refresh_token,
    };
  }
}
