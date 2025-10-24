/**
 * SellerController
 * کنترلگر سطح HTTP برای ماژول Seller
 */

import { sellerServiceInstance } from "../../../seller/application/services/seller-service.js";

export class SellerController {
  constructor() {
    this.service = sellerServiceInstance;
  }

  /** 📩 ثبت‌ نام فروشنده */
  async register(req, res) {
    try {
      const { name, email, mobile, password, storeName } = req.body;
      if (!name || !email || !mobile || !password || !storeName)
        return res.status(400).json({ success: false, message: "تمام فیلدهای الزامی باید ارسال شوند." });

      const seller = await this.service.register({ name, email, mobile, password, storeName });
      return res.status(201).json({
        success: true,
        message: "فروشنده با موفقیت ثبت شد. منتظر تأیید مدیر باشید.",
        data: seller,
      });
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  /** 🔑 ورود با ایمیل / رمزعبور */
  async loginWithEmail(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ success: false, message: "ایمیل و رمز عبور الزامی هستند." });

      const { seller, accessToken, refreshToken } =
        await this.service.loginWithEmail({ email, password });

      return res.status(200).json({
        success: true,
        message: "ورود موفقیت‌آمیز.",
        data: { seller, accessToken, refreshToken },
      });
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  /** 📲 ارسال OTP */
  async sendLoginOtp(req, res) {
    try {
      const { mobile } = req.body;
      if (!mobile)
        return res.status(400).json({ success: false, message: "شماره موبایل الزامی است." });
      const result = await this.service.sendOtp(mobile);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }

  /** ✅ تأیید OTP برای ورود فروشنده */
  async verifyLoginOtp(req, res) {
    try {
      const { mobile, otpCode } = req.body;
      if (!mobile || !otpCode)
        return res.status(400).json({ success: false, message: "شماره موبایل و کد OTP الزامی هستند." });

      const result = await this.service.verifyOtp({ mobile, otpCode });
      return res.status(200).json(result);
    } catch (err) {
      const msg = err.message || "";
      if (msg.includes("کد OTP"))
        return res.status(401).json({ success: false, message: "کد OTP اشتباه یا منقضی شده است. لطفاً دوباره تلاش کنید." });
      return res.status(400).json({ success: false, message: msg });
    }
  }

  /** ⛔ خروج از سیستم */
  async logout(req, res) {
    try {
      const { sellerId, refreshToken } = req.body;
      if (!sellerId || !refreshToken)
        return res.status(400).json({ success: false, message: "شناسه فروشنده و RefreshToken الزامی هستند." });

      const result = await this.service.logoutSeller({ sellerId, refreshToken });
      return res.status(200).json(result);
    } catch (error) {
      console.error("LOGOUT ERROR:", error);
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  /** 📋 نمایش نشست‌های فعال فروشنده */
  async sessions(req, res) {
    try {
      const { sellerId } = req.params;
      if (!sellerId)
        return res.status(400).json({ success: false, message: "شناسه فروشنده الزامی است." });

      const result = await this.service.getSellerSessions(sellerId);
      return res.status(200).json(result);
    } catch (error) {
      console.error("SESSIONS ERROR:", error);
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}
