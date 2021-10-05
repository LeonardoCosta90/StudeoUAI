import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/app-error';

import { Class } from '../typeorm/entities/class';
import { ClassImageRequest } from '../models/class-image-request';
import { ClassImagesRepository } from '../typeorm/repositories/class-images-repository';
import { ClassRepository } from '../typeorm/repositories/class-repository';
import { CreateClassRequest } from '../models/create-class-request';
import { S3StorageProvider } from '@shared/container/providers/StorageProvider/implementations/S3StorageProvider';

export class ClassService {
  async createClass({
    name,
    description,
    category_id,
  }: CreateClassRequest): Promise<Class> {
    const classRepo = getCustomRepository(ClassRepository);
    const classAlreadyExists = await classRepo.findClassByName(name);

    if (classAlreadyExists) {
      throw new AppError('Class already exists.');
    }

    const _class = classRepo.createClass({
      name,
      description,
      category_id,
    });
    return _class;
  }

  async classImage({
    class_id,
    images_name,
  }: ClassImageRequest): Promise<void> {
    const classRepository = getCustomRepository(ClassRepository);
    const classImagesRepository = getCustomRepository(ClassImagesRepository);
    const storageProvider = new S3StorageProvider();

    const _class = await classRepository.findClassById(class_id);

    if (!_class) {
      throw new AppError('Class not found.');
    }

    images_name.map(async image => {
      await classImagesRepository.createClassImages(class_id, image);
      await storageProvider.save(image, 'class');
    });
  }
}
