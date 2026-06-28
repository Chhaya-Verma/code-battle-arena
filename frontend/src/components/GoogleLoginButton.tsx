"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import authService from "@/services/auth.service";
import { useAuth } from "@/hooks/useAuth";

export default function GoogleLoginButton() {
  const router = useRouter();
  const { login } = useAuth();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          if (!credentialResponse.credential) {
            alert("Google login failed.");
            return;
          }

          const data = await authService.googleLogin(credentialResponse.credential);

          localStorage.setItem("token", data.token);
          await login();
          console.log("Login Success:", data);

          router.push("/dashboard");
        } catch (error) {
          console.error(error);
          alert("Login failed");
        }
      }}
      onError={() => {
        alert("Google Login Failed");
      }}
    />
  );
}