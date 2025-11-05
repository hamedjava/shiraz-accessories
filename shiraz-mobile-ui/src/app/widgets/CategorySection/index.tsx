/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/app/widgets/home/CategorySection/index.tsx
 * 🎯 وظیفه: نمایش دسته‌بندی محصولات با کارت‌های زیبا
 * -------------------------------------------------------------
 */

'use client';

import React from 'react';
import { Grid, Card, Typography } from '@mui/joy';

const categories = [
  { title: 'قاب موبایل', image: '/images/case.png' },
  { title: 'هندزفری', image: '/images/headphone.png' },
  { title: 'کابل و شارژر', image: '/images/cable.png' },
  { title: 'گلس', image: '/images/glass.png' },
];

export default function CategorySection() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {categories.map((cat) => (
        <Grid xs={6} sm={3} key={cat.title}>
          <Card
            variant="outlined"
            sx={{
              p: 2,
              textAlign: 'center',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: 'md' },
            }}
          >
            <img src={cat.image} alt={cat.title} style={{ height: 80, marginBottom: 10 }} />
            <Typography level="title-md">{cat.title}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
