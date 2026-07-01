"use client";

import GoogleLoginButton from "@/components/GoogleLoginButton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-3 text-center text-3xl font-bold">
          Code Battle Arena
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Continue with Google to start coding battles.
        </p>

        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
    </main>
  );
}