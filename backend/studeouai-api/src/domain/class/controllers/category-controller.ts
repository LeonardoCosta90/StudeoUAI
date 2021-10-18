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

  async deleteCategory(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const categoryService = new CategoryService();
    const categories = await categoryService.deleteCategory(id);

    return response.json(categories);
  }

  async findCategoryById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const categoryService = new CategoryService();
    const category = await categoryService.findCategoryById(id);

    return response.json(category);
  }

  async listCategory(request: Request, response: Response): Promise<Response> {
    const categoryService = new CategoryService();
    const categories = await categoryService.listCategory();

    return response.json(categories);
  }

  async saveCategory(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, description } = request.body;

    const categoryService = new CategoryService();

    const createCategoryResponse = await categoryService.saveCategory({
      id,
      name,
      description,
    });

    return response.status(200).send(createCategoryResponse);
  }
}
