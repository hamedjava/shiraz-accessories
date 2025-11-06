"use client";

import { Box } from "@mui/joy";

// 🔹 نوار تبلیغات بالای صفحه (اسلایدی و انیمیشنی)
import BannerPromo from "../components/BannerPromo/BannerPromo";

// 🔹 نوار جستجو با انیمیشن متمایز
import SearchBar from "../components/SearchBar/SearchBar";

// 🔹 سکشن اصلی معرفی کسب‌وکار (Hero Section)
import HeroSection from "../components/HeroSection";

// 🔹 بنر تبلیغاتی ثانویه (نمایش عکس تبلیغی یا برند مارکت‌پلیس)
import BannerSection from "../app/widgets/BannerSecion/BannerSection";

// 🔹 گرید محصولات / پیشنهادات ویژه
import ProductGrid from "../components/ProductGrid";

// 🔹 دکمه شناور پشتیبانی
import FloatingButton from "../components/FloatingButton";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.body",
        overflowX: "hidden",
      }}
    >
      {/* 🔸 نوار تبلیغی بالای صفحه */}
      <BannerPromo />

      {/* 🔸 نوار جستجو واکنش‌گرا */}
      <SearchBar />

      {/* 🔸 سکشن اصلی معرفی محصولات / برند */}
      <HeroSection />

      {/* 🔸 بنر تبلیغاتی (ثانویه یا کمپین‌ها) */}
      <BannerSection />

      {/* 🔸 شبکه محصولات یا دسته‌بندی‌ها */}
      <ProductGrid />

      {/* 🔸 دکمه شناور برای پشتیبانی آنلاین */}
      <FloatingButton />
    </Box>
  );
}
