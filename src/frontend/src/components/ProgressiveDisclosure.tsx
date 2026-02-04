import { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface ProgressiveDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function ProgressiveDisclosure({
  title,
  children,
  defaultOpen = false,
  className = '',
}: ProgressiveDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
      <CollapsibleTrigger
        className="w-full flex items-center justify-between p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/40 hover:bg-card/40 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`h-6 w-6 text-muted-foreground group-hover:text-primary transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="rounded-lg border border-border/30 bg-card/20 p-6">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
