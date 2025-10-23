/**
 * وظیفه: کنترل سطح دسترسی با توجه به نقش کاربر
 */

export const RBACMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user?.role;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ success: false, message: "دسترسی غیرمجاز." });
      }
      next();
    };
  };
  