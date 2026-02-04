import { useSmoothScrollToElement } from '../hooks/useScrollBehavior';

interface SectionLink {
  id: string;
  label: string;
}

const SECTIONS: SectionLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'what-is', label: 'Why Different' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'personas', label: 'Use Cases' },
  { id: 'ecosystem', label: 'Marketplace' },
  { id: 'conversion', label: 'Get Started' },
];

export default function HomeSectionIndexFooter() {
  const scrollToElement = useSmoothScrollToElement();

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToElement(sectionId);
    }
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground mr-2 hidden sm:inline">
            Jump to:
          </span>
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToElement(section.id)}
              onKeyDown={(e) => handleKeyDown(e, section.id)}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Jump to ${section.label} section`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
