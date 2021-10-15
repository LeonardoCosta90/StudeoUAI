import { Router } from 'express';

import { CategoryController } from '@domain/class/controllers/category-controller';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensure-admin';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';
import { validateBody, validateParams } from '../middlewares/validations';

import validation from '../validations/validation';

const categoriesRoutes = Router();

const categoryController = new CategoryController();

categoriesRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  validateParams(validation.idValidation),
  validateBody(validation.createCategoryValidation),
  categoryController.saveCategory,
);

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validateBody(validation.createCategoryValidation),
  categoryController.createCategory,
);

categoriesRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  validateParams(validation.idValidation),
  categoryController.deleteCategory,
);

categoriesRoutes.get('/', ensureAuthenticated, categoryController.listCategory);

export { categoriesRoutes };
