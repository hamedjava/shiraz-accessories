import {
  createAdmin,
  adminLogin,
  sendAdminOtp,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
} from "../../application/services/adminService.js";

/* ===========================
   👤 ثبت‌نام ادمین جدید
=========================== */
export async function register(req, res, next) {
  try {
    const result = await createAdmin(req.body);
    res.status(201).json({
      success: true,
      message: "ثبت‌نام ادمین با موفقیت انجام شد.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

/* ===========================
   🔐 ورود با موبایل و OTP
=========================== */
export async function login(req, res, next) {
  try {
    const { mobile, otpCode } = req.body;
    const result = await adminLogin({ mobile, otpCode });
    res.status(200).json({
      success: true,
      message: "ورود موفقیت‌آمیز.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

/* ===========================
   📲 ارسال کد OTP برای شماره موبایل
=========================== */
export async function sendOtp(req, res, next) {
  try {
    const { mobile } = req.body;
    const result = await sendAdminOtp(mobile);
    res.status(200).json({
      success: true,
      message: "کد OTP با موفقیت ارسال شد.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

/* ===========================
   📋 دریافت لیست همه ادمین‌ها
=========================== */
export async function getAll(req, res, next) {
  try {
    const result = await getAllAdmins();
    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

/* ===========================
   ✏️ بروزرسانی اطلاعات یک ادمین
=========================== */
export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const result = await updateAdmin(id, req.body);

    if (!result)
      return res.status(404).json({
        success: false,
        message: "ادمین یافت نشد.",
      });

    res.status(200).json({
      success: true,
      message: "اطلاعات ادمین بروزرسانی شد.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

/* ===========================
   🗑️ حذف ادمین
=========================== */
export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await deleteAdmin(id);

    if (!deleted)
      return res.status(404).json({
        success: false,
        message: "ادمین یافت نشد.",
      });

    res.status(200).json({
      success: true,
      message: "ادمین با موفقیت حذف شد.",
    });
  } catch (err) {
    next(err);
  }
}
