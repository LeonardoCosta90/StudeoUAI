import { StorageProvider } from '@shared/container/providers/StorageProvider';
import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { UpdateUserAvatarRequest } from '../models/update-avatar-request';
import { UsersRepository } from '../typeorm/repositories/users-repository';

class UpdateUserAvatarService {
  async updateAvatarUser({
    user_id,
    avatar_file,
  }: UpdateUserAvatarRequest): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);
    const userFound = await userRepository.findById(user_id);
    const storageProvider = new StorageProvider();

    console.log('oi', userFound);

    if (!userFound) {
      throw new AppError('User not found', 404);
    }

    if (userFound.avatar) {
      await (
        await storageProvider.storage()
      ).delete(userFound.avatar, 'avatar');
    }

    await (await storageProvider.storage()).save(avatar_file, 'avatar');

    userFound.avatar = avatar_file;

    await userRepository.create(userFound);
  }
}

export { UpdateUserAvatarService };
