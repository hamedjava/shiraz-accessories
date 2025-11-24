import React from "react";

// ایمپورت‌ها
import { HeroSection } from "@/core/components/home/Hero";
import { PromoBanners } from "@/modules/home/presentation/components/HomeBanners"; 
import {PopularProducts} from "@/modules/home/presentation/components/PopularProducts"; 

// کامپوننت استاتیک جدید
import { StoreFeatures } from "@/core/components/ui/StoreFeatures";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      <HeroSection />

      {/* فاصله بین بنرها و محصولات */}
      <div className="flex flex-col gap-20 mt-10">
        <PromoBanners />
        <PopularProducts />
      </div>

      {/* 
         mt-auto: اگر محتوا کم بود، هل داده شود پایین
         mt-24: فاصله زیاد از بخش محصولات (PopularProducts) تا به هم نچسبند
         mb-0: چسبیده به پایین (نزدیک به فوتر) 
      */}
      <div className="mt-auto pt-24 mb-0">
        <StoreFeatures />
      </div>

    </main>
  );
}
