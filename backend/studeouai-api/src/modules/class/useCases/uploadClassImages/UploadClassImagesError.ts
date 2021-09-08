import { AppError } from "@shared/errors/appError";

export class UploadClassImageError extends AppError {
  constructor() {
    super("Class not found");
  }
}
