import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { CreateClassRequest } from '../models/create-class-request';
import { Class } from '../typeorm/entities/class';
import { ClassRepository } from '../typeorm/repositories/class-repository';

export class ClassService {
  async createClass({
    name,
    description,
    category_id,
  }: CreateClassRequest): Promise<Class> {
    const classRepo = getCustomRepository(ClassRepository);
    const classAlreadyExists = await classRepo.findClassByName(name);

    if (classAlreadyExists) {
      throw new AppError('Class already exists.');
    }

    const _class = classRepo.createClass({
      name,
      description,
      category_id,
    });
    return _class;
  }
}
