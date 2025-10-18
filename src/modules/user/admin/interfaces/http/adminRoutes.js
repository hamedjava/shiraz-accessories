import express from "express";

// 🧠 ایمپورت مستقیم توابع کنترلر
import {
  register,
  login,
  getAll,
  update,
  remove,
  sendOtp,
} from "../controllers/adminController.js";

const router = express.Router();

/* ===========================
   👤 عملیات مرتبط با ادمین
=========================== */

// ثبت‌نام (email + password یا mobile + otp)
router.post("/register", register);

// ارسال کد OTP برای لاگین با موبایل
router.post("/send-otp", sendOtp);

// لاگین با موبایل و otp code
router.post("/login", login);

// دریافت تمام ادمین‌ها
router.get("/", getAll);

// بروزرسانی اطلاعات ادمین بر اساس ID
router.put("/:id", update);

// حذف ادمین بر اساس ID
router.delete("/:id", remove);

export default router;
