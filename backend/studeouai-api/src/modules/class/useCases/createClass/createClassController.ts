import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClassUseCase } from "./createClassUseCase";

class CreateClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id, description, name } = request.body;

    const createClassUseCase = container.resolve(CreateClassUseCase);

    const _class = await createClassUseCase.execute({
      category_id,
      description,
      name,
    });

    return response.status(201).json();
  }
}

export { CreateClassController };
