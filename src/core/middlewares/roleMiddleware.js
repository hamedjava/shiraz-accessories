import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomError } from "../errors/customError.js";

dotenv.config();

/**
 * Middleware بررسی نقش‌ها بر اساس JWT
 * فقط نقش‌های مجاز می‌توانند به مسیر دسترسی داشته باشند.
 */
export function checkRole(roles = []) {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      // --- بررسی وجود و ساختار Header ---
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomError("توکن احراز هویت یافت نشد.", 401);
      }

      const token = authHeader.split(" ")[1];
      const secret = process.env.JWT_SECRET;

      if (!secret) {
        throw new CustomError("کلید JWT در سرور تنظیم نشده است.", 500);
      }

      // --- اعتبارسنجی و رمزگشایی توکن ---
      const decoded = jwt.verify(token, secret);

      if (!decoded || !decoded.role) {
        throw new CustomError("نقش کاربر در توکن معتبر نیست.", 403);
      }

      // --- بررسی نقش مجاز ---
      if (roles.length > 0 && !roles.includes(decoded.role)) {
        throw new CustomError("دسترسی کافی ندارید.", 403);
      }

      // --- ثبت اطلاعات ادمین در ریکوئست ---
      req.admin = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email ?? null,
      };

      next();
    } catch (error) {
      // --- هندل خطاهای JWT ---
      if (error instanceof jwt.TokenExpiredError) {
        return next(new CustomError("توکن منقضی شده است.", 401));
      }

      if (error instanceof jwt.JsonWebTokenError) {
        return next(new CustomError("توکن نامعتبر است.", 401));
      }

      next(error);
    }
  };
}
