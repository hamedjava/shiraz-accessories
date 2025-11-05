"use client";

import { Box, Button, Typography } from "@mui/joy";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography level="h1" sx={{ mb: 1 }}>
          جدیدترین مدل‌های موبایل 🎉
        </Typography>
        <Typography level="body-lg" sx={{ mb: 3 }} color="neutral">
          بهترین قیمت، ارسال سریع، ضمانت اصالت کالا
        </Typography>
        <Button size="lg" color="primary">مشاهده محصولات</Button>
      </motion.div>
    </Box>
  );
}
