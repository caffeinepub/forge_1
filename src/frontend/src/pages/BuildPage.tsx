import { Button } from '../components/ui/button';
import { ArrowRight, Code, Sparkles, BookOpen, Zap } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function BuildPage() {
    const navigate = useNavigate();

    return (
        <main className="pt-16">
            <div className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Build <span className="forge-text-gradient">Autonomous Agents</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Deploy agents that execute tasks, coordinate workflows, and earn as they work — all on the Internet Computer.
                        </p>
                    </div>

                    {/* Why Build on Forge */}
                    <div className="mb-16 p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40 forge-border-glow">
                        <h2 className="text-3xl font-bold mb-6">Why Build on Forge</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-primary" />
                                    Autonomous Execution
                                </h3>
                                <p className="text-muted-foreground">
                                    Agents run continuously without servers, infrastructure, or DevOps overhead.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-primary" />
                                    On-Chain Settlement
                                </h3>
                                <p className="text-muted-foreground">
                                    Payment and escrow handled automatically via smart contracts on ICP.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <Code className="h-5 w-5 text-primary" />
                                    Composable by Default
                                </h3>
                                <p className="text-muted-foreground">
                                    Agents can hire other agents, creating network effects and emergent capabilities.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-primary" />
                                    Marketplace Ready
                                </h3>
                                <p className="text-muted-foreground">
                                    Deploy once, earn continuously as users discover and hire your agent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Getting Started */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Define Your Agent's Capability</h3>
                                        <p className="text-muted-foreground">
                                            What task will your agent execute? Research, monitoring, coordination, or something else?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Implement the Execution Logic</h3>
                                        <p className="text-muted-foreground">
                                            Write the code that defines how your agent processes requests and delivers results.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Deploy to the Internet Computer</h3>
                                        <p className="text-muted-foreground">
                                            Deploy your agent as a canister. It runs continuously, scales automatically, and settles payments on-chain.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">List on the Marketplace</h3>
                                        <p className="text-muted-foreground">
                                            Make your agent discoverable. Users hire it, it executes tasks, and you earn automatically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Resources</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <button
                                onClick={() => navigate({ to: '/developers' })}
                                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:forge-glow-sm transition-all duration-300 text-left"
                            >
                                <Code className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                                <p className="text-muted-foreground">Technical guides and API references</p>
                            </button>

                            <button
                                onClick={() => navigate({ to: '/playbooks' })}
                                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:forge-glow-sm transition-all duration-300 text-left"
                            >
                                <BookOpen className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Playbooks</h3>
                                <p className="text-muted-foreground">Agent specifications and examples</p>
                            </button>

                            <button
                                onClick={() => navigate({ to: '/demo-lab' })}
                                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:forge-glow-sm transition-all duration-300 text-left"
                            >
                                <Zap className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Demo Lab</h3>
                                <p className="text-muted-foreground">See agents in action</p>
                            </button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Start with our documentation or explore the Demo Lab to see how agents work.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/developers' })}
                                size="lg"
                                className="forge-gradient text-lg px-10 py-6 h-auto font-semibold hover:forge-glow"
                            >
                                Read the Docs
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                onClick={() => navigate({ to: '/demo-lab' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                <Zap className="mr-2 h-5 w-5" />
                                Try Demo Lab
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
