import { NextFunction, Request, Response } from 'express';

import { ClassService } from '../services/class-service';

export class ClassController {
  async createClass(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { category_id, description, name } = request.body;

      const classService = new ClassService();

      const _class = await classService.createClass({
        category_id,
        description,
        name,
      });

      return response.status(201).json(_class);
    } catch (err) {
      next(err);
    }
  }
}
