"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/core/components/ui/Logo";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // بستن سرچ با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 h-[72px]">
        <div className="container h-full mx-auto px-4 flex items-center justify-between">
          
          {/* سمت راست: لوگو */}
          <Link href="/" className="hover:opacity-90 transition-opacity z-20">
            <Logo />
          </Link>

          {/* وسط: نوار جستجو (دسکتاپ) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative" ref={searchRef}>
            <div 
              onClick={() => setIsSearchOpen(true)}
              className={`w-full h-11 flex items-center gap-3 px-4 bg-gray-50 border border-gray-200 rounded-full transition-all cursor-text ${isSearchOpen ? 'ring-2 ring-brand-yellow border-transparent bg-white' : 'hover:bg-gray-100'}`}
            >
              <Search className={`w-5 h-5 ${isSearchOpen ? 'text-brand-yellow' : 'text-gray-400'}`} />
              {isSearchOpen ? (
                <input 
                  autoFocus
                  type="text" 
                  placeholder="جستجو..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm text-right"
                />
              ) : (
                <span className="text-sm text-gray-400">جستجو در محصولات...</span>
              )}
            </div>
            
            {/* نتایج جستجو (نمایشی) */}
            {isSearchOpen && (
              <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-h-[200px] animate-pulse z-50">
                <p className="text-xs text-gray-400 mb-2">عبارات محبوب:</p>
                <div className="flex flex-wrap gap-2">
                  {['قاب آیفون 13', 'شارژر سامسونگ', 'هندزفری'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded-md text-xs text-gray-600 cursor-pointer hover:bg-brand-yellow hover:text-black transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* سمت چپ: دکمه‌ها */}
          <div className="flex items-center gap-2">
            <Link href="/cart" className="p-2.5 hover:bg-gray-50 rounded-full relative group transition-colors">
              <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-brand-yellow transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-yellow rounded-full"></span>
            </Link>
            
            <Link href="/auth/login" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 border border-transparent hover:border-gray-200">
              <User className="w-5 h-5" />
              <span>ورود</span>
            </Link>

            {/* دکمه منوی موبایل */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* منوی موبایل */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">خانه</Link>
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">محصولات</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">درباره ما</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">تماس با ما</Link>
          </nav>
        </div>
      )}
    </>
  );
};
