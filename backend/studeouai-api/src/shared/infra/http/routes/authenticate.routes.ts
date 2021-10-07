import { Router } from 'express';

import { AuthenticateUserController } from '@domain/accounts/controllers/authenticate-user-controller';
import { RefreshTokenController } from '@domain/accounts/controllers/refresh-token-controller';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

authenticateRoutes.post('/refresh-token', refreshTokenController.handle);

export { authenticateRoutes };
