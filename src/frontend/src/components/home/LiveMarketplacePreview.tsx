import { Star, CheckCircle2, Zap, TrendingUp } from 'lucide-react';
import { Badge } from '../ui/badge';

interface MarketplaceItem {
    id: string;
    type: 'agent' | 'capability';
    title: string;
    description: string;
    rating: number;
    reviewCount: number;
    priceRange: string;
    settlementReady: boolean;
    category: string;
    executionCount: number;
}

const PLACEHOLDER_ITEMS: MarketplaceItem[] = [
    {
        id: 'agent-watcher-001',
        type: 'agent',
        title: 'Watcher Agent',
        description: 'Monitors deployments, analyzes logs, and alerts on anomalies. Autonomous 24/7 oversight.',
        rating: 4.9,
        reviewCount: 127,
        priceRange: '0.5-2 ICP/day',
        settlementReady: true,
        category: 'DevOps',
        executionCount: 1243
    },
    {
        id: 'capability-research-002',
        type: 'capability',
        title: 'Market Research Specialist',
        description: 'Deep competitive analysis, trend identification, and strategic positioning reports.',
        rating: 4.8,
        reviewCount: 89,
        priceRange: '5-15 ICP/report',
        settlementReady: true,
        category: 'Research',
        executionCount: 456
    },
    {
        id: 'agent-security-003',
        type: 'agent',
        title: 'Security Auditor',
        description: 'Automated vulnerability scanning, dependency analysis, and remediation planning.',
        rating: 5.0,
        reviewCount: 203,
        priceRange: '10-30 ICP/audit',
        settlementReady: true,
        category: 'Security',
        executionCount: 892
    },
    {
        id: 'capability-content-004',
        type: 'capability',
        title: 'Technical Writer',
        description: 'Documentation generation, API reference creation, and user guide authoring.',
        rating: 4.7,
        reviewCount: 64,
        priceRange: '3-8 ICP/doc',
        settlementReady: true,
        category: 'Content',
        executionCount: 321
    },
    {
        id: 'agent-orchestrator-005',
        type: 'agent',
        title: 'Workflow Orchestrator',
        description: 'Coordinates multi-agent execution chains, manages dependencies, ensures quality.',
        rating: 4.9,
        reviewCount: 156,
        priceRange: '2-10 ICP/workflow',
        settlementReady: true,
        category: 'Orchestration',
        executionCount: 678
    },
    {
        id: 'capability-data-006',
        type: 'capability',
        title: 'Data Analysis Specialist',
        description: 'Statistical analysis, visualization generation, and insight extraction from datasets.',
        rating: 4.8,
        reviewCount: 112,
        priceRange: '4-12 ICP/analysis',
        settlementReady: true,
        category: 'Analytics',
        executionCount: 534
    }
];

export default function LiveMarketplacePreview() {
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PLACEHOLDER_ITEMS.map((item) => (
                    <div 
                        key={item.id}
                        className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all forge-panel forge-interactive-card group"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                            <Badge 
                                variant="outline" 
                                className="text-xs font-medium border-primary/30 text-primary"
                            >
                                {item.category}
                            </Badge>
                            {item.settlementReady && (
                                <div className="flex items-center gap-1 text-xs text-green-500">
                                    <CheckCircle2 className="h-3 w-3" />
                                    <span className="sr-only">Settlement ready</span>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                            {item.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                <span className="text-sm font-semibold">{item.rating.toFixed(1)}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                                ({item.reviewCount} reviews)
                            </span>
                        </div>

                        {/* Execution count */}
                        <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                            <TrendingUp className="h-3 w-3" />
                            <span>{item.executionCount.toLocaleString()} executions</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between pt-3 border-t border-border/30">
                            <div className="flex items-center gap-1 text-sm font-medium">
                                <Zap className="h-4 w-4 text-primary" />
                                <span>{item.priceRange}</span>
                            </div>
                            <span className="text-xs text-muted-foreground capitalize">
                                {item.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Live ecosystem indicator */}
            <div className="text-center pt-6">
                <p className="text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live marketplace • Agents executing now
                    </span>
                </p>
            </div>
        </div>
    );
}
