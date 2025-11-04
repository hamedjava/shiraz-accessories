/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/app/page.tsx
 * 🎯 وظیفه: طراحی ساختار کلی صفحهٔ Home شامل بخش‌های مستقل و ماژولار (Hero، Category، Product و ...)
 * 🧩 تکنولوژی‌ها: MUI Joy + Framer Motion + Clean UI
 * -------------------------------------------------------------
 */

'use client';

import React from 'react';
import { Box } from '@mui/joy';
import HeroSection from './widgets/home/HeroSection';
import CategorySection from './widgets/home/CategorySection';
import FeaturedProductsSection from './widgets/home/FeaturedProductsSection';
import PromotionBanner from './widgets/home/PromotionBanner';
import AboutBrandSection from './widgets/home/AboutBrandSection';
import TestimonialsSection from './widgets/home/TestimonialsSection';
import NewsletterSection from './widgets/home/NewsletterSection';
import Footer from './widgets/home/Footer';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, py: 4 }}>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <PromotionBanner />
      <AboutBrandSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </Box>
  );
}
