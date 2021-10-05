import { NextFunction, Request, Response } from 'express';
import { ImageRequest } from '../models/image-request';

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

  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const images = request.files as ImageRequest[];

      const fileNames = images.map(file => file.filename);

      const classService = new ClassService();

      await classService.classImage({
        class_id: id,
        images_name: fileNames,
      });

      return response.status(201).send();
    } catch (err) {
      next(err);
    }
  }
}
