/**
 * -------------------------------------------------------------
 * 📁 مسیر فایل: src/widgets/home/FeaturedProductsSection/index.tsx
 * 🎯 وظیفه: نمایش محصولات برگزیده با طراحی کارتی برای جذب کاربر
 * 🧩 تکنولوژی‌ها: MUI Joy Card + Framer Motion
 * -------------------------------------------------------------
 */
'use client';

import { Grid, Card, CardContent, Typography, Button } from '@mui/joy';
import { motion } from 'framer-motion';

const featuredProducts = [
    { id: 1, name: 'Shiraz Phone A1', price: '۸٬۵۰۰٬۰۰۰ تومان' },
    { id: 2, name: 'Shiraz Tab X', price: '۱۲٬۰۰۰٬۰۰۰ تومان' },
    { id: 3, name: 'Shiraz Watch', price: '۲٬۰۰۰٬۰۰۰ تومان' },
];

export default function FeaturedProductsSection() {
    return (
        <>
            <Typography level="h3" textAlign="center" sx={{ mb: 4 }}>
                محصولات برگزیده
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {featuredProducts.map(product => (
                    <Grid key={product.id} xs={12} sm={6} md={4}>
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card variant="outlined" sx={{ height: '100%', p: 2 }}>
                                <CardContent>
                                    <Typography level="title-lg" textAlign="center" sx={{ mb: 4 }}>
                                        محصولات برگزیده
                                    </Typography>
                                    <Typography sx={{ mb: 2 }}>{product.price}</Typography>
                                    <Button fullWidth color="primary">افزودن به سبد خرید</Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
