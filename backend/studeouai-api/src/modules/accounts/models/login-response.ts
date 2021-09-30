export interface LoginResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}
