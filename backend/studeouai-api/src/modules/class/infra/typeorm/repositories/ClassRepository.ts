import { getRepository, Repository } from 'typeorm';

import { ICreateClassDTO } from '@modules/class/dtos/ICreateClassDTO';
import { IClassRepository } from '@modules/class/repositories/IClassRepository';

import { Class } from '../entities/Class';

class ClassRepository implements IClassRepository {
  private repository: Repository<Class>;

  constructor() {
    this.repository = getRepository(Class);
  }

  async create({
    id,
    category_id,
    description,
    name,
    specifications,
  }: ICreateClassDTO): Promise<Class> {
    const _class = this.repository.create({
      id,
      category_id,
      description,
      name,
      specifications,
    });

    await this.repository.save(_class);
    return _class;
  }

  async findById(id: string): Promise<Class> {
    const _class = await this.repository.findOne(id);
    return _class;
  }

  async findByName(name: string): Promise<Class> {
    const _class = await this.repository.findOne(name);
    return _class;
  }
}

export { ClassRepository };
