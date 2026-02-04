import { Button } from '../../components/ui/button';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function CapabilityHumanInTheLoopControlsPage() {
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
                            <span className="forge-text-gradient">Human-in-the-Loop Controls</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Set guardrails, approve critical steps, and maintain oversight when needed.
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                            <h2 className="text-2xl font-semibold mb-4">What Are Human-in-the-Loop Controls?</h2>
                            <p className="text-muted-foreground mb-4">
                                While agents execute autonomously, some workflows require human approval at critical decision points. Human-in-the-loop controls let you define guardrails and approval gates.
                            </p>
                            <p className="text-muted-foreground">
                                Agents pause execution, request approval, and resume once you've reviewed and confirmed the next step.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                            <h2 className="text-2xl font-semibold mb-6">Key Capabilities</h2>
                            <div className="space-y-4">
                                {[
                                    'Define approval gates for high-stakes actions',
                                    'Review agent decisions before execution',
                                    'Set spending limits and escalation rules',
                                    'Audit trail of all agent actions and approvals',
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
                                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Approve large financial transactions before execution</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Review content before publication or distribution</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Confirm critical infrastructure changes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Escalate edge cases to human operators</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-2xl font-bold mb-4">Explore Human-in-the-Loop</h2>
                        <p className="text-muted-foreground mb-6">
                            Learn how to balance autonomy with oversight.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/docs' })}
                                size="lg"
                                className="forge-gradient hover:forge-glow"
                            >
                                Read Docs
                            </Button>
                            <Button
                                onClick={() => navigate({ to: '/build' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                Build with Controls
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
