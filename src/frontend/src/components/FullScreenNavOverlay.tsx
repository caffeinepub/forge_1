import { useEffect, useRef } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';

interface FullScreenNavOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FullScreenNavOverlay({ isOpen, onClose }: FullScreenNavOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLAnchorElement>(null);
    const navigate = useNavigate();

    // Handle ESC key to close
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Focus trap
    useEffect(() => {
        if (!isOpen) return;

        const overlay = overlayRef.current;
        if (!overlay) return;

        const focusableElements = overlay.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Focus first element when opened
        firstElement?.focus();

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleTab);
        return () => document.removeEventListener('keydown', handleTab);
    }, [isOpen]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNavigation = (to: string) => {
        onClose();
        navigate({ to });
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black forge-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
        >
            <nav className="h-full flex flex-col items-center justify-center">
                <ul className="space-y-8 text-center">
                    <li>
                        <Link
                            ref={firstFocusableRef}
                            to="/explore"
                            onClick={() => handleNavigation('/explore')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Explore Agents
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/build"
                            onClick={() => handleNavigation('/build')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Build
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/marketplace"
                            onClick={() => handleNavigation('/marketplace')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Marketplace
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/vision"
                            onClick={() => handleNavigation('/vision')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Vision
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/docs"
                            onClick={() => handleNavigation('/docs')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            onClick={() => handleNavigation('/login')}
                            className="text-3xl md:text-4xl font-light text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-4 py-2 inline-block"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
