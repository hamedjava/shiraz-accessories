import express from "express";
import {
  register,
  sendOtp,
  verifyOtp,
  login,
  logout,
  sessions,
  getAll,
  update,
  remove,
  getAllSellers,
  verifySeller,
} from "../../../admin/interfaces/controllers/adminController.js"; // مسیر باید با ساختار پروژه‌ات همخوانی داشته باشه
import { checkRole } from "../../../../../core/middlewares/roleMiddleware.js";

const router = express.Router();

/* ========================================
 *  بخش عمومی (Public Routes) — بدون احراز نقش
 * ======================================== */
router.post("/register", register);           // ثبت‌نام ادمین
router.post("/send-otp", sendOtp);             // ارسال OTP
router.post("/verify-otp", verifyOtp);         // تأیید OTP
router.post("/login", login);                  // ورود (ایمیل/پسورد، موبایل/پسورد، موبایل/OTP)

/* ========================================
 *  مدیریت نشست (Session Management) — نیازمند نقش
 * ======================================== */
router.post(
  "/logout",
  checkRole(["superAdmin", "manager", "support"]),
  logout
); // خروج از سیستم
router.get(
  "/sessions/:adminId",
  checkRole(["superAdmin", "manager"]),
  sessions
); // لیست نشست‌های فعال

/* ========================================
 *  عملیات مدیریتی (Admin CRUD)
 *  فقط برای نقش‌های خاص
 * ======================================== */
router.get("/", checkRole(["superAdmin", "manager"]), getAll);      // لیست همه ادمین‌ها
router.put("/:id", checkRole(["superAdmin", "manager"]), update);   // بروزرسانی ادمین
router.delete("/:id", checkRole(["superAdmin"]), remove);           // حذف ادمین

/* ========================================
 *  مدیریت فروشندگان توسط ادمین‌ها (Seller Management)
 * ======================================== */
// لیست همه فروشندگان
router.get("/sellers", checkRole(["superAdmin", "manager"]), getAllSellers);

// تأیید فروشنده‌ی خاص
router.post(
  "/sellers/verify/:sellerId",
  checkRole(["superAdmin", "manager"]),
  verifySeller
);

export default router;
