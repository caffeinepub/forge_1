import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { Button } from './ui/button';
import { LogIn, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProfileSetupModal from './ProfileSetupModal';
import { useQueryClient } from '@tanstack/react-query';

export default function AuthStatus() {
    const { identity, login, clear, loginStatus } = useInternetIdentity();
    const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
    const queryClient = useQueryClient();
    const [showProfileSetup, setShowProfileSetup] = useState(false);

    const isAuthenticated = !!identity;
    const isLoggingIn = loginStatus === 'logging-in';

    useEffect(() => {
        if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
            setShowProfileSetup(true);
        }
    }, [isAuthenticated, profileLoading, isFetched, userProfile]);

    const handleLogin = async () => {
        try {
            await login();
        } catch (error: any) {
            console.error('Login error:', error);
            if (error.message === 'User is already authenticated') {
                await clear();
                setTimeout(() => login(), 300);
            }
        }
    };

    const handleLogout = async () => {
        await clear();
        queryClient.clear();
    };

    const handleProfileSetupComplete = () => {
        setShowProfileSetup(false);
    };

    if (!isAuthenticated) {
        return (
            <Button
                onClick={handleLogin}
                disabled={isLoggingIn}
                variant="outline"
                className="forge-border-glow bg-card/50 backdrop-blur-sm hover:bg-card"
            >
                <LogIn className="mr-2 h-4 w-4" />
                {isLoggingIn ? 'Signing in...' : 'Sign in'}
            </Button>
        );
    }

    return (
        <>
            <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                        {userProfile ? userProfile.name : 'Signed in'}
                    </span>
                </div>
                <Button
                    onClick={handleLogout}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                >
                    <LogOut className="h-4 w-4" />
                </Button>
            </div>

            <ProfileSetupModal 
                open={showProfileSetup}
                onComplete={handleProfileSetupComplete}
            />
        </>
    );
}

