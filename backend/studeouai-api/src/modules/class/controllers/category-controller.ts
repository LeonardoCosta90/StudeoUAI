import { NextFunction, Request, Response } from 'express';

import { CategoryService } from '../services/category-service';

export class CategoryController {
  async createCategory(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { name, description } = request.body;

      const categoryService = new CategoryService();

      await categoryService.createCategory({ name, description });

      return response.status(201).send();
    } catch (err) {
      next();
    }
  }

  async listCategory(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const categoryService = new CategoryService();

      const categories = await categoryService.listCategory();

      return response.json(categories);
    } catch (err) {
      next();
    }
  }
}
