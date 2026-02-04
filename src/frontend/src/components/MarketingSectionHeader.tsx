import { ReactNode } from 'react';

interface MarketingSectionHeaderProps {
  title: string;
  subtitle?: string;
  microStatement?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable section header component for marketing pages.
 * Standardizes heading/subheading/intro hierarchy and spacing for chapter-like framing.
 */
export default function MarketingSectionHeader({
  title,
  subtitle,
  microStatement,
  children,
  className = ''
}: MarketingSectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {microStatement && (
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4 font-medium">
          {microStatement}
        </p>
      )}
      {children}
    </div>
  );
}
