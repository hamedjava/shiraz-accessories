#!/usr/bin/env node
/**
 * 🧠 ابزار ساخت پروژه بر اساس معماری Clean Architecture (نسخه ESM)
 * -----------------------------------------------------
 * ✨ این نسخه به صورت خودکار ساختار کامل پروژه Node.js شما را با معماری Clean Architecture
 * و استفاده از ESM (import/export) می‌سازد.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// تنظیم مسیر جاری و __dirname جایگزین در ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`
=========================================
🧠 ابزار ساخت پروژه Clean Architecture (ESM)
=========================================
`);

// مسیر ریشه پروژه
const مسیر_پروژه = process.cwd();

//------------------------------------------------
// 📂 پوشه‌ها و ساختار پایه پروژه
//------------------------------------------------
const پوشه‌های_پایه = [
    "src/config",
    "src/core/errors",
    "src/core/middlewares",
    "src/core/utils",
    "src/interfaces/http",
    "src/tests/unit",
    "src/tests/integration",
];

const ماژول‌ها = [
    "user/admin",
    "user/seller",
    "user/customer",
    "product",
    "payment",
    "order",
    "inventory",
];

const لایه‌ها = [
    "domain/entities",
    "domain/usecases",
    "application/services",
    "infrastructure/repositories",
    "interfaces/http",
    "interfaces/controllers",
    "tests",
];

//------------------------------------------------
// 📁 مرحله ۱: ایجاد پوشه‌ها
//------------------------------------------------
function ایجاد_پوشه_ها() {
    console.log("📁 در حال ساخت پوشه‌های پروژه...");
    پوشه‌های_پایه.forEach((p) =>
        fs.mkdirSync(path.join(مسیر_پروژه, p), { recursive: true })
    );
    ماژول‌ها.forEach((m) => {
        لایه‌ها.forEach((l) =>
            fs.mkdirSync(path.join(مسیر_پروژه, `src/modules/${m}/${l}`), {
                recursive: true,
            })
        );
    });
    console.log("✅ پوشه‌ها با موفقیت ساخته شدند.\n");
}

//------------------------------------------------
// 📦 مرحله ۲: نصب پکیج‌ها
//------------------------------------------------
function نصب_پکیج_ها() {
    if (fs.existsSync(path.join(مسیر_پروژه, "node_modules"))) {
        console.log("⚡ پکیج‌ها قبلاً نصب شده‌اند.\n");
        return;
    }

    const پکیج_اصلی = [
        "express",
        "mongoose",
        "dotenv",
        "helmet",
        "cors",
        "morgan",
        "express-rate-limit",
        "bcrypt",
        "jsonwebtoken",
    ];
    const پکیج_توسعه = ["nodemon", "jest", "supertest"];

    console.log("📦 نصب پکیج‌های اصلی...");
    execSync(`npm install ${پکیج_اصلی.join(" ")} --save`, { stdio: "inherit" });

    console.log("🧰 نصب پکیج‌های توسعه...");
    execSync(`npm install ${پکیج_توسعه.join(" ")} --save-dev`, {
        stdio: "inherit",
    });

    console.log("✅ پکیج‌ها نصب شدند.\n");
}

//------------------------------------------------
// 🧱 مرحله ۳: ایجاد فایل‌های پروژه
//------------------------------------------------
function ایجاد_فایل_ها() {
    console.log("🗂 ایجاد فایل‌های پروژه...");

    //-------------------------------------------------
    // 🔹 server.js
    //-------------------------------------------------
    fs.writeFileSync(
        "server.js",
        `import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/database.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(\`✅ سرور روی پورت \${PORT} اجرا شد.\`));
  } catch (err) {
    console.error('❌ خطا در اتصال به دیتابیس:', err.message);
    process.exit(1);
  }
})();
`
    );

    //-------------------------------------------------
    // 🔹 src/app.js
    //-------------------------------------------------
    fs.writeFileSync(
        "src/app.js",
        `import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import routes from './interfaces/http/api.js';
import { errorHandler } from './core/middlewares/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

app.use('/api', routes);
app.use(errorHandler);

export default app;
`
    );

    //-------------------------------------------------
    // 🔹 src/core/errors/customError.js
    //-------------------------------------------------
    fs.writeFileSync(
        "src/core/errors/customError.js",
        `export class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
`
    );

    //-------------------------------------------------
    // 🔹 src/core/middlewares/errorHandler.js
    //-------------------------------------------------
    fs.writeFileSync(
        "src/core/middlewares/errorHandler.js",
        `import { CustomError } from '../errors/customError.js';

export function errorHandler(err, req, res, next) {
  console.error('🔥 خطا:', err.message);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'خطای داخلی سرور',
  });
}
`
    );

    //-------------------------------------------------
    // 🔹 src/config/database.js
    //-------------------------------------------------
    fs.writeFileSync(
        "src/config/database.js",
        `import mongoose from 'mongoose';

export default async function connectDB() {
  const uri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/cleanarch-shop';
  await mongoose.connect(uri);
  console.log('✅ اتصال به MongoDB برقرار شد.');

  mongoose.connection.on('error', (err) =>
    console.error('🚨 خطای پایگاه داده:', err.message)
  );
}
`
    );

    //-------------------------------------------------
    // 🔹 src/interfaces/http/api.js
    //-------------------------------------------------
    fs.writeFileSync(
        "src/interfaces/http/api.js",
        `import express from 'express';
import customerRoutes from '../../modules/user/customer/interfaces/http/customerRoutes.js';
const router = express.Router();

router.use('/customers', customerRoutes);
router.get('/', (req, res) => res.json({ message: '✅ API فعال است' }));

export default router;
`
    );

    //-------------------------------------------------
    // 🔹 نمونه ماژول Customer
    //-------------------------------------------------
    const مسیر_ماژول = "src/modules/user/customer";
    fs.mkdirSync(path.join(مسیر_ماژول, "interfaces/controllers"), {
        recursive: true,
    });

    fs.writeFileSync(
        path.join(مسیر_ماژول, "interfaces/http/customerRoutes.js"),
        `import express from 'express';
import * as controller from '../controllers/customerController.js';
const router = express.Router();

router.get('/', controller.getAll);
export default router;
`
    );

    fs.writeFileSync(
        path.join(مسیر_ماژول, "interfaces/controllers/customerController.js"),
        `import { getAllCustomers } from '../../application/services/customerService.js';

export async function getAll(req, res, next) {
  try {
    const result = await getAllCustomers();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}
`
    );

    fs.writeFileSync(
        path.join(مسیر_ماژول, "application/services/customerService.js"),
        `export async function getAllCustomers() {
  return [
    { id: 1, name: 'کاربر نمونه ۱' },
    { id: 2, name: 'کاربر نمونه ۲' },
  ];
}
`
    );

    fs.writeFileSync(
        path.join(مسیر_ماژول, "tests/customer.test.js"),
        `import request from 'supertest';
import app from '../../../app.js';

describe('آزمون API مشتریان', () => {
  it('باید لیست مشتریان را برگرداند', async () => {
    const res = await request(app).get('/api/customers');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
`
    );

    //-------------------------------------------------
    // 🔹 فایل‌های محیطی و پیکربندی
    //-------------------------------------------------
    fs.writeFileSync(
        ".env",
        `PORT=3000
DB_URI=mongodb://127.0.0.1:27017/cleanarch-shop
JWT_SECRET=MySecretKey
TOKEN_EXPIRES_IN=1d
`
    );

    fs.writeFileSync(
        ".gitignore",
        `node_modules/
.env
coverage/
logs/
`
    );

    fs.writeFileSync(
        "jest.config.js",
        `export default {
  testEnvironment: 'node',
  verbose: true,
  coverageDirectory: 'coverage',
};
`
    );

    //-------------------------------------------------
    // 🔹 package.json (برای ESM)
    //-------------------------------------------------
    const packageData = {
        name: "cleanarch-shop",
        version: "1.0.0",
        description: "🛍️ فروشگاه اینترنتی بر اساس معماری Clean Architecture با ESM",
        type: "module", // 👈 کلیدی‌ترین بخش برای ESM
        main: "server.js",
        scripts: {
            start: "node server.js",
            dev: "nodemon server.js",
            test: "jest --runInBand",
        },
        author: "حامد",
        license: "MIT",
        keywords: [
            "nodejs",
            "clean-architecture",
            "express",
            "mongodb",
            "ecommerce",
            "esm",
        ],
    };

    fs.writeFileSync("package.json", JSON.stringify(packageData, null, 2));

    console.log("✅ تمام فایل‌ها با موفقیت ایجاد شدند.\n");
}

//------------------------------------------------
// 🚀 اجرای اسکریپت
//------------------------------------------------
(async () => {
    try {
        ایجاد_پوشه_ها();
        نصب_پکیج_ها();
        ایجاد_فایل_ها();
        console.log(`
🎉 پروژه با موفقیت بر اساس ESM ساخته شد!
------------------------------------------
👉 برای اجرا:
   npm run dev
------------------------------------------`);
    } catch (err) {
        console.error("❌ خطا:", err.message);
    }
})();
