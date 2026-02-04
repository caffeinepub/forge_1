import { useInternetIdentity } from './useInternetIdentity';

export function useAuthGuard() {
    const { identity, login } = useInternetIdentity();

    const requireAuth = async (): Promise<boolean> => {
        if (identity) {
            return true;
        }

        try {
            await login();
            return true;
        } catch (error) {
            console.error('Authentication required but failed:', error);
            return false;
        }
    };

    return {
        requireAuth,
        isAuthenticated: !!identity,
    };
}

