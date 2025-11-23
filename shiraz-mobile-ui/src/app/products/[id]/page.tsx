import React from "react";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

// ۱. داده‌های فرضی محصول (بعداً از API می‌آید)
const MOCK_PRODUCT = {
  id: 1,
  title: "کنسول بازی سونی مدل PlayStation 5 اسلیم ظرفیت یک ترابایت",
  englishTitle: "Sony PlayStation 5 Slim 1TB Gaming Console",
  price: 24500000,
  oldPrice: 25800000,
  discount: 5,
  rating: 4.8,
  reviewsCount: 124,
  colors: [
    { name: "سفید", code: "#ffffff", selected: true },
    { name: "مشکی", code: "#222222", selected: false },
  ],
  guarantees: ["گارانتی ۱۸ ماهه شرکتی", "گارانتی اصالت و سلامت فیزیکی"],
  images: [
    "/ps5-1.jpg", // فرض بر این است که عکس دارید، اگر نه پلیس‌هولدر میگذاریم
    "/ps5-2.jpg",
    "/ps5-3.jpg"
  ],
  description: "پلی استیشن ۵ اسلیم با طراحی باریک‌تر و حافظه ۱ ترابایت SSD، تجربه‌ای بی‌نظیر از نسل نهم بازی‌ها را ارائه می‌دهد...",
  specs: [
    { label: "سازنده", value: "Sony" },
    { label: "نوع درایو", value: "Blu-ray" },
    { label: "ظرفیت", value: "1TB SSD" },
  ]
};

// ۲. کامپوننت ساده بردکرامب (مسیر نان)
const Breadcrumb = () => (
  <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
    <Link href="/" className="hover:text-slate-900 transition-colors"><Home size={14} /></Link>
    <ChevronLeft size={12} />
    <Link href="/category/gaming" className="hover:text-slate-900 transition-colors">کنسول بازی</Link>
    <ChevronLeft size={12} />
    <span className="text-slate-800 font-medium truncate max-w-[200px]">{MOCK_PRODUCT.title}</span>
  </div>
);

// ۳. صفحه اصلی محصول
export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* مسیر صفحه */}
        <Breadcrumb />

        {/* گرید اصلی صفحه: در دسکتاپ دو ستون، در موبایل یک ستون */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* ستون راست (چپ در RTL): گالری تصاویر */}
          {/* در دسکتاپ ۵ ستون از ۱۲ ستون را می‌گیرد */}
          <div className="lg:col-span-5">
            <div className="bg-slate-100 rounded-3xl aspect-square flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
              {/* اینجا بعداً ProductGallery قرار می‌گیرد */}
              <p>محل قرارگیری گالری تصاویر</p>
            </div>
          </div>

          {/* ستون چپ (راست در RTL): اطلاعات محصول */}
          {/* در دسکتاپ ۷ ستون از ۱۲ ستون را می‌گیرد */}
          <div className="lg:col-span-7">
             <div className="bg-slate-50 rounded-3xl h-full p-8 border border-slate-100">
                {/* اینجا بعداً ProductInfo قرار می‌گیرد */}
                <h1 className="text-2xl font-bold text-slate-900 mb-2">{MOCK_PRODUCT.title}</h1>
                <p className="text-slate-400 text-sm mb-6">{MOCK_PRODUCT.englishTitle}</p>
                <div className="p-4 bg-white rounded-xl border border-slate-200 border-dashed">
                    محل قرارگیری قیمت، رنگ و دکمه خرید
                </div>
             </div>
          </div>

        </div>

        {/* بخش تب‌ها و توضیحات (پایین صفحه) */}
        <div className="mt-16">
             <div className="bg-white border-t border-slate-100 pt-10">
                <h3 className="text-xl font-bold text-slate-800 mb-6">مشخصات و توضیحات</h3>
                <div className="bg-slate-50 rounded-3xl h-60 flex items-center justify-center text-slate-400 border border-slate-100">
                    محل قرارگیری تب‌های توضیحات و نظرات
                </div>
             </div>
        </div>

      </div>
    </main>
  );
}
