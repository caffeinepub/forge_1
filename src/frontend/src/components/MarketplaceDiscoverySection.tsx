import { useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';
import { categoryTemplates, featuredTemplates, type PromptTemplate } from '../lib/demo/promptTemplates';
import { useAgentFirstMode } from '../hooks/useAgentFirstMode';
import ProgressiveDisclosure from './ProgressiveDisclosure';

export default function MarketplaceDiscoverySection() {
    const navigate = useNavigate();
    const { isAgentMode, toggleMode } = useAgentFirstMode();

    const handleSelectJob = (template: PromptTemplate) => {
        navigate({ to: '/demo-lab', search: { prompt: template.prompt } });
    };

    return (
        <section id="marketplace" className="px-6 py-20 bg-background/50">
            <div className="max-w-6xl mx-auto">
                {/* Header with mode toggle */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Discover the Marketplace
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Browse agents by capability or explore featured workflows
                        </p>
                    </div>
                    
                    <Button
                        onClick={toggleMode}
                        variant="outline"
                        className="border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
                    >
                        {isAgentMode ? '👤 Switch to Human Mode' : '🤖 Switch to Agent Mode'}
                    </Button>
                </div>

                {/* Jobs by Category */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6">Jobs by Category</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {categoryTemplates.map((template) => (
                            <div
                                key={template.id}
                                className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                            >
                                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {template.title}
                                </h4>
                                {template.description && (
                                    <p className="text-muted-foreground mb-4">
                                        {template.description}
                                    </p>
                                )}
                                <Button
                                    onClick={() => handleSelectJob(template)}
                                    variant="outline"
                                    className="w-full border-primary/40 hover:bg-primary/10 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    View in Demo Lab
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Executions */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Featured Executions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredTemplates.map((template) => (
                            <div
                                key={template.id}
                                className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                            >
                                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {template.title}
                                </h4>
                                {template.description && (
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {template.description}
                                    </p>
                                )}
                                <Button
                                    onClick={() => handleSelectJob(template)}
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-primary/40 hover:bg-primary/10 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    View in Demo Lab
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Agent Mode: ICP Rationale in Progressive Disclosure */}
                {isAgentMode && (
                    <div className="mt-12">
                        <ProgressiveDisclosure title="Why Internet Computer for Agent Execution">
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    The Internet Computer provides the only blockchain infrastructure capable of supporting autonomous agent execution at scale:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Deterministic compute:</strong> Agents execute reliably without external dependencies</li>
                                    <li><strong>Native HTTP outcalls:</strong> Direct API access without oracles or bridges</li>
                                    <li><strong>Persistent memory:</strong> Agent state survives across executions</li>
                                    <li><strong>Cryptographic identity:</strong> Internet Identity enables secure, decentralized auth</li>
                                    <li><strong>On-chain settlement:</strong> Payment and escrow handled natively via ckBTC</li>
                                    <li><strong>Canister smart contracts:</strong> Agents run as autonomous programs with guaranteed uptime</li>
                                </ul>
                                <p>
                                    This infrastructure eliminates the coordination overhead that makes agent marketplaces impractical on other chains.
                                </p>
                            </div>
                        </ProgressiveDisclosure>
                    </div>
                )}
            </div>
        </section>
    );
}
