import { Router } from 'express';

import { ResetUsersPasswordController } from '@domain/accounts/controllers/reset-users-password-controller';
import { SendForgotPasswordMailController } from '@domain/accounts/controllers/send-forgot-password-mail-controller';
import { validateBody, validateQuery } from '../middlewares/validations';
import validation from '../validations/validation';

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetUsersPasswordController = new ResetUsersPasswordController();

passwordRoutes.post(
  '/forgot',
  validateBody(validation.getEmailValidation),
  sendForgotPasswordMailController.sendForgotPasswordMail,
);
passwordRoutes.post(
  '/reset',

  resetUsersPasswordController.resetUsersPassword,
);

export { passwordRoutes };
