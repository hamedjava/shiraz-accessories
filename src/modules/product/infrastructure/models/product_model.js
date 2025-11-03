// src/modules/store/products/infrastructure/database/product_model.js
import mongoose from "mongoose";

// 🗄️ تعریف اسکیمای دیتابیس MongoDB برای محصولات
const productSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    brand: { type: String },
    stock: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    images: [{ type: String }], // آرایه لینک‌ تصاویر
    seller_id: { type: String, required: true }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

export const ProductModel = mongoose.model("product", productSchema);
