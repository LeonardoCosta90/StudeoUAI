import { Request, Response } from 'express';
import { AttendedClassService } from '../services/attended-class-service';

export class AttendedClassController {
  async attendedClass(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { class_id } = request.params;

    const attendedClassService = new AttendedClassService();

    const attendedClass = await attendedClassService.attendedClass({
      user_id,
      class_id,
    });

    return response.status(201).json(attendedClass);
  }

  async findAttendedClass(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id: user_id } = request.user;
    const { class_id } = request.params;

    const attendedClassService = new AttendedClassService();

    const attendedClass = await attendedClassService.findByUserAndClass({
      user_id,
      class_id,
    });

    return response.status(200).json(attendedClass);
  }
}
