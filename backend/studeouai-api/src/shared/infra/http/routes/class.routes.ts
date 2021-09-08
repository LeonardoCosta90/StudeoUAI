import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateClassController } from "@modules/class/useCases/createClass/createClassController";
import { CreateClassSpecificationController } from "@modules/class/useCases/createClassSpecification/CreateClassSpecificationController";
import { UploadClassImagesController } from "@modules/class/useCases/uploadClassImages/UploadClassImagesController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const classRoutes = Router();

const createClassController = new CreateClassController();
const createClassSpecificationController = new CreateClassSpecificationController();
const uploadClassImagesController = new UploadClassImagesController();

classRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createClassController.handle
);

classRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createClassSpecificationController.handle
);

const uploadClassImages = multer(uploadConfig);

classRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  uploadClassImages.array("images"),
  uploadClassImagesController.handle
);

export { classRoutes };
