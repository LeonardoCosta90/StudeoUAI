import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IClassRepository } from '@modules/class/repositories/IClassRepository';
import { AttendedClass } from '@modules/attended-class/infra/typeorm/entities/AttendedClass';
import { IAttendedClassRepository } from '@modules/attended-class/repositories/IAttendedClassRepository';
import { IDateProvider } from '@shared/container/providers/date-provider/IDateProvider';

import { CreateAttendedClassError } from './CreateAttendedError';

interface IRequest {
  class_id: string;
  user_id: string;
}

@injectable()
class CreateAttendedClassUseCase {
  constructor(
    @inject('AttendedClassRepository')
    private attendedClassRepository: IAttendedClassRepository,

    @inject('ClassRepository')
    private classRepository: IClassRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, class_id }: IRequest): Promise<AttendedClass> {
    const _class = await this.classRepository.findById(class_id);
    if (!_class) {
      throw new CreateAttendedClassError.ClassNotFound();
    }

    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new CreateAttendedClassError.UserNotFound();
    }

    const attended = await this.attendedClassRepository.finishClassById(
      user_id,
      class_id,
    );

    return attended;
  }
}

export { CreateAttendedClassUseCase };
