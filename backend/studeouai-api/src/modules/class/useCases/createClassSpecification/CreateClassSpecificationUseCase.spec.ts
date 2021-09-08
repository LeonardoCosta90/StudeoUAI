import { ClassRepositoryInMemory } from "@modules/class/repositories/in-memory/ClassRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/class/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/appError";

import { CreateClassSpecificationUseCase } from "./CreateClassSpecificationUseCase";

let createClassSpecificationUseCase: CreateClassSpecificationUseCase;
let classRepositoryInMemory: ClassRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

const classMock = {
  name: "Class Name",
  description: "Description",
  category_id: "Category",
};

describe("Create Class Specification", () => {
  beforeEach(() => {
    classRepositoryInMemory = new ClassRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createClassSpecificationUseCase = new CreateClassSpecificationUseCase(
      classRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it("Should be able to add a new specification to a class", async () => {
    const specifications_ids = [];

    const _class = await classRepositoryInMemory.create(classMock);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 1; i++) {
      specificationRepositoryInMemory
        .create({
          name: `Specification ${i + 1}`,
          description: `Specification Test ${i + 1}`,
        })
        .then((specification) => {
          specifications_ids.push(specification.id);
        });
    }

    const specificationsClass = await createClassSpecificationUseCase.execute({
      class_id: _class.id,
      specifications_ids,
    });

    expect(specificationsClass.specifications).toHaveLength(2);
  });

  it("Should not be able to add a new specification to inexistent class", async () => {
    expect(async () => {
      const class_id = "123";
      const specifications_ids = ["456", "789"];

      await createClassSpecificationUseCase.execute({
        class_id,
        specifications_ids,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to add a inexistent specification to a class", async () => {
    expect(async () => {
      const _class = await classRepositoryInMemory.create(classMock);
      const specifications_ids = ["456", "789"];

      await createClassSpecificationUseCase.execute({
        class_id: _class.id,
        specifications_ids,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
