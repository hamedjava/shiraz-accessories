"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

import { Box } from "@mui/joy";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
      <FloatingButton />
    </Box>
  );
}
