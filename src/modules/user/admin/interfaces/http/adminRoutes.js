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

  // 👇 مدیریت مشتریان توسط ادمین
  getAllCustomers,
  blockCustomer,
  unblockCustomer,
  deleteCustomer,

  // 👇 افزوده جدید: حذف نشست خاص بر اساس sessionId
  deleteSession
} from "../../../admin/interfaces/controllers/adminController.js";

import { checkRole } from "../../../../../core/middlewares/roleMiddleware.js";
import { authenticateAdmin } from "../../../../../core/middlewares/authenticateAdmin.js";

const router = express.Router();

/* ========================================
 * 🟢 بخش عمومی (Public Routes) — بدون احراز نقش
 * ======================================== */
router.post("/register", register);       // ثبت‌نام ادمین
router.post("/send-otp", sendOtp);        // ارسال OTP
router.post("/verify-otp", verifyOtp);    // تأیید OTP
router.post("/login", login);             // ورود به حساب ادمین

/* ========================================
 * 🔐 مدیریت نشست (Session Management)
 * ======================================== */
router.post(
  "/logout",
  authenticateAdmin,
  checkRole(["superAdmin", "manager", "support"]),
  logout
);

router.get(
  "/sessions/:adminId",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  sessions
);

/* ✅ افزوده جدید: حذف نشست خاص بر اساس sessionId */
router.delete(
  "/session/:adminId/:sessionId",
  authenticateAdmin,
  checkRole(["superAdmin", "manager", "support"]),
  deleteSession
);

/* ========================================
 * 👥 عملیات مدیریتی ادمین‌ها (Admin CRUD)
 * ======================================== */
router.get(
  "/",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  getAll
);

router.put(
  "/:id",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  update
);

router.delete(
  "/:id",
  authenticateAdmin,
  checkRole(["superAdmin"]),
  remove
);

/* ========================================
 * 🛍 مدیریت فروشندگان توسط ادمین‌ها
 * ======================================== */
router.get(
  "/sellers",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  getAllSellers
);

router.post(
  "/sellers/verify/:sellerId",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  verifySeller
);

/* ========================================
 * 👥 مدیریت مشتریان توسط ادمین‌ها
 * مسیرها: /api/admin/customers/
 * ======================================== */
router.get(
  "/customers",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  getAllCustomers
);

router.patch(
  "/customers/:customerId/block",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  blockCustomer
);

router.patch(
  "/customers/:customerId/unblock",
  authenticateAdmin,
  checkRole(["superAdmin", "manager"]),
  unblockCustomer
);

router.delete(
  "/customers/:customerId",
  authenticateAdmin,
  checkRole(["superAdmin"]),
  deleteCustomer
);

export default router;
