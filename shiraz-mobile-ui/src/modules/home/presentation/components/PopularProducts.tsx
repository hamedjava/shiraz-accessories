"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react";

// دیتای تستی برای نمایش کارت‌ها
const PRODUCTS = [
  {
    id: 1,
    title: "هدفون بی‌سیم سونی",
    model: "WH-1000XM5",
    price: "۱۲,۵۰۰,۰۰۰",
    image: "/placeholder.png", // عکس پلیس‌هولدر
    isNew: true,
  },
  {
    id: 2,
    title: "اپل واچ سری ۹",
    model: "Aluminum 45mm",
    price: "۱۸,۲۰۰,۰۰۰",
    image: "/placeholder.png",
    isNew: false,
  },
  {
    id: 3,
    title: "سامسونگ گلکسی S24",
    model: "Ultra 5G - 256GB",
    price: "۶۵,۰۰۰,۰۰۰",
    image: "/placeholder.png",
    isNew: true,
  },
  {
    id: 4,
    title: "ایرپاد پرو ۲",
    model: "Type-C Charging",
    price: "۹,۸۰۰,۰۰۰",
    image: "/placeholder.png",
    isNew: false,
  },
  {
    id: 5,
    title: "کنسول پلی‌استیشن ۵",
    model: "Standard Edition",
    price: "۲۸,۵۰۰,۰۰۰",
    image: "/placeholder.png",
    isNew: false,
  },
];

export const PopularProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // تابع برای اسکرول دکمه‌ها
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // میزان اسکرول (حدود اندازه یک کارت)
      
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* --- هدر بخش (Header Section) --- */}
        <div className="flex items-end justify-between mb-10">
          
          {/* سمت راست: تایتل و زیرخط زرد */}
          <div className="flex flex-col items-start">
            <span className="text-yellow-500 font-bold text-xs tracking-wider mb-2 uppercase">
              پیشنهادات ویژه
            </span>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 pb-4">
                محبوب‌تـرین‌ها
              </h2>
              {/* زیرخط زرد طراحی شده (نصفه و ضخیم) */}
              <span className="absolute bottom-1 right-0 w-2/3 h-1.5 bg-yellow-500 rounded-full"></span>
              {/* نقطه تزئینی کنار خط */}
              <span className="absolute bottom-1 right-[70%] w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          {/* سمت چپ: لینک مشاهده همه و دکمه‌های اسکرول */}
          <div className="flex items-center gap-4">
             {/* دکمه‌های نویگیشن دسکتاپ */}
             <div className="hidden md:flex items-center gap-2">
                <button onClick={() => scroll("right")} className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors">
                    <ChevronRight size={20} />
                </button>
                <button onClick={() => scroll("left")} className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors">
                    <ChevronLeft size={20} />
                </button>
             </div>

             <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-yellow-600 transition-colors">
                مشاهده همه
                <ArrowLeft size={16} />
             </Link>
          </div>
        </div>

        {/* --- کانتینر اسکرول افقی (Carousel) --- */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // مخفی کردن اسکرول‌بار پیش‌فرض
        >
          {PRODUCTS.map((product) => (
            <div 
                key={product.id} 
                className="flex-shrink-0 w-[260px] md:w-[280px] snap-start group cursor-pointer"
            >
              {/* کارت محصول */}
              <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden mb-4 border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-slate-200/60">
                
                {/* بج "جدید" */}
                {product.isNew && (
                    <span className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                        NEW
                    </span>
                )}

                {/* دکمه علاقه مندی (مخفی، نمایش در هاور) */}
                <button className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10 hover:text-red-500">
                    <Heart size={14} />
                </button>

                {/* عکس محصول (Placeholder) */}
                <div className="w-full h-full flex items-center justify-center p-6">
                    {/* اینجا باید تگ <Image /> نکست جی‌اس باشد. فعلاً یک باکس طوسی گذاشتم */}
                    <div className="w-full h-full bg-slate-200/50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <ShoppingBag className="text-slate-300 w-12 h-12" />
                    </div>
                </div>

                {/* دکمه افزودن سریع (پایین کارت) */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <button className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg hover:bg-yellow-500 hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
                        افزودن به سبد
                    </button>
                </div>
              </div>

              {/* اطلاعات پایین کارت */}
              <div className="text-right px-1">
                <h3 className="text-slate-800 font-bold text-lg leading-tight mb-1 group-hover:text-yellow-600 transition-colors">
                    {product.title}
                </h3>
                <p className="text-slate-400 text-xs font-medium mb-3">
                    {product.model}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400">قیمت:</span>
                        <span className="text-slate-900 font-black text-base">
                            {product.price} <span className="text-[10px] font-normal text-slate-500">تومان</span>
                        </span>
                    </div>
                </div>
              </div>
            </div>
          ))}

            {/* کارت "مشاهده همه" در انتهای لیست */}
            <div className="flex-shrink-0 w-[150px] snap-center flex flex-col items-center justify-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-all">
                    <ArrowLeft size={24} />
                </div>
                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800">مشاهده همه</span>
            </div>

        </div>
      </div>
    </section>
  );
};
