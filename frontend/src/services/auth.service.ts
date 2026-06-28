import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const googleLogin = async (idToken: string) => {
  const response = await API.post("/auth/google", {
    idToken,
  });

  return response.data;
};

const getCurrentUser = async (token: string) => {
  const response = await API.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default {
  googleLogin,
  getCurrentUser,
};