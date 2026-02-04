import { useState, useEffect } from 'react';
import RatingStars from './RatingStars';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ResultData {
    title: string;
    description: string;
    source: string;
    timestamp: string;
}

interface ResultRevealProps {
    result: ResultData;
    jobId: string;
}

export default function ResultReveal({ result, jobId }: ResultRevealProps) {
    const [showContent, setShowContent] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const delay = prefersReducedMotion ? 100 : 500;
        const timer = setTimeout(() => setShowContent(true), delay);
        return () => clearTimeout(timer);
    }, [prefersReducedMotion]);

    return (
        <div className="space-y-6">
            {/* Animated divider */}
            <div className="flex items-center justify-center py-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-in fade-in duration-1000" />
                <span className="px-6 text-lg font-semibold text-primary">RESULT</span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary to-transparent animate-in fade-in duration-1000" />
            </div>

            {/* Result content */}
            {showContent && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Alert card with active glow */}
                    <div className="forge-border-glow forge-active-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                        <div className="flex items-start space-x-4">
                            <span className="text-4xl" aria-hidden="true">📉</span>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-2">{result.title}</h3>
                                <p className="text-lg text-muted-foreground mb-3">{result.description}</p>
                                <p className="text-sm text-muted-foreground">
                                    {result.timestamp} · Source: {result.source}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Completion affirmation */}
                    <div className="text-center">
                        <p className="text-accent font-medium">Outcome delivered.</p>
                    </div>

                    {/* Completion metadata */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-card/30 rounded-lg border border-border">
                            <div className="flex items-center space-x-2 text-green-400">
                                <span className="text-xl" aria-hidden="true">✔</span>
                                <span className="font-medium">Task completed</span>
                            </div>
                        </div>
                        <div className="p-4 bg-card/30 rounded-lg border border-border">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl" aria-hidden="true">💰</span>
                                <span className="font-medium">Agent paid: $0.99</span>
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <RatingStars jobId={jobId} />
                </div>
            )}
        </div>
    );
}
