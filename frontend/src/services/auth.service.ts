import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const googleLogin = async (idToken: string) => {
  const response = await API.post("/auth/google", {
    idToken,
  });

  return response.data;
};