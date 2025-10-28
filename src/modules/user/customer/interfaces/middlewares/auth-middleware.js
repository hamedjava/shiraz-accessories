// interfaces/middlewares/auth-middleware.js

import { TokenManager } from "../../infrastructure/security/token-manager.js";
const manager = new TokenManager();

export function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({ error: "توکن وجود ندارد در هدر Authorization" });

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer")
      return res.status(400).json({ error: "ساختار توکن نادرست است. باید به صورت 'Bearer <token>' باشد" });

    const token = parts[1];
    const decoded = manager.verifyAccessToken(token);
    if (!decoded || !decoded.id)
      return res.status(403).json({ error: "توکن نامعتبر است" });

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "توکن نامعتبر است: " + err.message });
  }
}
