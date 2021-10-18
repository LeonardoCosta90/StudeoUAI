import { Specification } from '../typeorm/entities/specifications';

export interface CreateClassRequest {
  available?: boolean;
  type?: string;
  url?: string;
  id?: string;
  name: string;
  description: string;
  category_id: string;
}
