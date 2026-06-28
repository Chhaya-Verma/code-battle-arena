import { Request, Response } from "express";
import authService from "../../services/auth/auth.service";
import { verifyGoogleToken } from "../../utils/google";

class AuthController {
  async googleLogin(req: Request, res: Response) {
    try {
      const { idToken } = req.body;

      if (!idToken) {
        return res.status(400).json({
          success: false,
          message: "Google ID Token is required",
        });
      }

      const profile = await verifyGoogleToken(idToken);

      const result = await authService.googleLogin(profile);

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);

      return res.status(401).json({
        success: false,
        message: "Google authentication failed",
      });
    }
  }
  async getCurrentUser(req: Request, res: Response) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const result = await authService.getCurrentUser(userId);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
}
}
export default new AuthController();