import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface JumpToFooterProps {
  footerRef: React.RefObject<HTMLElement | null>;
}

export default function JumpToFooter({ footerRef }: JumpToFooterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleJumpToFooter = () => {
    if (footerRef.current) {
      const scrollOptions = prefersReducedMotion
        ? { block: 'start' as const }
        : { behavior: 'smooth' as const, block: 'start' as const };
      
      footerRef.current.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        onClick={handleJumpToFooter}
        size="icon"
        variant="outline"
        className="h-12 w-12 rounded-full border-primary/40 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:forge-glow-sm transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Jump to footer"
        title="Jump to footer"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </div>
  );
}
