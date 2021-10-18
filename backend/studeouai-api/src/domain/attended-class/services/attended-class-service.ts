import { UsersRepository } from '@domain/accounts/typeorm/repositories/users-repository';
import { AppError } from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import { AttendedClass } from '../typeorm/entities/attended-class';
import { AttendedClassRequest } from '../models/attended-class-request';
import { AttendedClassRepository } from '../typeorm/repositories/attended-class-repository';
import { ClassRepository } from '@domain/class/typeorm/repositories/class-repository';

export class AttendedClassService {
  async attendedClass({
    user_id,
    class_id,
  }: AttendedClassRequest): Promise<AttendedClass> {
    const classRepository = getCustomRepository(ClassRepository);
    const attendedClassRepository = getCustomRepository(
      AttendedClassRepository,
    );
    const usersRepository = getCustomRepository(UsersRepository);

    const classFound = await classRepository.findClassById(class_id);

    if (!classFound) {
      throw new AppError('Class not found.', 404);
    }

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const finish = await attendedClassRepository.findByUserIdAndClassId(
      user_id,
      class_id,
    );

    if (finish) {
      throw new AppError('Class finished.', 404);
    }

    const attended = await attendedClassRepository.finishClassById(
      user_id,
      class_id,
    );

    return attended;
  }

  async findByUserAndClass({
    user_id,
    class_id,
  }: AttendedClassRequest): Promise<AttendedClass> {
    const classRepository = getCustomRepository(ClassRepository);
    const attendedClassRepository = getCustomRepository(
      AttendedClassRepository,
    );
    const usersRepository = getCustomRepository(UsersRepository);

    const classFound = await classRepository.findClassById(class_id);

    if (!classFound) {
      throw new AppError('Class not found.', 404);
    }

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const attended = await attendedClassRepository.findByUserIdAndClassId(
      user_id,
      class_id,
    );

    return attended;
  }
}
