type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type RegisterUser = {
  name: string;
  email: string;
  password?: string;
  role?: string;
};