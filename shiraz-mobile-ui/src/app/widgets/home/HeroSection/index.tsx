/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/HeroSection/index.tsx
 * 🎯 وظیفه: طراحی سکشن ابتدایی Home شامل بنر اصلی، مقدمهٔ فروشگاه و دکمه فراخوانی (CTA)
 * 🧩 تکنولوژی‌ها: MUI Joy + Framer Motion
 * -------------------------------------------------------------
 */
'use client';

import { Box, Typography, Button } from '@mui/joy';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        background: 'linear-gradient(to left, #00bfa5, #006b5e)',
        color: 'white',
        borderRadius: 8,
      }}
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography level="h2" sx={{ mb: 2 }}>
        شیراز موبایل، دنیای هوشمند شما
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4 }}>
        جدیدترین محصولات دیجیتال، از گوشی تا ساعت هوشمند در یک جا!
      </Typography>
      <Button variant="solid" color="neutral" size="lg">
        مشاهده محصولات
      </Button>
    </Box>
  );
}
