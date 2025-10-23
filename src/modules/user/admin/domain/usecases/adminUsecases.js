import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";
import { sellerRepository } from "../../../../user/seller/infrastructure/repositories/seller-repository.js";
import { CustomError } from "../../../../../core/errors/customError.js";

/**
 * 🎯 UseCases: منطق دامنهٔ ادمین
 */
export const adminUsecases = {

  /* ======================== 👤 ثبت‌نام ======================== */
  async registerAdmin({ name, email, password, mobile, role }) {
    if (!email && !mobile) throw new CustomError("ایمیل یا موبایل الزامی است.", 400);

    // حالت ثبت‌نام با ایمیل و رمز عبور
    if (email && password) {
      const existingEmail = await adminRepository.findByEmail(email);
      if (existingEmail) throw new CustomError("ایمیل قبلاً ثبت شده است.", 409);

      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = await adminRepository.create({
        name,
        email,
        mobile,
        password: hashedPassword,
        role: role || "manager",
        mobileVerified: false,
      });
      return { success: true, message: "ثبت‌نام ایمیلی موفق", adminId: admin._id, role: admin.role };
    }

    // حالت ثبت‌نام فقط با موبایل
    if (mobile && !email && !password) {
      const existingMobile = await adminRepository.findByMobile(mobile);
      if (existingMobile) throw new CustomError("شماره موبایل قبلاً ثبت شده است.", 409);

      const admin = await adminRepository.create({
        name,
        mobile,
        mobileVerified: true,
        role: role || "support",
      });
      return { success: true, message: "ثبت‌نام موبایلی موفق", adminId: admin._id, role: admin.role };
    }

    throw new CustomError("درخواست ثبت‌نام نامعتبر است.", 400);
  },

  /* ======================== 📲 ارسال OTP ======================== */
  async sendOtp(mobile) {
    if (!mobile) throw new CustomError("شماره موبایل الزامی است.", 400);

    let admin = await adminRepository.findByMobile(mobile);
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
    const lastRequest = admin.otpLastRequestAt ? new Date(admin.otpLastRequestAt).getTime() : 0;
    if (now - lastRequest < 60000) throw new CustomError("لطفاً یک دقیقه بعد تلاش کنید.", 429);

    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    const expireAt = new Date(now + 2 * 60 * 1000);

    await adminRepository.updateOtp(mobile, otpCode, expireAt);
    return { success: true, message: "کد OTP ارسال شد.", otpCode, expireAt };
  },

  /* ======================== ✅ تأیید OTP ======================== */
  async verifyOtp({ mobile, otpCode }) {
    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (!admin.otpCode) throw new CustomError("کد OTP نامعتبر است.", 400);
    if (Date.now() > new Date(admin.otpExpireAt).getTime()) throw new CustomError("کد OTP منقضی شده است.", 401);
    if (String(admin.otpCode) !== String(otpCode)) throw new CustomError("کد OTP اشتباه است.", 401);

    await adminRepository.update(admin._id, {
      mobileVerified: true,
      otpCode: null,
      otpExpireAt: null,
    });
    return { success: true, message: "شماره موبایل تأیید شد.", adminId: admin._id };
  },

  /* ======================== 💻 ورود با موبایل و رمز عبور ======================== */
  async loginAdminWithMobile({ mobile, password }) {
    if (!mobile || !password) throw new CustomError("موبایل و رمز عبور الزامی است.", 400);

    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (!admin.password) throw new CustomError("رمز عبور برای این حساب تعریف نشده است.", 401);
    if (!admin.mobileVerified) throw new CustomError("شماره موبایل تأیید نشده است.", 403);

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new CustomError("رمز عبور اشتباه است.", 401);

    const accessToken = jwt.sign({ id: admin._id, role: admin.role, mobile: admin.mobile },
      process.env.JWT_SECRET || "your_secret_key", { expiresIn: "1h" });

    const refreshToken = jwt.sign({ id: admin._id },
      process.env.JWT_REFRESH_SECRET || "your_refresh_secret", { expiresIn: "7d" });

    const sessionId = randomUUID();
    await adminRepository.addSession(admin._id, refreshToken, sessionId);

    return {
      success: true,
      message: "ورود با موبایل و رمز عبور موفق.",
      accessToken,
      refreshToken,
      sessionId,
      adminId: admin._id,
      role: admin.role,
      mobile: admin.mobile,
    };
  },

  /* ======================== 💻 ورود با ایمیل و رمز عبور ======================== */
  async loginAdminWithEmail({ email, password }) {
    if (!email || !password) throw new CustomError("ایمیل و رمز عبور الزامی است.", 400);

    const admin = await adminRepository.findByEmail(email);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (!admin.password) throw new CustomError("رمز عبور برای این حساب تعریف نشده است.", 401);

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new CustomError("رمز عبور اشتباه است.", 401);

    const accessToken = jwt.sign({ id: admin._id, role: admin.role, email: admin.email },
      process.env.JWT_SECRET || "your_secret_key", { expiresIn: "1h" });

    const refreshToken = jwt.sign({ id: admin._id },
      process.env.JWT_REFRESH_SECRET || "your_refresh_secret", { expiresIn: "7d" });

    const sessionId = randomUUID();
    await adminRepository.addSession(admin._id, refreshToken, sessionId);

    return {
      success: true,
      message: "ورود با ایمیل و رمز عبور موفق.",
      accessToken,
      refreshToken,
      sessionId,
      adminId: admin._id,
      role: admin.role,
      email: admin.email,
    };
  },

  /* ======================== 📲 ورود با OTP ======================== */
  async loginAdmin({ mobile, otpCode }) {
    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (!admin.mobileVerified) throw new CustomError("شماره موبایل تأیید نشده است.", 403);
    if (String(admin.otpCode) !== String(otpCode)) throw new CustomError("کد OTP نادرست است.", 401);

    const accessToken = jwt.sign({ id: admin._id, role: admin.role, mobile: admin.mobile },
      process.env.JWT_SECRET || "your_secret_key", { expiresIn: "1h" });

    const refreshToken = jwt.sign({ id: admin._id },
      process.env.JWT_REFRESH_SECRET || "your_refresh_secret", { expiresIn: "7d" });

    const sessionId = randomUUID();
    await adminRepository.addSession(admin._id, refreshToken, sessionId);
    await adminRepository.update(admin._id, { otpCode: null });

    return {
      success: true,
      message: "ورود با OTP موفق.",
      accessToken,
      refreshToken,
      sessionId,
      adminId: admin._id,
      role: admin.role,
    };
  },

  /* ======================== 🚪 خروج ======================== */
  async logoutAdmin({ adminId, refreshToken }) {
    if (!adminId || !refreshToken) throw new CustomError("شناسه ادمین و توکن الزامی است.", 400);
    await adminRepository.removeSession(adminId, refreshToken);
    return { success: true, message: "خروج موفق." };
  },

  /* ======================== 📋 نشست‌ها ======================== */
  async getActiveSessions(adminId) {
    const sessions = await adminRepository.getSessions(adminId);
    return { success: true, count: sessions.length, sessions };
  },

  /* ======================== ✅ تأیید فروشنده ======================== */
  async verifySeller(sellerId) {
    const seller = await sellerRepository.findById(sellerId);
    if (!seller) throw new CustomError("فروشنده یافت نشد.", 404);
    if (seller.isVerified) throw new CustomError("قبلاً تأیید شده است.", 409);

    const updatedSeller = await sellerRepository.update(sellerId, { isVerified: true, role: "seller" });
    return { success: true, message: "فروشنده تأیید شد.", sellerId: updatedSeller._id };
  },
};
