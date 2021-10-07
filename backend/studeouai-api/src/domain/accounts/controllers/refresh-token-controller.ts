import { Request, Response } from 'express';

import { RefreshTokenService } from '../services/refresh-token-service';

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshTokenService = new RefreshTokenService();

    const token =
      request.body.token ||
      request.headers['x-access-token'] ||
      request.query.token;

    const refreshToken = await refreshTokenService.refreshToken(token);

    return response.status(200).json(refreshToken);
  }
}

export { RefreshTokenController };
