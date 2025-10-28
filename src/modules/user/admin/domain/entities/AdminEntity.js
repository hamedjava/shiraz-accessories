// domain/entities/AdminEntity.js
export class AdminEntity {
  constructor({ name, email, password, mobile, otpCode, role, mobileVerified }) {
    this.name = name || null;
    this.email = (email || "").toLowerCase();
    this.password = password || null;
    this.mobile = mobile || null;
    this.otpCode = otpCode || null;
    this.role = role || "support";
    this.mobileVerified = mobileVerified || false;
  }
}
