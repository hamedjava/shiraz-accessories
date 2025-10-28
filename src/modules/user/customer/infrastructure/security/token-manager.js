// infrastructure/security/token-manager.js
import jwt from "jsonwebtoken";

export class TokenManager {
  constructor() {
    this.accessSecret = process.env.ACCESS_TOKEN_SECRET || "access-secret-key";
    this.refreshSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-secret-key";
    this.accessExpiry = "15m";
    this.refreshExpiry = "7d";
  }

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, this.accessSecret, { expiresIn: this.accessExpiry });
    const refreshToken = jwt.sign(payload, this.refreshSecret, { expiresIn: this.refreshExpiry });
    return { accessToken, refreshToken };
  }

  verifyAccessToken(token) {
    try { return jwt.verify(token, this.accessSecret); }
    catch { return null; }
  }

  verifyRefreshToken(token) {
    try { return jwt.verify(token, this.refreshSecret); }
    catch { return null; }
  }
}
