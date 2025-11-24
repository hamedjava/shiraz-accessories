import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCcw } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "ارسال رایگان",
    desc: "سفارش‌های بالای ۵ میلیون",
    icon: Truck,
  },
  {
    id: 2,
    title: "ضمانت اصالت",
    desc: "تضمین ۱۰۰٪ اصل بودن",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "پشتیبانی ۲۴/۷",
    desc: "پاسخگویی تمام وقت",
    icon: Headphones,
  },
  {
    id: 4,
    title: "۷ روز ضمانت",
    desc: "بازگشت در صورت خرابی",
    icon: RefreshCcw,
  },
];

export const StoreFeatures = () => {
  return (
    <div className="w-full px-4 md:px-8"> {/* این پدینگ باعث فاصله از چپ و راست می‌شود */}
      <div className="container mx-auto">
        {/* باکس اصلی: خاکستری خیلی روشن با گوشه‌های گرد */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-x-reverse divide-slate-200">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id} 
                className="flex items-center justify-start lg:justify-center gap-4 px-4"
              >
                {/* آیکون: زرد خالص (400) با آیکون مشکی */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-sm">
                  <feature.icon size={28} strokeWidth={2} />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 font-black text-base lg:text-lg leading-none">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-xs lg:text-sm font-bold">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
