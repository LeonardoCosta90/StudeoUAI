import { EntityRepository, Repository } from 'typeorm';

import { ClassImage } from '../entities/class-image';

@EntityRepository(ClassImage)
export class ClassImagesRepository extends Repository<ClassImage> {
  private repository: Repository<ClassImage>;

  async createClassImages(
    class_id: string,
    image_name: string,
  ): Promise<ClassImage> {
    const classImage = this.repository.create({ class_id, image_name });
    await this.repository.save(classImage);

    return classImage;
  }
}
