import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAttendedClassUseCase } from "./CreateAttendedClassUseCase";

class CreateAttendedClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, class_id } = request.body;
    const createAttendedUseCase = container.resolve(CreateAttendedClassUseCase);

    const attendedClass = await createAttendedUseCase.execute({
      user_id,
      class_id,
    });

    return response.status(201).json(attendedClass);
  }
}

export { CreateAttendedClassController };
