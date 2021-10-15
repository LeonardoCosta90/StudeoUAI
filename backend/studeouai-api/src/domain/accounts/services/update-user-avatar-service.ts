import { User } from '@domain/accounts/typeorm/entities/user';
import { S3StorageProvider } from '@shared/providers/storage-provider/s3-storage-provider';
import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { UpdateUserAvatarRequest } from '../models/update-avatar-request';
import { UsersRepository } from '../typeorm/repositories/users-repository';
import { UserResponse } from '../models/user-response';

class UpdateUserAvatarService {
  async updateAvatarUser({
    user_id,
    avatar_file,
  }: UpdateUserAvatarRequest): Promise<UserResponse> {
    const userRepository = getCustomRepository(UsersRepository);
    const userFound = await userRepository.findById(user_id);
    const storageProvider = new S3StorageProvider();

    if (!userFound) {
      throw new AppError('User not found', 404);
    }

    if (userFound.avatar) {
      await storageProvider.delete(userFound.avatar, 'avatar');
    }

    await storageProvider.save(avatar_file, 'avatar');

    const url = `https://${process.env.AWS_BUCKET}.s3.sa-east-1.amazonaws.com/avatar/${avatar_file}`;

    const userResponse = await userRepository.save({
      ...userFound,
      avatar: url,
    });

    const userConverted: UserResponse = {
      id: userResponse.id,
      name: userResponse.name,
      email: userResponse.email,
      avatar: userResponse.avatar,
      isAdmin: userResponse.isAdmin,
    };

    return userConverted;
  }
}

export { UpdateUserAvatarService };
