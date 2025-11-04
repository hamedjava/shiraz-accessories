/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/TestimonialsSection/index.tsx
 * 🎯 وظیفه: نمایش نظرات کاربران برای افزایش اعتماد کاربران جدید
 * 🧩 تکنولوژی‌ها: MUI Joy Card + Framer Motion Carousel
 * -------------------------------------------------------------
 */
'use client';

import { Card, CardContent, Typography, Grid, Avatar } from '@mui/joy';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'مریم رضایی',
    text: 'گوشی که سفارش دادم دقیقاً همونی بود که توی سایت دیدم، بسته‌بندی عالی!',
  },
  {
    id: 2,
    name: 'احمد صادقی',
    text: 'ارسال سریع و پشتیبانی حرفه‌ای، واقعاً شیراز موبایل قابل اعتماده.',
  },
  {
    id: 3,
    name: 'سارا کیانی',
    text: 'تجربه خرید فوق‌العاده‌ای بود، به همه پیشنهاد می‌کنم.',
  },
];

export default function TestimonialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Typography level="h3" textAlign="center" sx={{ mb: 4 }}>
        نظر مشتریان ما
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((t) => (
          <Grid key={t.id} xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card variant="outlined" sx={{ height: '100%', p: 3 }}>
                <CardContent>
                  <Avatar size="lg" sx={{ mb: 2 }}>
                    {t.name[0]}
                  </Avatar>
                  <Typography sx={{ mb: 1, fontWeight: 'bold' }}>{t.name}</Typography>
                  <Typography level="body-sm" sx={{ color: 'neutral.700' }}>
                    “{t.text}”
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
