import { Request, Response } from 'express';
import { ImageRequest } from '../models/image-request';

import { ClassService } from '../services/class-service';

export class ClassController {
  async createClass(request: Request, response: Response): Promise<Response> {
    const { category_id, description, name } = request.body;

    const classService = new ClassService();

    const _class = await classService.createClass({
      available: true,
      category_id,
      description,
      name,
    });

    return response.status(201).json(_class);
  }

  async createImage(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as ImageRequest[];

    const fileNames = images.map(file => file.filename);

    const classService = new ClassService();

    await classService.classImage({
      class_id: id,
      images_name: fileNames,
    });

    return response.status(201).send();
  }

  async listClass(request: Request, response: Response): Promise<Response> {
    const classService = new ClassService();
    const _class = await classService.listClass();

    return response.json(_class);
  }
}
