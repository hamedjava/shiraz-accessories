import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomError } from "../errors/customError.js";

dotenv.config();

/**
 * 🛡 Middleware احراز هویت ادمین
 * - بررسی وجود و اعتبار JWT در Header
 * - استخراج اطلاعات ادمین از توکن و ثبت در req.admin
 * - فاقد بررسی نقش (این کار در checkRole انجام می‌شود)
 */
export function authenticateAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // --- بررسی وجود توکن ---
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomError("توکن احراز هویت یافت نشد.", 401);
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new CustomError("کلید JWT در سرور تنظیم نشده است.", 500);
    }

    // --- بررسی صحت JWT ---
    const decoded = jwt.verify(token, secret);
    if (!decoded || !decoded.id) {
      throw new CustomError("توکن نامعتبر است.", 401);
    }

    // --- ثبت اطلاعات ادمین در شیء ریکوئست ---
    req.admin = {
      id: decoded.id,
      role: decoded.role,
      email: decoded.email ?? null,
    };

    next(); // عبور به مرحله‌ی بعد (مثلاً checkRole)
  } catch (error) {
    // --- مدیریت خطاهای JWT ---
    if (error instanceof jwt.TokenExpiredError) {
      return next(new CustomError("توکن منقضی شده است.", 401));
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return next(new CustomError("توکن نامعتبر است.", 401));
    }

    next(error);
  }
}
