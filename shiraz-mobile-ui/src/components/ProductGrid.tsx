"use client";

import { Grid, Card, Typography, AspectRatio, Button } from "@mui/joy";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Samsung Galaxy S24", price: "45,000,000", img: "/images/s24.jpg" },
  { id: 2, name: "iPhone 15 Pro", price: "70,000,000", img: "/images/iphone15.jpg" },
  { id: 3, name: "Xiaomi 14 Ultra", price: "39,500,000", img: "/images/xiaomi14.jpg" },
  { id: 4, name: "Nokia X30", price: "28,000,000", img: "/images/nokiaX30.jpg" }
];

export default function ProductGrid() {
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {products.map((product) => (
        <Grid xs={12} sm={6} md={3} key={product.id}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <Card variant="outlined" sx={{ transition: "0.3s", "&:hover": { boxShadow: "lg" } }}>
              <AspectRatio ratio="1">
                <img src={product.img} alt={product.name} />
              </AspectRatio>
              <Typography level="title-md" sx={{ mt: 1 }}>
                {product.name}
              </Typography>
              <Typography color="neutral" sx={{ mb: 1 }}>
                {product.price} تومان
              </Typography>
              <Button size="sm" color="primary">افزودن به سبد</Button>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
