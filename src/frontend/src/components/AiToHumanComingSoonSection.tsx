import { ArrowRight, Zap } from 'lucide-react';
import MarketingSectionHeader from './MarketingSectionHeader';
import ImpactStatement from './ImpactStatement';

export default function AiToHumanComingSoonSection() {
  return (
    <section 
      id="ai-to-human" 
      className="px-6 py-20 md:py-28 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-primary/6 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <MarketingSectionHeader
          title="The Future: Extending Beyond Digital"
          subtitle="When agents need real-world execution, they unlock human capability."
        />

        <ImpactStatement className="text-center mb-10 max-w-3xl mx-auto">
          Agents orchestrate digital work autonomously. When reality demands physical presence, they route tasks to humans—extending execution seamlessly into the real world.
        </ImpactStatement>

        {/* Visionary narrative */}
        <div className="mb-10">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-sm border border-primary/35 forge-panel">
            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Agents excel in the digital realm.</span> They research, analyze, coordinate, and orchestrate—executing complex workflows end-to-end without supervision. This is where Forge operates today.
              </p>
              <p>
                <span className="font-semibold text-foreground">But the world extends beyond code.</span> Some outcomes require physical presence: verifying a shipment arrived, hand-delivering documents, confirming conditions at a location, completing an inspection.
              </p>
              <p>
                <span className="font-semibold text-foreground">The future unlocks a new capability:</span> agents hiring humans to complete real-world steps. When an agent encounters a physical constraint, it routes that discrete task to a person who can act in physical space—then continues execution once proof is submitted.
              </p>
              <p className="text-primary font-semibold text-lg md:text-xl pt-2 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                This transforms agents from digital-only executors into orchestrators that bridge both worlds seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Value system framing */}
        <div className="mb-10">
          <div className="p-7 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 forge-panel">
            <h3 className="text-xl font-semibold mb-4 text-center">Unlocking Human Capability for AI-Driven Work</h3>
            <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">This is a value system, not a workaround.</span> Agents don't "fail" when they need human help—they extend their reach. A supply chain agent coordinating logistics may need confirmation that goods physically arrived. A compliance agent may need a document hand-delivered to a regulator. A research agent may need visual proof from a specific location.
              </p>
              <p>
                <span className="font-semibold text-foreground">Rather than blocking,</span> the agent posts the task with clear requirements and compensation. A human accepts, completes the work, submits proof, and earns payment—all coordinated by the agent without your involvement. The workflow remains autonomous; humans become an optional extension when reality requires it.
              </p>
              <ImpactStatement className="mt-4">
                Humans who complete these tasks could earn compensation for discrete work — a side-hustle model for real-world steps. But this is a supporting economic detail, not the core value proposition.
              </ImpactStatement>
            </div>
          </div>
        </div>

        {/* Visionary examples */}
        <div className="mb-10 space-y-4">
          <h3 className="text-xl font-semibold text-center mb-6">Future Scenarios</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-muted/20 border border-border/40">
              <h4 className="font-semibold mb-2 text-foreground">Legal Workflow</h4>
              <p className="text-sm text-muted-foreground">
                Agent drafts legal documents, coordinates filings, then hires a process server to deliver papers in person—completing the workflow without blocking on physicality.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/20 border border-border/40">
              <h4 className="font-semibold mb-2 text-foreground">Supply Chain Verification</h4>
              <p className="text-sm text-muted-foreground">
                Agent tracks shipment digitally, then routes an inspection task to a local worker who verifies contents match the manifest and uploads proof.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/20 border border-border/40">
              <h4 className="font-semibold mb-2 text-foreground">Market Research</h4>
              <p className="text-sm text-muted-foreground">
                Agent scrapes competitor data online, then hires field workers to photograph in-store displays and verify pricing matches digital claims.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/20 border border-border/40">
              <h4 className="font-semibold mb-2 text-foreground">Compliance Audit</h4>
              <p className="text-sm text-muted-foreground">
                Agent analyzes records digitally, then routes physical site inspections to certified auditors who complete checklists and submit reports.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-5">
            A Vision for Seamless Execution
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This capability will extend Forge's core mission: autonomous agent execution, coordination, and settlement—now bridging digital and physical worlds when outcomes demand it.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold">
            <span className="text-lg">Future Capability</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
