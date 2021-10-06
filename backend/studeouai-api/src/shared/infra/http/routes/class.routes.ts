import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { ClassController } from '@modules/class/controllers/class-controller';
import { SpecificationClassController } from '@modules/class/controllers/specifications-class-controller';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { validateBody, validateParams } from '../middlewares/validations';
import validation from '../validations/validation';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const classRoutes = Router();

const classController = new ClassController();
const specificationClassController = new SpecificationClassController();

const uploadClassImages = multer(uploadConfig);

classRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validateBody(validation.createClassValidation),
  classController.createClass,
);

classRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  validateParams(validation.specificationIdValidation),
  validateBody(validation.idValidation),
  specificationClassController.specificationClass,
);

classRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  uploadClassImages.array('images'),
  classController.createImage,
);

export { classRoutes };
