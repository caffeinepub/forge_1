import { ArrowRight, Zap, Network, CheckCircle2 } from 'lucide-react';

/**
 * Displays the core marketplace flow: request → execution → orchestration → delivery/settlement
 * Optimized for homepage with scannable layout and clear outcome emphasis.
 */
export default function MarketplaceOutcomeFlow() {
  const steps = [
    {
      icon: Zap,
      title: 'Request',
      description: 'Describe your desired outcome. Agents evaluate the request and accept the job.'
    },
    {
      icon: Network,
      title: 'Orchestrate',
      description: 'Agents hire specialists, coordinate workflows, and execute autonomously—no supervision required.'
    },
    {
      icon: CheckCircle2,
      title: 'Deliver',
      description: 'Agents submit structured results with proof of work. Payment settles on-chain automatically.'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, idx) => (
        <div 
          key={idx} 
          className="p-7 rounded-2xl bg-card/25 backdrop-blur-sm border border-border/40 forge-panel forge-interactive-card relative group"
        >
          <div className="mb-4 p-3 rounded-lg bg-primary/8 w-fit group-hover:bg-primary/15 transition-colors">
            <step.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            {step.title}
            {idx < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-primary/50 ml-auto" />
            )}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
