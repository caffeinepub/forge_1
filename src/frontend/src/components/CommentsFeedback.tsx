import { useState } from 'react';
import { ThumbsUp, Loader2, Send } from 'lucide-react';
import { useGetCommentsByPageContext, useAddComment, useUpvoteComment } from '../hooks/useComments';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import type { PageContext, Comment } from '../backend';

interface CommentsFeedbackProps {
    pageContext: PageContext;
}

export default function CommentsFeedback({ pageContext }: CommentsFeedbackProps) {
    const [commentText, setCommentText] = useState('');
    const { identity } = useInternetIdentity();
    const { data: comments = [], isLoading, error } = useGetCommentsByPageContext(pageContext);
    const addCommentMutation = useAddComment();
    const upvoteMutation = useUpvoteComment(pageContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!commentText.trim()) {
            toast.error('Please enter a comment');
            return;
        }

        try {
            await addCommentMutation.mutateAsync({
                content: commentText.trim(),
                pageContext,
            });
            setCommentText('');
            toast.success('Comment posted successfully');
        } catch (error) {
            console.error('Failed to post comment:', error);
            toast.error('Failed to post comment');
        }
    };

    const handleUpvote = async (commentId: bigint) => {
        try {
            await upvoteMutation.mutateAsync(commentId);
        } catch (error) {
            console.error('Failed to upvote:', error);
            toast.error('Failed to upvote comment');
        }
    };

    const formatTimestamp = (timestamp: bigint) => {
        const date = new Date(Number(timestamp) / 1_000_000);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
            timeZoneName: 'short',
        });
    };

    return (
        <div className="space-y-8">
            {/* Comment Form */}
            <div className="bg-card border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Share Your Feedback
                </h3>
                
                {identity ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="What do you think? Share your thoughts, questions, or suggestions..."
                            className="min-h-[120px] resize-none"
                            disabled={addCommentMutation.isPending}
                        />
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={addCommentMutation.isPending || !commentText.trim()}
                                className="gap-2"
                            >
                                {addCommentMutation.isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Posting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Post Comment
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        <p className="mb-4">Sign in to share your feedback</p>
                        <p className="text-sm">
                            Internet Identity keeps this secure without usernames, passwords, or tracking.
                        </p>
                    </div>
                )}
            </div>

            {/* Comments List */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                    Community Feedback
                    {comments.length > 0 && (
                        <span className="text-muted-foreground ml-2">
                            ({comments.length})
                        </span>
                    )}
                </h3>

                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                    </div>
                ) : error ? (
                    <div className="text-center py-12 text-destructive">
                        Failed to load comments
                    </div>
                ) : comments.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground border border-white/10 rounded-lg">
                        <p>No feedback yet. Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {comments
                            .sort((a, b) => Number(b.timestamp - a.timestamp))
                            .map((comment, index) => (
                                <CommentCard
                                    key={index}
                                    comment={comment}
                                    onUpvote={handleUpvote}
                                    isUpvoting={upvoteMutation.isPending}
                                    formatTimestamp={formatTimestamp}
                                    isAuthenticated={!!identity}
                                />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

interface CommentCardProps {
    comment: Comment;
    onUpvote: (commentId: bigint) => void;
    isUpvoting: boolean;
    formatTimestamp: (timestamp: bigint) => string;
    isAuthenticated: boolean;
}

function CommentCard({ comment, onUpvote, isUpvoting, formatTimestamp, isAuthenticated }: CommentCardProps) {
    // Generate a stable ID from the comment content and timestamp
    const commentId = BigInt(
        Array.from(comment.content + comment.timestamp.toString())
            .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    );

    return (
        <div className="bg-card border border-white/10 rounded-lg p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-foreground">
                            {comment.authorAlias}
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {formatTimestamp(comment.timestamp)}
                        </span>
                    </div>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                        {comment.content}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onUpvote(commentId)}
                    disabled={isUpvoting || !isAuthenticated}
                    className="gap-2 text-muted-foreground hover:text-foreground"
                    title={isAuthenticated ? 'Agree with this feedback' : 'Sign in to agree'}
                >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Agree</span>
                    {comment.upvotes > 0n && (
                        <span className="font-medium">
                            {comment.upvotes.toString()}
                        </span>
                    )}
                </Button>
            </div>
        </div>
    );
}
