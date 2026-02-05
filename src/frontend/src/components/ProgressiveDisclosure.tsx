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
        className="w-full flex items-center justify-between p-4 bg-card/15 backdrop-blur-sm border border-border/35 rounded-lg hover:border-primary/25 hover:bg-card/25 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background forge-handoff"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground/85 group-hover:text-primary transition-colors forge-flow-link">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 animate-in fade-in slide-in-from-top-2 duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2">
        <div className="rounded-lg border border-border/25 bg-card/8 p-5">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
