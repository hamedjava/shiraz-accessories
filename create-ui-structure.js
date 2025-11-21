/**
 * -------------------------------------------------------------
 * 🛠️ پروژه: Shiraz Mobile UI (Next.js 16)
 * 🏗️ معماری: Modular Clean Architecture (هماهنگ با Backend)
 * -------------------------------------------------------------
 * این اسکریپت ساختار فرانت‌اند را دقیقاً متناظر با ماژول‌های بک‌اند
 * می‌سازد تا یکپارچگی ذهنی در توسعه حفظ شود.
 * -------------------------------------------------------------
 */

import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";

// مسیر اصلی پروژه
const BASE_DIR = "F:/shirazMobile/shiraz-mobile-ui";
const SRC_DIR = path.join(BASE_DIR, "src");

// ---[ تنظیمات ساختار ]---

// ۱. ماژول‌های اصلی (دقیقاً مثل بک‌اند)
const MODULES = [
  "auth",       // مدیریت احراز هویت (Login/Register)
  "user",       // پروفایل کاربران (Admin, Seller, Customer)
  "product",    // کاتالوگ محصولات
  "order",      // سفارشات و سبد خرید
  "payment",    // درگاه پرداخت
  "inventory",  // انبارداری (برای پنل فروشنده)
  "marketing",  // بنرها و اسلایدرها (مخصوص فرانت)
];

// ۲. لایه‌های داخلی هر ماژول (اقتباس شده از Clean Arch برای React)
const MODULE_LAYERS = [
  "domain/entities",      // تایپ‌ها و اینترفیس‌های اصلی (Model)
  "data/repositories",    // توابع فراخوانی API
  "data/dtos",            // تبدیل داده‌های سرور به فرمت کلاینت
  "presentation/components", // کامپوننت‌های UI مختص این ماژول
  "presentation/hooks",      // لاجیک‌های React (Custom Hooks)
  "presentation/store",      // مدیریت استیت (Zustand/Context)
];

// ۳. هسته اصلی و مشترکات
const CORE_STRUCTURE = {
  "app": ["(public)", "(auth)", "(dashboard)"], // ساختار App Router نکست
  "core": [
    "config",         // تنظیمات محیطی
    "http",           // کلاینت Axios/Fetch
    "theme",          // تنظیمات رنگ و تایپوگرافی
    "utils",          // توابع کمکی عمومی
    "components/ui",  // کامپوننت‌های پایه (Button, Input - اتمیک)
    "hooks",          // هوک‌های عمومی
    "types",          // تایپ‌های گلوبال
  ],
};

// ---[ توابع کمکی ]---

const log = {
  info: (msg) => console.log(chalk.blue(msg)),
  success: (msg) => console.log(chalk.greenBright(msg)),
  warn: (msg) => console.log(chalk.yellow(msg)),
  error: (msg) => console.log(chalk.redBold(msg)),
};

function createFolder(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    // log.success(`   📁 ${path.basename(dirPath)}`);
  }
}

function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content.trim());
    log.success(`   📄 Created: ${path.basename(filePath)}`);
  }
}

// ---[ منطق ساخت پروژه ]---

function initializeProject() {
  console.log(chalk.cyanBright("\n🚀 Initializing Shiraz Mobile UI (Clean Arch)...\n"));

  // ۱. ایجاد فولدر ریشه
  createFolder(SRC_DIR);

  // ۲. ساخت لایه Core (هسته)
  log.info("🔹 Building Core Layer...");
  Object.entries(CORE_STRUCTURE).forEach(([folder, subFolders]) => {
    const folderPath = path.join(SRC_DIR, folder);
    createFolder(folderPath);
    subFolders.forEach(sub => createFolder(path.join(folderPath, sub)));
  });
  
  // ایجاد فایل HttpClient نمونه
  createFile(path.join(SRC_DIR, "core/http/client.ts"), `
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});
// اینجا می‌توانید Interceptorها را اضافه کنید
  `);

  // ۳. ساخت ماژول‌ها (قلب معماری)
  log.info("\n🔹 Building Feature Modules...");
  MODULES.forEach(moduleName => {
    const modulePath = path.join(SRC_DIR, "modules", moduleName);
    createFolder(modulePath);
    
    MODULE_LAYERS.forEach(layer => {
      createFolder(path.join(modulePath, layer));
    });

    // ایجاد فایل Barrel (index.ts) برای هر ماژول جهت تمیزی ایمپورت‌ها
    createFile(path.join(modulePath, "index.ts"), `
// Public API for ${moduleName} module
export * from './domain/entities';
export * from './presentation/components';
    `);
  });

  // ۴. ساخت فایل‌های پایه Next.js (App Router)
  log.info("\n🔹 Setting up Next.js App Router...");
  
  // صفحه اصلی
  createFile(path.join(SRC_DIR, "app/page.tsx"), `
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Shiraz Mobile 📱</h1>
      <p>Welcome to the best mobile accessories shop.</p>
      <div className="flex gap-4">
        <Link href="/products" className="text-blue-500 hover:underline">View Products</Link>
      </div>
    </main>
  );
}
  `);

  // لی‌اوت اصلی
  createFile(path.join(SRC_DIR, "app/layout.tsx"), `
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Shiraz Mobile",
  description: "Premium Mobile Accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
  `);

  // ۵. ایجاد فایل‌های استایل و تنظیمات
  const stylesDir = path.join(SRC_DIR, "styles");
  createFolder(stylesDir);
  createFile(path.join(stylesDir, "globals.css"), `
@tailwind base;
@tailwind components;
@tailwind utilities;
  `);

  // ۶. نصب پکیج‌های ضروری (پیشنهادی)
  log.info("\n📦 Dependencies Recommendation:");
  console.log(chalk.gray(`
  Run these commands to install recommended libraries for Clean Arch:
  > npm install axios zustand @tanstack/react-query clsx tailwind-merge lucide-react
  `));

  log.success("\n✅ Project structure successfully created based on Clean Architecture!");
}

// اجرای اسکریپت
try {
  initializeProject();
} catch (error) {
  log.error(`❌ Error: ${error.message}`);
}
