import { EntityRepository, getRepository, Repository } from 'typeorm';

import { IAttendedClassRepository } from '@modules/attended-class/repositories/IAttendedClassRepository';

import { AttendedClass } from '../entities/attended-class';

@EntityRepository(AttendedClass)
class AttendedClassRepository extends Repository<AttendedClass> {
  async finishClassById(user_id: string, class_id: string): Promise<void> {
    const userId = await this.findByUserId(user_id);
    const attendedClass = await this.findById(class_id);

    Object.assign(attendedClass, {
      class_id: class_id,
      user_id: userId,
      status: true,
    });

    await this.save(attendedClass);
  }

  async findByUserId(user_id: string): Promise<AttendedClass[]> {
    return this.find({ where: { user_id }, relations: ['class'] });
  }

  async findById(id: string): Promise<AttendedClass> {
    return this.findOne(id);
  }
}

export { AttendedClassRepository };
