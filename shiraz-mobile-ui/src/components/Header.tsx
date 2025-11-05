"use client";

import { Box, Typography } from "@mui/joy";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid",
        borderColor: "neutral.outlinedBorder",
        position: "sticky",
        top: 0,
        backdropFilter: "blur(8px)",
        zIndex: 10,
        bgcolor: "background.body"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <SmartphoneRoundedIcon color="primary" />
        <Typography level="title-lg">شیراز موبایل</Typography>
      </Box>
      <Typography level="body-sm" color="neutral">ساعت کار: 9 تا 22</Typography>
    </Box>
  );
}
