import { Router } from "express";

import { CreateAttendedClassController } from "@modules/attended-class/useCases/createAttendedClass/CreateAttendedClassController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const attendedClassRoutes = Router();

const createClassController = new CreateAttendedClassController();

attendedClassRoutes.post(
  "/",
  ensureAuthenticated,
  createClassController.handle
);

export { attendedClassRoutes };
