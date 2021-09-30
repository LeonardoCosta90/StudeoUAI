import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import createUserValidation from '../validations/create-user-validation';
import getUserValidation from '../validations/get-user-validation';
import profileController from '@modules/accounts/controllers/profile-controller';
import updateAvatarController from '@modules/accounts/controllers/update-user-avatar-controller';
import uploadConfig from '@config/upload';
import userController from '@modules/accounts/controllers/user-controller';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

usersRoutes.get('/', getUserValidation, userController.findUserById);

usersRoutes.post('/', createUserValidation, userController.createUser);

usersRoutes.get(
  '/profile',
  ensureAuthenticated,
  getUserValidation,
  profileController.profileById,
);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateAvatarController,
);

export { usersRoutes };
