import { Logo } from '@/core/components/ui/Logo';
import { Instagram, Send, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* ستون برند - 4 واحد */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white p-4 rounded-2xl w-fit">
               <Logo className="!text-brand-teal" />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm text-justify">
              شیراز موبایل، تلفیقی از تکنولوژی روز و اصالت. ما اینجا هستیم تا اکسسوری‌های موبایل را نه به عنوان یک ابزار، بلکه به عنوان بخشی از استایل شما ارائه دهیم.
            </p>
            <div className="flex gap-4 pt-4">
              {[Instagram, Twitter, Send].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-teal transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* لینک‌های سریع - 4 واحد */}
          <div className="md:col-span-4 flex justify-around">
            <div className="space-y-4">
              <h4 className="text-brand-yellow font-bold text-lg">دسترسی سریع</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['محصولات جدید', 'پرفروش‌ترین‌ها', 'تخفیفات ویژه', 'وبلاگ'].map(item => (
                  <li key={item}><a href="#" className="hover:text-brand-yellow transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-yellow font-bold text-lg">پشتیبانی</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['پیگیری سفارش', 'شرایط مرجوعی', 'تماس با ما', 'قوانین'].map(item => (
                  <li key={item}><a href="#" className="hover:text-brand-yellow transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* نماد اعتماد و خبرنامه - 4 واحد */}
          <div className="md:col-span-4 space-y-6">
             <h4 className="text-brand-yellow font-bold text-lg">اعتماد شما، اعتبار ماست</h4>
             <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-around">
                {/* جایگاه نماد اعتماد (اینماد) */}
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-xs text-gray-400 text-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  ENAMAD
                </div>
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-xs text-gray-400 text-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  SAMANDEHI
                </div>
             </div>
             
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="ایمیل خود را وارد کنید..." 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow"
                />
                <button className="absolute left-2 top-2 bottom-2 bg-brand-yellow text-brand-teal px-4 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                  عضویت
                </button>
             </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
           <p>© ۱۴۰۳ تمامی حقوق برای شیراز موبایل محفوظ است.</p>
           <p className="mt-2 md:mt-0">طراحی شده با ❤️ و Next.js</p>
        </div>
      </div>
    </footer>
  );
};
