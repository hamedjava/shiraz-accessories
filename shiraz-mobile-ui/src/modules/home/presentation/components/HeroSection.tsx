'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BatteryCharging, Headphones, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-10 px-4 container mx-auto max-w-7xl">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        
        {/* باکس اصلی - معرفی - 6 واحد */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 bg-brand-light rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center items-start relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           
           <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-brand-teal text-sm font-bold mb-6 shadow-sm">
             ✨ جدیدترین کالکشن ۱۴۰۳
           </span>
           
           <h1 className="text-4xl md:text-6xl font-black text-brand-dark leading-[1.1] mb-6">
             دنیای موبایل، <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-yellow">
               در دستان شما
             </span>
           </h1>
           
           <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
             لوازم جانبی خاص، برای سلیقه‌های خاص. ترکیبی از کیفیت، دوام و زیبایی که موبایل شما را متمایز می‌کند.
           </p>
           
           <button className="group flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-teal transition-all duration-300 shadow-xl shadow-brand-dark/20">
             خرید کنید
             <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
           </button>
        </motion.div>

        {/* ستون دوم - شبکه‌ای - 6 واحد */}
        <div className="md:col-span-6 grid grid-cols-2 gap-6">
          
          {/* کارت محصول ویژه 1 - هندزفری */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="col-span-2 md:col-span-2 bg-brand-teal rounded-[2.5rem] p-8 text-white relative overflow-hidden min-h-[280px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-teal/30 transition-all"
          >
             <div className="z-10">
               <Headphones className="w-10 h-10 mb-4 text-brand-yellow" />
               <h3 className="text-2xl font-bold mb-2">تجهیزات صوتی</h3>
               <p className="text-white/70 text-sm">تجربه‌ای شفاف از موسیقی</p>
             </div>
             {/* Placeholder for Image */}
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-tr-[3rem] transition-transform group-hover:scale-110 duration-500 flex items-center justify-center">
                <span className="text-xs opacity-50">IMG PLACEHOLDER</span>
             </div>
             <button className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-brand-yellow hover:text-brand-teal transition-colors">
               <ArrowLeft />
             </button>
          </motion.div>

          {/* کارت محصول ویژه 2 - شارژر */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="bg-brand-yellow rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center space-y-4 group hover:-translate-y-2 transition-transform cursor-pointer"
          >
             <div className="p-4 bg-white/30 rounded-full backdrop-blur-sm">
                <BatteryCharging className="w-8 h-8 text-brand-teal" />
             </div>
             <div>
               <h4 className="font-bold text-brand-dark text-lg">شارژر و کابل</h4>
               <span className="text-xs font-medium bg-brand-dark/10 px-2 py-1 rounded-lg mt-2 inline-block">+۲۰۰ مدل</span>
             </div>
          </motion.div>

          {/* کارت محصول ویژه 3 - قاب */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center space-y-4 group hover:-translate-y-2 transition-transform cursor-pointer"
          >
             <div className="p-4 bg-brand-light rounded-full">
                <ShieldCheck className="w-8 h-8 text-brand-teal" />
             </div>
             <div>
               <h4 className="font-bold text-brand-dark text-lg">قاب و گلس</h4>
               <span className="text-xs font-medium bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-lg mt-2 inline-block">مقاوم و شیک</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
