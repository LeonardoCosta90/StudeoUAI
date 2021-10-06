import { Router } from 'express';

import { SpecificationController } from '@modules/class/controllers/specifications-controller';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { validateBody } from '../middlewares/validations';
import validation from '../validations/validation';

const specificationsRoutes = Router();

const specificationController = new SpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validateBody(validation.createSpecificationValidation),
  specificationController.createSpecification,
);

export { specificationsRoutes };
