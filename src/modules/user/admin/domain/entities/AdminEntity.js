export class AdminEntity {
  constructor({ name, email, password, mobile, otpCode }) {
    this.name = name || null;
    this.email = email || null;
    this.password = password || null;
    this.mobile = mobile || null;
    this.otpCode = otpCode || null;
  }
}
