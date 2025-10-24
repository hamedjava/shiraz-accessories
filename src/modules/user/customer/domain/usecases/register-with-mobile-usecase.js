// register-with-mobile-usecase.js
export async function registerWithMobile({ customerRepo, otp, mobile, name }) {
    let customer = await customerRepo.findByMobile(mobile);
    if (customer) throw new Error("شماره قبلاً ثبت شده!");
    const otpCode = otp.generateOTP(mobile);
    // (ثبت OTP در دیتابیس یا ارسال پیامک و ...)
    return { success: true, otp: otpCode };
  }
  