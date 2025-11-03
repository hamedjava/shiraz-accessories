// ================================================================
// 📁 src/modules/user/admin/application/services/adminService.js
// ================================================================
import { adminUsecases } from "../../domain/usecases/adminUsecases.js";

/**
 * --------------------------------------------------------------
 * 🧩 لایه‌ی سرویس (Service Layer)
 * مسئول ارتباط بین Controller و UseCase است.
 * هیچ منطق دامنه‌ای (Business Logic) اینجا نباید باشد.
 * --------------------------------------------------------------
 */

/* ================================================================
   👤 مدیریت ادمین‌ها (ثبت‌نام / ورود / خروج / نشست‌ها)
================================================================ */
export async function createAdmin(data) {
  if (!adminUsecases?.registerAdmin)
    throw new Error("❌ متد registerAdmin در adminUsecases تعریف نشده است.");
  return await adminUsecases.registerAdmin(data);
}

export async function adminLogin(credentials) {
  const { email, mobile, password, otpCode } = credentials || {};

  if (email && password && adminUsecases?.loginAdminWithEmail)
    return await adminUsecases.loginAdminWithEmail(credentials);

  if (mobile && password && adminUsecases?.loginAdminWithMobile)
    return await adminUsecases.loginAdminWithMobile(credentials);

  if (mobile && otpCode && adminUsecases?.verifyOtp)
    return await adminUsecases.verifyOtp(credentials);

  throw new Error("❌ نوع ورود نامعتبر یا متد مربوطه تعریف نشده است.");
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

export async function logoutSessionByAdmin(adminId, sessionId) {
  if (!adminUsecases?.logoutSession)
    throw new Error("❌ متد logoutSession در adminUsecases تعریف نشده است.");
  return await adminUsecases.logoutSession(adminId, sessionId);
}

/* ================================================================
   📲 OTP
================================================================ */
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

/* ================================================================
   👔 مدیریت اطلاعات ادمین‌ها
================================================================ */
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

/* ================================================================
   🛍️ مدیریت فروشندگان
================================================================ */
export async function getAllSellersByAdmin(adminId) {
  if (!adminUsecases?.getAllSellers)
    throw new Error("❌ متد getAllSellers در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllSellers(adminId);
}

export async function verifySellerByAdmin(sellerId, adminId) {
  if (!adminUsecases?.verifySeller)
    throw new Error("❌ متد verifySeller در adminUsecases تعریف نشده است.");
  return await adminUsecases.verifySeller(sellerId, adminId);
}

/* ================================================================
   👥 مدیریت کاربران / مشتریان
================================================================ */

/**
 * 📋 دریافت همه‌ی کاربران
 */
export async function getAllUsers(adminId) {
  if (!adminUsecases?.getAllCustomers)
    throw new Error("❌ متد getAllCustomers در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllCustomers(adminId);
}

/**
 * 🔄 تغییر وضعیت کاربر (block / unblock / delete)
 */
export async function changeUserStatus(userId, action, adminId) {
  if (!adminUsecases?.changeUserStatus)
    throw new Error("❌ متد changeUserStatus در adminUsecases تعریف نشده است.");
  return await adminUsecases.changeUserStatus(userId, action, adminId);
}

/**
 * 🔒 بلاک کردن کاربر توسط ادمین
 */
export async function blockUser(userId, adminId) {
  return await changeUserStatus(userId, "block", adminId);
}

/**
 * 🔓 آنبلاک کردن کاربر توسط ادمین
 */
export async function unblockUser(userId, adminId) {
  return await changeUserStatus(userId, "unblock", adminId);
}

/**
 * 🗑️ حذف کامل کاربر توسط ادمین
 */
export async function deleteUser(userId, adminId) {
  return await changeUserStatus(userId, "delete", adminId);
}

/* ================================================================
   🛍️ محصولات
================================================================ */
export async function getAllProducts() {
  if (!adminUsecases?.getAllProducts)
    throw new Error("❌ متد getAllProducts در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllProducts();
}

export async function updateProduct(productId, data) {
  if (!adminUsecases?.updateProduct)
    throw new Error("❌ متد updateProduct در adminUsecases تعریف نشده است.");
  return await adminUsecases.updateProduct(productId, data);
}

export async function deleteProduct(productId) {
  if (!adminUsecases?.deleteProduct)
    throw new Error("❌ متد deleteProduct در adminUsecases تعریف نشده است.");
  return await adminUsecases.deleteProduct(productId);
}

/* ================================================================
   📦 سفارش‌ها
================================================================ */
export async function getAllOrders() {
  if (!adminUsecases?.getAllOrders)
    throw new Error("❌ متد getAllOrders در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllOrders();
}

export async function changeOrderStatus(orderId, status) {
  if (!adminUsecases?.changeOrderStatus)
    throw new Error("❌ متد changeOrderStatus در adminUsecases تعریف نشده است.");
  return await adminUsecases.changeOrderStatus(orderId, status);
}

/* ================================================================
   🏷️ دسته‌بندی‌ها
================================================================ */
export async function getAllCategories() {
  if (!adminUsecases?.getAllCategories)
    throw new Error("❌ متد getAllCategories در adminUsecases تعریف نشده است.");
  return await adminUsecases.getAllCategories();
}

export async function createCategory(data) {
  if (!adminUsecases?.createCategory)
    throw new Error("❌ متد createCategory در adminUsecases تعریف نشده است.");
  return await adminUsecases.createCategory(data);
}

export async function updateCategory(categoryId, data) {
  if (!adminUsecases?.updateCategory)
    throw new Error("❌ متد updateCategory در adminUsecases تعریف نشده است.");
  return await adminUsecases.updateCategory(categoryId, data);
}

export async function removeCategory(categoryId) {
  if (!adminUsecases?.removeCategory)
    throw new Error("❌ متد removeCategory در adminUsecases تعریف نشده است.");
  return await adminUsecases.removeCategory(categoryId);
}

/* ================================================================
   📊 داشبورد / گزارشات
================================================================ */
export async function getDashboardStats() {
  if (!adminUsecases?.getDashboardStats)
    throw new Error("❌ متد getDashboardStats در adminUsecases تعریف نشده است.");
  return await adminUsecases.getDashboardStats();
}

export async function getSystemLogs(filter = {}) {
  if (!adminUsecases?.getSystemLogs)
    throw new Error("❌ متد getSystemLogs در adminUsecases تعریف نشده است.");
  return await adminUsecases.getSystemLogs(filter);
}

export async function getSupportTickets(filter = {}) {
  if (!adminUsecases?.getSupportTickets)
    throw new Error("❌ متد getSupportTickets در adminUsecases تعریف نشده است.");
  return await adminUsecases.getSupportTickets(filter);
}
