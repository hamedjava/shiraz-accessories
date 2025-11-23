"use client";

import React, { useState } from "react";
import { FileText, ListFilter, MessageSquare, Star, User } from "lucide-react";

// اینترفیس برای پراپ‌های ورودی (می‌توانید بعداً تکمیل‌تر کنید)
interface ProductTabsProps {
  description: string;
  specs: { label: string; value: string }[];
  reviewsCount: number;
  rating: number;
}

type TabType = 'desc' | 'specs' | 'reviews';

export const ProductTabs = ({ description, specs, reviewsCount, rating }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('desc');

  // دکمه‌های تب
  const tabs = [
    { id: 'desc', label: 'توضیحات', icon: FileText },
    { id: 'specs', label: 'مشخصات فنی', icon: ListFilter },
    { id: 'reviews', label: 'نظرات کاربران', icon: MessageSquare, count: reviewsCount },
  ];

  return (
    <div className="mt-16 lg:mt-24 scroll-mt-24" id="product-details">
      
      {/* هدر تب‌ها (استیکی برای دسترسی راحت‌تر) */}
      <div className="border-b border-slate-200 mb-8 sticky top-0 bg-white/80 backdrop-blur-md z-10 pt-4">
        <div className="flex items-center gap-6 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 pb-3 text-sm md:text-base font-medium border-b-2 transition-all whitespace-nowrap px-2 ${
                activeTab === tab.id
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {tab.count && (
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full mr-1">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* محتوای تب‌ها */}
      <div className="min-h-[300px]">
        
        {/* ۱. محتوای توضیحات */}
        {activeTab === 'desc' && (
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4">نقد و بررسی اجمالی</h3>
            <div className="prose prose-slate prose-lg text-slate-600 leading-8 text-justify">
              <p>{description}</p>
              {/* متن لورم ایپسوم برای پر کردن فضا اگر متن کوتاه بود */}
              <p className="mt-4">
                کنسول پلی‌استیشن ۵ سونی با بهره‌گیری از حافظه SSD سفارشی‌سازی شده، سرعت بارگذاری بازی‌ها را به شکل چشمگیری کاهش داده است. قابلیت بازخورد لمسی (Haptic Feedback) در کنترلرهای DualSense حس جدیدی از غوطه‌وری در بازی را منتقل می‌کند.
                همچنین صدای سه‌بعدی و پشتیبانی از خروجی تصویر 4K با نرخ ۱۲۰ فریم بر ثانیه، تجربه‌ای بی‌نظیر برای گیمرها می‌سازد.
              </p>
            </div>
          </div>
        )}

        {/* ۲. محتوای مشخصات فنی */}
        {activeTab === 'specs' && (
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-900 mb-6">مشخصات فنی</h3>
            <div className="space-y-0 rounded-2xl border border-slate-200 overflow-hidden">
              {specs.map((spec, idx) => (
                <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row sm:items-center p-4 gap-2 sm:gap-4 ${
                        idx !== specs.length - 1 ? 'border-b border-slate-100' : ''
                    } ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                >
                  <div className="sm:w-1/4 text-slate-500 text-sm font-medium flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-slate-300 inline-block sm:hidden"></span>
                     {spec.label}
                  </div>
                  <div className="sm:w-3/4 text-slate-800 font-medium text-sm sm:text-base">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ۳. محتوای نظرات (ماک دیتا) */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* خلاصه امتیاز (سایدبار نظرات) */}
            <div className="lg:col-span-4">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-24">
                    <div className="text-center">
                        <div className="text-5xl font-black text-slate-900 mb-2">{rating}</div>
                        <div className="flex justify-center text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill={i < Math.floor(rating) ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm">از مجموع {reviewsCount} رای ثبت شده</p>
                    </div>
                    <hr className="my-6 border-slate-100" />
                    <div className="space-y-3">
                        {/* پراگرس بار های فرضی */}
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                            <span className="w-8">۵ ستاره</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-[70%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                            <span className="w-8">۴ ستاره</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-[20%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
                        ثبت دیدگاه شما
                    </button>
                </div>
            </div>

            {/* لیست نظرات */}
            <div className="lg:col-span-8 space-y-4">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">علی محمدی</p>
                                    <p className="text-xs text-slate-400">۱۴ آذر ۱۴۰۳</p>
                                </div>
                            </div>
                            <div className="flex gap-1 bg-white px-2 py-1 rounded-lg border border-slate-100">
                                <span className="text-sm font-bold text-slate-700">4.0</span>
                                <Star size={16} className="text-yellow-400 fill-current" />
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-7">
                            دستگاه فوق‌العاده‌ای هست. سرعت لود بازی‌ها عالیه و کیفیت ساخت بدنه هم خیلی خوبه. فقط کاش کابل شارژ دسته بلندتر بود. در کل پیشنهاد می‌کنم.
                        </p>
                    </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
