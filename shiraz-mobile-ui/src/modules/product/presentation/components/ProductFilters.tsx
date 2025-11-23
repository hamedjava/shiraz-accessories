"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check, Filter } from "lucide-react";

// دیتای تستی برای فیلترها
const CATEGORIES = [
  { id: "digital", name: "کالای دیجیتال", count: 120 },
  { id: "mobile", name: "موبایل و تبلت", count: 45 },
  { id: "laptop", name: "لپ‌تاپ و سیستم", count: 32 },
  { id: "headphone", name: "هدفون و هندزفری", count: 18 },
];

const BRANDS = [
  { id: "apple", name: "اپل (Apple)" },
  { id: "samsung", name: "سامسونگ (Samsung)" },
  { id: "xiaomi", name: "شیائومی (Xiaomi)" },
  { id: "sony", name: "سونی (Sony)" },
];

interface FilterSectionProps {
  title: string;
  isOpenDefault?: boolean;
  children: React.ReactNode;
}

// کامپوننت کمکی برای بخش‌های بازشو
const FilterSection = ({ title, isOpenDefault = true, children }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-slate-100 last:border-0 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-2 group"
      >
        <h3 className="font-bold text-slate-800 text-sm group-hover:text-yellow-600 transition-colors">
            {title}
        </h3>
        {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100000000]);

  return (
    <aside className="w-full bg-white rounded-2xl border border-slate-100 p-5 sticky top-4">
      
      {/* هدر فیلترها */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-2">
        <div className="flex items-center gap-2 text-slate-800">
            <Filter size={18} />
            <span className="font-black text-lg">فیلترها</span>
        </div>
        <button className="text-xs text-red-500 font-medium hover:underline">
            حذف همه
        </button>
      </div>

      {/* ۱. دسته‌بندی‌ها */}
      <FilterSection title="دسته‌بندی نتایج">
        <ul className="space-y-3">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-yellow-500 peer-checked:border-yellow-500 flex items-center justify-center transition-all">
                    <Check size={10} className="text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    {cat.name}
                </span>
                <span className="mr-auto text-xs text-slate-300 font-medium">
                    ({cat.count})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* ۲. محدوده قیمت (ساده شده) */}
      <FilterSection title="محدوده قیمت (تومان)">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="relative w-full">
                    <input 
                        type="number" 
                        placeholder="از..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 text-left dir-ltr"
                    />
                </div>
                <span className="text-slate-400">-</span>
                <div className="relative w-full">
                    <input 
                        type="number" 
                        placeholder="تا..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 text-left dir-ltr"
                    />
                </div>
            </div>
            <button className="w-full py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                اِعمال قیمت
            </button>
        </div>
      </FilterSection>

      {/* ۳. برندها */}
      <FilterSection title="برند سازنده">
        <div className="relative mb-3">
            <input 
                type="text" 
                placeholder="جستجوی برند..." 
                className="w-full bg-slate-50 border-none rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-yellow-400"
            />
        </div>
        <ul className="space-y-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
          {BRANDS.map((brand) => (
            <li key={brand.id}>
               <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-slate-800 peer-checked:border-slate-800 flex items-center justify-center transition-all">
                    <Check size={10} className="text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    {brand.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* ۴. سوئیچ‌ها (فقط کالاهای موجود) */}
      <div className="py-4 border-t border-slate-100">
        <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">
                فقط کالاهای موجود
            </span>
            <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </div>
        </label>
      </div>

    </aside>
  );
};
