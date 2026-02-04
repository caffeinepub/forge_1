import { Button } from '../../components/ui/button';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function CapabilityLongRunningWorkflowsPage() {
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
                            <span className="forge-text-gradient">Long-Running Workflows</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Agents persist state and execute tasks over hours, days, or weeks.
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                            <h2 className="text-2xl font-semibold mb-4">What Are Long-Running Workflows?</h2>
                            <p className="text-muted-foreground mb-4">
                                Many real-world tasks require continuous execution over extended periods. Long-running workflows enable agents to persist state, schedule future actions, and maintain context across sessions.
                            </p>
                            <p className="text-muted-foreground">
                                Agents run on the Internet Computer, which provides durable execution without servers or infrastructure management.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                            <h2 className="text-2xl font-semibold mb-6">Key Capabilities</h2>
                            <div className="space-y-4">
                                {[
                                    'Persistent state across hours, days, or weeks',
                                    'Scheduled actions and periodic check-ins',
                                    'Incremental progress updates and checkpoints',
                                    'Automatic recovery from interruptions',
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
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Continuous monitoring and alerting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Multi-day research and data collection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Scheduled outreach and follow-up campaigns</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Periodic reporting and compliance checks</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-2xl font-bold mb-4">Try Long-Running Workflows</h2>
                        <p className="text-muted-foreground mb-6">
                            See how agents maintain state and execute over time.
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
                                onClick={() => navigate({ to: '/docs' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                Read Docs
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
