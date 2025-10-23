import {
  createAdmin,
  adminLogin,
  adminLogout,
  getAdminSessions,
  sendAdminOtp,
  verifyAdminOtp,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getAllSellersByAdmin,
  verifySellerByAdmin,
} from "../../application/services/adminService.js";
import { CustomError } from "../../../../../core/errors/customError.js";

/**
 * 🎯 Controller Layer برای ادمین‌ها
 * وظیفه: مدیریت درخواست HTTP، ارتباط با Service Layer و ارسال Response ساختاریافته
 */

/* ===========================
🧾 ثبت‌نام ادمین
=========================== */
export async function register(req, res, next) {
  try {
    const { name, email, password, mobile, role } = req.body;
    const result = await createAdmin({ name, email, password, mobile, role });

    res.status(201).json({
      success: true,
      message: "ثبت‌نام با موفقیت انجام شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
🔐 ارسال OTP
=========================== */
export async function sendOtp(req, res, next) {
  try {
    const { mobile } = req.body;
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
🔐 تأیید OTP
=========================== */
export async function verifyOtp(req, res, next) {
  try {
    const result = await verifyAdminOtp(req.body);
    res.status(200).json({
      success: true,
      message: "شماره موبایل تأیید شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
💻 ورود ادمین (Email/Mobile+Password یا Mobile+OTP)
=========================== */
export async function login(req, res, next) {
  try {
    const { email, mobile, password, otpCode } = req.body;
    let result;

    if (email && password && !otpCode) {
      // ورود با ایمیل و پسورد
      result = await adminLogin({ email, password });
    } else if (mobile && password && !otpCode) {
      // ورود با موبایل و پسورد
      result = await adminLogin({ mobile, password });
    } else if (mobile && otpCode && !password) {
      // ورود با OTP
      result = await adminLogin({ mobile, otpCode });
    } else {
      throw new CustomError(
        "درخواست ورود نامعتبر است. لطفاً مقادیر ورودی را بررسی کنید.",
        400
      );
    }

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
🚪 خروج از سیستم
=========================== */
export async function logout(req, res, next) {
  try {
    const { adminId, refreshToken } = req.body;
    const result = await adminLogout({ adminId, refreshToken });
    res.status(200).json({
      success: true,
      message: result.message || "خروج از سیستم با موفقیت انجام شد.",
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
📋 دریافت نشست‌های فعال
=========================== */
export async function sessions(req, res, next) {
  try {
    const { adminId } = req.params;
    const sessionsList = await getAdminSessions(adminId);
    res.status(200).json({
      success: true,
      message: "نشست‌های فعال دریافت شد.",
      data: sessionsList,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
👥 دریافت تمام ادمین‌ها
=========================== */
export async function getAll(req, res, next) {
  try {
    const result = await getAllAdmins();
    const safeData = result.map((a) => ({
      id: a._id,
      name: a.name,
      email: a.email,
      mobile: a.mobile,
      role: a.role,
      mobileVerified: a.mobileVerified,
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
✏️ بروزرسانی اطلاعات
=========================== */
export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const updated = await updateAdmin(id, req.body);
    res.status(200).json({
      success: true,
      message: "اطلاعات ادمین بروزرسانی شد.",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
🗑️ حذف ادمین
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

/* ===========================
📋 لیست فروشندگان
=========================== */
export async function getAllSellers(req, res, next) {
  try {
    const sellers = await getAllSellersByAdmin();
    const formatted = sellers.map((s) => ({
      id: s._id,
      name: s.name,
      email: s.email,
      mobile: s.mobile,
      storeName: s.storeName,
      isVerified: s.isVerified,
      role: s.role,
    }));
    res.status(200).json({
      success: true,
      message: "لیست فروشندگان با موفقیت دریافت شد.",
      data: formatted,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
✅ تأیید فروشنده
=========================== */
export async function verifySeller(req, res, next) {
  try {
    const { sellerId } = req.params;
    const result = await verifySellerByAdmin(sellerId);
    res.status(200).json({
      success: true,
      message: result.message,
      data: result.updatedSeller,
    });
  } catch (error) {
    next(error);
  }
}
