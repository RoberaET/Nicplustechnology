import * as React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover font-semibold shadow-md hover:shadow-lg border border-primary/80 dark:bg-[#88F9C0] dark:hover:bg-[#a5ffd1] dark:text-[#01010D] dark:border-[#88F9C0] dark:font-bold dark:shadow-[0_0_20px_rgba(136,249,192,0.35)]',
      secondary: 'bg-surface hover:bg-surfaceHover text-text-main border border-border dark:bg-[#090918] dark:text-slate-100 dark:border-slate-800 dark:hover:border-[#6331FB]',
      outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 dark:border-[#6331FB] dark:text-[#88F9C0] dark:hover:bg-[#6331FB]/20',
      ghost: 'bg-transparent hover:bg-surface text-text-muted hover:text-text-main dark:text-slate-400 dark:hover:text-[#88F9C0] dark:hover:bg-slate-900',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          'inline-flex items-center justify-center rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
