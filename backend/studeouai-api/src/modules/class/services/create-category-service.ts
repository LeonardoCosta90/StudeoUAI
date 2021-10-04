import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';

import { CategoriesRepository } from '../typeorm/repositories/categories-repository';
import { CreateCategoryRequest } from '../models/create-category-request';

export class CreateCategoryService {
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
}
