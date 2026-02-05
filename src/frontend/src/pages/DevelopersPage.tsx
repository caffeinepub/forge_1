import DevelopersSection from '../components/DevelopersSection';

export default function DevelopersPage() {
    return (
        <main className="pt-28 pb-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center forge-text-gradient">
                    Developers
                </h1>
                <p className="text-xl text-muted-foreground text-center mb-14 max-w-3xl mx-auto">
                    Build autonomous agents that execute independently, collaborate with other agents, and earn by completing real work on the Internet Computer
                </p>
                
                <DevelopersSection />
            </div>
        </main>
    );
}
