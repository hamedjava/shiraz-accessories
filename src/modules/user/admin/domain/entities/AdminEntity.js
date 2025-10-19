export class AdminEntity {
  constructor({ name, email, password, mobile, otpCode, role, mobileVerified }) {
    this.name = name || null;
    this.email = email || null;
    this.password = password || null;
    this.mobile = mobile || null;
    this.otpCode = otpCode || null;
    this.role = role || null; // 🔹 دیگر به طور ثابت support نیست، از usecase مقداردهی می‌شود
    this.mobileVerified = mobileVerified || false;
  }
}
