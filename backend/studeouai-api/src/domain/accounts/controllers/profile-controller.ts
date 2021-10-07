import { Request, Response } from 'express';
import { ProfileService } from '../services/profile-service';

async function profileById(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;

  console.log(id);

  const profileService = new ProfileService();

  const profile = await profileService.findProfileById(id);

  return response.json(profile);
}

export default {
  profileById,
};
