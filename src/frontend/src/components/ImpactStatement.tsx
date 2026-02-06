import { ReactNode } from 'react';

interface ImpactStatementProps {
  children: ReactNode;
  variant?: 'default' | 'large';
  className?: string;
}

/**
 * Reusable component for ghost-purple highlighted impact statements.
 * Provides consistent styling with accessible emphasis beyond color.
 */
export default function ImpactStatement({ 
  children, 
  variant = 'default',
  className = '' 
}: ImpactStatementProps) {
  const baseClasses = 'forge-impact-statement font-semibold';
  const variantClasses = variant === 'large' 
    ? 'text-xl md:text-2xl' 
    : 'text-base md:text-lg';
  
  return (
    <p className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </p>
  );
}
