import { Specification } from '../typeorm/entities/specifications';

export interface CreateClassRequest {
  id?: string;
  name: string;
  description: string;
  category_id: string;
  specifications?: Specification[];
}
