"use client";

import React from "react";
import Link from "next/link";
import { Box, Input, IconButton, Typography, Button } from "@mui/joy";
import Image from "next/image";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import LoginOutlined from "@mui/icons-material/LoginOutlined";
import { useTheme } from "@mui/joy/styles";

import logo from "../../../src/assets/images/logo-red2.svg";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      dir="rtl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: 1.2,
        bgcolor: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 1200,
        boxShadow: "0 2px 10px rgba(230,0,35,0.08)",
      }}
    >
      {/* ---------- لوگو ---------- */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            src={logo}
            alt="Shiraz Mobile"
            width={42}
            height={42}
            priority
            style={{ objectFit: "contain" }}
          />
          <Typography
            level="h4"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              background: "linear-gradient(90deg, #E60023 0%, #FF4B6E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shiraz Mobile
          </Typography>
        </Box>
      </Link>

      {/* ---------- نوار جستجو ---------- */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Input
          startDecorator={<Search sx={{ color: "#E60023" }} />}
          placeholder="جستجو بین هزاران کالا..."
          variant="soft"
          sx={{
            width: { xs: "100%", sm: "90%", md: "75%" },
            bgcolor: "#f9f9f9",
            borderRadius: "xl",
            height: 42,
            fontSize: "0.9rem",
            pl: 1,
            transition: "all 0.3s ease",
            "&:focus-within": {
              background: "#fff",
              boxShadow: "0 0 0 2px rgba(230,0,35,0.25)",
            },
          }}
        />
      </Box>

      {/* ---------- آیکون‌ها و دکمه ورود ---------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: "fit-content",
        }}
      >
        {/* آیکون اعلان */}
        <IconButton
          size="lg"
          variant="plain"
          color="neutral"
          sx={{
            color: "#757575",
            "&:hover": {
              color: "#E60023",
              bgcolor: "rgba(230,0,35,0.04)",
            },
          }}
        >
          <NotificationsNoneOutlined />
        </IconButton>

        {/* آیکون سبد خرید */}
        <IconButton
          size="lg"
          variant="plain"
          color="neutral"
          sx={{
            color: "#757575",
            "&:hover": {
              color: "#E60023",
              bgcolor: "rgba(230,0,35,0.04)",
            },
          }}
        >
          <ShoppingCartOutlined />
        </IconButton>

        {/* دکمه ورود */}
        <Button
          variant="solid"
          size="md"
          startDecorator={<LoginOutlined />}
          sx={{
            borderRadius: "md",
            fontWeight: 600,
            px: 2.3,
            bgcolor: "#E60023",
            backgroundImage:
              "linear-gradient(90deg, #E60023 0%, #FF4B6E 100%)",
            color: "#fff",
            "&:hover": {
              opacity: 0.9,
              boxShadow: "0 3px 10px rgba(230,0,35,0.25)",
            },
          }}
        >
          ورود / ثبت‌نام
        </Button>
      </Box>
    </Box>
  );
}
