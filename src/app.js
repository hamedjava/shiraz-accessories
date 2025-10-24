/**
 * ------------------------------------------
 * فایل اصلی راه‌اندازی برنامه Express
 * مدیریت امنیت، محدودیت درخواست، ثبت لاگ، و Mount کردن ماژول‌های مختلف
 * ------------------------------------------
 */

import express from "express";
import helmet from "helmet";                 // افزایش امنیت Headerها
import cors from "cors";                     // اجازه به درخواست‌های Cross-Origin
import morgan from "morgan";                 // ثبت لاگ درخواست‌ها در حالت dev
import rateLimit from "express-rate-limit";  // محدودیت تعداد درخواست در بازه زمانی

// هندلر عمومی خطاها (Global Error Handler)
import { errorHandler } from "./core/middlewares/errorHandler.js";

// ماژول‌های سیستم (Case-sensitive برای لینوکس)
import adminRoutes from "./modules/user/admin/interfaces/http/adminRoutes.js";
import sellerRoutes from "./modules/user/seller/interfaces/http/seller-routes.js";

// ⬇️ اضافه‌شده برای مشتریان (Customers) با بررسی مسیر صحیح و اصلاحات لازم:
import customerRoutes from "./modules/user/customer/interfaces/http/customer-routes.js";

// ایجاد اپلیکیشن اصلی
const app = express();

/* ===========================
   📘 لایه امنیت و تنظیمات عمومی
=========================== */

// تنظیمات پیشرفته‌ی Helmet برای توسعه و production
app.use(
  helmet({
    contentSecurityPolicy: false,              // غیرفعال کردن CSP (در توسعه باعث تداخل SPA می‌شود)
    crossOriginResourcePolicy: { policy: "same-origin" }, // محدود کردن دسترسی منابع برای افزایش امنیت
  })
);

// فعال‌سازی CORS پس از Helmet
app.use(cors());

// فعال‌سازی JSON parser
app.use(express.json());

// فعال‌سازی لاگ درخواست‌ها (در حالت dev)
app.use(morgan("dev"));

// محدودیت تعداد درخواست‌ برای جلوگیری از حملات brute-force و DoS
app.use(
  rateLimit({
    windowMs: 60 * 1000, // بازه زمانی یک دقیقه
    max: 60, // حداکثر ۶۰ درخواست در هر دقیقه
    message: "تعداد درخواست‌های شما بیش از حد مجاز است.",
  })
);

/* ===========================
   ✅ مسیر تست وضعیت API
=========================== */
app.get("/api", (req, res) => {
  res.status(200).json({ message: "✅ API فعال است" });
});

/* ===========================
   📦 Mount کردن ماژول‌ها
=========================== */

// مسیر مدیران (Admins)
app.use("/api/admins", adminRoutes);

// مسیر فروشندگان (Sellers)
app.use("/api/seller", sellerRoutes);

// مسیر مشتریان (Customers) ✅ اضافه شده
app.use("/api/customers", customerRoutes);

/* ===========================
   ⚠️ هندلر نهایی خطاها
=========================== */
app.use(errorHandler);

export default app;
