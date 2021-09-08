/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable max-classes-per-file */
import { AppError } from "@shared/errors/appError";

export namespace CreateAttendedClassError {
  export class AttendedClassNotFound extends AppError {
    constructor() {
      super("Attended Class not found");
    }
  }

  export class ClassNotFound extends AppError {
    constructor() {
      super("Class not found");
    }
  }

  export class UserNotFound extends AppError {
    constructor() {
      super("User not found");
    }
  }
}
