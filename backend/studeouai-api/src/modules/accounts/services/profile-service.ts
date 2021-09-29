import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { ProfileResponse } from '../models/profile-response';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

export class ProfileService {
  async findProfileById(id: string): Promise<ProfileResponse> {
    const userRepository = getCustomRepository(UsersRepository);

    const profile = await userRepository.findOne(id);

    if (!profile) {
      throw new AppError('Profile not found', 404);
    }

    return profile;
  }
}
