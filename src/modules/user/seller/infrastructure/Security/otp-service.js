/**
 * وظیفه: تولید و اعتبارسنجی کد OTP برای ورود یا ثبت‌نام با موبایل.
 */

export class OTPService {
    constructor() {
      this.activeOtps = new Map(); // حافظه موقت یا Redis در نسخه نهایی
    }
  
    generateOTP(mobile) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      this.activeOtps.set(mobile, otp);
      return otp;
    }
  
    verifyOTP(mobile, code) {
      const existing = this.activeOtps.get(mobile);
      const valid = existing && existing === code;
      if (valid) this.activeOtps.delete(mobile);
      return valid;
    }
  }
  