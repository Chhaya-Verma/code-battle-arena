import authRepository from "../../repositories/auth/auth.repository";
import { GoogleUserProfile, AuthResponse } from "../../types/auth/auth.types";
import { generateToken } from "../../utils/jwt";

class AuthService {
  async googleLogin(profile: GoogleUserProfile): Promise<AuthResponse> {
    let user = await authRepository.findByGoogleId(profile.googleId);

    if (!user) {
  user = await authRepository.createUser({
    googleId: profile.googleId,
    name: profile.name,
    email: profile.email,
    avatar: profile.avatar,
  });
} else {
  user = await authRepository.updateGoogleUser(
    profile.googleId,
    {
      name: profile.name,
      avatar: profile.avatar,
    }
  );
}

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    return {
  success: true,
  message: "Login successful",
  token,
  user: {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    role: user.role,
  },
};

  }
async getCurrentUser(userId: string) {
  const user = await authRepository.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return {
    success: true,
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
    },
  };
}

}

export default new AuthService();