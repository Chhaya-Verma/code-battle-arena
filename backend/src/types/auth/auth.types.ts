export interface GoogleUserProfile {
  googleId: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: AuthUser;
}