"use client";

import { Box, Button, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import bannerPromoHeroImport from "../../../assets/images/banner-promo-hero.png";

const bannerPromoHero =
  typeof bannerPromoHeroImport === "string"
    ? bannerPromoHeroImport
    : (bannerPromoHeroImport as { src: string }).src;

export default function BannerSection() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #fff6f7 0%, #ffe5e8 50%, #ffd9df 100%)",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 4, md: 10 },
        fontFamily: 'Vazirmatn, "IRANYekanX", sans-serif',
      }}
    >
      {/* لایه‌های نوری پس‌زمینه */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-80px",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(230,0,35,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-80px",
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(255,160,175,0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      {/* متن تبلیغاتی */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "right" },
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.9rem", md: "2.7rem" },
            color: "#E60023",
            letterSpacing: "-0.03em",
            mb: 1.5,
          }}
        >
          بزرگ‌ترین مارکت موبایل و اکسسوری در شیراز 📱
        </Typography>

        <Typography
          level="body-md"
          sx={{
            color: "#333",
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            lineHeight: 1.9,
            mb: 4,
            maxWidth: 580,
            mx: { xs: "auto", md: 0 },
          }}
        >
          به <b>Shiraz Mobile</b> خوش اومدی!  
          اینجا می‌تونی جدیدترین محصولات موبایل، کیس، گلس، کابل و لوازم جانبی
          رو با بهترین قیمت ببینی 👀  
          یا اگر فروشنده‌ای، با چند کلیک ساده وارد بازار فروش بشی و فروشگاه
          دیجیتال خودتو بسازی 🚀  
          <br />
          ما کنارت هستیم با پشتیبانی واقعی، آمار حرفه‌ای و طراحی فروشگاه شخصی.
        </Typography>

        {/* دکمه‌های CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            size="lg"
            sx={{
              bgcolor: "#E60023",
              color: "#fff",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: "9999px",
              fontSize: "1.05rem",
              boxShadow: "0 6px 25px rgba(230,0,35,0.4)",
              "&:hover": { bgcolor: "#c2001d" },
            }}
          >
            خرید محصولات 🔍
          </Button>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            size="lg"
            variant="soft"
            sx={{
              borderRadius: "9999px",
              border: "2px solid rgba(230,0,35,0.2)",
              color: "#E60023",
              fontWeight: 600,
              px: 5,
              py: 1.8,
              fontSize: "1.05rem",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              "&:hover": { background: "rgba(255,255,255,0.7)" },
            }}
          >
            شروع فروش 💼
          </Button>
        </Box>
      </Box>

      {/* تصویر گرافیکی با انیمیشن */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Box
          component={motion.img}
          src={bannerPromoHero}
          alt="بنر تبلیغاتی بازار موبایل شیراز"
          width="100%"
          sx={{
            maxWidth: 480,
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        />

        {/* افکت نور متحرک */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 6 }}
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(230,0,35,0.25) 0%, transparent 70%)",
            filter: "blur(45px)",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
}
