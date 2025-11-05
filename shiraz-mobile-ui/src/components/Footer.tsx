"use client";

import { Box, Typography, Link } from "@mui/joy";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "neutral.outlinedBorder",
        mt: 4,
        py: 2,
        textAlign: "center"
      }}
    >
      <Typography level="body-sm" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Shiraz Mobile – All rights reserved.
      </Typography>
      <Link href="#" fontSize="sm" color="neutral">
        قوانین و مقررات
      </Link>
    </Box>
  );
}
