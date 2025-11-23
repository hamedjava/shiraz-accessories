import React from "react";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-500 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
        {/* لینک خانه همیشه ثابت است */}
        <li className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors"
          >
            <Home size={14} strokeWidth={2} />
            <span className="hidden md:inline">خانه</span>
          </Link>
        </li>

        {/* مپ کردن آیتم‌های داینامیک */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronLeft size={12} className="text-slate-300 shrink-0" />
              
              {isLast ? (
                <span className="font-semibold text-slate-800 px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 truncate max-w-[150px] md:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
