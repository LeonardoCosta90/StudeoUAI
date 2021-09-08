import { container } from "tsyringe";

import "@shared/container/providers";

import { UsersRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { ClassImagesRepository } from "@modules/class/infra/typeorm/repositories/ClassImagesRepository";
import { ClassRepository } from "@modules/class/infra/typeorm/repositories/ClassRepository";
import { CategoriesRepository } from "@modules/class/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/class/infra/typeorm/repositories/SpecificationsRepository";
import { IClassImagesRepository } from "@modules/class/repositories/IClassImagesRepository";
import { IClassRepository } from "@modules/class/repositories/IClassRepository";
import { ICategoriesRepository } from "@modules/class/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/class/repositories/ISpecificationsRepository";
import { AttendedClassRepository } from "@modules/attended-class/infra/typeorm/repositories/AttendedClassRepository";
import { IAttendedClassRepository } from "@modules/attended-class/repositories/IAttendedClassRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClassRepository>(
  "ClassRepository",
  ClassRepository
);

container.registerSingleton<IClassImagesRepository>(
  "ClassImagesRepository",
  ClassImagesRepository
);

container.registerSingleton<IAttendedClassRepository>(
  "AttendedClassRepository",
  AttendedClassRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
