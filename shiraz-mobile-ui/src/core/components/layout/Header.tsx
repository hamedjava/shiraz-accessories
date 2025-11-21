'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Logo } from '@/core/components/ui/Logo';
import Link from 'next/link';

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // منطق هوشمند برای پنهان کردن هدر هنگام اسکرول به پایین و نمایش هنگام بالا آمدن
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300 px-4`}
    >
      {/* کانتینر شناور هدر */}
      <div 
        className={`
          flex items-center justify-between 
          w-full max-w-6xl 
          px-6 py-3 
          rounded-2xl 
          transition-all duration-300
          ${scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/50 py-2" 
            : "bg-transparent py-4"
          }
        `}
      >
        {/* بخش راست: منو و سرچ */}
        <div className="flex items-center gap-4">
           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-brand-teal" />
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-500 hover:bg-gray-100 transition-colors">
            <Search className="w-4 h-4" />
            <span>جستجو...</span>
          </button>
        </div>

        {/* لوگو در مرکز */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>

        {/* بخش چپ: اکشن‌ها */}
        <div className="flex items-center gap-3">
          <Link href="/auth" className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-yellow transition-colors">
            <span>ورود</span>
            <User className="w-5 h-5" />
          </Link>
          
          <div className="relative group">
            <button className="p-3 bg-brand-teal text-white rounded-xl hover:bg-brand-yellow hover:text-brand-teal transition-all duration-300 shadow-lg shadow-brand-teal/20">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-yellow text-brand-teal text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
