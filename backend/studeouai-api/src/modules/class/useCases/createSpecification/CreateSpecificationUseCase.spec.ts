import { ClassRepositoryInMemory } from "@modules/class/repositories/in-memory/ClassRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/class/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/appError";
import { CreateSpecificationError } from "./CreateSpecificationError";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

const newSpecification = {
  name: "Specification Test",
  description: "Specification description Test",
};

describe("Create a new Specification", () => {
  beforeEach(() => {
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationRepositoryInMemory
    );
  });

  it("Should be able to create a specification", async () => {
    await createSpecificationUseCase.execute(newSpecification);
    const categoryCreated = await specificationRepositoryInMemory.findByName(
      newSpecification.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("Should not be able to create a new specification because specification exist", async () => {
    await createSpecificationUseCase.execute(newSpecification);

    await expect(
      createSpecificationUseCase.execute(newSpecification)
    ).rejects.toBeInstanceOf(CreateSpecificationError);
  });
});
