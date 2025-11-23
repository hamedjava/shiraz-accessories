"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/core/components/ui/Logo";
import { Search, ShoppingBag, User, Menu, X, LayoutGrid, ArrowLeft, Heart } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // مدیریت اسکرول با تراتل برای پرفورمنس بهتر
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Top Bar (مینیمال خاکستری) --- */}
      <div className="hidden md:flex bg-gray-50 text-gray-500 text-[12px] py-2 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
            <div className="flex gap-4">
                <span className="hover:text-brand-yellow cursor-pointer transition-colors duration-300">تماس با ما</span>
                <span className="w-px h-4 bg-gray-200"></span>
                <span className="hover:text-brand-yellow cursor-pointer transition-colors duration-300">درباره ما</span>
            </div>
            <p className="font-medium tracking-wide">ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان</p>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header 
        className={`
            sticky top-0 z-50 bg-white/90 backdrop-blur-xl
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isScrolled ? 'shadow-lg shadow-gray-200/40 py-2' : 'py-4 border-b border-gray-100'}
        `}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-4 lg:gap-8 justify-between">
          
          {/* 1. Right Section: Logo & Category */}
          <div className="flex items-center gap-6 shrink-0">
              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 bg-gray-100 rounded-xl active:scale-95 transition-transform"
              >
                <Menu size={24} />
              </button>

              {/* Logo with Bounce Effect */}
              <Link href="/" className="group relative">
                 <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                     <Logo />
                 </div>
                 {/* سایه زرد زیر لوگو هنگام هاور */}
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-yellow/50 blur-sm rounded-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </Link>

              {/* Category Button (Animated Pill) */}
              <div className="hidden lg:block relative group">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full text-gray-700 font-bold text-sm transition-all duration-300 border border-transparent hover:border-brand-yellow/30 hover:bg-brand-yellow/10 overflow-hidden relative">
                    <LayoutGrid size={18} className="relative z-10 group-hover:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">دسته‌بندی‌ها</span>
                    
                    {/* پر شدن زرد رنگ پس‌زمینه */}
                    <div className="absolute inset-0 bg-brand-yellow opacity-0 group-hover:opacity-10 w-0 group-hover:w-full transition-all duration-500"></div>
                </button>
              </div>
          </div>

          {/* 2. Center Section: Alive Search Bar */}
          <div className={`hidden md:flex flex-1 max-w-xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSearchFocused ? 'scale-105 max-w-2xl' : ''}`}>
            <div 
                className={`
                    relative w-full flex items-center rounded-2xl overflow-hidden border-2
                    transition-all duration-300
                    ${isSearchFocused 
                        ? 'bg-white border-brand-yellow shadow-[0_0_0_4px_rgba(255,193,7,0.15)]' 
                        : 'bg-gray-50 border-transparent hover:bg-gray-100'
                    }
                `}
            >
                <input 
                    type="text" 
                    placeholder="جستجو در میان محصولات..." 
                    className="w-full h-12 pr-5 pl-12 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm font-medium"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                />
                <button className={`absolute left-2 p-2 rounded-xl transition-all duration-300 ${isSearchFocused ? 'bg-brand-yellow text-white rotate-90' : 'text-gray-400 hover:text-gray-600'}`}>
                    <Search size={20} />
                </button>
            </div>
          </div>

          {/* 3. Left Section: Action Buttons (Morphing) */}
          <div className="flex items-center gap-3">
            
            {/* Login Button */}
            <Link href="/auth/login" className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors relative group overflow-hidden">
                <span className="relative z-10">ورود | ثبت‌نام</span>
                <User size={18} className="relative z-10" />
                {/* هاور افکت: خط زرد پایین */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 group-hover:bg-brand-yellow transition-colors duration-300"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-yellow transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wishlist" className="hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-100">
                <Heart size={22} />
            </Link>

            {/* Cart Button (The Hero Action) */}
            <Link href="/cart" className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-brand-yellow transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-brand-yellow opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
                
                <ShoppingBag 
                    size={22} 
                    className="text-gray-700 relative z-10 transition-colors duration-300 group-hover:text-white" 
                />
                
                {/* Floating Badge */}
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-white text-[10px] font-bold ring-2 ring-white group-hover:ring-brand-yellow group-hover:bg-white group-hover:text-brand-yellow transition-all duration-300 shadow-sm">
                    2
                </span>
            </Link>
          </div>

        </div>
      </header>

      {/* --- Mobile Menu (Slide & Fade Animation) --- */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
         {/* Backdrop */}
         <div 
            className={`absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMobileMenuOpen(false)}
         ></div>

         {/* Menu Container */}
         <div className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="p-6 flex items-center justify-between border-b border-gray-100">
                    <Logo />
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 text-gray-500 rounded-xl hover:bg-brand-yellow hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-6 overflow-y-auto flex-1">
                    {/* Mobile Search */}
                    <div className="relative">
                        <input type="text" placeholder="جستجو..." className="w-full h-12 bg-gray-50 rounded-xl px-4 border-2 border-transparent focus:border-brand-yellow focus:bg-white transition-all outline-none" />
                        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    </div>

                    {/* Animated List Items */}
                    <nav className="space-y-2">
                        {['صفحه اصلی', 'محصولات', 'برندها', 'وبلاگ'].map((item, i) => (
                            <Link 
                                key={item} 
                                href="#" 
                                className="flex items-center justify-between p-4 rounded-xl bg-white text-gray-700 font-bold border border-gray-100 hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 50}ms` }} // Stagger animation
                            >
                                {item}
                                <ArrowLeft size={18} className="text-gray-300 group-hover:text-brand-yellow group-hover:-translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <Link href="/auth/login" className="flex items-center justify-center w-full py-4 bg-brand-yellow text-white rounded-xl font-bold shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40 active:scale-95 transition-all">
                        ورود به حساب کاربری
                    </Link>
                </div>
            </div>
         </div>
      </div>
    </>
  );
};
