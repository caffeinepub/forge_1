import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const PLACEHOLDERS = [
    'Monitor Bitcoin and alert me if it drops 5%',
    'Research competitors and summarize pricing',
    'Clean this CSV and normalize emails',
    'Track my website uptime',
];

interface RotatingPlaceholderInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    inputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function RotatingPlaceholderInput({ value, onChange, onSubmit, inputRef }: RotatingPlaceholderInputProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        // Disable rotation if user prefers reduced motion
        if (prefersReducedMotion) {
            return;
        }

        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [prefersReducedMotion]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && value.trim()) {
            onSubmit();
        }
    };

    return (
        <Input
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDERS[placeholderIndex]}
            className="w-full text-lg md:text-xl py-6 px-6 bg-card/50 backdrop-blur-sm forge-border-glow transition-all duration-300 focus:forge-glow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Enter your task description"
        />
    );
}
