import { useState, useEffect } from 'react';
import { formatUTCTimestamp } from '../utils/time';
import { getRareVariant, AGENCY_VARIANTS } from '../utils/rareVariants';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface FeedItem {
    icon: string;
    message: string;
}

interface ActivityFeedProps {
    feedItems: FeedItem[];
    jobId: string;
    onComplete: () => void;
    agentName?: string;
}

interface TimestampedFeedItem extends FeedItem {
    timestamp: string;
}

export default function ActivityFeed({ feedItems, jobId, onComplete, agentName = 'Agent' }: ActivityFeedProps) {
    const [visibleItems, setVisibleItems] = useState<TimestampedFeedItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [liveAnnouncement, setLiveAnnouncement] = useState('');
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (currentIndex < feedItems.length) {
            const delay = prefersReducedMotion ? 400 : 1200;
            const timer = setTimeout(() => {
                const item = feedItems[currentIndex];
                
                // Apply rare agency variants based on message content
                let message = item.message;
                if (message.includes('Monitoring') || message.includes('monitoring')) {
                    message = getRareVariant(message, AGENCY_VARIANTS.monitoring, jobId + currentIndex);
                } else if (message.includes('Threshold') || message.includes('threshold')) {
                    message = getRareVariant(message, AGENCY_VARIANTS.threshold, jobId + currentIndex);
                } else if (message.includes('APIs') || message.includes('API')) {
                    message = getRareVariant(message, AGENCY_VARIANTS.api, jobId + currentIndex);
                }
                
                const timestampedItem = {
                    ...item,
                    message,
                    timestamp: formatUTCTimestamp()
                };
                
                setVisibleItems((prev) => [...prev, timestampedItem]);
                setLiveAnnouncement(`${agentName}: ${message}`);
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
        } else if (currentIndex === feedItems.length) {
            const completionDelay = prefersReducedMotion ? 300 : 1000;
            const timer = setTimeout(() => onComplete(), completionDelay);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, feedItems, jobId, onComplete, prefersReducedMotion, agentName]);

    return (
        <div className="space-y-4 mb-8">
            {/* Aria-live region for incremental feed announcements */}
            <div 
                className="sr-only" 
                role="status" 
                aria-live="polite" 
                aria-atomic="true"
            >
                {liveAnnouncement}
            </div>

            <h3 className="text-lg font-semibold text-muted-foreground mb-4">Execution in progress</h3>
            <div className="space-y-3" role="log" aria-label="Agent activity feed">
                {visibleItems.map((item, idx) => (
                    <div 
                        key={idx}
                        className="flex items-start justify-between p-3 bg-card/30 rounded-lg animate-in fade-in slide-in-from-left-2 duration-500"
                    >
                        <div className="flex items-start space-x-3 flex-1">
                            <span className="text-xl" aria-hidden="true">{item.icon}</span>
                            <span className="text-muted-foreground flex-1">
                                <span className="text-accent font-medium">{agentName}:</span> {item.message}
                            </span>
                        </div>
                        <span className="text-xs text-muted-foreground/60 ml-4 whitespace-nowrap">{item.timestamp}</span>
                    </div>
                ))}
                {currentIndex < feedItems.length && (
                    <div className="flex items-center justify-between text-muted-foreground">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm">Processing</span>
                        </div>
                        <span className="text-xs text-muted-foreground/60">{formatUTCTimestamp()}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
