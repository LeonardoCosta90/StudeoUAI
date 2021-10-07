import { Request, Response } from 'express';
import { AttendedClassService } from '../services/attended-class-service';

export class AttendedClassController {
  async attendedClass(request: Request, response: Response): Promise<Response> {
    const { user_id, class_id } = request.body;

    const attendedClassService = new AttendedClassService();

    const attendedClass = await attendedClassService.attendedClass({
      user_id,
      class_id,
    });

    return response.status(201).json(attendedClass);
  }
}
