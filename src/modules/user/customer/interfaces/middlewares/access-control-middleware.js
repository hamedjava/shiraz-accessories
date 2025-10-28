// interfaces/middlewares/access-control-middleware.js

/**
 * Middleware کنترل سطح دسترسی بر اساس نقش‌ها
 * @param {Array<string>} roles مجاز برای مسیر
 */
export function accessControl(roles = []) {
    return (req, res, next) => {
      if (!req.user || !req.user.roles)
        return res.status(403).json({ error: "مجوز دسترسی ندارید" });
  
      const hasAccess = roles.some(role => req.user.roles.includes(role));
      if (!hasAccess)
        return res.status(403).json({ error: "دسترسی غیرمجاز" });
  
      next();
    };
  }
  