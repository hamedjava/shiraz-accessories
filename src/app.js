import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import { errorHandler } from "./core/middlewares/errorHandler.js";

// 🧩 مسیرهای ماژول‌ها را به صورت مستقیم ایمپورت می‌کنیم:
// import customerRoutes from "./modules/user/customer/interfaces/http/customerRoutes.js";
import adminRoutes from "./modules/user/admin/interfaces/http/adminRoutes.js";
// اگر بعداً ماژول‌های دیگر مثل product یا order اضافه شدند، می‌توانید به همین روش اضافه کنید.

const app = express();

/* ===========================
   🧰 تنظیمات عمومی Express
=========================== */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

/* ===========================
   🚀 مدیریت مسیرهای اصلی
=========================== */

// 🔹 مسیر اصلی API - تست سلامت سرور
app.get("/api", (req, res) => {
    res.json({ message: "✅ API فعال است" });
});

// 🔹 مسیرهای ماژول‌ها
// app.use("/api/customers", customerRoutes);
app.use("/api/admins", adminRoutes);

/* ===========================
   ❌ هندل خطاهای سراسری
=========================== */
app.use(errorHandler);

export default app;
