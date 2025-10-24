// middleware/access-control-middleware.js
export function accessControl(allowedRoles) {
    return (req, res, next) => {
      if (!req.user) return res.status(403).json({ success: false, message: "دسترسی غیرمجاز!" });
      const hasAccess = allowedRoles.some(role => req.user.roles.includes(role));
      if (!hasAccess)
        return res.status(403).json({ success: false, message: "دسترسی غیرمجاز!" });
      next();
    };
  }
  