import express from "express";
import {
  register,
  login,
  getAll,
  update,
  remove,
  sendOtp,
  verifyOtp,
} from "../controllers/adminController.js";
import { checkRole } from "../../../../../core/middlewares/roleMiddleware.js";

const router = express.Router();

/* ===============================
 * مسیرهای عمومی (بدون نقش)
 * =============================== */
router.post("/register", register);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);

/* ===============================
 * مسیرهای مدیریتی محافظت‌شده (CRUD)
 * فقط برای superAdmin و manager
 * =============================== */
router.get("/", checkRole(["superAdmin", "manager"]), getAll);
router.put("/:id", checkRole(["superAdmin", "manager"]), update);
router.delete("/:id", checkRole(["superAdmin"]), remove);

export default router;
