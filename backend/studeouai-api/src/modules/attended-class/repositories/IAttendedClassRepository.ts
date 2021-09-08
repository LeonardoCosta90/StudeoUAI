import { ICreateAttendedClassDTO } from "@modules/attended-class/dtos/ICreateAttendedClassDTO";

import { AttendedClass } from "../infra/typeorm/entities/AttendedClass";

interface IAttendedClassRepository {
  finishClassById(user_id: string, class_id: string): Promise<void>;
  findById(id: string): Promise<AttendedClass>;
  findByUserId(user_id: string): Promise<AttendedClass[]>;
}

export { IAttendedClassRepository };
