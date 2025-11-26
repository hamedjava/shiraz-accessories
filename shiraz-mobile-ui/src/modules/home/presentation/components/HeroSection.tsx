"use client";

import React from "react";
import Link from "next/link";
// import Image from "next/image"; // نیازی نیست چون از تگ img استفاده می‌کنیم
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-slate-50 overflow-hidden font-[family-name:var(--font-iranyekan)]">
      
      {/* 1. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right z-20 mt-8 lg:mt-0">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 tracking-wide">پیش‌فروش ویژه آغاز شد</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              آیفون ۱۷ پرو <br />
              <span className="relative inline-block text-[#FFD700]">
                فراتر از واقعیت
                <svg className="absolute w-[110%] h-4 -bottom-2 -right-2 text-slate-900/5 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 font-medium leading-8 max-w-[500px] mb-10">
              طراحی تیتانیومی جدید، پردازنده A18 Bionic و دوربینی که قوانین فیزیک را به چالش می‌کشد. هم‌اکنون در موبایل شیراز.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <Link href="/products" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#FFD700] text-slate-900 font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-[#e6c200] hover:shadow-lg hover:-translate-y-1">
                پیش‌خرید کنید
                <ArrowLeft className="w-5 h-5" />
              </Link>
              
              <div className="mt-4 sm:mt-0 sm:mr-6 flex items-center gap-4 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#FFD700]" />
                    <span>۱۸ ماه گارانتی</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: VISUALS --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[500px]">
             
             {/* دایره‌های متحرک پس‌زمینه */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]"></div>

             <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
                
                {/* ✅ استفاده از تگ img استاندارد HTML */}
                <div className="relative w-[320px] h-[420px] drop-shadow-2xl transition-transform duration-500 hover:scale-105">
                    <img
                        src="/images/products/iphone17mainPic.png" 
                        alt="iPhone 17 Pro Max"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* بج شناور */}
                <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[#FFD700]">
                        <span className="font-bold text-[10px]">NEW</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold">مدل جدید</p>
                        <p className="text-xs font-black text-slate-800">Titanium Blue</p>
                    </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
