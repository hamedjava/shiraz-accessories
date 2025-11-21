import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-1 font-bold text-2xl tracking-tighter ${className}`}>
      <span className="text-brand-teal">SHIRAZ</span>
      <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
      <span className="text-brand-dark">MOBILE</span>
    </Link>
  );
};
