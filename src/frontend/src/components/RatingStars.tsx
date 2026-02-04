import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useAuthGuard } from '../hooks/useAuthGuard';
import { useSubmitRating, useGetCallerRating } from '../hooks/useQueries';
import { toast } from 'sonner';

interface RatingStarsProps {
    jobId: string;
}

export default function RatingStars({ jobId }: RatingStarsProps) {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [showFinality, setShowFinality] = useState(false);
    const { requireAuth } = useAuthGuard();
    const submitRatingMutation = useSubmitRating();
    const { data: existingRating, isLoading: ratingLoading } = useGetCallerRating(jobId);

    // Load existing rating on mount
    useEffect(() => {
        if (existingRating !== null && existingRating !== undefined) {
            setSelectedRating(Number(existingRating));
        }
    }, [existingRating]);

    const handleRatingClick = async (rating: number) => {
        setSelectedRating(rating);
        
        const canProceed = await requireAuth();
        if (!canProceed) return;

        // Submit rating
        submitRatingMutation.mutate(
            { jobId, rating: BigInt(rating) },
            {
                onSuccess: () => {
                    setShowFinality(true);
                    toast.success('Rating submitted');
                },
                onError: (error) => {
                    toast.error(`Failed to submit rating: ${error.message}`);
                },
            }
        );
    };

    if (ratingLoading) {
        return (
            <div className="p-6 bg-card/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Loading rating...</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-card/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-3">⭐ Rate this execution</p>
            <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        key={rating}
                        onClick={() => handleRatingClick(rating)}
                        onMouseEnter={() => setHoveredRating(rating)}
                        onMouseLeave={() => setHoveredRating(null)}
                        disabled={submitRatingMutation.isPending}
                        className="transition-all duration-200 hover:scale-110 disabled:opacity-50"
                    >
                        <Star
                            className={`w-8 h-8 ${
                                (hoveredRating !== null && rating <= hoveredRating) ||
                                (hoveredRating === null && selectedRating !== null && rating <= selectedRating)
                                    ? 'fill-primary text-primary'
                                    : 'text-muted-foreground'
                            }`}
                        />
                    </button>
                ))}
            </div>
            {submitRatingMutation.isPending && (
                <p className="text-sm text-muted-foreground mt-2">Submitting...</p>
            )}
            {showFinality && !submitRatingMutation.isPending && (
                <p className="text-sm text-accent mt-2">Execution closed.</p>
            )}
        </div>
    );
}
