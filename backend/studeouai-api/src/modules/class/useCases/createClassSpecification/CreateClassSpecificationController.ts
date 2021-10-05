import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClassSpecificationUseCase } from './CreateClassSpecificationUseCase';

class CreateClassSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_ids } = request.body;

    const createClassSpecificationUseCase = container.resolve(
      CreateClassSpecificationUseCase,
    );

    const _class = await createClassSpecificationUseCase.execute({
      class_id: id,
      specifications_ids,
    });

    return response.status(201).json(_class);
  }
}

export { CreateClassSpecificationController };
