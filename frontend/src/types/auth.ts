export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}