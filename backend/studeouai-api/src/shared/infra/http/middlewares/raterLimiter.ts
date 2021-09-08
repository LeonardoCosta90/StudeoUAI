import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import redis from "redis";

import { RateLimiterError } from "@shared/errors/RateLimiterError";

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  enable_offline_queue: false,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: Number(process.env.REDIS_NUMBER_OF_REQUEST),
  duration: Number(process.env.BETWEEN_REQUESTS),
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    next();
  } catch (error) {
    throw new RateLimiterError.TooManyRequest();
  }
}
