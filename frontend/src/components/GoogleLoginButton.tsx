"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { googleLogin } from "@/services/auth.service";

export default function GoogleLoginButton() {
  const router = useRouter();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          if (!credentialResponse.credential) {
            alert("Google login failed.");
            return;
          }

          const data = await googleLogin(credentialResponse.credential);

          localStorage.setItem("token", data.token);

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