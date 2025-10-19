import { adminUsecases } from "../../domain/usecases/adminUsecases.js";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";

/**
 * 🎯 سرویس اپلیکیشن برای ادمین‌ها
 */
export async function createAdmin(data) {
  return await adminUsecases.registerAdmin(data);
}

export async function adminLogin(credentials) {
  return await adminUsecases.loginAdmin(credentials);
}

export async function sendAdminOtp(mobile) {
  return await adminUsecases.sendOtp(mobile);
}

export async function verifyAdminOtp(data) {
  return await adminUsecases.verifyOtp(data);
}

export async function getAllAdmins() {
  return await adminRepository.findAll();
}

export async function updateAdmin(id, data) {
  return await adminRepository.update(id, data);
}

export async function deleteAdmin(id) {
  return await adminRepository.remove(id);
}
