import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useSaveCallerUserProfile } from '../hooks/useQueries';
import { toast } from 'sonner';

interface ProfileSetupModalProps {
    open: boolean;
    onComplete: () => void;
}

export default function ProfileSetupModal({ open, onComplete }: ProfileSetupModalProps) {
    const [name, setName] = useState('');
    const saveProfileMutation = useSaveCallerUserProfile();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        saveProfileMutation.mutate(
            { name: name.trim() },
            {
                onSuccess: () => {
                    toast.success('Profile created successfully');
                    onComplete();
                },
                onError: (error) => {
                    toast.error(`Failed to create profile: ${error.message}`);
                },
            }
        );
    };

    return (
        <Dialog open={open} onOpenChange={() => {}}>
            <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Welcome to Forge</DialogTitle>
                    <DialogDescription>
                        Please tell us your name to get started.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            autoFocus
                            disabled={saveProfileMutation.isPending}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={!name.trim() || saveProfileMutation.isPending}
                        className="w-full forge-gradient"
                    >
                        {saveProfileMutation.isPending ? 'Creating profile...' : 'Continue'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

