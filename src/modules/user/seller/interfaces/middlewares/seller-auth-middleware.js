/**
 * وظیفه: بررسی JWT و استخراج اطلاعات Seller.
 */

import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";
const tokenManager = new TokenManager();

export const AuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("توکن ارسال نشده است.");

    const token = authHeader.replace("Bearer ", "");
    const decoded = tokenManager.verifyAccessToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "احراز هویت نامعتبر." });
  }
};
