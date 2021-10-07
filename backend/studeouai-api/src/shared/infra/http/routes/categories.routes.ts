import { Router } from 'express';

import { CategoryController } from '@modules/class/controllers/category-controller';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensure-admin';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';
import { validateBody } from '../middlewares/validations';

import validation from '../validations/validation';

const categoriesRoutes = Router();

const categoryController = new CategoryController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validateBody(validation.createCategoryValidation),
  categoryController.createCategory,
);

categoriesRoutes.get('/', ensureAuthenticated, categoryController.listCategory);

export { categoriesRoutes };
