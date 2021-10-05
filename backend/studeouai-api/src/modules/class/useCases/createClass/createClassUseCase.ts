import { inject, injectable } from 'tsyringe';

import { Class } from '@modules/class/infra/typeorm/entities/Class';
import { IClassRepository } from '@modules/class/repositories/IClassRepository';

import { CreateClassError } from './CreateClassError';

interface IRequest {
  name: string;
  description: string;
  category_id: string;
}

@injectable()
class CreateClassUseCase {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  async execute({ name, description, category_id }: IRequest): Promise<Class> {
    const classAlreadyExists = await this.classRepository.findByName(name);

    if (classAlreadyExists) {
      throw new CreateClassError();
    }

    const _class = await this.classRepository.create({
      name,
      description,
      category_id,
    });
    return _class;
  }
}

export { CreateClassUseCase };
