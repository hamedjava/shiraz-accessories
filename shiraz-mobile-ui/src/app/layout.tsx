// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiraz Mobile | فروشگاه لوازم موبایل",
  description: "فروشگاه آنلاین شیراز موبایل - لوازم جانبی، قاب، محافظ، هندزفری و ...",
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
        }}
      >
        {children}
      </body>
    </html>
  );
}
