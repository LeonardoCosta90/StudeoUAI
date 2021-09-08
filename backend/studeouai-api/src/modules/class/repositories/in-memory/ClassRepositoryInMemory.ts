import { ICreateClassDTO } from "@modules/class/dtos/ICreateClassDTO";
import { Class } from "@modules/class/infra/typeorm/entities/Class";

import { IClassRepository } from "../IClassRepository";

class ClassRepositoryInMemory implements IClassRepository {
  class: Class[] = [];

  async create({
    id,
    category_id,
    description,
    name,
    specifications,
  }: ICreateClassDTO): Promise<Class> {
    const _class = new Class();
    Object.assign(_class, {
      id: id || _class.id,
      category_id,

      description,
      name,
      specifications,
    });
    this.class.push(_class);
    return _class;
  }

  async findById(id: string): Promise<Class> {
    return this.class.find((_class) => _class.id === id);
  }

  async findByName(name: string): Promise<Class> {
    return this.class.find((_class) => _class.name === name);
  }
}

export { ClassRepositoryInMemory };
