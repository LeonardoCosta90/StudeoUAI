import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { classRoutes } from './class.routes';
import { categoriesRoutes } from './categories.routes';
import { passwordRoutes } from './password.routes';
import { attendedClassRoutes } from './attended-class.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/class', classRoutes);
router.use('/attendedClass', attendedClassRoutes);

router.use('/password', passwordRoutes);

router.use(authenticateRoutes);

export { router };
