/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/NewsletterSection/index.tsx
 * 🎯 وظیفه: جمع‌آوری ایمیل کاربران برای ارسال خبرنامه و تخفیفات
 * 🧩 تکنولوژی‌ها: MUI Joy Input + Button + Framer Motion
 * -------------------------------------------------------------
 */
'use client';

import { Box, Typography, Input, Button } from '@mui/joy';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        textAlign: 'center',
        p: 6,
        borderRadius: 12,
        boxShadow: 'sm',
        bgcolor: 'background.surface',
      }}
    >
      <Typography level="h4" sx={{ mb: 2 }}>
        عضویت در خبرنامه ما
      </Typography>
      <Typography level="body-sm" sx={{ mb: 3, color: 'neutral.600' }}>
        از جدیدترین تخفیف‌ها و محصولات خاص مطلع شوید
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Input
          placeholder="ایمیل خود را وارد کنید"
          size="lg"
          sx={{ width: { xs: '100%', sm: '300px' } }}
        />
        <Button size="lg" variant="solid" color="primary">
          عضویت
        </Button>
      </Box>
    </Box>
  );
}
