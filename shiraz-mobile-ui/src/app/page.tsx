import React from "react";
import { HeroSection } from "@/core/components/home/Hero"; 
import { FeaturesBar, PromoBanners } from "@/modules/home/presentation/components/HomeBanners";
import { PopularProducts } from "@/modules/home/presentation/components/PopularProducts";

export default function Home() {
  return (
    // تغییر مهم: حذف pb-10 و اضافه کردن flex col برای مدیریت ارتفاع
    <main className="min-h-screen bg-white flex flex-col">
      
      <HeroSection />

      <PromoBanners />

      <PopularProducts />

      {/* نوار ویژگی‌ها حالا آخرین آیتم است و به پایین هل داده می‌شود */}
      <div className="mt-auto">
        <FeaturesBar />
      </div>

    </main>
  );
}
