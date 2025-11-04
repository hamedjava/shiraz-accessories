/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/CategorySection/index.tsx
 * 🎯 وظیفه: نمایش دسته‌بندی‌های اصلی محصولات با آیکون و نام دسته
 * 🧩 تکنولوژی‌ها: MUI Joy Grid + Framer Motion برای تعاملات hover
 * -------------------------------------------------------------
 */
'use client';

import { Grid, Typography, Box } from '@mui/joy';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, title: 'گوشی موبایل', icon: '📱' },
  { id: 2, title: 'تبلت', icon: '💻' },
  { id: 3, title: 'ساعت هوشمند', icon: '⌚' },
  { id: 4, title: 'لوازم جانبی', icon: '🔌' },
];

export default function CategorySection() {
  return (
    <Box>
      <Typography level="h3" textAlign="center" sx={{ mb: 4 }}>
        دسته‌بندی محصولات
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map(cat => (
          <Grid key={cat.id} xs={6} sm={3}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 250 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  borderRadius: 10,
                  p: 4,
                  boxShadow: 'md',
                  bgcolor: 'background.surface',
                }}
              >
                <Typography level="h1">{cat.icon}</Typography>
                <Typography sx={{ mt: 1 }}>{cat.title}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
