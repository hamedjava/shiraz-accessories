import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/core/components/layout/Header";
import { Footer } from "@/core/components/layout/Footer";

// تنظیم فونت ایران‌یکان (TTF)
const iranYekan = localFont({
  src: [
    {
      path: "./fonts/yekan_normal.ttf",
      weight: "400", // استاندارد: ۴۰۰ برای متن معمولی
      style: "normal",
    },
    {
      path: "./fonts/yekan_bold.ttf",
      weight: "700", // استاندارد: ۷۰۰ برای متن بولد
      style: "normal",
    },
    // اگر در آینده فایل‌های Light یا Black را اضافه کردی، اینجا وارد کن
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mobile Shiraz | موبایل شیراز",
  description: "برترین لوازم جانبی موبایل در شیراز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranYekan.variable} font-sans antialiased bg-white min-h-screen flex flex-col text-gray-900`}
      >
        <Header />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
