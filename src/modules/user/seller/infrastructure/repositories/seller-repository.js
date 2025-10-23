// مسیر: seller/infrastructure/repositories/seller-repository.js

import { SellerModel } from "../models/seller-model.js";

/**
 * 🧩 ریپازیتوری فروشنده (Seller Repository)
 * --------------------------------------------------
 * مسئول ارتباط مستقیم با پایگاه داده برای مدل Seller.
 * این ریپازیتوری منطق دامنه ندارد؛ فقط CRUD و مدیریت Session/Token.
 */
export class SellerRepository {
  constructor() {
    this.model = SellerModel;
  }

  /* ---------------------------------------------------
     📦 ایجاد فروشنده جدید در دیتابیس
     رمز قبل از ذخیره طبق hook در مدل هش می‌شود.
  --------------------------------------------------- */
  async create(sellerEntity) {
    try {
      const seller = new this.model(sellerEntity);
      return await seller.save(); // رمز هش می‌شود (pre-save hook)
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [create]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🔍 جستجو بر اساس ایمیل (برای Login با رمز)
     ⚠️ رمز عبور باید برگردد تا bcrypt بتواند مقایسه کند.
  --------------------------------------------------- */
  async findByEmail(email) {
    if (!email) return null;
    return await SellerModel.findOne({ email }).select("+password +role +isVerified");
  }
  

  /* ---------------------------------------------------
     🔍 جستجو بر اساس شماره موبایل (برای Login با OTP)
     گزینه‌ی رمز نیازی نیست اینجا؛ اما می‌توان صریحاً آورد برای سازگاری.
  --------------------------------------------------- */
  async findByMobile(mobile) {
    if (!mobile) return null;
    try {
      return await this.model
        .findOne({ mobile })
        .select("+password +role +isVerified +mobile +storeName");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [findByMobile]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     ⚙️ بررسی تکراری بودن فروشنده با ایمیل یا موبایل
     برای جلوگیری از ثبت‌نام دوباره
  --------------------------------------------------- */
  async findDuplicate(email, mobile) {
    try {
      return await this.model
        .findOne({ $or: [{ email }, { mobile }] })
        .select("_id email mobile role isVerified");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [findDuplicate]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🔎 جستجو بر اساس شناسه فروشنده
  --------------------------------------------------- */
  async findById(id) {
    if (!id) return null;
    try {
      // رمز نیازی نیست برگردد؛ این تابع برای نمایش است نه احراز هویت
      return await this.model
        .findById(id)
        .select("-password -otpCode -refreshTokens");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [findById]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     📋 دریافت لیست کامل فروشندگان (برای پنل مدیر)
     فیلدهای حساس حذف می‌شوند.
  --------------------------------------------------- */
  async findAll() {
    try {
      return await this.model
        .find({})
        .select("name email mobile storeName role isVerified createdAt updatedAt");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [findAll]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🔄 بروزرسانی داده‌های فروشنده بر اساس شناسه
     فقط فیلدهای غیرحساس مجاز هستند.
  --------------------------------------------------- */
  async update(id, data) {
    if (!id || !data) return null;
    try {
      // اگر password در داده وجود داشته باشد، Hook مدل آن را هش می‌کند.
      return await this.model
        .findByIdAndUpdate(id, data, { new: true })
        .select("-password -otpCode -refreshTokens");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [update]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🆕 افزودن RefreshToken / Session جدید
     با ثبت زمان آخرین ورود برای گزارش‌گیری.
  --------------------------------------------------- */
  async addSession(sellerId, token, sessionId = null) {
    if (!sellerId || !token) throw new Error("شناسه یا توکن معتبر نیست.");

    try {
      return await this.model.findByIdAndUpdate(
        sellerId,
        {
          $push: { refreshTokens: token },
          currentSessionId: sessionId,
          lastLoginAt: new Date(),
        },
        { new: true }
      );
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [addSession]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     ⛔ حذف Session هنگام خروج
  --------------------------------------------------- */
  async removeSession(sellerId, token) {
    if (!sellerId || !token) throw new Error("شناسه یا توکن معتبر نیست.");

    try {
      return await this.model.findByIdAndUpdate(
        sellerId,
        {
          $pull: { refreshTokens: token },
          currentSessionId: null,
        },
        { new: true }
      );
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [removeSession]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     📋 دریافت نشست‌های فعال فروشنده
     شامل refreshTokens فعلی، شناسه جلسه، و زمان آخرین ورود.
  --------------------------------------------------- */
  async getSessions(sellerId) {
    if (!sellerId) throw new Error("شناسه معتبر نیست.");

    try {
      const seller = await this.model
        .findById(sellerId)
        .select("refreshTokens currentSessionId lastLoginAt");

      return seller ? seller.refreshTokens : [];
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [getSessions]: ${error.message}`);
    }
  }
}

/* ---------------------------------------------------
   🔧 Instance پیش‌فرض ریپازیتوری برای ایمپورت سریع
   به سایر لایه‌ها
--------------------------------------------------- */
export const sellerRepository = new SellerRepository();
