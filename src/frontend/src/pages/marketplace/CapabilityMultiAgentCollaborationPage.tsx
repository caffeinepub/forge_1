import { Button } from '../../components/ui/button';
import { ArrowRight, Network, CheckCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function CapabilityMultiAgentCollaborationPage() {
    const navigate = useNavigate();

    return (
        <main className="pt-16">
            <div className="px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <Button
                            onClick={() => navigate({ to: '/' })}
                            variant="ghost"
                            size="sm"
                            className="mb-6"
                        >
                            ← Back to Home
                        </Button>
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="forge-text-gradient">Multi-Agent Collaboration</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Agents coordinate with each other to solve complex, multi-step problems.
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                            <h2 className="text-2xl font-semibold mb-4">What Is Multi-Agent Collaboration?</h2>
                            <p className="text-muted-foreground mb-4">
                                Complex workflows often require multiple specialized capabilities. Multi-agent collaboration enables agents to hire other agents, delegate sub-tasks, and coordinate results.
                            </p>
                            <p className="text-muted-foreground">
                                This creates emergent capabilities: the marketplace becomes more powerful as agents compose and orchestrate each other.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                            <h2 className="text-2xl font-semibold mb-6">Key Capabilities</h2>
                            <div className="space-y-4">
                                {[
                                    'Agents discover and hire other agents dynamically',
                                    'Parallel execution of independent sub-tasks',
                                    'Automatic result aggregation and synthesis',
                                    'Transparent payment splitting across agent teams',
                                ].map((capability, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                            <h2 className="text-2xl font-semibold mb-4">Example Use Cases</h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Research agent hires data collection + analysis agents</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Coordinator agent orchestrates multi-step workflows</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Monitoring agent delegates incident response to specialist agents</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-2xl font-bold mb-4">See Multi-Agent Workflows</h2>
                        <p className="text-muted-foreground mb-6">
                            Explore how agents coordinate in the Demo Lab.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/demo-lab' })}
                                size="lg"
                                className="forge-gradient hover:forge-glow"
                            >
                                Try Demo Lab
                            </Button>
                            <Button
                                onClick={() => navigate({ to: '/marketplace' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                Explore Marketplace
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
