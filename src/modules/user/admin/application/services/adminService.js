import { adminUsecases } from "../../domain/usecases/adminUsecases.js";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";
import { sellerRepository } from "../../../../user/seller/infrastructure/repositories/seller-repository.js";

/**
 * 🎯 سرویس لایه میانجی بین کنترلر و UseCase
 */

export async function createAdmin(data) {
  return await adminUsecases.registerAdmin(data);
}

/**
 * ✅ ورود ادمین با حالت‌های مختلف
 */
export async function adminLogin(credentials) {
  const { email, mobile, password, otpCode } = credentials;

  // حالت ورود با ایمیل / رمز
  if (email && password && !otpCode)
    return await adminUsecases.loginAdminWithEmail(credentials);

  // حالت ورود با موبایل / رمز
  if (mobile && password && !otpCode)
    return await adminUsecases.loginAdminWithMobile(credentials);

  // حالت ورود با OTP
  if (mobile && otpCode)
    return await adminUsecases.loginAdmin(credentials);

  throw new Error("درخواست ورود نامعتبر است.");
}

/**
 * خروج از سیستم
 */
export async function adminLogout(data) {
  return await adminUsecases.logoutAdmin(data);
}

/**
 * جلسات فعال
 */
export async function getAdminSessions(adminId) {
  return await adminUsecases.getActiveSessions(adminId);
}

/**
 * ارسال OTP
 */
export async function sendAdminOtp(mobile) {
  return await adminUsecases.sendOtp(mobile);
}

/**
 * تأیید OTP
 */
export async function verifyAdminOtp(data) {
  return await adminUsecases.verifyOtp(data);
}

/**
 * سایر عملیات CRUD
 */
export async function getAllAdmins() {
  return await adminRepository.findAll();
}
export async function updateAdmin(id, data) {
  return await adminRepository.update(id, data);
}
export async function deleteAdmin(id) {
  return await adminRepository.remove(id);
}
export async function verifySellerByAdmin(sellerId) {
  return await adminUsecases.verifySeller(sellerId);
}
export async function getAllSellersByAdmin() {
  return await sellerRepository.findAll();
}
