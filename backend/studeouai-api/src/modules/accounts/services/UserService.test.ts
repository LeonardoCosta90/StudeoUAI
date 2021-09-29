import { repositoryMock } from '@modules/test/mock/typeorm.mock';
import CreateUserRequest from '../models/CreateUserRequest';
import CreateUserResponse from '../models/CreateUserResponse';
import UserService from './UserService';

import faker from 'faker';
import { AppError } from '@shared/errors/appError';

describe('Test Pending Transaction Service', () => {
  beforeEach(() => {
    repositoryMock.find.mockRestore();
    repositoryMock.findOne.mockRestore();
    repositoryMock.save.mockRestore();
    repositoryMock.update.mockRestore();
  });

  test('Should return response with a new user when call to create with success', async () => {
    const createUserReturnMock: CreateUserResponse = {
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
      isAdmin: false,
      avatar: faker.datatype.string(),
    };

    repositoryMock.create.mockResolvedValue(createUserReturnMock);

    const userService = new UserService();
    const response = await userService.createUser(createUserMock);

    expect(response).toBe(createUserReturnMock);
    expect(response).toBeTruthy();
  });

  test('Should error when try create a exists user', async () => {
    const createUserReturnMock: CreateUserResponse = {
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
      isAdmin: false,
      avatar: faker.datatype.string(),
    };

    repositoryMock.create.mockResolvedValue(createUserReturnMock);

    const userService = new UserService();
    userService.createUser(createUserMock);
    try {
      userService.createUser(createUserMock);
    } catch (err) {
      console.log(err);
      expect(err).toBeInstanceOf(AppError);
      expect(err.message).toEqual('User already exists');
    }
  });

  test('Should return a user when find user by id', async () => {
    const createUserReturnMock: CreateUserResponse = {
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
