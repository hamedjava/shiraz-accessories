import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f9fa] overflow-hidden border-b border-gray-200">
        
        {/* پس‌زمینه تزئینی */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 py-12 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* محتوای متنی (سمت راست) */}
            <div className="space-y-8 z-10 order-2 lg:order-1">
              {/* بج */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-yellow/30 text-brand-dark text-sm font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
                جشنواره فروش ویژه تابستانه
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                دنیای تکنولوژی در <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-600 relative inline-block mt-2 pb-2">
                  دستان شما
                  {/* خط زیرین */}
                  <svg className="absolute bottom-0 right-0 w-full h-3 text-brand-yellow opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                جدیدترین لوازم جانبی موبایل با بهترین قیمت. از قاب‌های ترند روز تا گجت‌های هوشمند، همگی با ضمانت اصالت کالا در شیراز موبایل.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products" 
                  className="px-8 py-4 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all shadow-[0_10px_20px_-10px_rgba(234,179,8,0.5)] flex items-center gap-2"
                >
                  خرید کنید
                  <ArrowLeft size={20} />
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-brand-yellow hover:text-black transition-all"
                >
                  درباره ما
                </Link>
              </div>

              {/* ویژگی‌ها */}
              <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <ShieldCheck className="text-brand-yellow" size={20} />
                  ضمانت اصالت
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <Truck className="text-brand-yellow" size={20} />
                  ارسال سریع
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="text-brand-yellow" size={20} />
                  ۷ روز بازگشت
                </div>
              </div>
            </div>

            {/* تصویر (سمت چپ) */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] aspect-square">
                {/* دایره زرد محو پشت عکس */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
                
                {/* کادر اصلی عکس */}
                <div className="w-full h-full bg-white rounded-[40px] shadow-2xl border-8 border-white relative overflow-hidden group flex items-center justify-center">
                   {/* محل قرارگیری عکس واقعی */}
                   <div className="text-center p-8 animate-pulse">
                     <span className="text-6xl mb-4 block opacity-50">🎧📱⌚️</span>
                     <p className="font-bold text-gray-400">تصویر بنر اصلی</p>
                   </div>
                </div>

                {/* کارت شناور ۱ */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                    <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center text-brand-yellow">
                        <span className="font-bold text-xl">%</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">تخفیف‌های</p>
                        <p className="font-bold text-gray-800">شگفت‌انگیز</p>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* بخش محصولات پیشنهادی (Placeholder) */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900 relative pr-4">
                <span className="absolute right-0 top-0 bottom-0 w-1.5 bg-brand-yellow rounded-full"></span>
                محصولات منتخب
            </h2>
            <Link href="/products" className="text-brand-yellow hover:text-yellow-600 font-medium flex items-center gap-1 transition-colors">
                مشاهده همه <ArrowLeft size={16} />
            </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {[1, 2, 3, 4].map((item) => (
             <div key={item} className="group bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <div className="aspect-square bg-gray-50 rounded-xl mb-4 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300">تصویر محصول</div>
               </div>
               <h3 className="font-bold text-gray-800 mb-2 group-hover:text-brand-yellow transition-colors">محصول نمونه {item}</h3>
               <div className="flex items-center justify-between">
                   <span className="text-gray-400 text-sm line-through">۵۰۰,۰۰۰</span>
                   <span className="font-black text-gray-900">۴۵۰,۰۰۰ <span className="text-xs font-normal text-gray-500">تومان</span></span>
               </div>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}
