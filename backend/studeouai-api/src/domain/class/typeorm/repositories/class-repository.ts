import { EntityRepository, Repository } from 'typeorm';

import { Class } from '../entities/class';
import { CreateClassRequest } from '@domain/class/models/create-class-request';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  private repository: Repository<Class>;

  async createClass({
    id,
    category_id,
    description,
    name,
    specifications,
  }: CreateClassRequest): Promise<Class> {
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

  async findClassById(id: string): Promise<Class> {
    const _class = await this.repository.findOne(id);
    return _class;
  }

  async findClassByName(name: string): Promise<Class> {
    const _class = await this.repository.findOne(name);
    return _class;
  }
}
