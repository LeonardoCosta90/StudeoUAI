import { Request, Response, NextFunction } from 'express';

import { RefreshTokenService } from '../services/refresh-token-service';

class RefreshTokenController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const refreshTokenService = new RefreshTokenService();

      const token =
        request.body.token ||
        request.headers['x-access-token'] ||
        request.query.token;

      const refreshToken = await refreshTokenService.refreshToken(token);

      return response.status(200).json(refreshToken);
    } catch (err) {
      next();
    }
  }
}

export { RefreshTokenController };
