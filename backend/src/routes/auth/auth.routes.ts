import { Router } from "express";
import authController from "../../controllers/auth/auth.controller";

const router = Router();

router.post("/google", authController.googleLogin);

export default router;