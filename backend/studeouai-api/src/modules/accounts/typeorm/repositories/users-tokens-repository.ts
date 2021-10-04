import { EntityRepository, Repository } from 'typeorm';

import { UsersTokens } from '../entities/user-tokens';
import { TokenRequest } from '@modules/accounts/models/token-request';

@EntityRepository(UsersTokens)
export class UsersTokensRepository extends Repository<UsersTokens> {
  async findByRefreshToken(token: string): Promise<UsersTokens> {
    const userToken = await this.findOne({
      refresh_token: token,
    });
    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.delete(id);
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UsersTokens> {
    const userTokens = await this.findOne({
      user_id,
      refresh_token,
    });
    return userTokens;
  }

  async generate({
    user_id,
    refresh_token,
    expires_date,
  }: TokenRequest): Promise<UsersTokens> {
    const userToken = this.create({
      user_id,
      refresh_token,
      expires_date,
    });

    await this.save(userToken);

    return userToken;
  }
}
