// ❌ این خط را حذف کن:
// import { OTPService } from "../../../seller/infrastructure/Security/otp-service.js";

// ✅ فقط import های زیر را نگه دار:
import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";

export class LoginWithOTPUseCase {
  constructor(repository, otpService, tokenManager) {
    this.repository = repository;
    this.otpService = otpService;
    this.tokenManager = tokenManager;
  }

  async sendCode(mobile) {
    if (!mobile) throw new Error("شماره موبایل الزامی است.");
    const seller = await this.repository.findByMobile(mobile);
    if (!seller) throw new Error("فروشنده‌ای با این شماره یافت نشد.");
    if (seller.role !== "seller" || !seller.isVerified)
      throw new Error("فروشنده هنوز توسط مدیر تأیید نشده است.");
    const code = this.otpService.generateOTP(mobile);
    return {
      success: true,
      message: "کد OTP ارسال شد.",
      data: { mobile, otpSent: true, ...(process.env.NODE_ENV === "development" && { code }) },
    };
  }

  async verifyCode({ mobile, otpCode }) {
    if (!mobile || !otpCode)
      throw new Error("شماره موبایل و کد OTP باید ارسال شوند.");

    const isValid = this.otpService.verifyOTP(mobile, otpCode);
    if (!isValid) throw new Error("کد OTP اشتباه یا منقضی شده است.");

    const seller = await this.repository.findByMobile(mobile);
    if (!seller) throw new Error("فروشنده یافت نشد.");

    const payload = { id: seller._id.toString(), role: seller.role, mobile: seller.mobile };
    const tokens = this.tokenManager.generateTokens(payload);
    await this.repository.addSession(seller._id, tokens.refreshToken);

    return {
      success: true,
      message: "ورود OTP با موفقیت انجام شد.",
      data: {
        seller: seller.toJSON(),
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    };
  }
}
