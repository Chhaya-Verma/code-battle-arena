"use client";

import { createContext } from "react";
import { User } from "@/types/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login: () => Promise<void>;

  logout: () => void;

  refreshUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);