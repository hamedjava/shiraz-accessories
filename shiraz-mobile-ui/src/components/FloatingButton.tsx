"use client";

import { IconButton } from "@mui/joy";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
      }}
    >
      <IconButton
        variant="solid"
        color="danger"
        size="lg"
        sx={{
          bgcolor: "#E60023",
          color: "#fff",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(230, 0, 35, 0.5)",
          "&:hover": {
            bgcolor: "#c2001d",
            transform: "rotate(10deg) scale(1.08)",
          },
          transition: "all .3s ease",
        }}
        onClick={() => alert("پشتیبانی آنلاین شیراز موبایل")}
      >
        <ChatRoundedIcon />
      </IconButton>
    </motion.div>
  );
}
