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
  }: CreateClassRequest): Promise<Class> {
    const _class = this.create({
      id,
      available: true,
      type: 'Tradicional',
      url: '',
      category_id,
      description,
      name,
    });

    await this.save(_class);
    return _class;
  }

  async deleteClass(id: string): Promise<void> {
    await this.delete({
      id,
    });
  }

  async listClass(): Promise<Class[]> {
    const _class = await this.find();
    return _class;
  }

  async findClassById(id: string): Promise<Class> {
    const _class = await this.findOne({ where: { id: id } });
    return _class;
  }

  async findClassByName(name: string): Promise<Class> {
    const _class = await this.findOne({
      name,
    });
    return _class;
  }
}
