import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";
import { CustomError } from "../../../../../core/errors/customError.js";

/**
 * ✅ Usecase: مدیریت عملیات منطقی ادمین‌ها
 * شامل: ثبت‌نام، OTP، تأیید، ورود
 */
export const adminUsecases = {
  /**
   * 👤 ثبت‌نام ادمین
   * دو حالت ممکن:
   *  1️⃣ ایمیل + پسورد  → (الزامی بودن موبایل) → نقش manager
   *  2️⃣ فقط موبایل (OTP Verified) → نقش support
   */
  async registerAdmin({ name, email, password, mobile, role }) {
    // بررسی پایه‌ای
    if (!email && !mobile) {
      throw new CustomError("ایمیل یا موبایل الزامی است.", 400);
    }

    /** --------------------------
     * حالت ایمیلی (Email + Password)
     --------------------------- */
    if (email && password) {
      if (!mobile) {
        throw new CustomError("شماره موبایل برای ثبت‌نام ایمیلی الزامی است.", 400);
      }

      const existingEmail = await adminRepository.findByEmail(email);
      if (existingEmail) {
        throw new CustomError("ایمیل قبلاً ثبت شده است.", 409);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const admin = await adminRepository.create({
        name,
        email,
        password: hashedPassword,
        mobile,
        role: role || "manager",
        mobileVerified: false,
      });

      return {
        success: true,
        message: "ثبت‌نام ایمیلی با موفقیت انجام شد.",
        adminId: admin._id,
        role: admin.role,
      };
    }

    /** --------------------------
     * حالت موبایلی (Mobile only)
     --------------------------- */
    if (mobile && !email && !password) {
      const existingMobile = await adminRepository.findByMobile(mobile);
      if (existingMobile) {
        throw new CustomError("شماره موبایل قبلاً ثبت شده است.", 409);
      }

      const admin = await adminRepository.create({
        name,
        mobile,
        mobileVerified: true,
        role: role || "support",
      });

      return {
        success: true,
        message: "ثبت‌نام موبایلی با موفقیت انجام شد.",
        adminId: admin._id,
        role: admin.role,
      };
    }

    throw new CustomError("درخواست ثبت‌نام نامعتبر است.", 400);
  },

  /**
   * 📲 ارسال OTP به موبایل
   * اگر ادمین وجود نداشته باشد، رکورد اولیه (غیرفعال) ساخته می‌شود.
   * کنترل ضد اسپم و محدودیت درخواست‌ها انجام می‌شود.
   */
  async sendOtp(mobile) {
    if (!mobile) {
      throw new CustomError("شماره موبایل الزامی است.", 400);
    }

    let admin = await adminRepository.findByMobile(mobile);

    // ساخت رکورد اولیه در صورت عدم وجود
    if (!admin) {
      admin = await adminRepository.create({
        mobile,
        mobileVerified: false,
        role: "support",
        otpRequestCount: 0,
        otpLastRequestAt: null,
      });
    }

    const now = Date.now();
    const lastRequestAt = admin.otpLastRequestAt
      ? new Date(admin.otpLastRequestAt).getTime()
      : 0;

    const diff = now - lastRequestAt;

    // محدودیت: حداقل فاصلهٔ یک دقیقه بین دو درخواست
    if (diff < 60 * 1000) {
      throw new CustomError("لطفاً یک دقیقه بعد دوباره تلاش کنید.", 429);
    }

    // محدودیت: حداکثر ۵ بار در ساعت
    if (admin.otpRequestCount >= 5 && diff < 3600 * 1000) {
      throw new CustomError("تعداد درخواست‌های OTP بیش از حد مجاز است.", 429);
    }

    // تولید OTP ۶ رقمی
    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    const expireAt = new Date(now + 2 * 60 * 1000); // انقضای دو دقیقه‌ای

    await adminRepository.updateOtp(mobile, otpCode, expireAt);

    return {
      success: true,
      message: "کد OTP ارسال شد.",
      otpCode, // در حالت production نباید در پاسخ برگردد، این فقط برای تست است
      expireAt,
    };
  },

  /**
   * ✅ تأیید کد OTP برای موبایل
   * بررسی انقضا، صحت کد، و فعال‌سازی موبایل‌وریفای
   */
  async verifyOtp({ mobile, otpCode }) {
    if (!mobile || !otpCode) {
      throw new CustomError("شماره موبایل و کد OTP الزامی است.", 400);
    }

    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) {
      throw new CustomError("ادمین یافت نشد.", 404);
    }

    if (!admin.otpCode || !admin.otpExpireAt) {
      throw new CustomError("کد OTP معتبر نیست.", 400);
    }

    if (Date.now() > new Date(admin.otpExpireAt).getTime()) {
      throw new CustomError("کد OTP منقضی شده است.", 401);
    }

    if (String(admin.otpCode) !== String(otpCode)) {
      throw new CustomError("کد OTP اشتباه است.", 401);
    }

    // ✅ تأیید موفق OTP
    const updated = await adminRepository.update(admin._id, {
      mobileVerified: true,
      otpCode: null,
      otpExpireAt: null,
      otpRequestCount: 0,
      otpLastRequestAt: null,
    });

    return {
      success: true,
      message: "شماره موبایل با موفقیت تأیید شد.",
      adminId: updated._id,
    };
  },

  /**
   * 🔐 ورود با موبایل (OTP)
   * بررسی نقش و وضعیت تأیید موبایل بعد از OTP
   */
  async loginAdmin({ mobile, otpCode }) {
    if (!mobile || !otpCode) {
      throw new CustomError("شماره موبایل و کد OTP الزامی است.", 400);
    }

    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) {
      throw new CustomError("ادمین یافت نشد.", 404);
    }

    if (!admin.mobileVerified) {
      throw new CustomError("شماره موبایل هنوز تأیید نشده است.", 403);
    }

    if (
      !admin.otpCode ||
      String(admin.otpCode) !== String(otpCode)
    ) {
      throw new CustomError("کد OTP نادرست است.", 401);
    }

    // تولید JWT با اطلاعات پایه‌ای و نقش
    const token = jwt.sign(
      {
        id: admin._id,
        mobile: admin.mobile,
        role: admin.role,
      },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1h" }
    );

    // پاکسازی OTP پس از ورود موفق
    await adminRepository.updateOtp(mobile, null, null);

    return {
      success: true,
      message: "ورود با موفقیت انجام شد.",
      token,
      adminId: admin._id,
      role: admin.role,
    };
  },
};
