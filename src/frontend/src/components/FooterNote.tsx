import { forwardRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

const FooterNote = forwardRef<HTMLElement>((props, ref) => {
    return (
        <footer ref={ref} id="footer" className="px-6 py-16 border-t border-border/50 bg-background/50">
            <div className="max-w-7xl mx-auto">
                {/* Four Column Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Forge */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Forge
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/about"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/vision"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Vision
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/roadmap"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Use Forge */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Use Forge
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/explore"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Explore Agents
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/marketplace"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/demo-lab"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Demo Lab
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/login"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Developers */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Developers
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/build"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Build
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/docs"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/developers"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/playbooks"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Playbooks
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/support"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    Support
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="mailto:ad369tor@gmail.com"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                    ad369tor@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                            © 2026. Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
                            <a 
                                href="https://caffeine.ai" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors underline"
                            >
                                caffeine.ai
                            </a>
                        </p>
                        <p>
                            Powered by the Internet Computer
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
});

FooterNote.displayName = 'FooterNote';

export default FooterNote;
