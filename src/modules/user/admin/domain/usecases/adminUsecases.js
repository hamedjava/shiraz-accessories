import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";
import { CustomError } from "../../../../../core/errors/customError.js";

export const adminUsecases = {
  /**
   * 🧩 ثبت‌نام ادمین
   * سناریوهای ممکن:
   * 1. email + password
   * 2. mobile + otpCode
   */
  async registerAdmin({ name, email, password, mobile, otpCode }) {
    if (!email && !mobile)
      throw new CustomError("ایمیل یا موبایل الزامی است.", 400);

    // ۱️⃣ ثبت‌نام با ایمیل و پسورد
    if (email && password) {
      const existingAdmin = await adminRepository.findByEmail(email);
      if (existingAdmin) throw new CustomError("ایمیل قبلاً ثبت شده است.", 400);

      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = await adminRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      return { message: "ثبت‌نام با ایمیل انجام شد.", adminId: admin._id };
    }

    // ۲️⃣ ثبت‌نام با موبایل و OTP اولیه
    if (mobile && otpCode) {
      const existingAdmin = await adminRepository.findByMobile(mobile);
      if (existingAdmin) throw new CustomError("شماره موبایل قبلاً ثبت شده است.", 400);

      const admin = await adminRepository.create({ name, mobile, otpCode });
      return { message: "ثبت‌نام با موبایل انجام شد.", adminId: admin._id };
    }

    throw new CustomError("اطلاعات ورودی ثبت‌نام معتبر نیست.", 400);
  },

  /**
   * 🧠 ارسال کد OTP برای ورود
   */
  async sendOtp(mobile) {
    if (!mobile) throw new CustomError("شماره موبایل الزامی است.", 400);
    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);

    // ایجاد OTP تصادفی
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await adminRepository.updateOtp(mobile, otp);

    // ⚠️ در حالت واقعی باید این otp از طریق SMS فرستاده شود
    return { message: "کد OTP ارسال شد.", otp };
  },

  /**
   * 🔐 ورود با موبایل و OTP
   */
  async loginAdmin({ mobile, otpCode }) {
    if (!mobile || !otpCode)
      throw new CustomError("شماره موبایل و کد OTP الزامی است.", 400);

    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);

    if (admin.otpCode !== otpCode)
      throw new CustomError("کد OTP نادرست است.", 401);

    const token = jwt.sign(
      { id: admin._id, mobile: admin.mobile },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    // پس از لاگین موفق، OTP را پاک کن
    await adminRepository.updateOtp(mobile, null);

    return { token, adminId: admin._id, message: "ورود موفقیت‌آمیز" };
  },
};
