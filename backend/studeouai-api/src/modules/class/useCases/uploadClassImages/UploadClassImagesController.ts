import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadClassImagesUseCase } from "./UploadClassImageUseCase";

interface IFiles {
  filename: string;
}

class UploadClassImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const fileNames = images.map((file) => file.filename);

    const uploadClassImagesUseCase = container.resolve(
      UploadClassImagesUseCase
    );
    await uploadClassImagesUseCase.execute({
      class_id: id,
      images_name: fileNames,
    });

    return response.status(201).send();
  }
}

export { UploadClassImagesController };
