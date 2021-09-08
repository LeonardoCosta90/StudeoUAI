import { ICreateAttendedClassDTO } from "@modules/attended-class/dtos/ICreateAttendedClassDTO";
import { AttendedClass } from "@modules/attended-class/infra/typeorm/entities/AttendedClass";
import { IAttendedClassRepository } from "@modules/attended-class/repositories/IAttendedClassRepository";

class AttendedClassRepositoryInMemory implements IAttendedClassRepository {
  attendedClass: AttendedClass[] = [];

  async findById(id: string): Promise<AttendedClass> {
    return this.attendedClass.find((attendedClass) => attendedClass.id === id);
  }

  async findByUserId(user_id: string): Promise<AttendedClass[]> {
    return this.attendedClass.filter(
      (attendedClass) => attendedClass.user_id === user_id
    );
  }

  async finishClassById(
    user_id: string,
    class_id: string
  ): Promise<AttendedClass> {
    const userId = await this.findByUserId(user_id);
    const attendedClass = await this.findById(class_id);

    console.log(attendedClass);

    Object.assign(attendedClass, {
      class_id: class_id,
      user_id: userId,
      status: true,
    });

    this.attendedClass.push(attendedClass);
    return attendedClass;
  }
}

export { AttendedClassRepositoryInMemory };
