/**
 * سرویس OTP (Singleton + TTL)
 * نسخه با لاگ‌های فارسی برای دیباگ کامل روند تولید و تأیید OTP
 */

class OTPService {
  constructor() {
    if (OTPService._instance) {
      console.log("♻️ [OTPService] استفاده مجدد از همان نمونه Singleton قبلی");
      return OTPService._instance;
    }

    console.log("🚀 [OTPService] نمونه جدید از OTPService ساخته شد (اولین بار)");
    this.activeOtps = new Map();
    this.expireMs = 2 * 60 * 1000; // دو دقیقه
    OTPService._instance = this;
  }

  /**
   * تولید و ذخیره‌ی کد OTP در حافظه
   */
  generateOTP(mobile) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + this.expireMs;
    this.activeOtps.set(mobile, { otp, expiresAt });

    console.log("✅ [OTPService] کد OTP جدید تولید شد:");
    console.log("📱 شماره موبایل:", mobile);
    console.log("🔢 کد تولیدشده:", otp);
    console.log("⏰ زمان انقضا:", new Date(expiresAt).toLocaleString());
    console.log("🧭 تعداد OTPهای ذخیره شده در Map:", this.activeOtps.size);

    return otp;
  }

  /**
   * بررسی کد OTP ارسال‌شده توسط کاربر
   */
  verifyOTP(mobile, receivedCode) {
    console.log("\n🔍 [OTPService] در حال بررسی صحت OTP برای شماره:", mobile);
    console.log("📩 کد دریافت‌شده از کاربر:", receivedCode);

    // نمایش وضعیت فعلی Map برای بررسی Singleton
    console.log("📦 محتوای فعلی Map (شماره‌هایی که هنوز OTP معتبر دارند):");
    console.log(this.activeOtps);

    const record = this.activeOtps.get(mobile);

    if (!record) {
      console.log("❌ هیچ OTP فعالی برای این شماره یافت نشد (ممکن است Singleton از بین رفته باشد یا شماره موبایل متفاوت ارسال شده باشد)");
      return false;
    }

    const { otp, expiresAt } = record;
    const now = Date.now();

    console.log("🔢 OTP مورد انتظار:", otp);
    console.log("🕒 زمان انقضا:", new Date(expiresAt).toLocaleString());
    console.log("🕓 زمان فعلی:", new Date(now).toLocaleString());

    // اگر منقضی یا اشتباه وارد شده باشد:
    if (now > expiresAt) {
      console.log("⚠️ کد OTP منقضی شده است. از Map حذف می‌شود.");
      this.activeOtps.delete(mobile);
      return false;
    }

    if (otp !== receivedCode) {
      console.log("⚠️ کد OTP اشتباه است. از Map حذف می‌شود.");
      this.activeOtps.delete(mobile);
      return false;
    }

    // اگر درست باشد:
    console.log("✅ کد OTP با موفقیت تأیید شد.");
    this.activeOtps.delete(mobile);
    console.log("🧹 OTP مربوط به شماره پاک شد. تعداد OTPهای باقی‌مانده:", this.activeOtps.size);

    return true;
  }
}

// صادر کردن نمونه Singleton
export const otpServiceInstance = new OTPService();
