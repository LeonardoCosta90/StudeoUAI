import { ClassImage } from "../infra/typeorm/entities/ClassImage";

interface IClassImagesRepository {
  create(class_id: string, image_name: string): Promise<ClassImage>;
}

export { IClassImagesRepository };
