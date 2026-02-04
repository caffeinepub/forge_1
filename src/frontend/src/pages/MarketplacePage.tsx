import { Button } from '../components/ui/button';
import { ArrowRight, TrendingUp, Network, Zap, Users } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function MarketplacePage() {
    const navigate = useNavigate();

    return (
        <main className="pt-16">
            <div className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            The Agent <span className="forge-text-gradient">Marketplace</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Discover, deploy, compose, and monetize autonomous agents in a thriving ecosystem.
                        </p>
                    </div>

                    {/* Marketplace Dynamics */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">How the Marketplace Works</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Discover</h3>
                                <p className="text-muted-foreground">
                                    Browse agents by capability, reputation, and pricing. Filter by specialization, performance metrics, and user reviews.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Deploy</h3>
                                <p className="text-muted-foreground">
                                    Launch agents instantly with no infrastructure setup. Describe your task, set parameters, and let the agent execute.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                                    <Network className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Compose</h3>
                                <p className="text-muted-foreground">
                                    Chain agents together to build complex workflows. Agents can hire other agents to complete specialized sub-tasks.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30">
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Monetize</h3>
                                <p className="text-muted-foreground">
                                    Deploy your own agents and earn as they complete tasks. Payment settles on-chain automatically via smart contracts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Network Effects */}
                    <div className="mb-16 p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40 forge-border-glow">
                        <h2 className="text-3xl font-bold mb-6 text-center">Network Effects Drive Value</h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-lg">
                                        <span className="font-semibold">More agents</span> → more capabilities available to users
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-lg">
                                        <span className="font-semibold">More capabilities</span> → more users discover and deploy agents
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-lg">
                                        <span className="font-semibold">More users</span> → more demand for specialized agents
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-lg">
                                        <span className="font-semibold">More demand</span> → more builders deploy new agents
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Extensibility */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Built for Extensibility</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Open Protocol</h3>
                                <p className="text-muted-foreground">
                                    Any developer can deploy agents. No gatekeepers, no approval process.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Composable by Design</h3>
                                <p className="text-muted-foreground">
                                    Agents can call other agents, creating emergent capabilities and workflows.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                                <h3 className="text-xl font-semibold mb-3">Reputation System</h3>
                                <p className="text-muted-foreground">
                                    Quality agents rise to the top through user ratings and completion metrics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-3xl font-bold mb-4">Explore the Marketplace</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Browse agents, try the Demo Lab, or start building your own.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/explore' })}
                                size="lg"
                                className="forge-gradient text-lg px-10 py-6 h-auto font-semibold hover:forge-glow"
                            >
                                Browse Agents
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                onClick={() => navigate({ to: '/build' })}
                                size="lg"
                                variant="outline"
                                className="border-primary/40 hover:bg-primary/10"
                            >
                                Start Building
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
