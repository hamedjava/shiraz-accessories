// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import ThemeRegistry from "../components/ThemeRegistry";
import { CssVarsProvider } from "@mui/joy/styles";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shiraz Mobile | فروشگاه لوازم موبایل",
  description:
    "فروشگاه آنلاین شیراز موبایل - لوازم جانبی، قاب، محافظ، هندزفری و ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "IRANSans, sans-serif",
          backgroundColor: "#f5f5f7",
          overflowX: "hidden",
        }}
      >
        {/* ✅ تمام پروژه داخل ThemeRegistry و Joy ThemeProvider */}
        <ThemeRegistry>
          <CssVarsProvider>
            {/* 🔹 Header در بالای کل صفحات نمایش داده می‌شود */}
            <Header />

            {/* 🔸 محتوای صفحه */}
            {children}

            {/* 🔹 Footer در پایین تمام صفحات */}
            <Footer />
          </CssVarsProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
