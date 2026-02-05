import { ReactNode } from 'react';

interface MarketingSectionHeaderProps {
  title: string;
  subtitle?: string;
  microStatement?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable section header component for marketing pages with consistent hierarchy and spacing.
 */
export default function MarketingSectionHeader({
  title,
  subtitle,
  microStatement,
  children,
  className = ''
}: MarketingSectionHeaderProps) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {microStatement && (
        <p className="text-base text-foreground/80 max-w-2xl mx-auto mt-3 font-medium">
          {microStatement}
        </p>
      )}
      {children}
    </div>
  );
}
