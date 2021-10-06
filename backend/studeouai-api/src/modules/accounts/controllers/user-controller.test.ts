import { User } from '@modules/accounts/typeorm/entities/user';
import 'reflect-metadata';
import UserController from './user-controller';
import { getMockReq, getMockRes } from '@jest-mock/express';
import faker from 'faker';
import { UserService } from '../services/user-service';

jest.mock('../services/user-service');

const UserServiceMock = UserService as jest.MockedClass<typeof UserService>;

describe('Test user controller', () => {
  beforeEach(() => {
    UserServiceMock.prototype.createUser.mockRestore();
    UserServiceMock.prototype.findUserById.mockRestore();
  });

  test('Should response 200 when call controller findUserById with success', async () => {
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

    expect(UserServiceMock.prototype.findUserById).toBeCalledTimes(1);
    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledTimes(1);
    expect(next).not.toBeCalledWith();
  });
});
