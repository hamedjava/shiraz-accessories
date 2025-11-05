/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/app/widgets/home/SearchBar/index.tsx
 * 🎯 وظیفه: نوار جستجو در بالای صفحه Home
 * -------------------------------------------------------------
 */

'use client';

import React from 'react';
import { Input, Box } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Input
        startDecorator={<SearchIcon />}
        placeholder="جستجوی لوازم جانبی..."
        sx={{
          width: '70%',
          borderRadius: 'md',
          backdropFilter: 'blur(8px)',
          bgcolor: 'neutral.softBg',
        }}
      />
    </Box>
  );
}
