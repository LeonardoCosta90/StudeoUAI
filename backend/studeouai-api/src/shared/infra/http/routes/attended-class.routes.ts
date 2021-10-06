import { Router } from 'express';

import { AttendedClassController } from '@modules/attended-class/controllers/attended-class-controller';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { validateBody } from '../middlewares/validations';
import validation from '../validations/validation';

const attendedClassRoutes = Router();

const attendedClassController = new AttendedClassController();

attendedClassRoutes.post(
  '/',
  ensureAuthenticated,
  validateBody(validation.attendedClassValidation),
  attendedClassController.attendedClass,
);

export { attendedClassRoutes };
