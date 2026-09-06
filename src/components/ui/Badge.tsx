import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'outline';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-surface border border-border text-text-muted dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300',
    primary: 'bg-primary/10 border border-primary/30 text-primary dark:bg-cyan-950/60 dark:border-cyan-800/80 dark:text-cyan-300',
    outline: 'bg-transparent border border-border text-text-muted dark:border-slate-700 dark:text-slate-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-none px-4 py-2 text-sm font-bold tracking-widest uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
