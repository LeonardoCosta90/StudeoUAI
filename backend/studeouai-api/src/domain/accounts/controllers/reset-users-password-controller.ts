import { Request, Response } from 'express';

import { ResetUsersPasswordService } from '../services/reset-users-password-service';

class ResetUsersPasswordController {
  async resetUsersPassword(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;

    console.log('reset users password', token, password);

    const resetUsersPasswordService = new ResetUsersPasswordService();

    await resetUsersPasswordService.resetUsersPassword({
      token: String(token),
      password,
    });
    return response.status(200).send();
  }
}

export { ResetUsersPasswordController };
