"use client";

import { Box, Button, Typography, useTheme } from "@mui/joy";
import { motion } from "framer-motion";

export default function HeroSection() {
  const theme = useTheme();
  const brandColor = "#E60023";

  // گرادینت هماهنگ با حالت دارک/لایت
  const backgroundGradient =
    theme.palette.mode === "dark"
      ? "radial-gradient(circle at top right, rgba(230,0,35,0.1) 0%, #121212 75%)"
      : "radial-gradient(circle at top right, #ffe5e8 0%, #ffffff 80%)";

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "85vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "background.body",
        background: backgroundGradient,
        overflow: "hidden",
        px: { xs: 2, sm: 4 },
      }}
    >
      {/* المان‌های تزئینی ملایم‌تر و optimized */}
      {[
        {
          size: 90,
          top: "12%",
          left: "14%",
          color: "rgba(230,0,35,0.08)",
          duration: 7,
        },
        {
          size: 65,
          bottom: "10%",
          right: "20%",
          color: "rgba(230,0,35,0.12)",
          duration: 5,
        },
      ].map((circle, idx) => (
        <Box
          key={idx}
          component={motion.div}
          animate={{ y: [0, circle.size * 0.1, 0] }}
          transition={{
            repeat: Infinity,
            duration: circle.duration,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            ...(circle.top && { top: circle.top }),
            ...(circle.left && { left: circle.left }),
            ...(circle.bottom && { bottom: circle.bottom }),
            ...(circle.right && { right: circle.right }),
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            background: circle.color,
            filter: "blur(3px)",
            opacity: 0.9,
          }}
        />
      ))}

      {/* محتوای اصلی */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <Typography
          level="h1"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            color: brandColor,
            lineHeight: 1.2,
            textShadow:
              theme.palette.mode === "dark"
                ? "0 1px 6px rgba(255,255,255,0.12)"
                : "0 1px 6px rgba(0,0,0,0.08)",
          }}
        >
          جدیدترین مدل‌های موبایل 🎉
        </Typography>

        <Typography
          level="body-lg"
          sx={{
            mb: 5,
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.15rem" },
            maxWidth: 600,
            mx: "auto",
          }}
        >
          بهترین قیمت، ارسال سریع و ضمانت اصالت کالا
        </Typography>

        <Button
          component={motion.button}
          size="lg"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          aria-label="مشاهده محصولات"
          variant="solid"
          sx={{
            px: 5,
            py: 1.6,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "xl",
            bgcolor: brandColor,
            color: "#fff",
            boxShadow: `0 6px 18px ${brandColor}40`,
            "&:hover": {
              bgcolor: "#C2001D",
              boxShadow: `0 8px 24px ${brandColor}50`,
            },
            transition: "all 0.3s ease",
          }}
        >
          مشاهده محصولات
        </Button>
      </motion.div>
    </Box>
  );
}
