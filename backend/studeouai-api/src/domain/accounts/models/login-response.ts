export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
  };
  token: string;
  refresh_token: string;
}
