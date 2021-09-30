import { NextFunction, Request, Response } from 'express';
import { ProfileService } from '../services/profile-service';

async function profileById(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { id } = request.params;

    const profileService = new ProfileService();

    const profile = await profileService.findProfileById(id);

    return response.json(profile);
  } catch (err) {
    next();
  }
}

export default {
  profileById,
};
