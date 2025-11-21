import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/globals.css"; // اگر ارور داد، به "./globals.css" تغییر دهید بسته به ساختار پوشه
import { Header } from "@/core/components/layout/Header";
import { Footer } from "@/core/components/layout/Footer";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazir",
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
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
        <Header />
        
        {/* محتوای اصلی صفحه */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
