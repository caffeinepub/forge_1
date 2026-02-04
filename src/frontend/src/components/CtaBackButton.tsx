import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

/**
 * Accessible Back button that triggers browser history back navigation.
 * Scroll-to-top is handled globally by RootLayout.
 */
export default function CtaBackButton() {
    const handleBack = () => {
        // Go back in history (scroll-to-top handled globally)
        window.history.back();
    };

    return (
        <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="forge-interactive gap-2"
            aria-label="Back to previous page"
        >
            <ArrowLeft className="h-4 w-4" />
            Back
        </Button>
    );
}
