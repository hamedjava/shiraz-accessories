// src/modules/store/products/infrastructure/database/product_repository_impl.js

import { ProductRepository } from "../../../product/infrastructure/repositories/product_repository.js";
import { ProductModel } from "../../../../modules/product/infrastructure/models/product_model.js";
import { v4 as uuidv4 } from "uuid";

// 🧩 پیاده‌سازی Repository برای MongoDB با استفاده از Mongoose
export class ProductRepositoryImpl extends ProductRepository {
  /**
   * 🧠 ایجاد محصول جدید
   * اگر product_id از بیرون نیاید، یکی تولید می‌کنیم (UUID)
   */
  async create(product_entity) {
    try {
      const data = {
        ...product_entity,
        product_id: product_entity.product_id || uuidv4(),
      };
      const product = await ProductModel.create(data);
      return product.toObject();
    } catch (err) {
      throw new Error(`خطا در ایجاد محصول جدید: ${err.message}`);
    }
  }

  /**
   * ✏️ بروزرسانی محصول
   * از هر دو فیلد _id و product_id پشتیبانی می‌کند
   */
  async update(product_id, changes) {
    try {
      const filter =
        product_id.match(/^[0-9a-fA-F]{24}$/) // اگر شکل ObjectId بوده
          ? { _id: product_id }
          : { product_id };

      const updated = await ProductModel.findOneAndUpdate(filter, changes, {
        new: true,
      }).lean();

      return updated;
    } catch (err) {
      throw new Error(`خطا در به‌روزرسانی محصول: ${err.message}`);
    }
  }

  /**
   * ❌ حذف محصول
   * پشتیبانی از هر دو نوع شناسه (_id یا product_id)
   */
  async delete(product_id) {
    try {
      const filter =
        product_id.match(/^[0-9a-fA-F]{24}$/)
          ? { _id: product_id }
          : { product_id };

      const deleted = await ProductModel.findOneAndDelete(filter).lean();
      return deleted;
    } catch (err) {
      throw new Error(`خطا در حذف محصول: ${err.message}`);
    }
  }

  /**
   * 🔍 دریافت محصول بر اساس شناسه
   * اگر در URL شناسه MongoDB پاس شده باشد، با _id جستجو می‌کند
   * در غیر اینصورت با product_id
   */
  async find_by_id(product_id) {
    try {
      if (product_id.match(/^[0-9a-fA-F]{24}$/)) {
        // شکل استاندارد ObjectId
        return await ProductModel.findById(product_id).lean();
      } else {
        // اگر UUID ارسال شده بود (product_id)
        return await ProductModel.findOne({ product_id }).lean();
      }
    } catch (err) {
      throw new Error(`خطا در یافتن محصول مورد نظر: ${err.message}`);
    }
  }

  /**
   * 🔎 دریافت محصول بر اساس فیلد اختصاصی product_id (UUID)
   */
  async find_by_product_id(product_id) {
    try {
      return await ProductModel.findOne({ product_id }).lean();
    } catch (err) {
      throw new Error(`خطا در یافتن محصول مورد نظر: ${err.message}`);
    }
  }

  /**
   * 📦 دریافت همه محصولات با فیلتر دلخواه
   */
  async find_all(filters = {}) {
    try {
      const query = {};
      if (filters.category) query.category = filters.category;
      if (filters.brand) query.brand = filters.brand;
      if (filters.is_active !== undefined) query.is_active = filters.is_active;
      if (filters.seller_id) query.seller_id = filters.seller_id;

      return await ProductModel.find(query).lean();
    } catch (err) {
      throw new Error(`خطا در دریافت لیست محصولات: ${err.message}`);
    }
  }
}
