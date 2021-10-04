import { EntityRepository, Repository } from 'typeorm';

import { CreateSpecificationRequest } from '@modules/class/models/create-specifications-request';
import { Specification } from '../entities/specifications';

@EntityRepository(Specification)
export class SpecificationsRepository extends Repository<Specification> {
  private repository: Repository<Specification>;

  async createSpecification({
    name,
    description,
  }: CreateSpecificationRequest): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
    return specification;
  }

  async findSpecificationById(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }

  async findSpecificationByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      name,
    });

    return specification;
  }
}
