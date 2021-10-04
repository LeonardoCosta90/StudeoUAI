import { CreateCategoryRequest } from '@modules/class/models/create-category-request';
import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../entities/category';

@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {
  private repository: Repository<Category>;

  async createCategory({
    name,
    description,
  }: CreateCategoryRequest): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async listCategory(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findCategoryByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      name,
    });
    return category;
  }
}
