import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/app-error';

import { Class } from '../typeorm/entities/class';
import { ClassRepository } from '../typeorm/repositories/class-repository';

import { SpecificationClassRequest } from '../models/specification-class-request';
import { SpecificationsRepository } from '../typeorm/repositories/specifications-repository';

export class SpecificationClassService {
  async createSpecificationClass({
    class_id,
    specifications_id,
  }: SpecificationClassRequest): Promise<Class> {
    const classRepository = getCustomRepository(ClassRepository);
    const specificationsRepository = getCustomRepository(
      SpecificationsRepository,
    );

    const _class = await classRepository.findClassById(class_id);

    if (!_class) {
      throw new AppError('Class not found.', 404);
    }

    const specifications = await specificationsRepository.findSpecificationById(
      specifications_id,
    );

    if (specifications.length === 0) {
      throw new AppError('Specification not found.', 404);
    }

    _class.specifications = specifications;
    await classRepository.createClass(_class);
    return _class;
  }
}
