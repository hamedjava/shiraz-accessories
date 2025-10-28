import { adminUsecases } from "../../domain/usecases/adminUsecases.js";

/**
 * 📦 سرویس ادمین
 * این فایل واسطی بین Controller و UseCase است
 * تمام متدها از اینجا صدا زده می‌شوند.
 */

export async function createAdmin(data) {
  if (!adminUsecases?.registerAdmin) {
    throw new Error("❌ متد registerAdmin در adminUsecases تعریف نشده است.");
  }
  return await adminUsecases.registerAdmin(data);
}

/* ----------------- احراز هویت ----------------- */
export async function adminLogin(credentials) {
  const { email, mobile, password, otpCode } = credentials || {};

  if (email && password && !otpCode && adminUsecases?.loginAdminWithEmail)
    return await adminUsecases.loginAdminWithEmail(credentials);

  if (mobile && password && !otpCode && adminUsecases?.loginAdminWithMobile)
    return await adminUsecases.loginAdminWithMobile(credentials);

  // ورود با OTP (توکن دار)
  if (mobile && otpCode && !password && adminUsecases?.verifyOtp)
    return await adminUsecases.verifyOtp(credentials);

  throw new Error("❌ درخواست ورود نامعتبر یا متد مربوطه تعریف نشده است.");
}

export async function adminLogout(data) {
  if (!adminUsecases?.logoutAdmin)
    throw new Error("❌ متد logoutAdmin در adminUsecases تعریف نشده است.");

  return await adminUsecases.logoutAdmin(data);
}

export async function getAdminSessions(adminId) {
  if (!adminUsecases?.getActiveSessions)
    throw new Error("❌ متد getActiveSessions در adminUsecases تعریف نشده است.");

  return await adminUsecases.getActiveSessions(adminId);
}

/* ----------------- ارسال و تایید OTP ----------------- */
export async function sendAdminOtp(mobile) {
  if (!adminUsecases?.sendOtp)
    throw new Error("❌ متد sendOtp در adminUsecases تعریف نشده است.");
  return await adminUsecases.sendOtp(mobile);
}

export async function verifyAdminOtp(data) {
  if (!adminUsecases?.verifyOtp)
    throw new Error("❌ متد verifyOtp در adminUsecases تعریف نشده است.");
  return await adminUsecases.verifyOtp(data);
}

/* ----------------- مدیریت ادمین‌ها ----------------- */
export async function getAllAdmins() {
  if (!adminUsecases?.getAllAdmins)
    throw new Error("❌ متد getAllAdmins در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllAdmins();
}

export async function updateAdmin(id, data) {
  if (!adminUsecases?.updateAdmin)
    throw new Error("❌ متد updateAdmin در adminUsecases تعریف نشده است.");
  return await adminUsecases.updateAdmin(id, data);
}

export async function deleteAdmin(id) {
  if (!adminUsecases?.deleteAdmin)
    throw new Error("❌ متد deleteAdmin در adminUsecases تعریف نشده است.");
  return await adminUsecases.deleteAdmin(id);
}

/* ----------------- مدیریت فروشندگان ----------------- */
export async function getAllSellersByAdmin(adminId) {
  // اینجا متد find/findAll/getAll از sellerRepository با alias اصلاح شده
  if (!adminUsecases?.getAllSellers)
    throw new Error("❌ متد getAllSellers در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllSellers(adminId);
}

export async function verifySellerByAdmin(sellerId, adminId) {
  if (!adminUsecases?.verifySeller)
    throw new Error("❌ متد verifySeller در adminUsecases تعریف نشده است.");
  return await adminUsecases.verifySeller(sellerId, adminId);
}

/* ----------------- مدیریت مشتریان ----------------- */
export async function getAllCustomersByAdmin(adminId) {
  if (!adminUsecases?.getAllCustomers)
    throw new Error("❌ متد getAllCustomers در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllCustomers(adminId);
}

export async function blockCustomerByAdmin(customerId, adminId) {
  if (!adminUsecases?.blockCustomer)
    throw new Error("❌ متد blockCustomer در adminUsecases تعریف نشده است.");
  return await adminUsecases.blockCustomer(customerId, adminId);
}

export async function unblockCustomerByAdmin(customerId, adminId) {
  if (!adminUsecases?.unblockCustomer)
    throw new Error("❌ متد unblockCustomer در adminUsecases تعریف نشده است.");
  return await adminUsecases.unblockCustomer(customerId, adminId);
}

export async function deleteCustomerByAdmin(customerId, adminId) {
  if (!adminUsecases?.deleteCustomer)
    throw new Error("❌ متد deleteCustomer در adminUsecases تعریف نشده است.");
  return await adminUsecases.deleteCustomer(customerId, adminId);
}

/* ----------------- گزارش‌گیری عمومی (در آینده) -----------------
 * در این بخش می‌توان متدهای آتی مثل:
 * getDashboardStats, getSystemLogs, getSupportTickets اضافه کرد.
 * ولی هیچ کدی حذف نشده، فقط ساختار آماده توسعه نگه داشته شده است.
 --------------------------------------------------------------- */
/* ----------------- حذف نشست خاص ----------------- */
export async function logoutSessionByAdmin(adminId, sessionId) {
  if (!adminUsecases?.logoutSession)
    throw new Error("❌ متد logoutSession در adminUsecases تعریف نشده است.");
  return await adminUsecases.logoutSession(adminId, sessionId);
}
