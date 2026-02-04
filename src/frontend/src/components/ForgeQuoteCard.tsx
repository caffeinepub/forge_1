import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

export default function ForgeQuoteCard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            id="vision"
            className={`px-6 py-20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
            <div className="max-w-5xl mx-auto">
                <div className="forge-border-glow rounded-lg p-12 bg-card/50 backdrop-blur-sm relative">
                    {/* Ghost Purple quotation marks */}
                    <Quote 
                        className="absolute top-6 left-6 h-16 w-16 text-primary/20" 
                        strokeWidth={1.5}
                        aria-hidden="true"
                    />
                    <Quote 
                        className="absolute bottom-6 right-6 h-16 w-16 text-primary/20 rotate-180" 
                        strokeWidth={1.5}
                        aria-hidden="true"
                    />
                    
                    <blockquote className="space-y-6 relative z-10">
                        <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed text-center">
                            "The real opportunity with AI isn't chatbots — it's autonomous software that can run, evolve, and deliver outcomes directly on the internet."
                        </p>
                        <footer className="text-base text-muted-foreground text-center">
                            — Dominic Williams, Founder of the Internet Computer
                        </footer>
                    </blockquote>
                    
                    <div className="mt-8 pt-6 border-t border-border/30">
                        <p className="text-xl text-center font-semibold forge-text-gradient">
                            Forge is where this vision becomes real.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
