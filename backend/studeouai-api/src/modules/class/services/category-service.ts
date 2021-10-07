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
    console.log('oi');
    const categoryExist = await categoriesRepo.findCategoryByName(name);

    if (categoryExist) {
      throw new AppError('Category already exists.');
    }

    await categoriesRepo.createCategory({ name, description });
  }

  async listCategory(): Promise<Category[]> {
    const categoriesRepo = getCustomRepository(CategoriesRepository);
    const categories = await categoriesRepo.listCategory();

    return categories;
  }
}
