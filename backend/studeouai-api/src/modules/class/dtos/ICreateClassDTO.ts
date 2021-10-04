import { Specification } from '../infra/typeorm/entities/Specifications';

interface ICreateClassDTO {
  id?: string;
  name: string;
  description: string;
  category_id: string;
  specifications?: Specification[];
}

export { ICreateClassDTO };
