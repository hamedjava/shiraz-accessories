// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FACC15', // زرد اصلی (پر انرژی)
          teal: '#0F766E',   // سبز کله‌غازی (لوکس و قابل اعتماد)
          dark: '#111827',   // مشکی خیلی نرم برای متون
          light: '#F9FAFB',  // سفید مایل به خاکستری برای پس‌زمینه
        }
      },
      fontFamily: {
        // فرض بر این است که بعدا فونت فارسی وزیر یا یکان را اضافه می‌کنید
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
