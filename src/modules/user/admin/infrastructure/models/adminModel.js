import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      unique: true,
      sparse: true,
      required: false,
      trim: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      unique: true,
      sparse: true,
      required: false,
    },

    password: { type: String, required: false },

    role: {
      type: String,
      enum: ["superAdmin", "manager", "support"],
      default: "support", // در صورت عدم ارسال role از بیرون برای موبایلی‌ها
    },

    mobileVerified: { type: Boolean, default: false },
    otpCode: { type: Number, required: false },
    otpExpireAt: { type: Date, required: false },
    otpRequestCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const AdminModel = mongoose.model("Admin", AdminSchema);
