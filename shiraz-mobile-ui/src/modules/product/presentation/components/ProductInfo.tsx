"use client";

import React, { useState } from "react";
import { Star, Truck, ShieldCheck, CheckCircle2, Info, ShoppingCart, Minus, Plus } from "lucide-react";

interface ProductInfoProps {
  product: any; // فعلا any میگذاریم تا سریع پیش برویم، بعدا اینترفیس دقیق میسازیم
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  // محاسبه قیمت نهایی
  const finalPrice = product.price; 
  const formattedPrice = new Intl.NumberFormat('fa-IR').format(finalPrice);
  const formattedOldPrice = product.oldPrice ? new Intl.NumberFormat('fa-IR').format(product.oldPrice) : null;

  return (
    <div className="flex flex-col h-full">
      
      {/* هدر: عنوان و امتیاز */}
      <div className="border-b border-slate-100 pb-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i >= Math.floor(product.rating) ? "text-slate-200" : ""} />
                ))}
            </div>
            <span className="text-xs text-slate-500 font-medium pt-1">
                (از {product.reviewsCount} نظر کاربر)
            </span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-black text-slate-800 leading-tight mb-2">
            {product.title}
        </h1>
        <h2 className="text-sm text-slate-400 font-medium ltr text-right">
            {product.englishTitle}
        </h2>
      </div>

      {/* بخش میانی: انتخابگرها */}
      <div className="flex-1">
        
        {/* انتخاب رنگ */}
        <div className="mb-6">
            <span className="block text-sm font-bold text-slate-800 mb-3">رنگ: <span className="text-slate-500 font-normal">{selectedColor.name}</span></span>
            <div className="flex items-center gap-3">
                {product.colors.map((color: any) => (
                    <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                            selectedColor.name === color.name ? "border-slate-900 scale-110" : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.code }} // در پروژه واقعی کلاس داینامیک بهتر است
                    >
                        {selectedColor.name === color.name && (
                            <CheckCircle2 className={color.name === 'سفید' ? 'text-slate-900' : 'text-white'} size={18} />
                        )}
                    </button>
                ))}
            </div>
        </div>

        {/* ویژگی‌های کلیدی (خلاصه) */}
        <div className="grid grid-cols-2 gap-3 mb-8">
            {product.specs.slice(0, 4).map((spec: any, idx: number) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400">{spec.label}</span>
                    <span className="text-xs font-bold text-slate-700">{spec.value}</span>
                </div>
            ))}
        </div>

        {/* باکس خدمات */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-slate-400" />
                <span>{product.guarantees[0]}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="w-5 h-5 text-slate-400" />
                <span>ارسال رایگان برای تهران (امروز)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="text-teal-600 font-medium">موجود در انبار</span>
            </div>
        </div>

      </div>

      {/* فوتر: قیمت و دکمه خرید (Sticky در موبایل می‌تواند باشد) */}
      <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 mt-auto">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
            
            {/* قیمت */}
            <div>
                {formattedOldPrice && (
                    <div className="text-slate-400 text-sm line-through mb-1 decoration-red-400 decoration-1">
                        {formattedOldPrice}
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-800 tracking-tight">{formattedPrice}</span>
                    <span className="text-sm text-slate-500 font-medium">تومان</span>
                </div>
            </div>

            {/* دکمه‌ها */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                
                {/* شمارنده تعداد */}
                <div className="flex items-center bg-white border border-slate-200 rounded-xl h-12 px-2">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-full flex items-center justify-center text-slate-400 hover:text-slate-800">
                        <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-800">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="w-8 h-full flex items-center justify-center text-slate-400 hover:text-slate-800">
                        <Plus size={16} />
                    </button>
                </div>

                {/* دکمه افزودن به سبد */}
                <button className="flex-1 md:flex-none bg-slate-900 text-white h-12 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95">
                    <ShoppingCart size={20} />
                    افزودن به سبد
                </button>
            </div>

        </div>
      </div>

    </div>
  );
};
