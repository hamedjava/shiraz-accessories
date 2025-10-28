// interfaces/http/customer-routes.js
import express from "express";
import { customerController } from "../controllers/customer-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

/* ---------- Auth & Registration ---------- */
router.post("/register/email", customerController.registerEmail);
router.post("/register/mobile", customerController.registerMobile);

/* ---------- OTP Based Login ---------- */
router.post("/login/otp/request", customerController.requestOtp);
router.post("/login/otp/verify", customerController.loginOtp);

/* ---------- Token Refresh ---------- */
router.post("/session/refresh", customerController.refreshSession);

/* ---------- Logout ---------- */
router.post("/logout", authMiddleware, customerController.logout);
router.post("/logout/all", authMiddleware, customerController.logoutAll);

export default router;
