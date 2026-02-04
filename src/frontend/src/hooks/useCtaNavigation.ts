import { useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';

/**
 * Hook for CTA-driven navigation that marks navigation as CTA-driven
 * for showing the back button. Scroll-to-top is handled globally.
 */
export function useCtaNavigation() {
    const navigate = useNavigate();

    const ctaNavigate = useCallback((to: string, search?: any) => {
        // Navigate with CTA marker in state (for back button display)
        const navOptions: any = { 
            to: to as any,
            state: { fromCta: true } as any
        };
        
        if (search) {
            navOptions.search = search;
        }
        
        navigate(navOptions);
    }, [navigate]);

    return { ctaNavigate };
}
