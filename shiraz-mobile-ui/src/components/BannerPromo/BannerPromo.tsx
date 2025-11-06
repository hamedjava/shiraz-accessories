// src/components/BannerPromo/BannerPromo.tsx
"use client";

import { Box, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ads = [
  "🔥 حراج ویژه جمعه سیاه - تا 50% تخفیف",
  "🛒 ارسال رایگان برای سفارش‌های بالای 500 هزار تومان",
  "📱 موجودی جدید قاب‌های iPhone 16 رسید!",
];

export default function BannerPromo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % ads.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: 1,
        bgcolor: "#E60023",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "absolute" }}
      >
        <Typography level="body-sm" sx={{ fontWeight: 600 }}>
          {ads[index]}
        </Typography>
      </motion.div>
    </Box>
  );
}
