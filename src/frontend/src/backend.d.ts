import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RatingSubmission {
    jobId: JobId;
    rating: Rating;
}
export type Rating = bigint;
export interface CommentInput {
    content: string;
    pageContext: PageContext;
}
export type CommentId = bigint;
export type PageContext = string;
export interface Comment {
    upvotes: bigint;
    content: string;
    pageContext: PageContext;
    timestamp: bigint;
    authorAlias: string;
}
export type JobId = string;
export interface LastForgedTask {
    jobId: JobId;
    taskDescription: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addComment(input: CommentInput): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAlias(): Promise<string>;
    getCallerRating(jobId: JobId): Promise<Rating | null>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCommentsByPageContext(pageContext: PageContext): Promise<Array<Comment>>;
    getLastForgedTask(): Promise<LastForgedTask | null>;
    getRating(jobId: JobId, user: Principal): Promise<Rating | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setLastForgedTask(task: LastForgedTask): Promise<void>;
    submitRating(submission: RatingSubmission): Promise<void>;
    upvoteComment(commentId: CommentId): Promise<void>;
}
