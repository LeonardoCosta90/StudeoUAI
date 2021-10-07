/* eslint-disable @typescript-eslint/no-namespace */
import { AppError } from './app-error';

export namespace RateLimiterError {
  export class TooManyRequest extends AppError {
    constructor() {
      super('Too many requests', 429);
    }
  }
}
