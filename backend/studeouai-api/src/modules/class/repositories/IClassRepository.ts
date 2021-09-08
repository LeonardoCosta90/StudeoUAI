import { ICreateClassDTO } from "../dtos/ICreateClassDTO";
import { Class } from "../infra/typeorm/entities/Class";

interface IClassRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findById(id: string): Promise<Class>;
  findByName(name: string): Promise<Class>;
}

export { IClassRepository };
