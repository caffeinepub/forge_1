import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useAuthGuard } from './useAuthGuard';
import type { Comment, CommentInput, CommentId, PageContext } from '../backend';

export function useGetCommentsByPageContext(pageContext: PageContext) {
    const { actor } = useActor();

    return useQuery<Comment[]>({
        queryKey: ['comments', pageContext],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getCommentsByPageContext(pageContext);
        },
        enabled: !!actor,
    });
}

export function useAddComment() {
    const { actor } = useActor();
    const queryClient = useQueryClient();
    const { requireAuth } = useAuthGuard();

    return useMutation({
        mutationFn: async (input: CommentInput) => {
            const authenticated = await requireAuth();
            if (!authenticated || !actor) {
                throw new Error('Authentication required');
            }
            return actor.addComment(input);
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['comments', variables.pageContext] });
        },
    });
}

export function useUpvoteComment(pageContext: PageContext) {
    const { actor } = useActor();
    const queryClient = useQueryClient();
    const { requireAuth } = useAuthGuard();

    return useMutation({
        mutationFn: async (commentId: CommentId) => {
            const authenticated = await requireAuth();
            if (!authenticated || !actor) {
                throw new Error('Authentication required');
            }
            return actor.upvoteComment(commentId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', pageContext] });
        },
    });
}
