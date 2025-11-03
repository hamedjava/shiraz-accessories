/**
 * Jest configuration for a pure ESM project
 * Compatible with node --experimental-vm-modules and "type": "module"
 */

export default {
  verbose: true,
  testEnvironment: "node",

  // 📁 مسیر اصلی به داخل src برای تست‌ها
  rootDir: "src",

  // ⚙️ Jest را در حالت Native ESM اجرا کن (بدون Babel)
  transform: {},

  // 📦 انواع فایل‌هایی که Jest باید شناسایی کند
  moduleFileExtensions: ["js", "json"],

  // 🧭 آدرس‌دهی Alias برای معماری تمیز
  moduleNameMapper: {
    "^@admin/(.*)$": "<rootDir>/modules/user/admin/$1",
    "^@customer/(.*)$": "<rootDir>/modules/user/customer/$1",
    "^@seller/(.*)$": "<rootDir>/modules/user/seller/$1"
  },

  // 🚫 از ترنسفورم ماژول‌های node_modules جلوگیری کن
  transformIgnorePatterns: ["/node_modules/"],

  // 🧹 مدیریت تمیز پروسه تست
  forceExit: true,
  clearMocks: true,
  restoreMocks: true,

  // 📄 اگر نیاز به مشخص‌کردن تست‌ها داری (اختیاری)
  // testMatch: ["**/tests/**/*.test.js"]
};
