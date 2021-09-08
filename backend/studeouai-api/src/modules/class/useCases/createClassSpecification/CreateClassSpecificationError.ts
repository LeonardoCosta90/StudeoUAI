/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable max-classes-per-file */
import { AppError } from "@shared/errors/appError";

export namespace CreateClassSpecificationError {
  export class ClassNotFound extends AppError {
    constructor() {
      super("Class not found");
    }
  }

  export class SpecificationNotFound extends AppError {
    constructor() {
      super("Specification not found");
    }
  }
}
