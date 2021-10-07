import multer from 'multer';
import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';
import {
  validateBody,
  validateParams,
} from '../../http/middlewares/validations';

import profileController from '@domain/accounts/controllers/profile-controller';
import userController from '@domain/accounts/controllers/user-controller';
import updateAvatarController from 'domain/accounts/controllers/update-user-avatar-controller';
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
  '/profile/:id',
  ensureAuthenticated,
  validateParams(validation.idValidation),
  profileController.profileById,
);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateAvatarController,
);

export { usersRoutes };
