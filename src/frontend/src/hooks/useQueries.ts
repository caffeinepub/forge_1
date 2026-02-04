import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile, RatingSubmission, LastForgedTask } from '../backend';

export function useGetCallerUserProfile() {
    const { actor, isFetching: actorFetching } = useActor();

    const query = useQuery<UserProfile | null>({
        queryKey: ['currentUserProfile'],
        queryFn: async () => {
            if (!actor) throw new Error('Actor not available');
            return actor.getCallerUserProfile();
        },
        enabled: !!actor && !actorFetching,
        retry: false,
    });

    return {
        ...query,
        isLoading: actorFetching || query.isLoading,
        isFetched: !!actor && query.isFetched,
    };
}

export function useSaveCallerUserProfile() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (profile: UserProfile) => {
            if (!actor) throw new Error('Actor not available');
            return actor.saveCallerUserProfile(profile);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
        },
    });
}

export function useSubmitRating() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (submission: RatingSubmission) => {
            if (!actor) throw new Error('Actor not available');
            return actor.submitRating(submission);
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['rating', variables.jobId] });
        },
    });
}

export function useGetCallerRating(jobId: string) {
    const { actor, isFetching: actorFetching } = useActor();

    return useQuery<bigint | null>({
        queryKey: ['rating', jobId],
        queryFn: async () => {
            if (!actor) throw new Error('Actor not available');
            return actor.getCallerRating(jobId);
        },
        enabled: !!actor && !actorFetching && !!jobId,
    });
}

export function useGetLastForgedTask() {
    const { actor, isFetching: actorFetching } = useActor();

    return useQuery<LastForgedTask | null>({
        queryKey: ['lastForgedTask'],
        queryFn: async () => {
            if (!actor) throw new Error('Actor not available');
            return actor.getLastForgedTask();
        },
        enabled: !!actor && !actorFetching,
        retry: false,
    });
}

export function useSetLastForgedTask() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (task: LastForgedTask) => {
            if (!actor) throw new Error('Actor not available');
            return actor.setLastForgedTask(task);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lastForgedTask'] });
        },
    });
}
