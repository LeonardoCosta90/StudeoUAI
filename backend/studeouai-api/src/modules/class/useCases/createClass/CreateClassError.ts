import { AppError } from "@shared/errors/appError";

class CreateClassError extends AppError {
  constructor() {
    super("Class already exists");
  }
}

export { CreateClassError };
