import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomError } from "../../../src/core/errors/customError.js";
import { AdminModel } from "../../../src/modules/user/admin/infrastructure/models/adminModel.js";
import { SellerModel } from "../../../src/modules/user/seller/infrastructure/models/seller-model.js";

dotenv.config();

/**
 * Middleware برای بررسی نقش‌های مجاز در مسیرهای محصولات
 * ادمین‌ها (superAdmin, manager, support) و فروشنده‌ها مجازند
 */
export async function checkAdminOrSeller(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomError("توکن احراز هویت یافت نشد.", 401);
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      throw new CustomError("توکن نامعتبر است.", 401);
    }

    // بررسی اینکه آیا مربوط به ادمین است
    const admin = await AdminModel.findById(decoded.id).select("role email");
    if (admin) {
      const allowedAdminRoles = ["superAdmin", "manager", "support"];
      if (!allowedAdminRoles.includes(admin.role)) {
        throw new CustomError("نقش ادمین مجاز نیست.", 403);
      }
      req.user = { id: admin._id.toString(), role: admin.role, type: "admin" };
      return next();
    }

    // اگر فروشنده است
    const seller = await SellerModel.findById(decoded.id).select("email");
    if (seller) {
      req.user = { id: seller._id.toString(), role: "seller", type: "seller" };
      return next();
    }

    throw new CustomError("کاربر معتبر یافت نشد.", 404);
  } catch (error) {
    next(error);
  }
}
