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
  // 🟢 اصلاحات کلیدی در ایمپورت‌ها برای سازگاری با adminService.js
  getAllUsers as getAllCustomersByAdmin,
  blockUser as blockCustomerByAdmin,
  unblockUser as unblockCustomerByAdmin,
  deleteUser as deleteCustomerByAdmin,
} from "../../application/services/adminService.js";

import { CustomError } from "../../../../../core/errors/customError.js";

/* ===========================
👤 ثبت‌ نام ادمین
=========================== */
export async function register(req, res, next) {
  try {
    const { name, email, password, mobile, role } = req.body;
    if (!name || (!email && !mobile))
      throw new CustomError("ورودی نامعتبر برای ثبت‌نام.", 400);

    const result = await createAdmin({ name, email, password, mobile, role });
    res.status(201).json({
      success: true,
      message: result.message,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
📲 ارسال OTP
=========================== */
export async function sendOtp(req, res, next) {
  try {
    const { mobile } = req.body;
    if (!mobile) throw new CustomError("شماره موبایل الزامی است.", 400);

    const result = await sendAdminOtp(mobile);
    res.status(200).json({
      success: true,
      message: result.message,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
✅ تأیید OTP + ورود
=========================== */
export async function verifyOtp(req, res, next) {
  try {
    const { mobile, otpCode } = req.body;
    if (!mobile || !otpCode)
      throw new CustomError("شماره موبایل و کد OTP الزامی است.", 400);

    const result = await verifyAdminOtp({ mobile, otpCode });
    res.status(200).json({
      success: true,
      message: result.message,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
💻 ورود ادمین
=========================== */
export async function login(req, res, next) {
  try {
    const { email, mobile, password, otpCode } = req.body;
    const result = await adminLogin({ email, mobile, password, otpCode });

    res.status(200).json({
      success: true,
      message: result.message,
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
    const adminId = req.admin?.id || req.body.adminId;
    const { refreshToken } = req.body;

    if (!adminId || !refreshToken)
      throw new CustomError("شناسه ادمین و Refresh Token الزامی است.", 400);

    const result = await adminLogout({ adminId, refreshToken });
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
📋 دریافت نشست‌ های فعال ادمین
=========================== */
export async function sessions(req, res, next) {
  try {
    const adminId = req.admin?.id || req.params.adminId;
    if (!adminId)
      throw new CustomError("شناسه ادمین معتبر نیست.", 400);

    const result = await getAdminSessions(adminId);
    res.status(200).json({
      success: true,
      message: "نشست‌های فعال دریافت شد.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
👥 لیست تمام ادمین‌ها
=========================== */
export async function getAll(req, res, next) {
  try {
    const result = await getAllAdmins();

    const safeList = result?.map((a) => ({
      id: a._id,
      name: a.name,
      email: a.email,
      mobile: a.mobile,
      role: a.role,
      mobileVerified: a.mobileVerified,
      isBlocked: a.isBlocked ?? false,
      createdAt: a.createdAt,
    }));

    res.status(200).json({
      success: true,
      message: "لیست ادمین‌ها با موفقیت دریافت شد.",
      data: safeList,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
✏️ بروز رسانی ادمین
=========================== */
export async function update(req, res, next) {
  try {
    const { id } = req.params;
    if (!id)
      throw new CustomError("شناسه ادمین الزامی است.", 400);

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
    if (!id)
      throw new CustomError("شناسه ادمین الزامی است.", 400);

    const deleted = await deleteAdmin(id);
    res.status(200).json({
      success: true,
      message: "ادمین با موفقیت حذف شد.",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
📋 دریافت لیست فروشندگان
=========================== */
export async function getAllSellers(req, res, next) {
  try {
    const adminId = req.admin?.id;
    const sellers = await getAllSellersByAdmin(adminId);

    const formatted = (sellers || []).map((s) => ({
      id: s._id,
      name: s.name,
      email: s.email,
      mobile: s.mobile,
      storeName: s.storeName,
      isVerified: !!s.isVerified,
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
    const adminId = req.admin?.id;
    const { sellerId } = req.params;

    if (!sellerId)
      throw new CustomError("شناسه فروشنده الزامی است.", 400);
    if (!adminId)
      throw new CustomError("دسترسی ادمین تایید نشده است.", 401);

    const result = await verifySellerByAdmin(sellerId, adminId);
    res.status(200).json({
      success: true,
      message: result.message,
      data: { sellerId: result.sellerId },
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
👥 مدیریت مشتریان
=========================== */
export async function getAllCustomers(req, res, next) {
  try {
    const adminId = req.admin?.id;
    if (!adminId)
      throw new CustomError("دسترسی ادمین تایید نشده است.", 401);

    // ✔ اکنون از getAllUsers (alias getAllCustomersByAdmin) فراخوانی می‌شود
    const result = await getAllCustomersByAdmin(adminId);

    const list = result.customers?.map((c) => ({
      id: c._id,
      name: c.name,
      email: c.email,
      mobile: c.mobile,
      isBlocked: c.isBlocked,
      createdAt: c.createdAt,
    })) || [];

    res.status(200).json({
      success: true,
      message: "لیست مشتریان با موفقیت دریافت شد.",
      data: list,
    });
  } catch (error) {
    next(error);
  }
}

/* =======================================================
🧩 عملیات روی مشتریان (block/unblock/delete)
======================================================= */
export async function blockCustomer(req, res, next) {
  try {
    const adminId = req.admin?.id;
    const { customerId } = req.params;
    if (!customerId || !adminId)
      throw new CustomError("شناسه مشتری یا ادمین نامعتبر است.", 400);

    const result = await blockCustomerByAdmin(customerId, adminId);
    res.status(200).json({
      success: true,
      message: result.message,
      data: { customerId: result.customerId },
    });
  } catch (error) {
    next(error);
  }
}

export async function unblockCustomer(req, res, next) {
  try {
    const adminId = req.admin?.id;
    const { customerId } = req.params;
    if (!customerId || !adminId)
      throw new CustomError("شناسه مشتری یا ادمین نامعتبر است.", 400);

    const result = await unblockCustomerByAdmin(customerId, adminId);
    res.status(200).json({
      success: true,
      message: result.message,
      data: { customerId: result.customerId },
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteCustomer(req, res, next) {
  try {
    const adminId = req.admin?.id;
    const { customerId } = req.params;
    if (!customerId || !adminId)
      throw new CustomError("شناسه مشتری یا ادمین نامعتبر است.", 400);

    const result = await deleteCustomerByAdmin(customerId, adminId);
    res.status(200).json({
      success: true,
      message: result.message,
      data: { customerId: result.customerId },
    });
  } catch (error) {
    next(error);
  }
}

/* ===========================
🧩 حذف نشست خاص
=========================== */
export async function deleteSession(req, res, next) {
  try {
    const { adminId, sessionId } = req.params;

    if (!adminId || !sessionId)
      throw new CustomError("شناسه ادمین و نشست الزامی است.", 400);

    const { logoutSessionByAdmin } = await import("../application/services/adminService.js");
    const result = await logoutSessionByAdmin(adminId, sessionId);

    res.status(200).json({
      success: true,
      message: result.message || "نشست با موفقیت بسته شد.",
      data: { sessionId },
    });
  } catch (error) {
    console.error("❌ خطا در deleteSession:", error);
    next(error);
  }
}
