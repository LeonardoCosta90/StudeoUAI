import { Request, Response } from 'express';

import { SendForgotPasswordMailService } from '../services/send-forgot-password-mail-service';

export class SendForgotPasswordMailController {
  async sendForgotPasswordMail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordMailService = new SendForgotPasswordMailService();

    sendForgotPasswordMailService.sendForgotPasswordMail(email);

    return response.status(200).send();
  }
}
