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
};
