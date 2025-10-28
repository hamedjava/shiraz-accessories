// infrastructure/models/admin-model.js
import mongoose from "mongoose";

/**
 * 🧱 مدل ادمین سیستم
 * این مدل ساختار داده ای ادمین را مشخص می‌کند و برای احراز هویت چندحالته و عملیات مدیریتی استفاده می‌شود.
 */
const AdminSchema = new mongoose.Schema(
  {
    /* ------------------------ اطلاعات پایه ------------------------ */
    name: {
      type: String,
      required: [true, "نام ادمین ضروری است"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "ایمیل معتبر نیست"],
    },
    mobile: {
      type: String,
      unique: true,
      sparse: true,
      match: [/^09\d{9}$/, "شماره موبایل معتبر نیست"],
    },
    password: {
      type: String,
      select: false, // امنیتی — از خروجی‌های عمومی حذف شود
    },

    /* ------------------------ نقش و سطح دسترسی ------------------------ */
    role: {
      type: String,
      enum: ["superAdmin", "manager", "support"],
      default: "support",
    },
    permissions: {
      type: [String],
      default: [],
    },

    /* ------------------------ وضعیت حساب ------------------------ */
    isBlocked: {
      type: Boolean,
      default: false,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    mobileVerified: {
      type: Boolean,
      default: false,
    },

    /* ------------------------ OTP و احراز هویت ------------------------ */
    otpCode: { type: String },
    otpExpireAt: { type: Date },
    otpRequestCount: { type: Number, default: 0 },
    otpLastRequestAt: { type: Date },

    /* ------------------------ نشست‌ها و توکن‌ها ------------------------ */
    refreshTokens: {
      type: [{ type: String }],
      default: [],
    },
    currentSessionId: { type: String },
    lastLoginAt: { type: Date },

    /* ------------------------ گزارش ورود و فعالیت ------------------------ */
    loginHistory: [
      {
        sessionId: { type: String },
        ip: { type: String },
        userAgent: { type: String },
        loggedAt: { type: Date, default: Date.now },
      },
    ],

    actionHistory: [
      {
        actionType: { type: String }, // مانند: "BLOCK_CUSTOMER", "VERIFY_SELLER"
        targetId: { type: mongoose.Schema.Types.ObjectId },
        targetModel: { type: String }, // مانند "Customer" یا "Seller"
        meta: { type: Object },
        performedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "admins",
  }
);

/* ------------------------ ایندکس‌ها برای کارایی ------------------------ */
AdminSchema.index({ email: 1 });
AdminSchema.index({ mobile: 1 });
AdminSchema.index({ role: 1 });
AdminSchema.index({ isBlocked: 1 });

/* ------------------------ مِتُدهای کاربردی ------------------------ */

/**
 * 📌 بررسی اعتبار OTP
 */
AdminSchema.methods.isOtpValid = function (inputOtp) {
  if (!this.otpCode || !this.otpExpireAt) return false;
  const isExpired = new Date() > this.otpExpireAt;
  return !isExpired && Number(this.otpCode) === Number(inputOtp);
};

/**
 * ⛔ بلاک یا آنبلاک کردن ادمین
 */
AdminSchema.methods.toggleBlock = async function (status) {
  this.isBlocked = status;
  await this.save();
  return this.isBlocked;
};

/**
 * 🧾 افزودن رکورد لاگ فعالیت ادمین
 */
AdminSchema.methods.logAction = async function (type, targetId, targetModel, meta = {}) {
  this.actionHistory.push({ actionType: type, targetId, targetModel, meta });
  await this.save();
};

/**
 * 🔐 افزودن یا حذف RefreshToken از نشست‌ها
 */
AdminSchema.methods.addRefreshToken = async function (token) {
  this.refreshTokens.push(token);
  this.lastLoginAt = new Date();
  await this.save();
};

AdminSchema.methods.removeRefreshToken = async function (token) {
  this.refreshTokens = this.refreshTokens.filter((t) => t !== token);
  await this.save();
};

AdminSchema.methods.clearSessions = async function () {
  this.refreshTokens = [];
  this.currentSessionId = null;
  await this.save();
};

/**
 * ✅ بررسی فعال بودن حساب
 */
AdminSchema.methods.isAccountActive = function () {
  return this.isActive && !this.isBlocked;
};

export const AdminModel = mongoose.model("Admin", AdminSchema);
