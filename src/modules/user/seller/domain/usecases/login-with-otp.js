/**
 * مسیر: seller/domain/usecases/login-with-otp.js
 * وظیفه: ورود فروشنده با موبایل و کد OTP
 */

import { OTPService } from "../../../../user/seller/infrastructure/Security/otp-service.js";
import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";

export class LoginWithOTPUseCase {
  constructor(repository) {
    this.repository = repository;
    this.otpService = new OTPService();
    this.tokenManager = new TokenManager();
  }

  /** 📲 مرحله اول: ارسال کد OTP */
  async sendCode(mobile) {
    if (!mobile) throw new Error("شماره موبایل الزامی است.");

    const seller = await this.repository.findByMobile(mobile);
    if (!seller) throw new Error("فروشنده‌ای با این شماره یافت نشد.");

    if (seller.role !== "seller" || !seller.isVerified)
      throw new Error("فروشنده هنوز توسط ادمین تأیید نشده است.");

    // ✅ تولید و ارسال OTP
    const code = this.otpService.generateOTP(mobile);

    return {
      success: true,
      message: "کد OTP ارسال شد.",
      data: {
        mobile,
        otpSent: true,
        ...(process.env.NODE_ENV === "development" && { code }),
      },
    };
  }

  /** ✅ مرحله دوم: تأیید کد OTP و صدور توکن‌ها */
  async verifyCode({ mobile, otpCode }) {
    if (!mobile || !otpCode)
      throw new Error("شماره موبایل و کد OTP باید ارسال شوند.");

    const isValid = this.otpService.verifyOTP(mobile, otpCode);
    if (!isValid) throw new Error("کد OTP اشتباه یا منقضی شده است.");

    const seller = await this.repository.findByMobile(mobile);
    if (!seller) throw new Error("فروشنده یافت نشد.");

    if (seller.role !== "seller" || !seller.isVerified)
      throw new Error("فروشنده هنوز توسط ادمین تأیید نشده است.");

    const payload = {
      id: seller.id,
      role: seller.role,
      mobile: seller.mobile,
    };
    const tokens = this.tokenManager.generateTokens(payload);

    await this.repository.addRefreshToken(seller.id, tokens.refreshToken);

    // ✅ خروجی استاندارد
    return {
      success: true,
      message: "ورود OTP با موفقیت انجام شد.",
      data: {
        seller: {
          id: seller.id,
          name: seller.name,
          mobile: seller.mobile,
          storeName: seller.storeName,
          role: seller.role,
        },
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    };
  }
}
