import { Request, Response } from 'express';
import { SpecificationClassService } from '../services/class-specification-service';

export class SpecificationClassController {
  async specificationClass(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const specificationClassService = new SpecificationClassService();
    const _class = await specificationClassService.createSpecificationClass({
      class_id: id,
      specifications_id,
    });

    return response.status(201).json(_class);
  }
}
