/**
 * مسیر: seller/domain/usecases/login-with-email.js
 * وظیفه: ورود فروشنده با ایمیل و رمز عبور
 */

import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";

export class LoginWithEmailUseCase {
  constructor(repository) {
    this.repository = repository;
    this.tokenManager = new TokenManager();
  }

  /**
   * اجرای UseCase ورود فروشنده با ایمیل
   * -------------------------------------------------
   * 1. بررسی ورودی‌ها
   * 2. دریافت فروشنده از DB
   * 3. مقایسه رمز هش‌شده با رمز واردشده
   * 4. بررسی وضعیت تأیید حساب
   * 5. تولید توکن‌ها و افزودن به لیست نشست‌ها
   * 6. بازگرداندن داده نهایی
   */
  async execute({ email, password }) {
    // 🟡 1. اعتبارسنجی ورودی
    if (!email || !password) {
      throw new Error("ایمیل و رمز عبور باید ارسال شوند.");
    }

    // 🟢 2. دریافت فروشنده از ریپازیتوری
    const seller = await this.repository.findByEmail(email);
    if (!seller) {
      throw new Error("فروشنده‌ای با این ایمیل یافت نشد.");
    }

    // 🟣 3. بررسی اینکه رمز در مدل موجود است (قطعی شود select درست است)
    if (!seller.password) {
      throw new Error("رمز عبور ثبت‌شده در سیستم نامعتبر است. (password undefined)");
    }

    // 🔐 4. بررسی صحت رمز عبور توسط مدل (بجای PasswordHasher جدا)
    const isValid = await seller.comparePassword(password);
    if (!isValid) {
      throw new Error("رمز عبور اشتباه است.");
    }

    // ⚙️ 5. بررسی فعال و تأیید‌شده‌ بودن حساب
    if (!seller.isVerified) {
      throw new Error("حساب شما هنوز توسط مدیر تأیید نشده است.");
    }

    // 🧩 6. تولید توکن‌ها (access + refresh)
    const payload = {
      id: seller._id.toString(),
      role: seller.role,
      email: seller.email,
      mobile: seller.mobile,
    };

    const tokens = this.tokenManager.generateTokens(payload);

    // 🗂 7. افزودن نشست جدید (refreshToken ذخیره شود)
    // در معماری جدید متد صحیح: addSession(id, token, sessionId = null)
    await this.repository.addSession(seller._id, tokens.refreshToken);

    // 📅 8. بروزرسانی زمان آخرین ورود (اختیاری ولی توصیه‌شده)
    await this.repository.update(seller._id, { lastLoginAt: new Date() });

    // 🟢 9. داده خروجی نهایی
    return {
      success: true,
      message: "ورود موفقیت‌آمیز.",
      seller: {
        id: seller._id,
        name: seller.name,
        email: seller.email,
        mobile: seller.mobile,
        role: seller.role,
        storeName: seller.storeName,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }
}
