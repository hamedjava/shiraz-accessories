import {
  createAdmin,
  adminLogin,
  sendAdminOtp,
  verifyAdminOtp,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
} from "../../application/services/adminService.js";

/**
 * Controller Layer برای ادمین‌ها
 */

/* ===========================
   👤 ثبت‌نام ادمین (ایمیلی یا موبایلی)
=========================== */
export async function register(req, res, next) {
  try {
    const { name, email, password, mobile, role } = req.body;

    // حالت ایمیلی با موبایل الزامی
    if (email && password) {
      if (!mobile) {
        return res.status(400).json({
          success: false,
          message: "شماره موبایل برای ثبت‌نام ایمیلی الزامی است.",
        });
      }

      const result = await createAdmin({
        name,
        email,
        password,
        mobile,
        role: role || "manager",
      });

      return res.status(201).json({
        success: true,
        message: "ثبت‌نام ایمیلی با موفقیت انجام شد.",
        data: result,
      });
    }

    // حالت موبایلی
    if (mobile && !email && !password) {
      const result = await createAdmin({
        name,
        mobile,
        email: null,
        password: null,
        role: role || "support",
      });

      return res.status(201).json({
        success: true,
        message: "ثبت‌نام موبایلی با موفقیت انجام شد.",
        data: result,
      });
    }

    return res.status(400).json({
      success: false,
      message: "درخواست ثبت‌نام نامعتبر است.",
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   📱 ارسال کد OTP
=========================== */
export async function sendOtp(req, res, next) {
  try {
    const { mobile } = req.body;
    if (!mobile)
      return res.status(400).json({
        success: false,
        message: "شماره موبایل الزامی است.",
      });

    const result = await sendAdminOtp(mobile);
    res.status(200).json({
      success: true,
      message: "کد OTP ارسال شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   ✅ تأیید OTP موبایل
=========================== */
export async function verifyOtp(req, res, next) {
  try {
    const { mobile, otpCode } = req.body;
    if (!mobile || !otpCode)
      return res.status(400).json({
        success: false,
        message: "موبایل و کد OTP الزامی است.",
      });

    const result = await verifyAdminOtp(req.body);
    res.status(200).json({
      success: true,
      message: "شماره موبایل با موفقیت تأیید شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   🔓 ورود با موبایل و OTP
=========================== */
export async function login(req, res, next) {
  try {
    const { mobile, otpCode } = req.body;
    if (!mobile || !otpCode)
      return res.status(400).json({
        success: false,
        message: "شماره موبایل و کد OTP الزامی است.",
      });

    const result = await adminLogin(req.body);
    res.status(200).json({
      success: true,
      message: "ورود با موفقیت انجام شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   📋 دریافت لیست همه‌ی ادمین‌ها
=========================== */
export async function getAll(req, res, next) {
  try {
    const result = await getAllAdmins();

    const safeData = result.map(admin => ({
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      mobile: admin.mobile,
      mobileVerified: admin.mobileVerified,
      createdAt: admin.createdAt,
    }));

    res.status(200).json({
      success: true,
      message: "لیست ادمین‌ها دریافت شد.",
      data: safeData,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   ✏️ بروزرسانی ادمین
=========================== */
export async function update(req, res, next) {
  try {
    const { id } = req.params;

    const result = await updateAdmin(id, req.body);
    res.status(200).json({
      success: true,
      message: "ادمین به‌روزرسانی شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
   🗑️ حذف ادمین (فقط سوپرادمین)
=========================== */
export async function remove(req, res, next) {
  try {
    const { id } = req.params;

    const deleted = await deleteAdmin(id);
    res.status(200).json({
      success: true,
      message: "ادمین حذف شد.",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
}
