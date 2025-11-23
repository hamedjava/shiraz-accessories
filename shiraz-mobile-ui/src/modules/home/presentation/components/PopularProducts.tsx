"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ShoppingBag, Heart } from "lucide-react";

// دیتای تستی
const PRODUCTS = [
  {
    id: 1,
    title: "هدفون بی‌سیم سونی",
    model: "WH-1000XM5",
    price: "۱۲,۵۰۰,۰۰۰",
    image: "/placeholder.png",
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
  {
    id: 6,
    title: "مک‌بوک ایر M2",
    model: "256GB - Midnight",
    price: "۵۴,۰۰۰,۰۰۰",
    image: "/placeholder.png",
    isNew: true,
  },
];

export const PopularProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- هندل کردن درگ با موس (Drag to Scroll) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // سرعت اسکرول
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-16 bg-white relative overflow-hidden select-none">
      <div className="container mx-auto px-4">
        
        {/* --- هدر بخش --- */}
        <div className="flex items-end justify-between mb-10">
          
          {/* تایتل */}
          <div className="flex flex-col items-start">
            <span className="text-yellow-500 font-bold text-xs tracking-wider mb-2 uppercase">
              پیشنهادات ویژه
            </span>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 pb-4">
                محبوب‌تـرین‌ها
              </h2>
              <span className="absolute bottom-1 right-0 w-2/3 h-1.5 bg-yellow-500 rounded-full"></span>
              <span className="absolute bottom-1 right-[70%] w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
            </div>
          </div>

          {/* دکمه مشاهده همه (مینیمال) */}
          <Link 
            href="/products" 
            className="group flex items-center gap-2 pl-1 py-1"
          >
            <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                مشاهده همه
            </span>
            {/* آیکون مینیمال دایره‌ای */}
            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                <ChevronLeft size={14} />
            </div>
          </Link>
        </div>

        {/* --- اسلایدر محصولات --- */}
        <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`
              flex gap-6 overflow-x-auto pb-10 -mx-4 px-4 
              scrollbar-hide cursor-grab active:cursor-grabbing
            `}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: isDragging ? 'auto' : 'smooth' 
            }}
        >
          {/* فقط لیست محصولات رندر می‌شود (دکمه اضافه حذف شد) */}
          {PRODUCTS.map((product) => (
            <div 
                key={product.id} 
                className="flex-shrink-0 w-[260px] md:w-[280px]"
            >
              <Link 
                href={`/products/${product.id}`}
                draggable={false}
                className="group block relative h-full"
              >
                <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden mb-4 border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-slate-200/60">
                    
                    {product.isNew && (
                        <span className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                            NEW
                        </span>
                    )}

                    <div className="absolute top-4 left-4 z-20">
                      <button 
                          onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log("Like Clicked");
                          }}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-red-500 cursor-pointer active:scale-90"
                      >
                          <Heart size={14} />
                      </button>
                    </div>

                    <div className="w-full h-full flex items-center justify-center p-6">
                        <div className="w-full h-full bg-slate-200/50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <ShoppingBag className="text-slate-300 w-12 h-12" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-white via-white/90 to-transparent z-20">
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log("Add to Cart Clicked");
                            }}
                            className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg hover:bg-yellow-500 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                        >
                            افزودن به سبد
                        </button>
                    </div>
                </div>

                <div className="text-right px-1 select-text">
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
              </Link>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};
