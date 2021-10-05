import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/class/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@modules/class/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
