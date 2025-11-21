import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC107", // زرد طلایی پررنگ (اصلی)
          dark: "#1A1A1A",   // مشکی ذغالی (برای فوتر و هدر)
          gray: "#F5F5F5",   // طوسی روشن (پس زمینه)
          teal: "#00897B",   // رنگ فرعی (برای تنوع جزئی)
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
