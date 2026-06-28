"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Not Logged In
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">

      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full"
      />

      <h1 className="text-3xl font-bold">
        Welcome {user.name}
      </h1>

      <p>{user.email}</p>

      <p>Role : {user.role}</p>

      <button
        onClick={() => {
        logout();
        router.push("/");
        }}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}