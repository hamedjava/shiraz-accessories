// interfaces/http/customer-routes.js
import express from "express";
import { customerControllerInstance } from "../../../customer/interfaces/controllers/customer-controller.js";
import { authMiddleware } from "../../../customer/interfaces/middlewares/auth-middleware.js";
import { accessControl } from "../../../customer/interfaces/middlewares/access-control-middleware.js";

const router = express.Router();

router.post("/register/mobile", customerControllerInstance.registerMobile);
router.post("/register/email", customerControllerInstance.registerEmail);
router.post("/login/mobile-otp", customerControllerInstance.loginMobileOtp);
router.post("/login/email-password", customerControllerInstance.loginEmailPassword);

router.get("/profile", authMiddleware, accessControl(["customer", "admin"]), customerControllerInstance.profile);
router.put("/profile", authMiddleware, accessControl(["customer"]), customerControllerInstance.updateProfile);

router.post("/logout", authMiddleware, customerControllerInstance.logout);
router.get("/", authMiddleware, accessControl(["admin"]), customerControllerInstance.getAll);
router.get("/:id", authMiddleware, accessControl(["admin"]), customerControllerInstance.getOne);
router.delete("/:id", authMiddleware, accessControl(["admin"]), customerControllerInstance.deleteOne);

export default router;
