import { CreateCategoryRequest } from '@modules/class/models/create-category-request';
import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../entities/category';

@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {
  async createCategory({
    name,
    description,
  }: CreateCategoryRequest): Promise<void> {
    const category = this.create({
      description,
      name,
    });

    await this.save(category);
  }

  async listCategory(): Promise<Category[]> {
    const categories = await this.find();
    return categories;
  }

  async findCategoryByName(name: string): Promise<Category> {
    console.log('findCategoryByName');
    const category = await this.findOne({
      name,
    });
    return category;
  }
}
