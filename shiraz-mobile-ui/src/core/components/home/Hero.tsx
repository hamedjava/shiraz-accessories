import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, Headphones } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gray-50 py-6 lg:py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* === Main Banner === */}
        <div className="relative bg-brand-dark rounded-3xl overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px] flex items-center">
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-[-10%] top-[-50%] w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[100px]" />
             <div className="absolute left-[-10%] bottom-[-50%] w-[400px] h-[400px] bg-brand-yellow rounded-full blur-[100px]" />
          </div>

          {/* Content Container */}
          <div className="grid lg:grid-cols-2 gap-8 w-full h-full relative z-10 p-8 lg:p-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-right space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-brand-yellow rounded-full text-xs font-bold border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
                جشنواره پاییزه ۱۴۰۳
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                خاص باش، <br/>
                <span className="text-brand-yellow">هوشمند</span> انتخاب کن!
              </h1>
              
              <p className="text-gray-400 text-lg lg:w-4/5 leading-relaxed">
                مجموعه‌ای بی‌نظیر از لوازم جانبی موبایل با کیفیت اورجینال. 
                گارانتی بازگشت وجه و ارسال به سراسر ایران.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/products" className="px-8 py-4 bg-brand-yellow text-brand-dark rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  خرید کنید
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                  مشاوره رایگان
                </Link>
              </div>
            </div>

            {/* Image PlaceHolder (جای عکس محصول) */}
            <div className="order-1 lg:order-2 flex justify-center relative">
               {/* دایره پشت عکس */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 to-transparent rounded-full blur-2xl scale-75"></div>
               
               {/* اینجا عکس محصول را قرار دهید */}
               {/* <Image src="/images/hero-product.png" ... /> */}
               <div className="w-full max-w-md aspect-square bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center text-gray-500">
                  <p>محل قرارگیری تصویر محصول شاخص (PNG بدون پس زمینه)</p>
               </div>
            </div>
          </div>
        </div>

        {/* === Features / Small Cards Below === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-yellow/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-brand-yellow mb-4 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">ارسال فوق سریع</h3>
            <p className="text-sm text-gray-500">تحویل زیر ۲ ساعت در شیراز و ۲۴ ساعت در کل کشور</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-yellow/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-brand-yellow mb-4 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">ضمانت اصالت</h3>
            <p className="text-sm text-gray-500">تمامی کالاها با گارانتی اصالت و سلامت فیزیکی عرضه می‌شوند</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-yellow/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-brand-yellow mb-4 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">پشتیبانی تخصصی</h3>
            <p className="text-sm text-gray-500">مشاوره رایگان قبل از خرید برای انتخاب بهترین گزینه</p>
          </div>
        </div>

      </div>
    </section>
  );
};
