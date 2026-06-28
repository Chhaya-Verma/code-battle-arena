import { OAuth2Client } from "google-auth-library";
import env from "../config/env";

const client = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (idToken: string) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid Google Token");
  }

  return {
    googleId: payload.sub,
    name: payload.name ?? "",
    email: payload.email ?? "",
    avatar: payload.picture ?? "",
  };
};