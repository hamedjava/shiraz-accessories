/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/app/page.tsx
 * 🎯 وظیفه: طراحی کامل صفحه‌ی Home (صفحه اصلی سایت فروش لوازم جانبی موبایل)
 * 🧩 تکنولوژی‌ها: Next.js + MUI Joy + Framer Motion + Axios
 * -------------------------------------------------------------
 */

'use client';

import React from 'react';
import { Box, Container, Stack } from '@mui/joy';

import HeroSection from './widgets/HeroSection/index';
import SearchBar from './widgets/SearchBar/index';
import CategorySection from './widgets/CategorySection/index';
// import FeaturedProductsSection from './widgets/FeaturedProducts/';
// import PromotionBanner from './widgets/PromotionBanner/';
// import AuthSection from './widgets/AuthSection/';
// import Footer from './widgets/';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={6}>
        {/* 1️⃣ بخش نمایش برند و Hero */}
        <HeroSection />

        {/* 2️⃣ نوار جستجو */}
        <SearchBar />

        {/* 3️⃣ دسته‌بندی محصولات */}
        <CategorySection />

        {/* 4️⃣ محصولات برجسته */}
       
      </Stack>
    </Container>
  );
}
