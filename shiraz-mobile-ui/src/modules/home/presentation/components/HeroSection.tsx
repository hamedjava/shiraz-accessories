import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, Star, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-white overflow-hidden selection:bg-yellow-500 selection:text-white">
      
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px] opacity-60 animate-pulse duration-[5000ms]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-slate-200 rounded-full blur-[100px] opacity-80" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* اجبار به حالت افقی flex-row */}
        <div className="flex flex-row items-center justify-between gap-20">

          {/* Typography Side */}
          <div className="w-1/2 flex flex-col items-start text-right z-20">
            
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow-50 border border-yellow-100/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-[11px] font-bold text-yellow-700/90 tracking-wider uppercase">
                NEW COLLECTION
              </span>
            </div>

            <h1 className="text-7xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
              تجربه صدای <br />
              <span className="text-yellow-500 relative inline-block">
                 شفاف و بی‌نهایت
                 <span className="absolute bottom-2 right-0 w-full h-3 bg-yellow-200/30 -z-10 -skew-x-12 rounded-sm"></span>
              </span>
            </h1>

            <p className="text-lg text-slate-500 font-medium leading-8 max-w-[520px] mb-8">
              با جدیدترین تکنولوژی حذف نویز، سکوت را لمس کنید. طراحی ارگونومیک برای استفاده طولانی مدت بدون خستگی.
            </p>

            <div className="flex items-center gap-8 mb-10 w-full">
              <Link 
                href="/products" 
                className="h-14 px-8 rounded-2xl bg-slate-900 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200/50 active:scale-95"
              >
                خرید محصول
                <ArrowLeft className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center gap-4 cursor-pointer group">
                 <div className="relative w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden shadow-sm border border-slate-100">
                    <div className="absolute inset-0 bg-slate-300 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 fill-slate-900 text-slate-900 ml-0.5" />
                        </div>
                    </div>
                 </div>
                 <div className="flex flex-col text-right">
                    <span className="text-sm font-black text-slate-800 group-hover:text-yellow-600 transition-colors">
                        بررسی ویدئویی
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                        مشاهده عملکرد (۰۲:۱۵)
                    </span>
                 </div>
              </div>
            </div>

            <div className="w-full border-t border-slate-100 pt-6 flex items-center justify-start gap-8">
                <div className="flex flex-col items-start gap-1">
                    <div className="flex text-yellow-400 space-x-0.5 space-x-reverse">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-xs text-slate-400 font-bold mt-1 pr-1">۴.۹ از ۵ (۲۰۰+ نظر)</span>
                </div>
                <div className="w-px h-10 bg-slate-200 mx-2"></div>
                <div className="flex flex-col items-start">
                    <span className="text-2xl font-black text-slate-800 tabular-nums">+10k</span>
                    <span className="text-xs text-slate-400 font-medium">مشتری فعال</span>
                </div>
                <div className="w-px h-10 bg-slate-200 mx-2"></div>
                <div className="flex flex-col items-start pl-2">
                    <span className="text-2xl font-black text-slate-800 tabular-nums">+۱۵</span>
                    <span className="text-xs text-slate-400 font-medium">سال گارانتی</span>
                </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-1/2 relative">
             <div className="relative z-10 w-full aspect-square max-w-[550px] mx-auto">
                <div className="absolute inset-4 border border-dashed border-slate-300 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-full h-full relative flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[3rem] shadow-2xl shadow-slate-200/50 flex items-center justify-center transform hover:-rotate-3 transition-transform duration-500 cursor-pointer group">
                        <div className="text-center opacity-40 group-hover:opacity-60 transition-opacity">
                            <span className="text-8xl filter drop-shadow-xl block mb-4">🎧</span>
                            <p className="font-bold text-slate-500 tracking-widest uppercase text-sm">Product Shot</p>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white flex items-center gap-3 animate-bounce duration-[3000ms]">
                            <div className="bg-yellow-500 p-2 rounded-xl text-black">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold">فروش ویژه</p>
                                <p className="text-sm font-black text-slate-900">۲۰٪ تخفیف</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
