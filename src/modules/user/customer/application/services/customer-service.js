// application/services/customer-service.js

import bcrypt from "bcrypt";
import { CustomerRepository } from "../../infrastructure/repositories/customer-repository.js";
import { CustomerUseCases } from "../../domain/usecases/customer-usecases.js";
import { TokenManager } from "../../infrastructure/security/token-manager.js";
import OTPService from "../../infrastructure/security/otp-service.js";

export class CustomerService {
  constructor() {
    this.repo = new CustomerRepository();
    this.usecase = new CustomerUseCases(this.repo);
    this.tokenManager = new TokenManager();
    this.otpService = new OTPService();
  }

  /* ---------------- Registration ---------------- */
  async registerEmailPassword(name, email, password) {
    const hashed = await bcrypt.hash(password, 10);
    return this.usecase.register({ name, email, password: hashed, isVerified: true });
  }

  async registerMobilePassword(name, mobile, password) {
    const hashed = await bcrypt.hash(password, 10);
    return this.usecase.register({ name, mobile, password: hashed, isVerified: true });
  }

  /* ---------------- OTP Flow ---------------- */
  async requestOtp(mobile) {
    return this.otpService.generate(mobile);
  }

  async loginMobileOtp(mobile, otp) {
    const verified = this.otpService.verify(mobile, otp);
    if (!verified) throw new Error("کد OTP نامعتبر است");

    let user = await this.repo.findByMobile(mobile);
    if (!user) user = await this.repo.create({ mobile, isVerified: true });

    // بررسی اینکه مشتری بلاک شده نباشد
    if (user.isBlocked) throw new Error("دسترسی به حساب شما مسدود شده است");

    const { accessToken, refreshToken } = this.tokenManager.generateTokens({
      id: user.id,
      roles: user.roles
    });

    user.addRefreshToken(refreshToken);
    await this.repo.save(user);

    return { user, accessToken, refreshToken };
  }

  /* ---------------- Refresh Session ---------------- */
  async refreshSession(refreshToken) {
    if (!refreshToken) throw new Error("رفرش‌توکن ارسال نشده است");

    const payload = this.tokenManager.verifyRefreshToken(refreshToken);
    if (!payload || !payload.id) throw new Error("توکن نامعتبر است");

    const user = await this.repo.findById(payload.id);
    if (!user) throw new Error("کاربر یافت نشد");
    if (user.isBlocked) throw new Error("دسترسی حساب شما مسدود شده است");

    const hasToken = Array.isArray(user.refreshTokens) && user.refreshTokens.some(rt => {
      if (typeof rt === "string") return rt === refreshToken;
      if (typeof rt === "object" && rt.token) return rt.token === refreshToken;
      return false;
    });
    if (!hasToken) throw new Error("رفرش‌توکن در سشن ذخیره نشده است");

    const newTokens = this.tokenManager.generateTokens({ id: user.id, roles: user.roles });
    user.removeRefreshToken(refreshToken);
    user.addRefreshToken(newTokens.refreshToken);
    await this.repo.save(user);

    return newTokens;
  }

  /* ---------------- Logout Flow ---------------- */
  async logoutSingle(userId, refreshToken) {
    if (!refreshToken) throw new Error("رفرش‌توکن برای خروج ارسال نشده است");
    const user = await this.repo.findById(userId);
    if (!user) throw new Error("کاربر یافت نشد");

    const hasToken = Array.isArray(user.refreshTokens) && user.refreshTokens.some(rt => {
      if (typeof rt === "string") return rt === refreshToken;
      if (typeof rt === "object" && rt.token) return rt.token === refreshToken;
      return false;
    });
    if (!hasToken) throw new Error("توکن در سشن‌های فعال یافت نشد");

    user.removeRefreshToken(refreshToken);
    await this.repo.save(user);

    return { success: true, message: "خروج موفقیت‌آمیز بود" };
  }

  async logoutAll(userId) {
    const user = await this.repo.findById(userId);
    if (!user) throw new Error("کاربر یافت نشد");
    user.clearAllRefreshTokens();
    await this.repo.save(user);
    return { success: true, message: "تمام سشن‌ها بسته شدند" };
  }
}
