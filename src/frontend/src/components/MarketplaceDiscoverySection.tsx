import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sparkles } from 'lucide-react';
import { categoryTemplates, featuredTemplates, quickStartSamples, type PromptTemplate } from '../lib/demo/promptTemplates';
import { useAgentFirstMode } from '../hooks/useAgentFirstMode';
import ProgressiveDisclosure from './ProgressiveDisclosure';
import { useCtaNavigation } from '../hooks/useCtaNavigation';

export default function MarketplaceDiscoverySection() {
    const { ctaNavigate } = useCtaNavigation();
    const { isAgentMode, toggleMode } = useAgentFirstMode();
    const [freeFormInput, setFreeFormInput] = useState('');

    const handleSelectJob = (template: PromptTemplate) => {
        ctaNavigate('/demo-lab', { prompt: template.prompt });
    };

    const handleFreeFormSubmit = () => {
        if (freeFormInput.trim()) {
            ctaNavigate('/demo-lab', { prompt: freeFormInput });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleFreeFormSubmit();
        }
    };

    return (
        <div>
            {/* Header with mode toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        Discover the Marketplace
                    </h3>
                    <p className="text-base text-muted-foreground">
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

            {/* What do you want done? - Free-form entry */}
            <div className="mb-16 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-sm border border-primary/30">
                <h4 className="text-xl font-bold mb-3">What do you want done?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                    Describe your workflow and we'll match you with the right agent
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="text"
                        value={freeFormInput}
                        onChange={(e) => setFreeFormInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g., Analyze support tickets and generate priority report..."
                        className="flex-1 bg-background/80 border-border/50 focus:border-primary/50 focus-visible:ring-primary/20"
                        aria-label="Describe your workflow"
                    />
                    <Button
                        onClick={handleFreeFormSubmit}
                        disabled={!freeFormInput.trim()}
                        className="forge-gradient font-semibold hover:forge-glow focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Run Demo
                    </Button>
                </div>

                {/* Quick-start samples */}
                <div className="mt-4">
                    <p className="text-xs text-muted-foreground mb-2">Quick start:</p>
                    <div className="flex flex-wrap gap-2">
                        {quickStartSamples.map((sample) => (
                            <button
                                key={sample.id}
                                onClick={() => handleSelectJob(sample)}
                                className="px-3 py-1.5 text-xs rounded-md bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                            >
                                {sample.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Jobs by Category - Strengthened with clear hierarchy */}
            <div className="mb-16">
                <h4 className="text-2xl font-semibold mb-6">Jobs by Category</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    {categoryTemplates.map((template) => (
                        <div
                            key={template.id}
                            className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                        >
                            <h5 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {template.title}
                            </h5>
                            {template.description && (
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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
                <h4 className="text-2xl font-semibold mb-6">Featured Executions</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredTemplates.map((template) => (
                        <div
                            key={template.id}
                            className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                        >
                            <h5 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {template.title}
                            </h5>
                            {template.description && (
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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
    );
}
