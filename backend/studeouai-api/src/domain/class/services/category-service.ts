import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';

import { CategoriesRepository } from '../typeorm/repositories/categories-repository';
import { CreateCategoryRequest } from '../models/create-category-request';
import { Category } from '../typeorm/entities/category';

export class CategoryService {
  async createCategory({
    name,
    description,
  }: CreateCategoryRequest): Promise<void> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);
    const categoryExist = await categoriesRepo.findCategoryByName(name);

    if (categoryExist) {
      throw new AppError('Category already exists.');
    }

    await categoriesRepo.createCategory({ name, description });
  }

  async deleteCategory(id: string): Promise<void> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);

    this.findCategoryById(id);

    await categoriesRepo.deleteCategory(id);
  }

  async findCategoryById(id: string): Promise<Category[]> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);
    const categoryExist = await categoriesRepo.findCategoryById(id);

    if (!categoryExist) {
      throw new AppError('Category does not exists.');
    }

    return categoryExist[0];
  }

  async listCategory(): Promise<Category[]> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);
    const categories = await categoriesRepo.listCategory();

    return categories;
  }

  async saveCategory({
    id,
    name,
    description,
  }: CreateCategoryRequest): Promise<Category> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);
    const category = await categoriesRepo.findCategoryById(id);

    if (!category) {
      throw new AppError('Category does not exists.', 404);
    }

    name ? (category.name = name) : (category.name = '');
    description
      ? (category.description = description)
      : (category.description = '');

    return await categoriesRepo.save(category);
  }
}
