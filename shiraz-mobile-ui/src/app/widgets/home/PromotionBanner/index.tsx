/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/PromotionBanner/index.tsx
 * 🎯 وظیفه: نمایش بنر تبلیغاتی یا تخفیف ویژه در وسط صفحه با CTA مشخص
 * 🧩 تکنولوژی‌ها: MUI Joy + Framer Motion
 * -------------------------------------------------------------
 */
'use client';

import { Box, Typography, Button } from '@mui/joy';
import { motion } from 'framer-motion';

export default function PromotionBanner() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #00bfa5 0%, #006b5e 100%)',
        color: 'white',
        p: 5,
        textAlign: 'center',
        boxShadow: 'sm',
      }}
    >
      <Typography level="h3" sx={{ mb: 2 }}>
        📣 جشنواره تخفیف بزرگ شیراز موبایل!
      </Typography>
      <Typography level="body-md" sx={{ mb: 4 }}>
        جدیدترین مدل‌های گوشی با تخفیف تا ۳۰٪ فقط تا پایان این هفته.
      </Typography>
      <Button size="lg" variant="solid" color="neutral">
        همین حالا خرید کن
      </Button>
    </Box>
  );
}
