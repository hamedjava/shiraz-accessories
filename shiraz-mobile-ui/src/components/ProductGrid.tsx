"use client";

import { Grid, Card, CardContent, Typography } from "@mui/joy";
import { motion } from "framer-motion";

const products = [
  { id: 1, title: "کاور سیلیکونی آیفون", price: "210,000 تومان", image: "/assets/cover1.png" },
  { id: 2, title: "محافظ گوشی سامسونگ", price: "150,000 تومان", image: "/assets/protector1.png" },
  { id: 3, title: "هندزفری بلوتوث", price: "460,000 تومان", image: "/assets/earbuds.png" },
  { id: 4, title: "شارژر سریع 25 وات", price: "320,000 تومان", image: "/assets/charger.png" },
];

export default function ProductGrid() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ p: { xs: 2, md: 6 }, justifyContent: "center" }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {products.map((p) => (
        <Grid xs={12} sm={6} md={3} key={p.id}>
          <Card
            component={motion.div}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 25px rgba(230,0,35,0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "lg",
              bgcolor: "#fff",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography level="body-lg" sx={{ fontWeight: 600, mb: 1 }}>
                {p.title}
              </Typography>
              <Typography level="body-sm" sx={{ color: "text.secondary" }}>
                {p.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
