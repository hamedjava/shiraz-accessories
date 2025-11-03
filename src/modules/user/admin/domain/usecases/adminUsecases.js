import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { adminRepository } from "../../infrastructure/repositories/adminRepository.js";
import { sellerRepository } from "../../../../user/seller/infrastructure/repositories/seller-repository.js";
import { CustomerModel } from "../../../customer/infrastructure/models/customer-model.js";
import { CustomError } from "../../../../../core/errors/customError.js";

/**
 * 🎯 UseCases دامنه ادمین
 * شامل عملیات احراز هویت + مدیریت فروشنده + مدیریت مشتری + آمار داشبورد
 */
export const adminUsecases = {
  /* ======================== 👤 ثبت‌نام ادمین ======================== */
  async registerAdmin({ name, email, password, mobile, role }) {
    if (!email && !mobile)
      throw new CustomError("ایمیل یا موبایل الزامی است.", 400);

    if (email && password) {
      const existingEmail = await adminRepository.findByEmail(email);
      if (existingEmail) throw new CustomError("ایمیل قبلاً ثبت شده است.", 409);

      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = await adminRepository.create({
        name,
        email,
        mobile,
        password: hashedPassword,
        role: role || "manager",
        mobileVerified: false,
      });

      await adminRepository.logAction(admin._id, "REGISTER_EMAIL", admin._id, "Admin");
      return { success: true, message: "ثبت‌نام ایمیلی موفق.", adminId: admin._id, role: admin.role };
    }

    if (mobile && !email && !password) {
      const existingMobile = await adminRepository.findByMobile(mobile);
      if (existingMobile) throw new CustomError("شماره موبایل قبلاً ثبت شده است.", 409);

      const admin = await adminRepository.create({
        name,
        mobile,
        mobileVerified: false,
        role: role || "support",
      });

      await adminRepository.logAction(admin._id, "REGISTER_MOBILE", admin._id, "Admin");
      return { success: true, message: "ثبت‌نام موبایلی موفق.", adminId: admin._id, role: admin.role };
    }

    throw new CustomError("درخواست ثبت‌نام نامعتبر است.", 400);
  },

  /* ======================== 📲 ارسال OTP ======================== */
  async sendOtp(mobile) {
    if (!mobile) throw new CustomError("شماره موبایل الزامی است.", 400);

    let admin = await adminRepository.findByMobile(mobile);
    if (!admin) {
      admin = await adminRepository.create({
        mobile,
        mobileVerified: false,
        role: "support",
        otpRequestCount: 0,
        otpLastRequestAt: null,
      });
    }

    const now = Date.now();
    const lastRequest = admin.otpLastRequestAt ? new Date(admin.otpLastRequestAt).getTime() : 0;
    if (now - lastRequest < 60000)
      throw new CustomError("لطفاً یک دقیقه بعد تلاش کنید.", 429);

    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    const expireAt = new Date(now + 2 * 60 * 1000); // ۲ دقیقه اعتبار

    await adminRepository.updateOtp(mobile, otpCode, expireAt);
    await adminRepository.logAction(admin._id, "SEND_OTP", admin._id, "Admin", { expireAt });

    const isDev = ["development", "test"].includes(process.env.NODE_ENV);
    return {
      success: true,
      message: "کد OTP ارسال شد.",
      expireAt,
      ...(isDev && { otpCode }),
    };
  },

  /* ======================== ✅ تأیید OTP + صدور توکن ======================== */
  async verifyOtp({ mobile, otpCode }) {
    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);

    if (!admin.otpCode) throw new CustomError("کد OTP نامعتبر است.", 400);
    if (new Date() > new Date(admin.otpExpireAt))
      throw new CustomError("کد OTP منقضی شده است.", 401);
    if (String(admin.otpCode) !== String(otpCode))
      throw new CustomError("کد OTP اشتباه است.", 401);

    // تأیید موبایل و پاک کردن OTP
    await adminRepository.update(admin._id, {
      mobileVerified: true,
      otpCode: null,
      otpExpireAt: null,
    });

    await adminRepository.logAction(admin._id, "VERIFY_OTP", admin._id, "Admin");

    // 🔐 صدور توکن‌ها
    const tokens = await this._generateTokens(admin);

    return {
      success: true,
      message: "شماره موبایل تأیید و ورود انجام شد.",
      adminId: admin._id,
      role: admin.role,
      ...tokens,
    };
  },

  /* ======================== 🔐 تولید توکن و نشست ======================== */
  async _generateTokens(admin) {
    const payload = { id: admin._id, role: admin.role, mobile: admin.mobile };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ id: admin._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

    const sessionId = randomUUID();
    await adminRepository.addSession(admin._id, refreshToken, sessionId);
    await adminRepository.addLoginRecord(admin._id, sessionId);

    return { accessToken, refreshToken, sessionId };
  },

  /* ======================== 💻 ورود با موبایل و پسورد ======================== */
  async loginAdminWithMobile({ mobile, password }) {
    if (!mobile || !password)
      throw new CustomError("موبایل و رمز عبور الزامی است.", 400);

    const admin = await adminRepository.findByMobile(mobile);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (admin.isBlocked) throw new CustomError("حساب مسدود شده است.", 403);
    if (!admin.mobileVerified) throw new CustomError("شماره موبایل تأیید نشده است.", 403);

    const isMatch = await bcrypt.compare(password, admin.password || "");
    if (!isMatch) throw new CustomError("رمز عبور اشتباه است.", 401);

    const tokens = await this._generateTokens(admin);
    await adminRepository.logAction(admin._id, "LOGIN_MOBILE", admin._id, "Admin");

    return { success: true, message: "ورود موفق.", adminId: admin._id, role: admin.role, ...tokens };
  },

  /* ======================== 💻 ورود با ایمیل ======================== */
  async loginAdminWithEmail({ email, password }) {
    if (!email || !password)
      throw new CustomError("ایمیل و رمز عبور الزامی است.", 400);

    const admin = await adminRepository.findByEmail(email);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);
    if (admin.isBlocked) throw new CustomError("حساب مسدود شده است.", 403);

    const isMatch = await bcrypt.compare(password, admin.password || "");
    if (!isMatch) throw new CustomError("رمز عبور اشتباه است.", 401);

    const tokens = await this._generateTokens(admin);
    await adminRepository.logAction(admin._id, "LOGIN_EMAIL", admin._id, "Admin");

    return { success: true, message: "ورود با ایمیل موفق.", adminId: admin._id, role: admin.role, ...tokens };
  },

  /* ======================== 🟢 دریافت نشست‌های فعال ======================== */
  async getActiveSessions(adminId) {
    if (!adminId) throw new CustomError("شناسه ادمین الزامی است.", 400);

    if (typeof adminRepository.getActiveSessions !== "function") {
      throw new CustomError("❌ متد getActiveSessions در adminRepository تعریف نشده است.", 500);
    }

    const sessions = await adminRepository.getActiveSessions(adminId);
    if (!sessions || sessions.length === 0)
      return { success: true, message: "هیچ نشست فعالی یافت نشد.", data: [] };

    await adminRepository.logAction(adminId, "GET_ACTIVE_SESSIONS", adminId, "Admin", { count: sessions.length });
    return { success: true, message: "نشست‌های فعال با موفقیت دریافت شدند.", data: sessions };
  },

  /* ======================== 📋 مدیریت فروشنده و مشتری ======================== */
  async verifySeller(sellerId, adminId) {
    const seller = await sellerRepository.findById(sellerId);
    if (!seller) throw new CustomError("فروشنده یافت نشد.", 404);
    if (seller.isVerified) throw new CustomError("قبلاً تأیید شده است.", 409);

    const updatedSeller = await sellerRepository.update(sellerId, { isVerified: true, role: "seller" });
    await adminRepository.logAction(adminId, "VERIFY_SELLER", sellerId, "Seller");
    return { success: true, message: "فروشنده تأیید شد.", sellerId: updatedSeller._id };
  },

  async getAllCustomers(adminId) {
    const admin = await adminRepository.findById(adminId);
    if (!admin || !["superAdmin", "manager", "support"].includes(admin.role))
      throw new CustomError("دسترسی غیرمجاز.", 403);

    const customers = await CustomerModel.find({}, "-password -refreshTokens");
    return { success: true, count: customers.length, customers };
  },

  async blockCustomer(customerId, adminId) {
    const admin = await adminRepository.findById(adminId);
    if (!["superAdmin", "manager"].includes(admin?.role))
      throw new CustomError("دسترسی غیرمجاز.", 403);

    const customer = await CustomerModel.findById(customerId);
    if (!customer) throw new CustomError("مشتری یافت نشد.", 404);
    if (customer.isBlocked) throw new CustomError("قبلاً بلاک شده است.", 409);

    customer.isBlocked = true;
    await customer.save();
    await adminRepository.logAction(adminId, "BLOCK_CUSTOMER", customerId, "Customer");
    return { success: true, message: "مشتری بلاک شد.", customerId };
  },

  async unblockCustomer(customerId, adminId) {
    const admin = await adminRepository.findById(adminId);
    if (!["superAdmin", "manager"].includes(admin?.role))
      throw new CustomError("دسترسی غیرمجاز.", 403);

    const customer = await CustomerModel.findById(customerId);
    if (!customer) throw new CustomError("مشتری یافت نشد.", 404);
    if (!customer.isBlocked) throw new CustomError("این مشتری بلاک نیست.", 409);

    customer.isBlocked = false;
    await customer.save();
    await adminRepository.logAction(adminId, "UNBLOCK_CUSTOMER", customerId, "Customer");
    return { success: true, message: "مشتری آنبلاک شد.", customerId };
  },

  async deleteCustomer(customerId, adminId) {
    const admin = await adminRepository.findById(adminId);
    if (admin?.role !== "superAdmin")
      throw new CustomError("فقط سوپر ادمین مجاز است.", 403);

    const deleted = await CustomerModel.findByIdAndDelete(customerId);
    if (!deleted) throw new CustomError("مشتری پیدا نشد.", 404);

    await adminRepository.logAction(adminId, "DELETE_CUSTOMER", customerId, "Customer");
    return { success: true, message: "مشتری حذف شد.", customerId };
  },

  async getAllSellers(adminId) {
    if (adminId) {
      const admin = await adminRepository.findById(adminId);
      if (!admin)
        throw new CustomError("ادمین یافت نشد.", 404);
      if (!["superAdmin", "manager", "support"].includes(admin.role))
        throw new CustomError("دسترسی غیرمجاز.", 403);
    }

    let sellers = [];
    if (typeof sellerRepository.find === "function") {
      sellers = await sellerRepository.find({});
    } else if (typeof sellerRepository.getAll === "function") {
      sellers = await sellerRepository.getAll();
    } else if (typeof sellerRepository.getAllSellers === "function") {
      sellers = await sellerRepository.getAllSellers();
    } else {
      throw new CustomError("Repository فروشنده متد 'find' یا 'getAll' ندارد.", 500);
    }

    await adminRepository.logAction(adminId, "GET_ALL_SELLERS", adminId, "Admin", { count: sellers?.length || 0 });
    return sellers;
  },

  async logoutSession(adminId, sessionId) {
    if (!adminId || !sessionId)
      throw new CustomError("شناسه ادمین و نشست الزامی است.", 400);

    const admin = await adminRepository.findById(adminId);
    if (!admin) throw new CustomError("ادمین یافت نشد.", 404);

    const activeSessions = await adminRepository.getActiveSessions(adminId);
    const targetSession = activeSessions.find((s) => s.sessionId === sessionId);

    if (!targetSession) throw new CustomError("نشست مورد نظر یافت نشد.", 404);

    await adminRepository.removeSessionById(adminId, sessionId);
    await adminRepository.logAction(adminId, "LOGOUT_SESSION", adminId, "Admin", {
      sessionId,
      wasCurrent: targetSession.isCurrent,
    });

    return {
      success: true,
      message: `نشست با شناسه ${sessionId} با موفقیت بسته شد.`,
      sessionId,
    };
  },

  /* ======================== 📊 آمار داشبورد (Dashboard Stats) ======================== */
  async getDashboardStats() {
    const usersCount = typeof adminRepository.countUsers === "function"
      ? await adminRepository.countUsers()
      : await CustomerModel.countDocuments().catch(() => 0);

    const sellersCount = typeof sellerRepository.count === "function"
      ? await sellerRepository.count()
      : typeof sellerRepository.getAll === "function"
        ? (await sellerRepository.getAll())?.length || 0
        : 0;

    const productsCount = typeof adminRepository.countProducts === "function"
      ? await adminRepository.countProducts()
      : 0;

    const ordersCount = typeof adminRepository.countOrders === "function"
      ? await adminRepository.countOrders()
      : 0;

    const categoriesCount = typeof adminRepository.countCategories === "function"
      ? await adminRepository.countCategories()
      : 0;

    try {
      await adminRepository.logAction(null, "GET_DASHBOARD_STATS", null, "System", {
        usersCount, sellersCount, productsCount, ordersCount, categoriesCount,
      });
    } catch (_) {}

    return {
      success: true,
      message: "آمار داشبورد با موفقیت دریافت شد.",
      data: {
        usersCount,
        sellersCount,
        productsCount,
        ordersCount,
        categoriesCount,
      },
    };
  },
    /* ======================== 🔄 تغییر وضعیت کاربر (Block / Unblock / Delete) ======================== */
    async changeUserStatus(userId, action, adminId) {
      try {
        if (!userId || !action || !adminId) {
          throw new CustomError("پارامترهای ورودی نامعتبر هستند.", 400);
        }
  
        const admin = await adminRepository.findById(adminId);
        if (!admin) {
          throw new CustomError("ادمین معتبر نیست.", 404);
        }
  
        // نرمال‌سازی نقش برای جلوگیری از حساسیت حروف
        const role = (admin.role || "").toLowerCase();
        if (!["superadmin", "manager", "support"].includes(role)) {
          throw new CustomError("ادمین مجاز به تغییر وضعیت کاربران نیست.", 403);
        }
  
        // یافتن کاربر از مدل مشتری (در پروژه شما مشتری همان user است)
        const customer = await CustomerModel.findById(userId);
        if (!customer) {
          throw new CustomError("کاربر یافت نشد.", 404);
        }
  
        // عملیات بر اساس حالت درخواستی
        let update = {};
        let message = "";
  
        switch (action.toLowerCase()) {
          case "block":
            if (customer.isBlocked) throw new CustomError("کاربر از قبل بلاک است.", 409);
            update.isBlocked = true;
            message = "کاربر با موفقیت بلاک شد.";
            break;
  
          case "unblock":
            if (!customer.isBlocked) throw new CustomError("کاربر در حال حاضر بلاک نیست.", 409);
            update.isBlocked = false;
            message = "کاربر با موفقیت آنبلاک شد.";
            break;
  
          case "delete":
            await CustomerModel.findByIdAndDelete(userId);
            await adminRepository.logAction(adminId, "DELETE_USER", userId, "Customer");
            return { success: true, message: "کاربر با موفقیت حذف شد.", userId };
          
          default:
            throw new CustomError("نوع عملیات نامعتبر است. (block / unblock / delete)", 400);
        }
  
        // ذخیره نتیجه در دیتابیس
        Object.assign(customer, update);
        await customer.save();
  
        // ثبت لاگ در مخزن ادمین
        await adminRepository.logAction(adminId, "CHANGE_USER_STATUS", userId, "Customer", update);
  
        return {
          success: true,
          message,
          userId,
          status: update.isBlocked ? "blocked" : "active",
          isBlocked: update.isBlocked,
        };
      } catch (error) {
        console.error("❌ خطا در changeUserStatus:", error);
        throw error;
      }
    },
  
};
