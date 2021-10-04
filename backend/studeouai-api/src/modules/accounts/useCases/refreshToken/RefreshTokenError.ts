import { AppError } from '@shared/errors/app-error';

class RefreshTokenError extends AppError {
  constructor() {
    super('Refresh token does not exists!');
  }
}

export { RefreshTokenError };
