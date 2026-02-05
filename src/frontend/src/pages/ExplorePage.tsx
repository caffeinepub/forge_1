import { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { categoryTemplates, quickStartSamples } from '../lib/demo/promptTemplates';
import { useCtaNavigation } from '../hooks/useCtaNavigation';
import { EXPLORE_DEMO_LAB_COPY } from '../content/exploreDemoLabCopy';
import ProgressiveDisclosure from '../components/ProgressiveDisclosure';
import { SectionEntryReveal } from '../motion/SectionEntryReveal';

export default function ExplorePage() {
    const navigate = useNavigate();
    const { ctaNavigate } = useCtaNavigation();
    const [freeFormInput, setFreeFormInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFreeFormSubmit = () => {
        if (freeFormInput.trim()) {
            ctaNavigate('/demo-lab', { prompt: freeFormInput });
        }
    };

    const handleQuickStart = (prompt: string) => {
        ctaNavigate('/demo-lab', { prompt });
    };

    const handleCategorySelect = (prompt: string) => {
        ctaNavigate('/demo-lab', { prompt });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleFreeFormSubmit();
        }
    };

    return (
        <main className="pt-16">
            <div className="px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <SectionEntryReveal profile="exploreHero">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-5">
                                {EXPLORE_DEMO_LAB_COPY.explore.hero.title.split(' ')[0]}{' '}
                                <span className="forge-text-gradient">
                                    {EXPLORE_DEMO_LAB_COPY.explore.hero.title.split(' ')[1]}
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                {EXPLORE_DEMO_LAB_COPY.explore.hero.subtitle}
                            </p>
                        </div>
                    </SectionEntryReveal>

                    {/* PRIMARY PATH: What do you want done? - Free-form entry */}
                    <SectionEntryReveal profile="explorePrimaryPath">
                        <div className="mb-20 p-9 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-sm border-2 border-primary/40 shadow-2xl forge-pulse-container">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                {EXPLORE_DEMO_LAB_COPY.explore.primaryPath.heading}
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-7 max-w-2xl mx-auto">
                                {EXPLORE_DEMO_LAB_COPY.explore.primaryPath.helperText}
                            </p>
                            
                            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-7">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={freeFormInput}
                                    onChange={(e) => setFreeFormInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={EXPLORE_DEMO_LAB_COPY.explore.primaryPath.inputPlaceholder}
                                    className="flex-1 px-6 py-5 text-lg rounded-lg bg-background/90 backdrop-blur-sm border-2 border-border/50 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground transition-all"
                                    aria-label={EXPLORE_DEMO_LAB_COPY.explore.primaryPath.inputLabel}
                                />
                                <Button
                                    onClick={handleFreeFormSubmit}
                                    disabled={!freeFormInput.trim()}
                                    size="lg"
                                    className="forge-gradient text-xl px-11 py-5 h-auto font-bold hover:forge-glow focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-50 shadow-lg forge-button-primary"
                                >
                                    <Sparkles className="mr-2 h-6 w-6" />
                                    {EXPLORE_DEMO_LAB_COPY.explore.primaryPath.ctaLabel}
                                </Button>
                            </div>

                            {/* Quick-start sample flows */}
                            <div>
                                <p className="text-sm text-muted-foreground text-center mb-4 font-medium">
                                    {EXPLORE_DEMO_LAB_COPY.explore.quickStart.label}
                                </p>
                                <SectionEntryReveal profile="exploreQuickStart" staggerChildren>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                                        {quickStartSamples.map((sample) => (
                                            <button
                                                key={sample.id}
                                                onClick={() => handleQuickStart(sample.prompt)}
                                                className="p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 text-left group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none forge-handoff relative overflow-hidden"
                                            >
                                                <div className="relative z-10">
                                                    <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-1.5">
                                                        <Sparkles className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        {sample.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                                        {sample.description}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </SectionEntryReveal>
                            </div>
                        </div>
                    </SectionEntryReveal>

                    {/* SECONDARY: Browse by Category - Progressive disclosure */}
                    <div className="mb-14">
                        <ProgressiveDisclosure 
                            title={EXPLORE_DEMO_LAB_COPY.explore.categories.heading}
                            defaultOpen={false}
                        >
                            <SectionEntryReveal profile="exploreCategories" staggerChildren>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {categoryTemplates.map((category) => (
                                        <div
                                            key={category.id}
                                            className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group forge-dependency-path"
                                        >
                                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                {category.description}
                                            </p>
                                            <Button
                                                onClick={() => handleCategorySelect(category.prompt)}
                                                variant="outline"
                                                className="w-full border-primary/40 hover:bg-primary/10 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary forge-flow-link"
                                            >
                                                {EXPLORE_DEMO_LAB_COPY.explore.categories.ctaLabel}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </SectionEntryReveal>
                        </ProgressiveDisclosure>
                    </div>

                    {/* Bottom CTA */}
                    <SectionEntryReveal profile="exploreBottomCta">
                        <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/40">
                            <h2 className="text-3xl font-bold mb-4">
                                {EXPLORE_DEMO_LAB_COPY.explore.bottomCta.heading}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-7 max-w-2xl mx-auto">
                                {EXPLORE_DEMO_LAB_COPY.explore.bottomCta.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => ctaNavigate('/demo-lab')}
                                    size="lg"
                                    className="forge-gradient text-lg px-9 py-6 h-auto font-semibold hover:forge-glow focus-visible:ring-2 focus-visible:ring-primary forge-button-primary"
                                >
                                    <Zap className="mr-2 h-5 w-5" />
                                    {EXPLORE_DEMO_LAB_COPY.explore.bottomCta.primaryLabel}
                                </Button>
                                <Button
                                    onClick={() => navigate({ to: '/build' })}
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/40 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary forge-flow-link"
                                >
                                    {EXPLORE_DEMO_LAB_COPY.explore.bottomCta.secondaryLabel}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </SectionEntryReveal>
                </div>
            </div>
        </main>
    );
}
