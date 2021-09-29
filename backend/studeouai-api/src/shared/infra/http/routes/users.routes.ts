import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import UserController from '@modules/accounts/controllers/user-controller';
import { ProfileUserController } from '@modules/accounts/useCases/profileUser/ProfileUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/updateUserAvatarController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import createUserValidation from '../validations/create-user-validation';
import getUserValidation from '../validations/get-user-validation';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.get('/', getUserValidation, UserController.findUserById);
usersRoutes.post('/', createUserValidation, UserController.createUser);

usersRoutes.get('/profile', ensureAuthenticated, profileUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
