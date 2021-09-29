import { AppError } from '@shared/errors/appError';
import 'reflect-metadata';
import { CreateUserController } from './createUserController';
import { getMockReq, getMockRes } from '@jest-mock/express';
import faker from 'faker';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { CreateUserUseCase } from './createUserUseCase';

jest.mock('./createUserUseCase.ts');

const CreateUserUseCaseMock = CreateUserUseCase as jest.MockedClass<
  typeof CreateUserUseCase
>;

describe('Test Create User Use Case', () => {
  beforeEach(() => {
    CreateUserUseCaseMock.prototype.execute.mockRestore();
  });

  test('Should response 201 when call execute() with success', async () => {
    const createUserMock: ICreateUserDTO = {
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.datatype.email,
    };

    const req = getMockReq({
      body: { createUserMock },
    });

    const { res } = getMockRes();

    CreateUserUseCaseMock.prototype.execute.mockResolvedValue();
    await CreateUserController.prototype.handle(req, res);

    expect(res.status).toBeCalledWith(201);
  });

  test('Should an error when call create a user existent', async () => {
    const createUserMock: ICreateUserDTO = {
      name: faker.datatype.string(),
      password: faker.datatype.string(),
      email: faker.datatype.email,
    };

    const req = getMockReq({
      body: { createUserMock },
    });

    const { res } = getMockRes();

    CreateUserUseCaseMock.prototype.execute.mockResolvedValue();
    await CreateUserController.prototype.handle(req, res);

    try {
      await CreateUserController.prototype.handle(req, res);
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
      expect(err.message).toEqual('User already exists');
    }
  });
});
