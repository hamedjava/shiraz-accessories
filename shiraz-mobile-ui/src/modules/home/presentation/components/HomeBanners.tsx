import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCw, ArrowLeft } from "lucide-react";

export const FeaturesBar = () => {
  const features = [
    { icon: <RefreshCw className="w-5 h-5" />, title: "۷ روز ضمانت بازگشت", desc: "در صورت عدم رضایت" },
    { icon: <Headphones className="w-5 h-5" />, title: "پشتیبانی ۲۴/۷", desc: "پاسخگویی در تمام ساعات" },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "ضمانت اصالت", desc: "تضمین اصل بودن کالا" },
    { icon: <Truck className="w-5 h-5" />, title: "ارسال رایگان", desc: "برای خریدهای بالای ۵ میلیون" },
  ];

  return (
    // اصلاحات انجام شده:
    // mt-12: فاصله مناسب از محصولات بالا
    // mb-0: حذف فاصله پایین برای نزدیکی حداکثری به فوتر
    // pb-8: کمی فاصله داخلی پایین اضافه شد تا اگر فوتر دقیقاً چسبید، ظاهر بدی نداشته باشد
    <div className="container mx-auto px-4 mt-12 mb-0 pb-8">
      {/* تغییر استایل به حالت کپسولی یکپارچه طبق عکس */}
      <div className="bg-slate-50 rounded-[2rem] py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border border-slate-100 shadow-sm">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start group">
            {/* آیکون سمت راست (در حالت RTL) */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300 border border-slate-100">
              {item.icon}
            </div>
            
            <div className="text-right">
              <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-yellow-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-400 font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PromoBanners = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* بنر اول */}
        <div className="relative h-[260px] rounded-3xl overflow-hidden bg-slate-900 group cursor-pointer">
          <div className="absolute inset-0 bg-[url('/banner1.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/20"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center h-full items-start">
            <span className="px-3 py-1 bg-yellow-500 text-slate-900 text-[10px] font-bold rounded-full mb-3">فروش ویژه</span>
            <h3 className="text-2xl font-black text-white mb-2">لوازم جانبی موبایل</h3>
            <p className="text-slate-300 text-xs mb-6 max-w-[70%] leading-relaxed">قاب، گلس و شارژرهای اورجینال با تخفیف‌های باورنکردنی</p>
            <button className="flex items-center gap-2 text-white font-bold text-xs border-b border-white/20 pb-1 hover:border-yellow-500 hover:text-yellow-500 transition-all">
              خرید کنید <ArrowLeft size={14} />
            </button>
          </div>
        </div>

        {/* بنر دوم */}
        <div className="relative h-[260px] rounded-3xl overflow-hidden bg-gray-100 group cursor-pointer">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center h-full items-start">
            <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full mb-3">کالکشن جدید</span>
            <h3 className="text-2xl font-black text-slate-900 mb-2">دنیای گیمینگ</h3>
            <p className="text-slate-500 text-xs mb-6 max-w-[70%] leading-relaxed">تجربه بازی حرفه‌ای با جدیدترین کنسول‌های نسل نهم</p>
            <button className="flex items-center gap-2 text-slate-900 font-bold text-xs border-b border-slate-900/20 pb-1 hover:border-slate-900 hover:translate-x-[-5px] transition-all">
              مشاهده محصولات <ArrowLeft size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
