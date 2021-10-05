import { NextFunction, Request, Response } from 'express';

import { SpecificationService } from '../services/specification-service';

export class SpecificationController {
  async createSpecification(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { name, description } = request.body;

      const specificationService = new SpecificationService();

      await specificationService.createSpecification({ name, description });

      return response.status(201).send();
    } catch (err) {
      next(err);
    }
  }
}
