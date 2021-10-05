import { AppError } from '@shared/errors/app-error';

export class UploadClassImageError extends AppError {
  constructor() {
    super('Class not found');
  }
}
