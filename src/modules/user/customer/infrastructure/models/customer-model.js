// infrastructure/models/customer-model.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, sparse: true },
    mobile: { type: String, unique: true, sparse: true },
    password: { type: String },
    roles: { type: [String], default: ["customer"] },
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }, // برای تشخیص هنگام ورود و رفرش
    refreshTokens: { type: [String], default: [] }
  },
  { timestamps: true }
);

export const CustomerModel = mongoose.model("Customer", customerSchema);
