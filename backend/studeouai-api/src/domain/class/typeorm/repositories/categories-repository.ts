import { CreateCategoryRequest } from '@domain/class/models/create-category-request';
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

  async deleteCategory(id: string): Promise<void> {
    await this.delete({
      id,
    });
  }

  async listCategory(): Promise<Category[]> {
    const categories = await this.find();
    return categories;
  }

  async findCategoryById(id: string): Promise<Category> {
    const category = await this.findOne({
      id,
    });
    return category;
  }

  async findCategoryByName(name: string): Promise<Category> {
    const category = await this.findOne({
      name,
    });
    return category;
  }

  async saveCategory({
    name,
    description,
  }: CreateCategoryRequest): Promise<void> {
    const category = this.create({
      description,
      name,
    });

    await this.save(category);
  }
}
