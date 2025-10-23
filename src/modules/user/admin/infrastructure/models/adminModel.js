// infrastructure/models/adminModel.js

import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true, trim: true, lowercase: true },
    mobile: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    role: { type: String, enum: ["superAdmin", "manager", "support"], default: "support" },

    mobileVerified: { type: Boolean, default: false },
    otpCode: { type: Number, required: false },
    otpExpireAt: { type: Date, required: false },
    otpRequestCount: { type: Number, default: 0 },
    otpLastRequestAt: { type: Date, required: false },

    /** ✅ مدیریت نشست‌ها و توکن‌ها **/
    refreshTokens: [{ type: String }], // آرایه‌ای از توکن‌های معتبر
    currentSessionId: { type: String, required: false }, // شناسه نشست جاری
    lastLoginAt: { type: Date, required: false },
  },
  { timestamps: true }
);

export const AdminModel = mongoose.model("Admin", AdminSchema);
