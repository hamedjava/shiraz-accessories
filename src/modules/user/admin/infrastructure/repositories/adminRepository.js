import { AdminModel } from "../models/adminModel.js";

export const adminRepository = {
  async findByEmail(email) {
    return await AdminModel.findOne({ email });
  },

  async findByMobile(mobile) {
    return await AdminModel.findOne({ mobile });
  },

  async findAll() {
    // حذف فیلدهای حساس از خروجی برای امنیت
    return await AdminModel.find({}, "-password -otpCode -otpExpireAt -otpRequestCount");
  },

  async create(data) {
    const admin = new AdminModel(data);
    return await admin.save();
  },

  async update(id, data) {
    return await AdminModel.findByIdAndUpdate(id, data, { new: true });
  },

  async remove(id) {
    return await AdminModel.findByIdAndDelete(id);
  },

  // ✅ متد به‌روزرسانی اطلاعات OTP
  async updateOtp(mobile, otpCode, otpExpireAt) {
    return await AdminModel.findOneAndUpdate(
      { mobile },
      {
        otpCode,
        otpExpireAt,
        otpLastRequestAt: new Date(),
        $inc: { otpRequestCount: 1 },
      },
      { new: true }
    );
  },
    /** 👤 افزودن Session جدید */
    async addSession(adminId, token, sessionId) {
      return await AdminModel.findByIdAndUpdate(
        adminId,
        {
          $push: { refreshTokens: token },
          currentSessionId: sessionId,
          lastLoginAt: new Date(),
        },
        { new: true }
      );
    },
  
    /** ⛔ خروج از Session */
    async removeSession(adminId, token) {
      return await AdminModel.findByIdAndUpdate(
        adminId,
        {
          $pull: { refreshTokens: token },
          currentSessionId: null,
        },
        { new: true }
      );
    },
  
    /** 📋 دریافت تمام Session‌ها */
    async getSessions(adminId) {
      const admin = await AdminModel.findById(adminId).select("refreshTokens currentSessionId lastLoginAt");
      return admin ? admin.refreshTokens : [];
    },

     /** 🔍 یافتن ادمین با شناسه */
  async findById(adminId) {
    return await AdminModel.findById(adminId);
  },
};
