// infrastructure/models/customer-model.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    mobile: { type: String, unique: true, sparse: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    isVerified: { type: Boolean, default: false },
    roles: { type: [String], default: ["customer"] },
    refreshToken: { type: String }
}, { timestamps: true });

export const CustomerModel = mongoose.model("Customer", customerSchema);
