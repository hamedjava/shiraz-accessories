// middleware/auth-middleware.js
import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";
const tokenManager = new TokenManager();

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, message: "توکن نیاز است!" });
  try {
    const payload = tokenManager.verifyAccessToken(token);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "توکن نامعتبر یا منقضی است!" });
  }
}
