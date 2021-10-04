import { Router } from 'express';

import { ResetUsersPasswordController } from '@modules/accounts/controllers/reset-users-password-controller';
import { SendForgotPasswordMailController } from '@modules/accounts/controllers/send-forgot-password-mail-controller';

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetUsersPasswordController = new ResetUsersPasswordController();

passwordRoutes.post(
  '/forgot',
  sendForgotPasswordMailController.sendForgotPasswordMail,
);
passwordRoutes.post('/reset', resetUsersPasswordController.resetUsersPassword);

export { passwordRoutes };
