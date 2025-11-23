"use client"; // چون نیاز به استیت برای تغییر عکس داریم

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Share2, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  discount?: number;
}

export const ProductGallery = ({ images, discount }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      
      {/* تصویر اصلی بزرگ */}
      <div className="relative bg-white rounded-3xl aspect-square overflow-hidden border border-slate-100 shadow-sm group">
        
        {/* بج های روی عکس */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            {discount && (
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                {discount}٪ تخفیف
                </span>
            )}
        </div>

        {/* دکمه‌های شناور روی عکس (لایک و اشتراک) */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-red-50 shadow-md transition-colors">
                <Heart size={18} />
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-blue-500 hover:bg-blue-50 shadow-md transition-colors">
                <Share2 size={18} />
            </button>
        </div>
        
        {/* خود تصویر */}
        {/* نکته: در پروژه واقعی از تگ Image نکست استفاده کنید، اینجا برای نمونه img گذاشتم */}
        <div className="w-full h-full flex items-center justify-center p-6 bg-slate-50/50">
             {/* اینجا از یک placeholder استفاده می‌کنیم اگر عکس واقعی ندارید */}
             {/* در حالت واقعی src={images[selectedImage]} */}
            <div className="relative w-full h-full transition-all duration-500 ease-in-out">
                 <img 
                    src={images[selectedImage] || "https://placehold.co/600x600/f1f5f9/1e293b?text=Product+Image"} 
                    alt="Product" 
                    className="w-full h-full object-contain mix-blend-multiply"
                 />
            </div>
        </div>

        {/* دکمه زوم (نمایشی) */}
        <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-xl text-slate-600 hover:text-slate-900 transition-colors border border-white/50 shadow-sm">
            <ZoomIn size={20} />
        </button>
      </div>

      {/* لیست تصاویر کوچک (Thumbnails) */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 bg-white p-2 ${
              selectedImage === idx
                ? "border-slate-800 shadow-md scale-95"
                : "border-transparent hover:border-slate-300 bg-slate-50"
            }`}
          >
            <img 
                src={img || "https://placehold.co/150x150/f1f5f9/1e293b?text=Thumb"} 
                alt={`View ${idx}`} 
                className="w-full h-full object-contain mix-blend-multiply" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};
