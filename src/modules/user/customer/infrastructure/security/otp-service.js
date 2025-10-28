// infrastructure/security/otp-service.js
export default class OTPService {
    constructor() { this.cache = new Map(); }
  
    generate(mobile) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      this.cache.set(mobile, otp);
      console.log(`OTP for ${mobile}: ${otp}`);
      return otp;
    }
  
    verify(mobile, code) {
      const valid = this.cache.get(mobile);
      if (valid && valid === code) {
        this.cache.delete(mobile);
        return true;
      }
      return false;
    }
  }
  