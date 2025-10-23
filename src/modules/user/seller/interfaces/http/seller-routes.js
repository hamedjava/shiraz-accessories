/**
 * وظیفه: تعریف مسیرهای فروشنده و اعمال Middlewareهای Auth و RBAC
 * مسیرهای عمومی (ثبت‌نام و ورود) بدون نیاز به توکن هستند.
 * مسیرهای محافظت‌شده با احراز هویت و نقش کنترل می‌شوند.
 */

import express from "express";
import { SellerController } from "../controllers/seller-controller.js";
import { AuthMiddleware } from "../../../../user/seller/interfaces/middlewares/seller-auth-middleware.js";
import { RBACMiddleware } from "../../../seller/interfaces/middlewares/rbac-middleware.js";

const router = express.Router();
const controller = new SellerController();

/* =========================
   مسیرهای عمومی (بدون نیاز به احراز هویت)
 ========================= */

// 📩 ثبت‌نام فروشنده جدید
router.post("/register", (req, res) => controller.register(req, res));

// 🔑 ورود با ایمیل و رمز عبور
router.post("/login/email", (req, res) => controller.loginWithEmail(req, res));

// 📲 ارسال کد OTP برای ورود با موبایل
router.post("/login/send-otp", (req, res) => controller.sendLoginOtp(req, res));

// ✅ تأیید کد OTP و ورود
router.post("/login/verify-otp", (req, res) => controller.verifyLoginOtp(req, res));

/* =========================
   مسیرهای محافظت‌شده (نیاز به AuthMiddleware)
 ========================= */

/**
 * 🎯 پروفایل فروشنده (فقط برای نقش seller)
 */
router.get(
  "/profile",
  AuthMiddleware,               // بررسی JWT
  RBACMiddleware(["seller"]),   // فقط اگر نقش seller باشد
  async (req, res) => {
    try {
      const sellerId = req.user.id;
      const seller = await controller.service.repository.findById(sellerId);
      if (!seller)
        return res.status(404).json({ success: false, message: "فروشنده یافت نشد." });

      res.status(200).json({ success: true, data: seller });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

/**
 * 🎯 مشاهده‌ی لیست تمام فروشنده‌ها (فقط برای نقش admin)
 */
router.get(
  "/sellers",
  AuthMiddleware,
  RBACMiddleware(["admin"]),
  async (req, res) => {
    try {
      const sellers = await controller.service.repository.findAll();
      res.status(200).json({ success: true, data: sellers });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

/**
 * 🎯 تأیید فروشنده توسط ادمین
 */
router.post(
  "/verify/:id",
  AuthMiddleware,
  RBACMiddleware(["admin"]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const seller = await controller.service.repository.updateSeller(id, {
        isVerified: true,
        role: "seller",
      });

      if (!seller)
        return res.status(404).json({ success: false, message: "فروشنده مورد نظر یافت نشد." });

      res.status(200).json({ success: true, message: "فروشنده تأیید شد.", data: seller });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

/* =========================
   🟣 مسیرهای جدید: Session Management
 ========================= */

/**
 * ⛔ خروج فروشنده از سیستم
 * توضیح: حذف RefreshToken از دیتابیس و خاتمه‌ی نشست جاری.
 * دسترسی: فقط کاربران seller (خودش) یا admin (مدیریت از بیرون)
 */
router.post(
  "/logout",
  AuthMiddleware,                 // نیاز به توکن تاییدشده
  RBACMiddleware(["seller", "admin"]), // مجاز برای نقش seller و admin
  async (req, res) => {
    try {
      await controller.logout(req, res);
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
);

/**
 * 📋 مشاهده نشست‌های فعال فروشنده
 * توضیح: دریافت تمام RefreshTokenهای ثبت‌شده در دیتابیس مربوط به فروشنده.
 * دسترسی: فقط admin یا فروشنده‌ی خودش (seller)
 */
router.get(
  "/:sellerId/sessions",
  AuthMiddleware,
  RBACMiddleware(["seller", "admin"]),
  async (req, res) => {
    try {
      await controller.sessions(req, res);
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
);

/* =========================
   Export Router
 ========================= */
export default router;
