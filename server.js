import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/database.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`✅ سرور روی پورت ${PORT} اجرا شد.`));
  } catch (err) {
    console.error('❌ خطا در اتصال به دیتابیس:', err.message);
    process.exit(1);
  }
})();
