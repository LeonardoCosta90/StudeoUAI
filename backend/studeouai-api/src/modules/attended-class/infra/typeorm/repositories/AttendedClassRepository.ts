import { getRepository, Repository } from "typeorm";

import { ICreateAttendedClassDTO } from "@modules/attended-class/dtos/ICreateAttendedClassDTO";
import { IAttendedClassRepository } from "@modules/attended-class/repositories/IAttendedClassRepository";

import { AttendedClass } from "../entities/AttendedClass";

class AttendedClassRepository implements IAttendedClassRepository {
  private repository: Repository<AttendedClass>;

  constructor() {
    this.repository = getRepository(AttendedClass);
  }
  async finishClassById(user_id: string, class_id: string): Promise<void> {
    const userId = await this.findByUserId(user_id);
    const attendedClass = await this.findById(class_id);

    Object.assign(attendedClass, {
      class_id: class_id,
      user_id: userId,
      status: true,
    });

    await this.repository.save(attendedClass);
  }

  async findByUserId(user_id: string): Promise<AttendedClass[]> {
    return this.repository.find({ where: { user_id }, relations: ["class"] });
  }

  async findById(id: string): Promise<AttendedClass> {
    return this.repository.findOne(id);
  }
}

export { AttendedClassRepository };
