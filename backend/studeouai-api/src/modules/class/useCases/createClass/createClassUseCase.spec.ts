import { ICreateClassDTO } from '@modules/class/dtos/ICreateClassDTO';
import { ClassRepositoryInMemory } from '@modules/class/repositories/in-memory/ClassRepositoryInMemory';

import { CreateClassError } from './CreateClassError';
import { CreateClassUseCase } from './createClassUseCase';

let createClassUseCase: CreateClassUseCase;
let classRepositoryInMemory: ClassRepositoryInMemory;

const mockClass: ICreateClassDTO = {
  name: 'Class Name',
  description: 'Description',
  category_id: 'Category',
};

describe('Create class use case', () => {
  beforeEach(() => {
    classRepositoryInMemory = new ClassRepositoryInMemory();
    createClassUseCase = new CreateClassUseCase(classRepositoryInMemory);
  });

  it('Should be able to create a new class', async () => {
    const _class = await createClassUseCase.execute(mockClass);
    expect(_class).toHaveProperty('id');
  });

  it('Should not be able to create a new class because class exist', async () => {
    await createClassUseCase.execute(mockClass);

    await expect(createClassUseCase.execute(mockClass)).rejects.toBeInstanceOf(
      CreateClassError,
    );
  });
});
