/**
 * ===============================================
 * UseCase: Register Seller
 * ===============================================
 */

import bcrypt from "bcrypt";
import { SellerEntity } from "../../domain/entities/seller-entity.js";

export class RegisterSellerUseCase {
  constructor(sellerRepository) {
    this.repository = sellerRepository;
  }

  /**
   * اجرای منطق ثبت‌نام
   * @param {Object} data - داده‌های ورودی فروشنده
   * @returns {Promise<Object>} فروشنده ذخیره‌شده
   */
  async execute(data) {
    const { name, email, mobile, password, storeName } = data; // ✅ این خط اصلاح شد

    // ✅ 1. اعتبارسنجی اولیه فیلدها
    if (!name || !email || !mobile || !password || !storeName) { // ✅ storeName اضافه شد
      throw new Error("تمام فیلدهای الزامی باید وارد شوند، شامل storeName.");
    }

    // ✅ 2. بررسی تکراری بودن ایمیل یا موبایل
    const emailExists = await this.repository.findByEmail(email);
    const mobileExists = await this.repository.findByMobile(mobile);

    if (emailExists || mobileExists) {
      throw new Error("این ایمیل یا شماره موبایل قبلاً ثبت شده است.");
    }

    // ✅ 3. هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ 4. ساخت موجودیت Seller با همه فیلدها
    const sellerEntity = new SellerEntity({
      name,
      email: email.toLowerCase(),
      mobile,
      password: hashedPassword,
      storeName, // ✅ این خط اضافه شد
      role: "pending_seller",
      isVerified: false,
    });

    // ✅ 5. ذخیره در Repository
    const savedSeller = await this.repository.create(sellerEntity);

    // ✅ 6. خروجی نهایی برای Controller
    return {
      success: true,
      message: "فروشنده با موفقیت ثبت شد. منتظر تأیید مدیر باشید.",
      data: {
        id: savedSeller._id,
        name: savedSeller.name,
        email: savedSeller.email,
        mobile: savedSeller.mobile,
        storeName: savedSeller.storeName, // ✅ برای کامل بودن داده در خروجی
        role: savedSeller.role,
        isVerified: savedSeller.isVerified,
      },
    };
  }
}
