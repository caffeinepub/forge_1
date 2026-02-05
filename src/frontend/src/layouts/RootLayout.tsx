import { Outlet, useRouterState } from '@tanstack/react-router';
import GlobalHeader from '../components/GlobalHeader';
import FooterNote from '../components/FooterNote';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useRouteMeta } from '../hooks/useRouteMeta';
import { useEffect } from 'react';
import CtaBackButton from '../components/CtaBackButton';
import { useSmoothScrollToTop } from '../hooks/useScrollBehavior';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

export default function RootLayout() {
    useDocumentTitle();
    useRouteMeta();
    const routerState = useRouterState();
    const scrollToTop = useSmoothScrollToTop(500);
    const { isPopstate } = useScrollRestoration();

    // Disable browser's automatic scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    // Smooth scroll-to-top on non-popstate navigations
    useEffect(() => {
        // Skip if this is a back/forward navigation (handled by useScrollRestoration)
        if (!isPopstate) {
            scrollToTop();
        }
    }, [routerState.location.pathname, routerState.location.search, scrollToTop, isPopstate]);

    // Check if we should show the back button
    const showBackButton = () => {
        const state = window.history.state as any;
        return state?.fromCta === true;
    };

    return (
        <div className="min-h-screen relative flex flex-col forge-motion-subtle">
            {/* Ambient background drift */}
            <div className="forge-ambient-drift" />
            
            {/* Background texture */}
            <div 
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(/assets/generated/forge-bg-texture.dim_2400x1350.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Subtle orchestration accent layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            </div>

            {/* Global sticky header */}
            <GlobalHeader />

            {/* Back button (shown when arriving via CTA) */}
            {showBackButton() && (
                <div className="relative z-20 px-6 pt-20 pb-3">
                    <div className="max-w-7xl mx-auto">
                        <CtaBackButton />
                    </div>
                </div>
            )}

            {/* Page content */}
            <div className="relative z-10 flex-1">
                <Outlet />
            </div>

            {/* Global footer */}
            <div className="relative z-10">
                <FooterNote />
            </div>
        </div>
    );
}
