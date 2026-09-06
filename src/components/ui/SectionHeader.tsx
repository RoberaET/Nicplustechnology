import { cn } from '../../lib/utils';
import { Badge } from './Badge';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, badge, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 mb-12', centered && 'items-center text-center', className)}>
      {badge && <Badge variant="primary">{badge}</Badge>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
