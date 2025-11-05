/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/app/widgets/home/HeroSection/index.tsx
 * 🎯 وظیفه: بنر معرفی برند و CTA اصلی صفحه
 * -------------------------------------------------------------
 */

'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/joy';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{
        height: 400,
        borderRadius: 'lg',
        background: 'linear-gradient(135deg, #0F2027 0%, #2C5364 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 4,
      }}
    >
      <Typography level="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        فروشگاه لوازم جانبی موبایل شیراز موبایل
      </Typography>
      <Typography level="title-md" sx={{ opacity: 0.9, mb: 3 }}>
        جدیدترین قاب‌ها، هندزفری‌ها، کابل‌ها و شارژرهای روز بازار را اینجا پیدا کنید.
      </Typography>
      <Button
        size="lg"
        variant="soft"
        sx={{
          bgcolor: 'primary.softBg',
          '&:hover': { bgcolor: 'primary.solidBg' },
        }}
      >
        مشاهده محصولات
      </Button>
    </Box>
  );
}
