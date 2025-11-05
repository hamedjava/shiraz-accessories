"use client";

import { Fab } from "@mui/material";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
      }}
    >
      <Fab
        color="primary"
        size="medium"
        sx={{
          boxShadow: 3,
          bgcolor: "primary.main",
          "&:hover": { bgcolor: "primary.dark" },
        }}
        onClick={() => alert("در تماس با پشتیبانی شیراز موبایل!")}
      >
        <ChatRoundedIcon />
      </Fab>
    </motion.div>
  );
}
