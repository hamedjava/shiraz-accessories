import { SellerModel } from "../models/seller-model.js";

/**
 * 🧩 ریپازیتوری فروشنده
 * مسئول ارتباط مستقیم با پایگاه داده برای مدل Seller.
 */
export class SellerRepository {
  constructor() {
    this.model = SellerModel;
  }

  /* ---------------------------------------------------
     📦 ایجاد فروشنده جدید
     رمز عبور قبل از ذخیره توسط مدل هش می‌شود.
  --------------------------------------------------- */
  async create(sellerEntity) {
    try {
      const seller = new this.model(sellerEntity);
      return await seller.save();
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [create]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🔍 جستجو بر اساس ایمیل (برای Login با رمز عبور)
     رمز باید انتخاب شود تا bcrypt بتواند مقایسه کند.
  --------------------------------------------------- */
  async findByEmail(email) {
    if (!email) return null;
    return await this.model
      .findOne({ email })
      .select("+password +role +isVerified +email +mobile +storeName");
  }

  /* ---------------------------------------------------
     🔍 جستجو بر اساس شماره موبایل (برای Login با OTP)
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
     ⚙️ بررسی تکراری بودن فروشنده (email/mobile)
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
     🔎 جستجو بر اساس شناسه (بدون رمز)
  --------------------------------------------------- */
  async findById(id) {
    if (!id) return null;
    try {
      return await this.model.findById(id).select("-password -otpCode -refreshTokens");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [findById]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🔍 دریافت داده کامل فروشنده شامل refresh tokens
     (برای logout بررسی می‌شود)
  --------------------------------------------------- */
  async getFullById(id) {
    if (!id) return null;
    try {
      return await this.model
        .findById(id)
        .select("+refreshTokens +role +email +mobile +storeName");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [getFullById]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     📋 تمام فروشندگان برای پنل مدیر
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
     🔄 بروزرسانی داده فروشنده
  --------------------------------------------------- */
  async update(id, data) {
    if (!id || !data) return null;
    try {
      return await this.model
        .findByIdAndUpdate(id, data, { new: true })
        .select("-password -otpCode -refreshTokens");
    } catch (error) {
      throw new Error(`❌ خطای ریپازیتوری [update]: ${error.message}`);
    }
  }

  /* ---------------------------------------------------
     🆕 افزودن RefreshToken / Session جدید
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

export const sellerRepository = new SellerRepository();
