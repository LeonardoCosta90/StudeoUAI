import { AppError } from '@shared/errors/app-error';
import { Request, Response, NextFunction } from 'express';

import { UpdateUserAvatarService } from '../services/update-user-avatar-service';

export default async function updateAvatarUser(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { id: user_id } = request.user;
    const avatar_file = request.file.filename;

    if (!avatar_file) {
      throw new AppError('File not found');
    }

    const updateUserAvatarService = new UpdateUserAvatarService();

    await updateUserAvatarService.updateAvatarUser({
      user_id,
      avatar_file,
    });

    return response.status(204).send();
  } catch (err) {
    next();
  }
}
