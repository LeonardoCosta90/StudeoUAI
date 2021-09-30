import { AppError } from '@shared/errors/app-error';
import { repositoryMock } from '@modules/test/mock/typeorm.mock';
import { UpdateUserAvatarRequest } from '../models/update-avatar-request';
import { UpdateUserAvatarService } from './update-user-avatar-service';

import faker from 'faker';

describe('Test update user avatar', () => {
  beforeEach(() => {
    repositoryMock.findOne.mockRestore();
  });

  test('Should return error when call to updateAvatarUser()', async () => {
    const updateUserAvatarService = new UpdateUserAvatarService();

    const updateMock: UpdateUserAvatarRequest = {
      user_id: faker.datatype.uuid(),
      avatar_file: faker.datatype.string(),
    };

    repositoryMock.findOne.mockRejectedValue(
      new AppError('User not found', 404),
    );

    try {
      await updateUserAvatarService.updateAvatarUser(updateMock);
    } catch (error) {
      expect(error.message).toEqual('User not found');
    }
  });
});
