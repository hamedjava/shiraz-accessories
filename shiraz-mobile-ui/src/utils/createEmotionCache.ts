"use client";

import createCache from "@emotion/cache";

// این تابع cache emotion با prefix سفارشی برای MUI می‌سازد
export default function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}
