import { Specification } from '../typeorm/entities/specifications';

export interface CreateClassRequest {
  available?: boolean;
  id?: string;
  name: string;
  description: string;
  category_id: string;
}
