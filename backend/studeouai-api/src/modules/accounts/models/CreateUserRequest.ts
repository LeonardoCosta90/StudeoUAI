export default interface CreateUserRequest {
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string;
}
