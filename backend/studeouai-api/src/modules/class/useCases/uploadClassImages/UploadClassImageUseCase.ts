import { inject, injectable } from "tsyringe";

import { ClassImagesRepository } from "@modules/class/infra/typeorm/repositories/ClassImagesRepository";
import { ClassRepository } from "@modules/class/infra/typeorm/repositories/ClassRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

import { UploadClassImageError } from "./UploadClassImagesError";

interface IRequest {
  class_id: string;
  images_name: string[];
}

@injectable()
class UploadClassImagesUseCase {
  constructor(
    @inject("ClassImagesRepository")
    private classImagesRepository: ClassImagesRepository,

    @inject("ClassRepository")
    private classRepository: ClassRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ class_id, images_name }: IRequest): Promise<void> {
    const _class = await this.classRepository.findById(class_id);
    if (!_class) {
      throw new UploadClassImageError();
    }

    images_name.map(async (image) => {
      await this.classImagesRepository.create(class_id, image);
      await this.storageProvider.save(image, "class");
    });
  }
}

export { UploadClassImagesUseCase };
