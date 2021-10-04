import { NextFunction, Request, Response } from 'express';

import { AuthenticateUserService } from '../services/authenticate-use-service';

export class AuthenticateUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const { email, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const authenticationData = await authenticateUserService.auth({
        email,
        password,
      });

      return response.status(201).json(authenticationData);
    } catch (err) {
      next();
    }
  }
}
