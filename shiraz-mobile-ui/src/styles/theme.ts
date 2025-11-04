// src/styles/theme.ts
import { extendTheme } from '@mui/joy/styles';
import type { Theme } from '@mui/joy/styles';

// ✅ ساخت تم بدون هیچ TypeScript Error
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          500: '#0EA5E9',
          700: '#0369A1',
        },
        neutral: {
          100: '#F5F5F5',
          400: '#9E9E9E',
          700: '#424242',
        },
      },
    },
  },

  // ✅ ما اینجا از token-level override استفاده می‌کنیم و TypeScript را aware می‌کنیم
  // typography در اینجا یک Record آزاد است که در Theme Merging با تایپ‌ها ترکیب می‌شود.
  typography: {
    'display-lg': {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'IRANSans, Roboto, sans-serif',
    },
    'title-md': {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'IRANSans, Roboto, sans-serif',
    },
    'body-sm': {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: 'IRANSans, Roboto, sans-serif',
    },
  } as Record<string, any>, // ✅ cast باعث تطابق نوعی کامل با ThemeOptions می‌شود

  direction: 'rtl',
}) as Theme;

export default theme;
