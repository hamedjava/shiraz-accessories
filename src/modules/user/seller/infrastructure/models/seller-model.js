// مسیر: seller/infrastructure/models/seller-model.js

import mongoose from "mongoose";
import bcrypt from "bcrypt";

/**
 * 🧩 مدل فروشنده
 * شامل اطلاعات پایه + نشست‌ها + مدیریت رمز عبور
 */

const sellerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    mobile: { type: String, required: true, unique: true, trim: true },

    email: { type: String, required: true, unique: true, trim: true },

    // ✅ رمز عبور؛ هش خودکار قبل از ذخیره و عدم نمایش در کوئری عمومی
    password: { type: String, required: true, trim: true, select: false },

    storeName: { type: String, required: true, trim: true },
    isVerified: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["pending_seller", "seller", "admin"],
      default: "pending_seller",
    },

    otpCode: { type: String, default: null },

    /** 🟢 مدیریت نشست‌ها و توکن‌ها */
    refreshTokens: [{ type: String }],
    currentSessionId: { type: String, default: null },
    lastLoginAt: { type: Date, default: null },
  },
  { timestamps: true }
);

/* ---------------------------------------------------
   🔒 Pre-save hook برای هش رمز قبل از ذخیره در DB
   در صورتی که فیلد password تغییر کرده باشد.
--------------------------------------------------- */
sellerSchema.pre("save", async function (next) {
  // اگر رمز تغییر نکرده، نیازی به هش نیست
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

/* ---------------------------------------------------
   🧠 متد بررسی رمز ورود
--------------------------------------------------- */
sellerSchema.methods.comparePassword = async function (plainPassword) {
  // اگر رمز در این سند وجود نداشت، همیشه false برگردان
  if (!this.password) return false;
  return bcrypt.compare(plainPassword, this.password);
};

/* ---------------------------------------------------
   🧩 محافظت از خروجی‌ها (JSON)
   حذف فیلدهای حساس از خروجی نهایی
--------------------------------------------------- */
sellerSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.refreshTokens;
  delete obj.otpCode;
  return obj;
};

export const SellerModel = mongoose.model("Seller", sellerSchema);
