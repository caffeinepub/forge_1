import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import CommentsFeedback from '../components/CommentsFeedback';

// Single source of truth for the donation address
const DONATION_ADDRESS = '2f07e73d22729ba799efa3f25b105e76329a135f5492c3d5b76525c9b3959989';

export default function SupportPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(DONATION_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 forge-text-gradient">
                    Support
                </h1>
                
                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Get Help
                        </h2>
                        <p>
                            Have questions or need assistance? We're here to help.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Contact Us
                        </h2>
                        <p>
                            For support inquiries, feedback, or questions, reach out to us at:
                        </p>
                        <p className="mt-4">
                            <a 
                                href="mailto:ad369tor@gmail.com" 
                                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                            >
                                ad369tor@gmail.com
                            </a>
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            Support Forge AI
                        </h2>
                        <p className="mb-6">
                            Forge AI is building the future of autonomous work. If you believe 
                            in our mission, consider supporting our development with a donation.
                        </p>
                        
                        {/* What are ICP and ckBTC? */}
                        <div className="bg-card border border-white/10 rounded-lg p-6 mb-6 space-y-4">
                            <h3 className="text-xl font-semibold text-foreground">
                                What are ICP and ckBTC?
                            </h3>
                            
                            <div className="space-y-4 text-base">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">
                                        ICP (Internet Computer Protocol)
                                    </h4>
                                    <p className="text-muted-foreground">
                                        ICP is the native cryptocurrency of the Internet Computer blockchain. 
                                        Think of it like digital cash that powers applications running entirely 
                                        on-chain—no traditional servers needed. When you send ICP, you're 
                                        supporting infrastructure that enables truly autonomous AI agents.
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">
                                        ckBTC (Chain-Key Bitcoin)
                                    </h4>
                                    <p className="text-muted-foreground">
                                        ckBTC is Bitcoin that lives on the Internet Computer. It's backed 1:1 
                                        by real Bitcoin but can be transferred instantly with minimal fees. 
                                        You get Bitcoin's security and value with the speed and efficiency 
                                        of the Internet Computer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Donation Section */}
                        <div className="bg-card border border-white/10 rounded-lg p-6 space-y-6">
                            <h3 className="text-xl font-semibold text-foreground">
                                Donate via Internet Computer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                We accept donations in both ICP and ckBTC. Your support helps us 
                                build autonomous AI infrastructure for everyone.
                            </p>
                            
                            {/* ICP Donation */}
                            <div className="space-y-3">
                                <div>
                                    <p className="text-base font-semibold text-foreground mb-2">
                                        ICP Donation Address:
                                    </p>
                                    <div className="bg-background border border-white/10 rounded p-3 font-mono text-sm break-all text-foreground">
                                        {DONATION_ADDRESS}
                                    </div>
                                </div>
                            </div>

                            {/* ckBTC Donation */}
                            <div className="space-y-3">
                                <div>
                                    <p className="text-base font-semibold text-foreground mb-2">
                                        ckBTC Donation Address:
                                    </p>
                                    <div className="bg-background border border-white/10 rounded p-3 font-mono text-sm break-all text-foreground">
                                        {DONATION_ADDRESS}
                                    </div>
                                </div>
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopy}
                                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center gap-2 font-medium"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Address Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Copy Address
                                    </>
                                )}
                            </button>
                            
                            <p className="text-xs text-muted-foreground pt-2">
                                All donations go directly toward development, infrastructure, 
                                and growing the Forge AI ecosystem. Thank you for supporting 
                                the future of autonomous work.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Feedback Section */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Questions & Feedback
                        </h2>
                        <p className="text-lg text-muted-foreground mb-2">
                            Share your questions, report issues, or suggest improvements.
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
                    <CommentsFeedback pageContext="support" />
                </div>
            </div>
        </main>
    );
}
