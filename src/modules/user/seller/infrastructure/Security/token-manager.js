/**
 * وظیفه: تولید و اعتبارسنجی JWT AccessToken و RefreshToken برای فروشنده.
 * هماهنگ با تنظیمات جدید .env (JWT_SECRET و JWT_REFRESH_SECRET)
 */

import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const ACCESS_EXPIRE = process.env.ACCESS_TOKEN_EXPIRES_IN || "15m";
const REFRESH_EXPIRE = process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

export class TokenManager {
  generateTokens(payload) {
    if (!ACCESS_SECRET || !REFRESH_SECRET) {
      throw new Error("کلیدهای JWT در تنظیمات محیطی وجود ندارند.");
    }

    const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRE });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRE });

    return { accessToken, refreshToken };
  }

  verifyAccessToken(token) {
    try {
      return jwt.verify(token, ACCESS_SECRET);
    } catch (error) {
      throw new Error("توکن دسترسی نامعتبر یا منقضی شده است.");
    }
  }

  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, REFRESH_SECRET);
    } catch (error) {
      throw new Error("توکن رفرش نامعتبر یا منقضی شده است.");
    }
  }
}
