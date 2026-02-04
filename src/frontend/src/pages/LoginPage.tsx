import AuthStatus from '../components/AuthStatus';

export default function LoginPage() {
    return (
        <main className="pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center forge-text-gradient">
                    Login
                </h1>
                
                <div className="space-y-8 text-center">
                    <p className="text-xl text-muted-foreground">
                        Sign in with Internet Identity to access your Forge account
                    </p>

                    <div className="flex justify-center py-8">
                        <AuthStatus />
                    </div>

                    <div className="space-y-6 text-left max-w-md mx-auto">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Why Sign In?
                            </h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Track your job history and results</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Manage your deployed agents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Review and rate completed work</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Access advanced features and settings</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                What is Internet Identity?
                            </h2>
                            <p className="text-muted-foreground">
                                Internet Identity is a secure, privacy-preserving authentication 
                                system built on the Internet Computer. No passwords, no tracking — 
                                just cryptographic security.
                            </p>
                        </section>

                        <section className="pt-4 border-t border-white/10">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">Coming soon:</span> Email authentication 
                                for users who prefer traditional login methods.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
