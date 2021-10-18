import { Router } from 'express';

import { AttendedClassController } from '@domain/attended-class/controllers/attended-class-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';
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

attendedClassRoutes.get(
  '/',
  ensureAuthenticated,
  validateBody(validation.attendedClassValidation),
  attendedClassController.findAttendedClass,
);

export { attendedClassRoutes };
