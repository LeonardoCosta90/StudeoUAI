import { User } from '@modules/accounts/infra/typeorm/entities/User';
import 'reflect-metadata';
import UserController from './user-controller';
import { getMockReq, getMockRes } from '@jest-mock/express';
import faker from 'faker';
import UserService from '../services/UserService';

jest.mock('../services/UserService');

const UserServiceMock = UserService as jest.MockedClass<typeof UserService>;

describe('Test user controller', () => {
  beforeEach(() => {
    UserServiceMock.prototype.createUser.mockRestore();
    UserServiceMock.prototype.findUserById.mockRestore();
  });

  test('Should response 201 when call execute() with success', async () => {
    const idMock = faker.datatype.uuid();
    const createUserReturnMock: User = {
      id: idMock,
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.internet.email(),
      isAdmin: false,
      avatar: faker.datatype.string(),
      avatar_url: faker.datatype.string(),
      created_at: new Date(),
    };

    const mockRequest = getMockReq({ params: { id: idMock } });
    const { res, next } = getMockRes();

    UserServiceMock.prototype.findUserById.mockResolvedValue(
      createUserReturnMock,
    );

    await UserController.findUserById(mockRequest, res, next);

    expect(res.status).toBeCalledWith(200);
  });
});
