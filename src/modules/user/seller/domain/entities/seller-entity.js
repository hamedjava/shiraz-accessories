/**
 * مسیر: seller/domain/entities/seller-entity.js
 * توضیح: کلاس فروشنده (Seller) معرف سطح دامنه است و منطق کسب‌وکار و رفتار فروشنده را دارد.
 */

export class SellerEntity {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.mobile = props.mobile;
    this.email = props.email;
    this.password = props.password; // هش‌شده در سطح زیرساخت
    this.storeName = props.storeName;
    this.role = props.role ?? "pending_seller"; // نقش اولیه تا تأیید ادمین
    this.isVerified = props.isVerified ?? false;
    this.otpCode = props.otpCode ?? null;
    this.refreshToken = props.refreshToken ?? null;
    this.createdAt = props.createdAt ?? new Date();
  }

  /** تأیید فروشنده توسط ادمین */
  verifySeller() {
    this.isVerified = true;
    this.role = "seller";
  }

  /** بررسی سطح دسترسی مدیریتی */
  hasAccessToFullCRUD() {
    return this.role === "admin";
  }

  /** خروجی استاندارد JSON برای ارسال به لایه‌های بالا */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      storeName: this.storeName,
      role: this.role,
      isVerified: this.isVerified,
      createdAt: this.createdAt,
    };
  }
}
