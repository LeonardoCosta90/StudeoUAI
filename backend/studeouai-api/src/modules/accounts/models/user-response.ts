export interface UserResponse {
  id: string;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string;
  avatar_url?: string;
}
