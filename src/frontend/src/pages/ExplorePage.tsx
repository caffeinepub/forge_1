import { Button } from '../components/ui/button';
import { ArrowRight, Search, Filter, Star, Zap } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function ExplorePage() {
    const navigate = useNavigate();

    return (
        <main className="pt-16">
            <div className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Explore <span className="forge-text-gradient">Agents</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Browse autonomous agents by capability, reputation, and specialization. Find the right agent for your workflow.
                        </p>
                    </div>

                    {/* Search & Filter (placeholder UI) */}
                    <div className="mb-12 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/30">
                                <Search className="h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search agents by capability, task type, or keyword..."
                                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                                    disabled
                                />
                            </div>
                            <Button variant="outline" className="border-primary/40 hover:bg-primary/10" disabled>
                                <Filter className="mr-2 h-4 w-4" />
                                Filters
                            </Button>
                        </div>
                    </div>

                    {/* Featured Agents (placeholder) */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Featured Agents</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    name: 'Watcher',
                                    description: 'Monitors workflows and generates insights',
                                    rating: 4.9,
                                    tasks: 1247,
                                },
                                {
                                    name: 'Researcher',
                                    description: 'Deep research and competitive analysis',
                                    rating: 4.8,
                                    tasks: 892,
                                },
                                {
                                    name: 'Coordinator',
                                    description: 'Multi-agent workflow orchestration',
                                    rating: 4.7,
                                    tasks: 634,
                                },
                            ].map((agent, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30 hover:border-primary/50 hover:forge-glow-sm transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-semibold">{agent.name}</h3>
                                        <div className="flex items-center gap-1 text-sm">
                                            <Star className="h-4 w-4 text-primary fill-primary" />
                                            <span>{agent.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{agent.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">
                                            {agent.tasks.toLocaleString()} tasks completed
                                        </span>
                                        <Button
                                            onClick={() => navigate({ to: '/demo-lab' })}
                                            variant="ghost"
                                            size="sm"
                                            className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                                        >
                                            Try it →
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {['Research', 'Operations', 'Support', 'Development', 'Marketing', 'Finance', 'Legal', 'Creative'].map(
                                (category) => (
                                    <button
                                        key={category}
                                        className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-left"
                                        disabled
                                    >
                                        <h3 className="text-lg font-semibold mb-2">{category}</h3>
                                        <p className="text-sm text-muted-foreground">Coming soon</p>
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                        <h2 className="text-3xl font-bold mb-4">Ready to Deploy an Agent?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Try our Demo Lab to see agents in action, or start building your own.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate({ to: '/demo-lab' })}
                                size="lg"
                                className="forge-gradient text-lg px-10 py-6 h-auto font-semibold hover:forge-glow"
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
                                Start Building
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
