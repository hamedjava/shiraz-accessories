/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/Footer/index.tsx
 * 🎯 وظیفه: نمایش بخش انتهایی سایت شامل لینک‌ها، اطلاعات تماس و کپی‌رایت
 * 🧩 تکنولوژی‌ها: MUI Joy Grid + Typography
 * -------------------------------------------------------------
 */
'use client';

import { Grid, Typography, Box, Link } from '@mui/joy';

export default function Footer() {
    return (
        <Box
            sx={{
                mt: 8,
                py: 4,
                borderTop: '1px solid',
                borderColor: 'neutral.outlinedBorder',
                backgroundColor: 'background.level1',
            }}
        >
            <Grid container spacing={3} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Grid xs={12} md={4}>
                    <Typography level="title-md" sx={{ mb: 1 }}>
                        شیراز موبایل
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'neutral.600' }}>
                        هرآنچه از تکنولوژی نیاز دارید، در دسترس شماست.
                    </Typography>

                </Grid>

                <Grid xs={12} md={4}>
                    <Typography level="title-md" sx={{ mb: 1 }}>
                        لینک‌های مفید
                    </Typography>
                    <Box>
                        <Link href="#">درباره ما</Link>
                        <br />
                        <Link href="#">تماس با ما</Link>
                        <br />
                        <Link href="#">سؤالات متداول</Link>
                    </Box>
                </Grid>

                <Grid xs={12} md={4}>
                    <Typography level="title-md" sx={{ mb: 1 }}>
                        تماس با ما
                    </Typography>
                    <Typography level="body-sm">📞 ۰۷۱-۳۲۳۴۵۶۷۸</Typography>
                    <Typography level="body-sm">📍 شیراز، خیابان معالی‌آباد، پلاک ۲۲</Typography>
                </Grid>
            </Grid>

            <Typography level="body-xs" textAlign="center" sx={{ mt: 4, color: 'neutral.500' }}>
                © ۱۴۰۴ تمامی حقوق برای شیراز موبایل محفوظ است.
            </Typography>
        </Box>
    );
}
