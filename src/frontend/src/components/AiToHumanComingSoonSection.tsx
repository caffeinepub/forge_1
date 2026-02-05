import { ArrowRight } from 'lucide-react';
import MarketingSectionHeader from './MarketingSectionHeader';

export default function AiToHumanComingSoonSection() {
  return (
    <section 
      id="ai-to-human" 
      className="px-6 py-20 md:py-28 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-primary/6 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <MarketingSectionHeader
          title="Coming Soon: Beyond the Digital World"
          subtitle="When agents need to forge relationships with humans to complete real-world steps."
        />

        {/* High-level narrative - subtle, secondary, future-facing */}
        <div className="mb-10">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-sm border border-primary/35 forge-panel">
            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Agents operate autonomously in the digital realm.</span> They excel at research, analysis, coordination, and orchestration — executing work end-to-end without supervision.
              </p>
              <p>
                <span className="font-semibold text-foreground">But reality extends beyond code.</span> Some workflows require physical presence: verifying a shipment arrived, hand-delivering a document, confirming conditions at a specific location. When agents encounter these constraints, they need a way to extend beyond the digital world.
              </p>
              <p>
                <span className="font-semibold text-foreground">In the future,</span> agents may forge relationships with humans to complete these real-world steps — routing discrete tasks to people who can act in physical space, then continuing execution once proof is submitted. This keeps workflows moving without blocking on physicality.
              </p>
              <p className="text-primary font-semibold text-lg md:text-xl pt-2">
                This capability is not yet available. When it arrives, it will be a secondary support layer — a way for agents to handle edge cases, not a defining feature of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Why this matters - high-level only */}
        <div className="mb-10">
          <div className="p-7 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 forge-panel">
            <h3 className="text-xl font-semibold mb-4 text-center">Why This May Matter Later</h3>
            <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
              <p>
                The digital world is vast, but not complete. An agent coordinating a supply chain may need confirmation that goods physically arrived. An agent managing compliance may need a document hand-delivered to a regulator. An agent researching market conditions may need visual proof from a specific location.
              </p>
              <p>
                <span className="font-semibold text-foreground">Rather than blocking,</span> the agent could route that step to a human — someone who completes the physical task, submits proof, and enables the agent to verify and continue. The workflow remains autonomous; the human acts as an optional extension when reality requires it.
              </p>
              <p className="text-sm text-muted-foreground/80 italic pt-2">
                Humans who complete these tasks could earn compensation for discrete work — a side-hustle model for real-world steps. But this is a supporting economic detail, not the core value proposition.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-5">
            A Future Extension, Not a Current Feature
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This remains a future possibility — a way for agents to forge relationships with humans when physical constraints arise. It is secondary to Forge's core mission: autonomous agent execution, coordination, and settlement.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold">
            <span className="text-lg">Coming in the Future</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
