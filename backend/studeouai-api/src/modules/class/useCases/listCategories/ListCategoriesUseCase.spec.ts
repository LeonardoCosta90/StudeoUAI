import { CategoriesRepositoryInMemory } from "@modules/class/repositories/in-memory/CategoriesRepositoryInMemory";

import { CreateCategoryError } from "../createCategory/CreateCategoryError";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
let listCategoryUseCase: ListCategoriesUseCase;

describe("List Category Use Case", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
    listCategoryUseCase = new ListCategoriesUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to list a category", async () => {
    const newCategory = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createCategoryUseCase.execute(newCategory);
    await categoriesRepositoryInMemory.findByName(newCategory.name);
    const listCategories = await listCategoryUseCase.execute();

    expect(listCategories).toBeTruthy();
  });
});
