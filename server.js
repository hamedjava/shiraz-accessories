import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/cleanarch-shop";

(async () => {
  try {
    await connectDB(DB_URI);
    console.log("✅ اتصال به پایگاه داده برقرار شد.");

    app.listen(PORT, () => {
      console.log("=====================================");
      console.log(`✅ سرور روی پورت ${PORT} اجرا شد.`);
      console.log(`🌐 مسیر API: http://localhost:${PORT}/api`);
      console.log("=====================================");
    });
  } catch (err) {
    console.error("❌ خطا در اتصال پایگاه داده:", err.message);
    process.exit(1);
  }
})();
