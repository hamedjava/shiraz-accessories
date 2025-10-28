import { AdminModel } from "../models/adminModel.js";
import { SellerModel } from "../../../seller/infrastructure/models/seller-model.js";
import { CustomerModel } from "../../../customer/infrastructure/models/customer-model.js";

/**
 * 🧠 ریپازیتوری اصلی ادمین — لایه دسترسی به دیتابیس
 * هیچ متدی حذف نشده؛ فقط متدهای مدیریت نشست تکمیل و بهبود یافته‌اند.
 */
export const adminRepository = {
  /* -------------------------------------------------------------------------- */
  /*                         🔹 پایه‌ای و عمومی (Admin)                         */
  /* -------------------------------------------------------------------------- */

  async findById(adminId) {
    return await AdminModel.findById(adminId);
  },

  async findByEmail(email) {
    return await AdminModel.findOne({ email });
  },

  async findByMobile(mobile) {
    return await AdminModel.findOne({ mobile });
  },

  async create(data) {
    const admin = new AdminModel(data);
    return await admin.save();
  },

  async update(adminId, updateData) {
    return await AdminModel.findByIdAndUpdate(adminId, updateData, { new: true });
  },

  async delete(adminId) {
    return await AdminModel.findByIdAndDelete(adminId);
  },

  /* -------------------------------------------------------------------------- */
  /*                        🔐 احراز هویت و OTP Handling                        */
  /* -------------------------------------------------------------------------- */

  async updateOtp(mobile, otpCode, expireAt) {
    return await AdminModel.findOneAndUpdate(
      { mobile },
      {
        otpCode,
        otpExpireAt: expireAt,
        otpLastRequestAt: new Date(),
        $inc: { otpRequestCount: 1 },
      },
      { new: true }
    );
  },

  /* -------------------------------------------------------------------------- */
  /*                              💬 لاگ و تاریخچه                              */
  /* -------------------------------------------------------------------------- */

  async logAction(adminId, actionType, targetId = null, targetType = null, meta = {}) {
    try {
      await AdminModel.updateOne(
        { _id: adminId },
        {
          $push: {
            actionLogs: {
              actionType,
              targetId,
              targetType,
              meta,
              timestamp: new Date(),
            },
          },
        }
      );
    } catch (err) {
      console.error("خطا در لاگ اکشن:", err);
    }
  },

  async addLoginRecord(adminId, sessionId, ip = null, userAgent = null) {
    try {
      await AdminModel.updateOne(
        { _id: adminId },
        {
          $push: {
            loginHistory: {
              sessionId,
              ip,
              userAgent,
              loggedAt: new Date(),
            },
          },
        }
      );
    } catch (err) {
      console.error("خطا در ثبت لاگین رکورد:", err);
    }
  },

  async getLoginHistory(adminId) {
    const admin = await AdminModel.findById(adminId).select("loginHistory").lean();
    return admin ? admin.loginHistory || [] : [];
  },

  /* -------------------------------------------------------------------------- */
  /*                              🧩 مدیریت نشست‌ها                             */
  /* -------------------------------------------------------------------------- */

  async addSession(adminId, refreshToken, sessionId) {
    try {
      return await AdminModel.findByIdAndUpdate(
        adminId,
        {
          $push: { refreshTokens: refreshToken },
          currentSessionId: sessionId,
          lastLoginAt: new Date(),
        },
        { new: true }
      );
    } catch (err) {
      console.error("خطا در افزودن نشست:", err);
      throw err;
    }
  },

  async removeSession(adminId, refreshToken) {
    try {
      return await AdminModel.findByIdAndUpdate(
        adminId,
        { $pull: { refreshTokens: refreshToken } },
        { new: true }
      );
    } catch (err) {
      console.error("خطا در حذف نشست:", err);
      throw err;
    }
  },

  async getSessions(adminId) {
    const admin = await AdminModel.findById(adminId).select(
      "refreshTokens currentSessionId lastLoginAt"
    );
    return admin ? admin.refreshTokens : [];
  },

  /** ✅ متد جدید — دریافت نشست‌های فعال ادمین */
  async getActiveSessions(adminId) {
    const admin = await AdminModel.findById(adminId)
      .select("refreshTokens currentSessionId lastLoginAt loginHistory")
      .lean();

    if (!admin) return [];

    return (admin.loginHistory || []).map((record) => ({
      sessionId: record.sessionId,
      ip: record.ip,
      userAgent: record.userAgent,
      loggedAt: record.loggedAt,
      lastLoginAt: admin.lastLoginAt,
      isCurrent: admin.currentSessionId === record.sessionId,
    }));
  },

  /** 🧹 متد جدید — حذف نشست خاص بر اساس sessionId */
  async removeSessionById(adminId, sessionId) {
    try {
      // 1️⃣ بررسی اینکه ادمین معتبر است
      const admin = await AdminModel.findById(adminId);
      if (!admin) throw new Error("ادمین یافت نشد یا دسترسی مجاز نیست.");
  
      // 2️⃣ بررسی وجود نشست مورد نظر در loginHistory
      const targetSession = admin.loginHistory.find(
        (s) => s.sessionId === sessionId
      );
      if (!targetSession) {
        return {
          success: false,
          message: "نشست مورد نظر یافت نشد یا قبلاً حذف شده است.",
        };
      }
  
      // 3️⃣ حذف نشست از loginHistory
      await AdminModel.updateOne(
        { _id: adminId },
        { $pull: { loginHistory: { sessionId } } }
      );
  
      // 4️⃣ اگر نشست فعلی حذف شد → currentSessionId را null کن
      if (admin.currentSessionId === sessionId) {
        await AdminModel.updateOne(
          { _id: adminId },
          { $set: { currentSessionId: null } }
        );
      }
  
      // 5️⃣ حذف refreshToken وابسته به همان نشست (در صورت وجود sessionId در refreshTokens)
      await AdminModel.updateOne(
        { _id: adminId },
        { $pull: { refreshTokens: { sessionId: sessionId } } }
      );
  
      // 6️⃣ بازگشت پاسخ استاندارد
      return {
        success: true,
        message: `نشست با شناسه ${sessionId} با موفقیت حذف شد.`,
        data: { sessionId },
      };
    } catch (err) {
      console.error("❌ خطا در حذف نشست بر اساس شناسه:", err);
      throw new Error("در حذف نشست خطایی رخ داد، لطفاً مجدداً تلاش کنید.");
    }
  },
  

  /* -------------------------------------------------------------------------- */
  /*                      🕵️ مدیریت فروشندگان (Seller)                         */
  /* -------------------------------------------------------------------------- */

  async getAllSellers() {
    return await SellerModel.find({}, "-password -refreshTokens").lean();
  },

  async findSellerById(sellerId) {
    return await SellerModel.findById(sellerId);
  },

  async verifySeller(sellerId) {
    return await SellerModel.findByIdAndUpdate(
      sellerId,
      { isVerified: true, role: "seller" },
      { new: true }
    );
  },

  async blockSeller(sellerId) {
    return await SellerModel.findByIdAndUpdate(sellerId, { isBlocked: true }, { new: true });
  },

  async unblockSeller(sellerId) {
    return await SellerModel.findByIdAndUpdate(sellerId, { isBlocked: false }, { new: true });
  },

  /* -------------------------------------------------------------------------- */
  /*                       👥 مدیریت مشتریان (Customer)                        */
  /* -------------------------------------------------------------------------- */

  async getAllCustomers() {
    return await CustomerModel.find({}, "-password -refreshTokens").lean();
  },

  async findCustomerById(customerId) {
    return await CustomerModel.findById(customerId);
  },

  async blockCustomer(customerId) {
    return await CustomerModel.findByIdAndUpdate(customerId, { isBlocked: true }, { new: true });
  },

  async unblockCustomer(customerId) {
    return await CustomerModel.findByIdAndUpdate(customerId, { isBlocked: false }, { new: true });
  },

  async deleteCustomer(customerId) {
    return await CustomerModel.findByIdAndDelete(customerId);
  },
};
