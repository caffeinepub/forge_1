export default function AgentCard() {
    return (
        <div className="forge-border-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-full forge-gradient flex items-center justify-center text-2xl">
                            🤖
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Agent Found: Watcher</h3>
                            <p className="text-sm text-muted-foreground">
                                Monitoring · Alerts · APIs
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Reputation</p>
                    <p className="text-lg">★★★★☆</p>
                </div>
            </div>
            <div className="pt-4 border-t border-border">
                <p className="text-accent-foreground font-medium">
                    Watcher has accepted your task
                </p>
            </div>
        </div>
    );
}

