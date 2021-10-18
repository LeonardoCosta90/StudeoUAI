import { EntityRepository, Repository } from 'typeorm';

import { AttendedClass } from '../entities/attended-class';

@EntityRepository(AttendedClass)
class AttendedClassRepository extends Repository<AttendedClass> {
  async finishClassById(
    user_id: string,
    class_id: string,
  ): Promise<AttendedClass> {
    const attendedClass = this.create({
      class_id,
      user_id,
      status: true,
    });

    const response = await this.save(attendedClass);

    return response;
  }

  async findByUserId(user_id: string): Promise<AttendedClass[]> {
    return this.find({ where: { user_id }, relations: ['class'] });
  }

  async findById(id: string): Promise<AttendedClass> {
    return this.findOne({
      where: { id },
    });
  }

  async findByUserIdAndClassId(
    user_id: string,
    class_id: string,
  ): Promise<AttendedClass> {
    return this.findOne({
      where: {
        user_id: user_id,
        class_id: class_id,
      },
    });
  }
}

export { AttendedClassRepository };
