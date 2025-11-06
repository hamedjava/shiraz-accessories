// src/components/Header/AuthSection.tsx
"use client";

import { Stack, Button } from "@mui/joy";
import PersonIcon from "@mui/icons-material/Person";

export default function AuthSection() {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Button
        variant="outlined"
        color="neutral"
        size="sm"
        sx={{
          borderRadius: "20px",
          fontSize: "0.85rem",
          px: 2,
          py: 0.5,
          textTransform: "none",
        }}
        startDecorator={<PersonIcon />}
      >
        ورود
      </Button>
      <Button
        variant="solid"
        color="danger"
        size="sm"
        sx={{
          borderRadius: "20px",
          fontSize: "0.85rem",
          px: 2,
          py: 0.5,
          textTransform: "none",
        }}
      >
        ثبت‌نام
      </Button>
    </Stack>
  );
}
