import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-base tracking-widest',
    lg: 'text-lg tracking-widest',
  };

  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      {/* Precision Geometric Monogram */}
      <div className={cn('relative flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-950 p-[1px] shadow-sm shadow-cyan-500/20', iconSizes[size])}>
        <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle internal glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 to-transparent pointer-events-none" />
          
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-400 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Minimalist modern N connected with an intelligent + accent */}
            <path d="M4 18V6l8 12V6" />
            <path d="M16 12h5" stroke="#38bdf8" strokeWidth="2.5" />
            <path d="M18.5 9.5v5" stroke="#38bdf8" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex items-baseline">
          <span className={cn('font-bold text-text-main uppercase font-sans tracking-tight', textSizes[size])}>
            NIC<span className="text-cyan-400 font-extrabold">+</span>
          </span>
          <span className="ml-1.5 text-[11px] font-semibold text-text-muted uppercase tracking-[0.2em] hidden sm:inline">
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
}

