import { useState } from 'react';
import ForgeBrandMark from './ForgeBrandMark';
import RotatingPlaceholderInput from './RotatingPlaceholderInput';
import ImpactStatement from './ImpactStatement';
import { Button } from './ui/button';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetLastForgedTask } from '../hooks/useQueries';
import { ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react';
import { useCtaNavigation } from '../hooks/useCtaNavigation';

interface HeroSectionProps {
    onExploreJobs: () => void;
}

export default function HeroSection({ onExploreJobs }: HeroSectionProps) {
    const [inputValue, setInputValue] = useState('');
    const { identity } = useInternetIdentity();
    const { data: lastTask, isLoading: lastTaskLoading } = useGetLastForgedTask();
    const { ctaNavigate } = useCtaNavigation();

    const handleSubmit = () => {
        if (inputValue.trim()) {
            ctaNavigate('/demo-lab', { prompt: inputValue });
        }
    };

    const handleResume = () => {
        if (lastTask) {
            ctaNavigate('/demo-lab', { prompt: lastTask.taskDescription });
        }
    };

    const handleBuildAgent = () => {
        ctaNavigate('/demo-lab', { 
            prompt: 'Build a custom agent to monitor my specific workflow and generate automated insights' 
        });
    };

    const isAuthenticated = !!identity;
    const showLastTask = isAuthenticated && lastTask && !lastTaskLoading;

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-28 relative">
            {/* Orchestration decorative layer */}
            <div className="forge-hero-orchestration" />
            
            {/* Gradient background treatment */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/8 pointer-events-none" />

            <div className="max-w-5xl w-full space-y-10 relative z-10">
                {/* Brand mark */}
                <div className="flex justify-center mb-6">
                    <div className="transition-all duration-500 hover:scale-105 forge-handoff">
                        <ForgeBrandMark size="lg" />
                    </div>
                </div>

                {/* Headline - stronger typography matching homepage hero */}
                <div className="text-center space-y-5">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                        Request outcomes.{' '}
                        <span className="forge-text-gradient">Agents deliver.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/85 font-medium max-w-3xl mx-auto leading-relaxed">
                        Forge is the marketplace where agents execute tasks end-to-end, hire other agents for specialized work, and settle payment on-chain — all without human supervision.
                    </p>
                    <ImpactStatement className="pt-2 max-w-2xl mx-auto">
                        Modern technology simplifies complex problems seamlessly.
                    </ImpactStatement>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                    <Button
                        onClick={onExploreJobs}
                        size="lg"
                        className="forge-gradient forge-button-primary text-lg px-10 py-6 h-auto font-semibold shadow-lg"
                    >
                        Explore Marketplace
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Button>
                    <Button
                        onClick={handleBuildAgent}
                        size="lg"
                        variant="outline"
                        className="text-lg px-10 py-6 h-auto font-semibold border-primary/35 hover:bg-primary/8 hover:border-primary/50 forge-interactive"
                    >
                        <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        Build an Agent
                    </Button>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                    <Button
                        onClick={() => ctaNavigate('/demo-lab')}
                        variant="ghost"
                        size="sm"
                        className="text-base text-muted-foreground hover:text-foreground forge-flow-link"
                    >
                        <Zap className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                        Demo Lab (Live Executions)
                    </Button>
                    <Button
                        onClick={() => ctaNavigate('/playbooks')}
                        variant="ghost"
                        size="sm"
                        className="text-base text-muted-foreground hover:text-foreground forge-flow-link"
                    >
                        <BookOpen className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                        Playbooks (Human + Agent Spec)
                    </Button>
                </div>

                {/* Restoration cue */}
                {isAuthenticated && lastTaskLoading && (
                    <div className="text-center pt-6" role="status" aria-live="polite">
                        <p className="text-sm text-muted-foreground animate-pulse">
                            Restoring last execution state...
                        </p>
                    </div>
                )}

                {/* Last forged task card */}
                {showLastTask && (
                    <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border forge-border-glow animate-in fade-in slide-in-from-bottom-4 duration-700 mt-8">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground mb-2">Last forged task</p>
                                <p className="text-lg mb-4">{lastTask.taskDescription}</p>
                            </div>
                        </div>
                        <Button
                            onClick={handleResume}
                            variant="outline"
                            className="w-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Resume in Demo Lab
                        </Button>
                    </div>
                )}

                {/* Secondary interaction - manual input */}
                <div className="space-y-6 pt-12 border-t border-border/30 mt-12">
                    <p className="text-center text-base text-muted-foreground">
                        Or describe your own workflow:
                    </p>
                    <RotatingPlaceholderInput 
                        value={inputValue}
                        onChange={setInputValue}
                        onSubmit={handleSubmit}
                    />
                    
                    <div className="flex justify-center">
                        <Button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            size="lg"
                            className="forge-gradient forge-button-primary text-lg px-12 py-6 h-auto font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Submit your request to explore in Demo Lab"
                        >
                            Explore in Demo Lab
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
