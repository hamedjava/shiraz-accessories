'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BatteryCharging, Headphones, ShieldCheck } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-6 container mx-auto max-w-7xl pt-6 md:pt-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
        
        {/* باکس اصلی - معرفی */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 xl:col-span-8 bg-gray-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center items-start relative overflow-hidden"
        >
           {/* پترن پس‌زمینه */}
           <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
           
           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-brand-teal text-xs font-bold mb-8 shadow-sm z-10">
             <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
             جشنواره پاییزه ۱۴۰۳
           </span>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.3] mb-6 z-10">
             لوازم جانبی خاص، <br />
             برای <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal to-emerald-500">آدم‌های خاص</span>
           </h1>
           
           <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg leading-relaxed z-10">
             دنیای موبایلت رو رنگی کن! تضمین اصالت، کیفیت بالا و ارسال سریع به تمام نقاط ایران.
           </p>
           
           <button className="group z-10 flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-brand-teal hover:shadow-lg hover:shadow-brand-teal/30 transition-all duration-300">
             مشاهده محصولات
             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
           </button>
        </motion.div>

        {/* ستون دوم - کارت‌های کوچک */}
        <div className="lg:col-span-5 xl:col-span-4 grid grid-cols-2 gap-4 md:gap-6">
          
          {/* کارت ۱: هندزفری (بزرگ عمودی) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="col-span-2 bg-brand-teal rounded-[2rem] p-8 text-white relative overflow-hidden min-h-[240px] flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-brand-teal/20 transition-all"
          >
             <div className="z-10">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-brand-yellow backdrop-blur-md">
                  <Headphones size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-1">تجهیزات صوتی</h3>
               <p className="text-white/70 text-sm">هدفون، هندزفری و اسپیکر</p>
             </div>
             
             {/* افکت نورانی */}
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-[50px] group-hover:bg-brand-yellow/20 transition-colors duration-500" />
             
             <div className="self-end bg-white/10 backdrop-blur-sm p-3 rounded-full group-hover:bg-brand-yellow group-hover:text-brand-teal transition-all duration-300">
               <ArrowLeft size={20} />
             </div>
          </motion.div>

          {/* کارت ۲: شارژر */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-brand-yellow rounded-[2rem] p-5 flex flex-col items-center justify-center text-center space-y-3 group hover:-translate-y-1 transition-transform cursor-pointer"
          >
             <div className="p-4 bg-white/40 rounded-2xl backdrop-blur-sm text-gray-900">
                <BatteryCharging size={24} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900 text-base">شارژر</h4>
               <span className="text-[10px] font-bold bg-white/50 px-2 py-1 rounded-md mt-1 inline-block text-gray-800">+۵۰ مدل</span>
             </div>
          </motion.div>

          {/* کارت ۳: گارد */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-5 flex flex-col items-center justify-center text-center space-y-3 group hover:-translate-y-1 transition-transform cursor-pointer"
          >
             <div className="p-4 bg-gray-50 rounded-2xl text-brand-teal">
                <ShieldCheck size={24} />
             </div>
             <div>
               <h4 className="font-bold text-gray-800 text-base">قاب و گلس</h4>
               <span className="text-[10px] font-bold text-gray-400 mt-1 inline-block">محافظت کامل</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
