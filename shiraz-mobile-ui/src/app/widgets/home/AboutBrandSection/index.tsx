/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/AboutBrandSection/index.tsx
 * 🎯 وظیفه: معرفی برند و فلسفه فروشگاه به کاربر (اعتمادسازی + هویت)
 * 🧩 تکنولوژی‌ها: MUI Joy + Framer Motion + Grid
 * -------------------------------------------------------------
 */
'use client';

import { Box, Typography, Grid, AspectRatio } from '@mui/joy';
import { motion } from 'framer-motion';

export default function AboutBrandSection() {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{ py: 6 }}
    >
      <Grid xs={12} md={6}>
        <AspectRatio ratio="16/9" sx={{ borderRadius: 12, overflow: 'hidden' }}>
          <img
            src="/images/about-brand.jpg"
            alt="Shiraz Mobile Store"
            style={{ width: '100%', height: 'auto' }}
          />
        </AspectRatio>
      </Grid>

      <Grid xs={12} md={6}>
        <Typography level="h3" sx={{ mb: 2 }}>
          درباره شیراز موبایل
        </Typography>
        <Typography level="body-md" sx={{ mb: 3 }}>
          ما در شیراز موبایل بیش از ۱۰ سال است که با هدف ارائه‌ی جدیدترین
          محصولات دیجیتال و تکنولوژی‌های روز دنیا فعالیت می‌کنیم.
          تضمین اصالت کالا، خدمات پس از فروش واقعی و قیمت رقابتی از اصول ماست.
        </Typography>
        <Typography level="body-sm" sx={{ color: 'neutral.600' }}>
          از فروشگاه آنلاین تا تحویل درب منزل — تجربه‌ای سریع، مطمئن و متفاوت.
        </Typography>
      </Grid>
    </Grid>
  );
}
