import { Router } from "express";
import authController from "../../controllers/auth/auth.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

router.post("/google", authController.googleLogin);
router.get("/me", authenticate, authController.getCurrentUser);

export default router;