import { Header } from "@/core/components/layout/Header";
import { Footer } from "@/core/components/layout/Footer";
import { HeroSection } from "@/modules/home/presentation/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-yellow selection:text-brand-teal">
      {/* هدر گلوبال */}
      <Header />
      
      {/* محتوای صفحه */}
      <div className="flex flex-col gap-20">
        
        {/* بخش هیرو (بنر اصلی) */}
        <HeroSection />
        
        {/* اینجا بعدا بخش‌های دیگر مثل محصولات پرفروش اضافه می‌شود */}
        <section className="container mx-auto px-6 py-10 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest">اسکرول کنید تا شگفتی‌های بیشتر را ببینید</p>
          <div className="w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent mx-auto mt-6" />
        </section>

      </div>

      {/* فوتر گلوبال */}
      <Footer />
    </main>
  );
}
