import { repositoryMock } from '@domain/test/mock/typeorm.mock';
import { CreateUserRequest } from '../models/create-user-request';
import { UserResponse } from '../models/user-response';
import { UserService } from './user-service';

import faker from 'faker';
import { AppError } from '@shared/errors/app-error';

describe('Test User Service', () => {
  beforeEach(() => {
    repositoryMock.find.mockRestore();
    repositoryMock.findOne.mockRestore();
    repositoryMock.save.mockRestore();
    repositoryMock.update.mockRestore();
  });

  test('Should return response with a new user when call to create with success', async () => {
    const createUserReturnMock: UserResponse = {
      id: faker.datatype.uuid(),
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.internet.email(),
      isAdmin: false,
      avatar: faker.datatype.string(),
      avatar_url: faker.datatype.string(),
    };

    const createUserMock: CreateUserRequest = {
      name: faker.datatype.uuid(),
      password: faker.datatype.uuid(),
      email: faker.internet.email(),
    };

    repositoryMock.create.mockResolvedValue(createUserReturnMock);

    const userService = new UserService();
    const response = await userService.createUser(createUserMock);

    expect(response).toBe(createUserReturnMock);
    expect(response).toBeTruthy();
  });

  test('Should error when try create a exists user', async () => {
    const createUserReturnMock: UserResponse = {
      id: faker.datatype.uuid(),
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.internet.email(),
      isAdmin: false,
      avatar: faker.datatype.string(),
      avatar_url: faker.datatype.string(),
    };

    const createUserMock: CreateUserRequest = {
      name: faker.datatype.uuid(),
      password: faker.datatype.uuid(),
      email: faker.internet.email(),
    };

    repositoryMock.create.mockResolvedValue(createUserReturnMock);

    const userService = new UserService();
    userService.createUser(createUserMock);
    try {
      userService.createUser(createUserMock);
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
      expect(err.message).toEqual('User already exists');
    }
  });

  test('Should return a user when find user by id', async () => {
    const createUserReturnMock: UserResponse = {
      id: faker.datatype.uuid(),
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.internet.email(),
      isAdmin: false,
      avatar: faker.datatype.string(),
      avatar_url: faker.datatype.string(),
    };

    repositoryMock.findOne.mockResolvedValue(createUserReturnMock);

    const userService = new UserService();
    const response = await userService.findUserById('Any_Value');

    expect(response).toBe(createUserReturnMock);
    expect(response).toBeTruthy();
  });

  test('Should return error when call to user by id', async () => {
    repositoryMock.findOne.mockRejectedValue(
      new AppError('User not found', 404),
    );
    const findUserById = new UserService();

    try {
      await findUserById.findUserById('Any_Value');
    } catch (error) {
      expect(error.message).toEqual('User not found');
    }
  });
});
