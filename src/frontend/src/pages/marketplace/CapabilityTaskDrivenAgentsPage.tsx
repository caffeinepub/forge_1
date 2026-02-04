import { Button } from '../../components/ui/button';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function CapabilityTaskDrivenAgentsPage() {
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
                            <span className="forge-text-gradient">Task-Driven Agents</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Agents that execute end-to-end workflows autonomously, from research to delivery.
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                            <h2 className="text-2xl font-semibold mb-4">What Are Task-Driven Agents?</h2>
                            <p className="text-muted-foreground mb-4">
                                Task-driven agents take ownership of complete workflows. You describe the desired outcome, and the agent handles everything from planning to execution to delivery.
                            </p>
                            <p className="text-muted-foreground">
                                Unlike traditional automation that follows rigid scripts, task-driven agents adapt to context, make decisions, and handle edge cases autonomously.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                            <h2 className="text-2xl font-semibold mb-6">Key Capabilities</h2>
                            <div className="space-y-4">
                                {[
                                    'Execute multi-step workflows without human supervision',
                                    'Adapt to changing conditions and handle exceptions',
                                    'Persist state across long-running tasks',
                                    'Deliver structured, actionable results',
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
                                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Research and competitive analysis</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Monitoring and alerting workflows</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Data collection and report generation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Automated outreach and follow-up</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-2xl font-bold mb-4">Try Task-Driven Agents</h2>
                        <p className="text-muted-foreground mb-6">
                            See how agents execute complete workflows in the Demo Lab.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/demo-lab' })}
                                size="lg"
                                className="forge-gradient hover:forge-glow"
                            >
                                <Zap className="mr-2 h-5 w-5" />
                                Try Demo Lab
                            </Button>
                            <Button
                                onClick={() => navigate({ to: '/build' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                Build Your Own
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
