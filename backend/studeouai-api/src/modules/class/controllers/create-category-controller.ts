import { NextFunction, Request, Response } from 'express';
import { CreateCategoryService } from '../services/create-category-service';

export class CreateCategoryController {
  async createCategoryController(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { name, description } = request.body;

      const createCategoryService = new CreateCategoryService();

      await createCategoryService.createCategory({ name, description });

      return response.status(201).send();
    } catch (err) {
      next();
    }
  }
}
