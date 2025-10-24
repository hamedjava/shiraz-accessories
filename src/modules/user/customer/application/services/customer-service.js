// application/services/customer-service.js
import bcrypt from "bcrypt";
import { CustomerRepository } from "../../infrastructure/repositories/customer-repository.js";
import OTPService from "../../../seller/infrastructure/Security/otp-service.js"; // ← اصلاح شده
import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";
import { Customer } from "../../../customer/domain/entities/customer-entity.js";

const tokenManager = new TokenManager();

export class CustomerService {
  constructor() {
    this.customerRepo = new CustomerRepository();
    this.otp = new OTPService(); // ← مطابق import جدید
    this.tokenManager = tokenManager;
  }

  // ثبت‌نام با موبایل
  async registerWithMobile(mobile, name) {
    const existing = await this.customerRepo.findByMobile(mobile);
    if (existing) throw new Error("شماره موبایل قبلاً ثبت شده است.");
    const otp = this.otp.generateOTP(mobile);
    return { success: true, message: "کد تایید ارسال شد", otp };
  }

  // ثبت‌نام با ایمیل و پسورد
  async registerWithEmail(email, password, name) {
    const existing = await this.customerRepo.findByEmail(email);
    if (existing) throw new Error("ایمیل تکراری است.");
    const hashed = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashed, isVerified: true });
    const saved = await this.customerRepo.save(newCustomer);
    return { success: true, customer: saved };
  }

  // ورود با موبایل و OTP
  async loginWithMobileOtp(mobile, otpCode) {
    const verified = this.otp.verifyOTP(mobile, otpCode);
    if (!verified) throw new Error("کد تایید نامعتبر است.");
    let user = await this.customerRepo.findByMobile(mobile);
    if (!user) {
      user = new Customer({ mobile, isVerified: true });
      user = await this.customerRepo.save(user);
    }
    const tokens = this.tokenManager.generateTokens({ id: user.id, roles: user.roles });
    await this.customerRepo.updateRefreshToken(user.id, tokens.refreshToken);
    return { success: true, user, tokens };
  }

  // ورود با ایمیل و پسورد
  async loginWithEmailPassword(email, password) {
    const user = await this.customerRepo.findByEmail(email);
    if (!user) throw new Error("کاربر یافت نشد.");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("رمزعبور اشتباه است.");
    const tokens = this.tokenManager.generateTokens({ id: user.id, roles: user.roles });
    await this.customerRepo.updateRefreshToken(user.id, tokens.refreshToken);
    return { success: true, user, tokens };
  }

  async getProfile(userId) {
    const user = await this.customerRepo.findById(userId);
    if (!user) throw new Error("کاربر یافت نشد.");
    const { password, refreshToken, ...info } = user;
    return { success: true, profile: info };
  }

  async updateProfile(userId, updates) {
    if (updates.password) updates.password = await bcrypt.hash(updates.password, 10);
    const updated = await this.customerRepo.update(userId, updates);
    return { success: true, updated };
  }

  async getAllCustomers() {
    const list = await this.customerRepo.getAll();
    return { success: true, customers: list };
  }

  async getCustomer(id) {
    const customer = await this.customerRepo.findById(id);
    if (!customer) throw new Error("یافت نشد");
    return { success: true, customer };
  }

  async deleteCustomer(id) {
    await this.customerRepo.delete(id);
    return { success: true };
  }

  async logout(userId, refreshToken) {
    const valid = this.tokenManager.verifyRefreshToken(refreshToken);
    if (!valid) throw new Error("توکن نامعتبر است.");
    await this.customerRepo.invalidateSession(userId);
    return { success: true };
  }

  async validateSession(token) {
    const payload = this.tokenManager.verifyAccessToken(token);
    return { success: true, payload };
  }
}

export const customerServiceInstance = new CustomerService();
