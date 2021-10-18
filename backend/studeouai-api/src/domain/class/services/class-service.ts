import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/app-error';

import { Class } from '../typeorm/entities/class';
import { ClassImageRequest } from '../models/class-image-request';
import { ClassImagesRepository } from '../typeorm/repositories/class-images-repository';
import { ClassRepository } from '../typeorm/repositories/class-repository';
import { CreateClassRequest } from '../models/create-class-request';
import { S3StorageProvider } from '@shared/providers/storage-provider/s3-storage-provider';
import { AttendedClassRepository } from '@domain/attended-class/typeorm/repositories/attended-class-repository';

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
      available: true,
      type: 'Tradicional',
      url: '',
      name,
      description,
      category_id,
    });

    return _class;
  }

  async deleteClass(id: string): Promise<void> {
    const classRepo = getCustomRepository(ClassRepository);
    await classRepo.deleteClass(id);
  }

  async listClass(): Promise<Class[]> {
    const classRepo = getCustomRepository(ClassRepository);
    const _class = await classRepo.listClass();

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
