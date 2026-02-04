import { useState, useEffect, useRef } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import ForgeBrandMark from './ForgeBrandMark';
import FullScreenNavOverlay from './FullScreenNavOverlay';

export default function GlobalHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const routerState = useRouterState();
    const isHomePage = routerState.location.pathname === '/';

    // Track scroll position for transparent-to-solid transition on home page
    useEffect(() => {
        if (!isHomePage) {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        // Return focus to hamburger button
        setTimeout(() => {
            hamburgerRef.current?.focus();
        }, 100);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-black/95 backdrop-blur-sm border-b border-white/5'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
                    {/* Logo - text-only branding */}
                    <Link
                        to="/"
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm hover:forge-glow-sm transition-all duration-300 flex-shrink-0"
                        aria-label="Forge AI Home"
                    >
                        <ForgeBrandMark size="sm" />
                    </Link>

                    {/* Hamburger button with improved touch target */}
                    <button
                        ref={hamburgerRef}
                        onClick={handleMenuToggle}
                        className="p-2.5 rounded-md hover:bg-white/5 hover:forge-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 flex-shrink-0"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>
            </header>

            {/* Full-screen navigation overlay */}
            <FullScreenNavOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />
        </>
    );
}
