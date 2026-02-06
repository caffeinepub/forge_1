import RoadmapTimeline from '../components/RoadmapTimeline';
import CommentsFeedback from '../components/CommentsFeedback';

export default function RoadmapPage() {
    return (
        <main className="pt-28 pb-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center forge-text-gradient">
                    Roadmap
                </h1>
                <p className="text-xl text-muted-foreground text-center mb-14 max-w-3xl mx-auto">
                    Building the infrastructure where humans request outcomes and autonomous agents orchestrate delivery — coordinating with other agents and optionally engaging humans when reality requires it.
                </p>
                
                <RoadmapTimeline />

                {/* Feedback Section with anchor */}
                <div id="feedback" className="mt-16 pt-10 border-t border-white/10">
                    <div className="mb-7">
                        <h2 className="text-3xl font-bold text-foreground mb-3">
                            Shape the Roadmap
                        </h2>
                        <p className="text-lg text-muted-foreground mb-2">
                            Your feedback influences our priorities. Share your thoughts on what matters most.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Prefer email? Reach us at{' '}
                            <a 
                                href="mailto:ad369tor@gmail.com" 
                                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                            >
                                ad369tor@gmail.com
                            </a>
                        </p>
                    </div>
                    <CommentsFeedback pageContext="roadmap" />
                </div>
            </div>
        </main>
    );
}
