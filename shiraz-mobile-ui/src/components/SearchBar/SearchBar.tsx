// src/components/SearchBar/SearchBar.tsx
"use client";

import { useState } from "react";
import { Input, Box } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
        mb: 3,
        px: 2,
      }}
    >
      <motion.div
        animate={{
          width: focused ? "90%" : "70%",
          boxShadow: focused
            ? "0px 4px 20px rgba(230, 0, 35, 0.3)"
            : "0px 2px 10px rgba(0,0,0,0.1)",
          scale: focused ? 1.03 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          borderRadius: "30px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <Input
          placeholder="جستجوی محصول یا برند..."
          startDecorator={<SearchIcon />}
          size="lg"
          sx={{
            "--Input-focusedHighlight": "none",
            fontSize: "0.95rem",
            borderRadius: "30px",
            width: "100%",
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </motion.div>
    </Box>
  );
}
