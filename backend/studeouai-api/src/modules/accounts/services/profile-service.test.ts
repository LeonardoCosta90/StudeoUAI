import { repositoryMock } from '@modules/test/mock/typeorm.mock';
import { ProfileService } from './profile-service';
import { ProfileResponse } from '../models/profile-response';

import faker from 'faker';
import { AppError } from '@shared/errors/app-error';

describe('Test Profile Service', () => {
  beforeEach(() => {
    repositoryMock.findOne.mockRestore();
  });

  test('Should return a profile with success', async () => {
    const profileReturnMock: ProfileResponse = {
      avatar: faker.datatype.string(),
      avatar_url: faker.datatype.string(),
      email: faker.internet.email(),
      id: faker.datatype.uuid(),
      name: faker.datatype.string(),
    };

    repositoryMock.findOne.mockResolvedValue(profileReturnMock);

    const profileService = new ProfileService();
    const response = await profileService.findProfileById('Any_Value');

    expect(response).toBe(profileReturnMock);
    expect(response).toBeTruthy();
  });

  test('Should return error when call to profile by id', async () => {
    repositoryMock.findOne.mockRejectedValue(
      new AppError('Profile not found', 404),
    );
    const profileById = new ProfileService();

    try {
      await profileById.findProfileById('Any_Value');
    } catch (error) {
      expect(error.message).toEqual('Profile not found');
    }
  });
});
