import multer from 'multer';
import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { validateBody } from '../../http/middlewares/validations';

import profileController from '@modules/accounts/controllers/profile-controller';
import userController from '@modules/accounts/controllers/user-controller';
import updateAvatarController from '@modules/accounts/controllers/update-user-avatar-controller';
import uploadConfig from '@config/upload';
import validation from '../validations/validation';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

usersRoutes.get(
  '/',
  validateBody(validation.getUserValidation),
  userController.findUserById,
);

usersRoutes.post(
  '/',
  validateBody(validation.createUserValidation),
  userController.createUser,
);

usersRoutes.get(
  '/profile',
  ensureAuthenticated,
  validateBody(validation.createUserValidation),
  profileController.profileById,
);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateAvatarController,
);

export { usersRoutes };
