import { inject, injectable } from 'tsyringe';

import { Class } from '@modules/class/infra/typeorm/entities/Class';
import { IClassRepository } from '@modules/class/repositories/IClassRepository';
import { ISpecificationsRepository } from '@modules/class/repositories/ISpecificationsRepository';

import { CreateClassSpecificationError } from './CreateClassSpecificationError';

interface IRequest {
  class_id: string;
  specifications_ids: string[];
}

@injectable()
class CreateClassSpecificationUseCase {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute({ class_id, specifications_ids }: IRequest): Promise<Class> {
    const _class = await this.classRepository.findById(class_id);
    if (!_class) {
      throw new CreateClassSpecificationError.ClassNotFound();
    }

    const specifications = await this.specificationRepository.findById(
      specifications_ids,
    );
    if (specifications.length === 0) {
      throw new CreateClassSpecificationError.SpecificationNotFound();
    }

    _class.specifications = specifications;
    await this.classRepository.create(_class);
    return _class;
  }
}

export { CreateClassSpecificationUseCase };
