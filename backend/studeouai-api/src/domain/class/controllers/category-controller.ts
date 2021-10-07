import { Request, Response } from 'express';

import { CategoryService } from '../services/category-service';

export class CategoryController {
  async createCategory(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, description } = request.body;

    const categoryService = new CategoryService();

    const createCategoryResponse = await categoryService.createCategory({
      name,
      description,
    });

    return response.status(201).send(createCategoryResponse);
  }

  async listCategory(request: Request, response: Response): Promise<Response> {
    const categoryService = new CategoryService();
    const categories = await categoryService.listCategory();

    return response.json(categories);
  }
}
