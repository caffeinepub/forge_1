import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import AgentCard from './AgentCard';
import ActivityFeed from './ActivityFeed';
import ResultReveal from './ResultReveal';
import { generateTemplateDemo, type DemoData } from '../lib/demo/executionTemplates';
import { detectTemplateType } from '../lib/demo/promptTemplates';
import { formatUTCTimestamp } from '../utils/time';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ExecutionPanelProps {
    userInput: string;
    jobId: string;
    onReset: () => void;
    introCue?: string;
    panelRef?: React.RefObject<HTMLDivElement | null>;
}

type ExecutionPhase = 'intro' | 'analyzing' | 'agent-found' | 'executing' | 'completed';

interface SystemMessage {
    text: string;
    timestamp: string;
}

export default function ExecutionPanel({ userInput, jobId, onReset, introCue, panelRef }: ExecutionPanelProps) {
    const [phase, setPhase] = useState<ExecutionPhase>(introCue ? 'intro' : 'analyzing');
    const [systemMessages, setSystemMessages] = useState<SystemMessage[]>([]);
    const [demoData] = useState<DemoData>(() => {
        const templateType = detectTemplateType(userInput);
        return generateTemplateDemo(userInput, templateType);
    });
    const [liveAnnouncement, setLiveAnnouncement] = useState('');
    const prefersReducedMotion = usePrefersReducedMotion();
    const newRequestButtonRef = useRef<HTMLButtonElement>(null);

    // Intro phase with optional cue
    useEffect(() => {
        if (phase === 'intro' && introCue) {
            setLiveAnnouncement(introCue);
            const delay = prefersReducedMotion ? 300 : 1200;
            const introTimer = setTimeout(() => {
                setPhase('analyzing');
            }, delay);
            return () => clearTimeout(introTimer);
        }
    }, [phase, introCue, prefersReducedMotion]);

    // Analyzing phase with system messages
    useEffect(() => {
        if (phase !== 'analyzing') return;

        setLiveAnnouncement('Analyzing your request');

        const messages = [
            'Analyzing request structure',
            'Confirming success criteria',
            'Identifying required capabilities',
            'Searching available agents',
        ];

        let messageIndex = 0;
        const messageDelay = prefersReducedMotion ? 400 : 850;
        
        const messageInterval = setInterval(() => {
            if (messageIndex < messages.length) {
                const newMessage = { text: messages[messageIndex], timestamp: formatUTCTimestamp() };
                setSystemMessages((prev) => [...prev, newMessage]);
                setLiveAnnouncement(messages[messageIndex]);
                messageIndex++;
            } else {
                clearInterval(messageInterval);
                const agentFoundDelay = prefersReducedMotion ? 200 : 600;
                setTimeout(() => {
                    setLiveAnnouncement('Agent found');
                    setPhase('agent-found');
                }, agentFoundDelay);
            }
        }, messageDelay);

        return () => clearInterval(messageInterval);
    }, [phase, prefersReducedMotion]);

    // Agent found phase
    useEffect(() => {
        if (phase === 'agent-found') {
            const delay = prefersReducedMotion ? 800 : 2500;
            const timer = setTimeout(() => {
                setLiveAnnouncement('Execution started');
                setPhase('executing');
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [phase, prefersReducedMotion]);

    const handleExecutionComplete = () => {
        setLiveAnnouncement('Execution completed');
        setPhase('completed');
    };

    return (
        <div 
            ref={panelRef}
            className="min-h-screen px-6 py-12"
            tabIndex={-1}
            aria-label="Execution ritual panel"
        >
            <div className="max-w-4xl mx-auto">
                {/* Aria-live region for screen reader announcements */}
                <div 
                    className="sr-only" 
                    role="status" 
                    aria-live="polite" 
                    aria-atomic="true"
                >
                    {liveAnnouncement}
                </div>

                {/* Phase indicator */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {phase === 'intro' && 'Initializing'}
                            {phase === 'analyzing' && 'Analyzing'}
                            {phase === 'agent-found' && 'Agent Found'}
                            {phase === 'executing' && 'Executing'}
                            {phase === 'completed' && 'Completed'}
                        </span>
                    </div>
                    <Button
                        ref={newRequestButtonRef}
                        variant="ghost"
                        onClick={onReset}
                        className="text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="Start a new request"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        New request
                    </Button>
                </div>

                {/* Optional intro cue */}
                {phase === 'intro' && introCue && (
                    <div className="mb-8 p-6 bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/30 forge-glow-sm animate-in fade-in duration-700">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                            <p className="text-lg text-primary font-medium">{introCue}</p>
                        </div>
                    </div>
                )}

                {/* User input display */}
                <div className="mb-8 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Request</p>
                    <p className="text-lg">{userInput}</p>
                </div>

                {/* System messages with timestamps */}
                {phase === 'analyzing' && (
                    <div className="space-y-3 mb-8" role="log" aria-label="System analysis messages">
                        {systemMessages.map((msg, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center justify-between text-muted-foreground animate-in fade-in duration-500"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span>{msg.text}</span>
                                </div>
                                <span className="text-xs text-muted-foreground/60">{msg.timestamp}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Agent card with active glow */}
                {phase !== 'analyzing' && phase !== 'intro' && (
                    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 forge-active-glow-subtle">
                        <AgentCard />
                    </div>
                )}

                {/* Activity feed */}
                {phase === 'executing' && (
                    <ActivityFeed 
                        feedItems={demoData.feedItems}
                        jobId={jobId}
                        onComplete={handleExecutionComplete}
                    />
                )}

                {/* Result */}
                {phase === 'completed' && (
                    <ResultReveal result={demoData.result} jobId={jobId} />
                )}
            </div>
        </div>
    );
}
