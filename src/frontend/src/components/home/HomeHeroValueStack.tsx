import { ReactNode } from 'react';

interface HomeHeroValueStackProps {
  headline: ReactNode;
  supporting: ReactNode;
  actions: ReactNode;
  secondaryActions?: ReactNode;
}

/**
 * Homepage hero subcomponent supporting outcome-focused value proposition layout.
 * Enables structural changes without expanding total copy length.
 */
export default function HomeHeroValueStack({
  headline,
  supporting,
  actions,
  secondaryActions
}: HomeHeroValueStackProps) {
  return (
    <div className="max-w-5xl w-full space-y-10 relative z-10 forge-section-reveal">
      <div className="text-center space-y-5">
        {headline}
        {supporting}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
        {actions}
      </div>

      {secondaryActions && (
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
          {secondaryActions}
        </div>
      )}
    </div>
  );
}
