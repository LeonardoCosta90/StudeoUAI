import { getRepository, Repository } from 'typeorm';

import { IClassImagesRepository } from '@modules/class/repositories/IClassImagesRepository';

import { ClassImage } from '../entities/ClassImage';

class ClassImagesRepository implements IClassImagesRepository {
  private repository: Repository<ClassImage>;

  constructor() {
    this.repository = getRepository(ClassImage);
  }

  async create(class_id: string, image_name: string): Promise<ClassImage> {
    const classImage = this.repository.create({ class_id, image_name });
    await this.repository.save(classImage);

    return classImage;
  }
}

export { ClassImagesRepository };
