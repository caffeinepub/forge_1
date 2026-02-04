interface ForgeBrandMarkProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function ForgeBrandMark({ size = 'md', className = '' }: ForgeBrandMarkProps) {
    const textSizes = {
        sm: 'text-xl md:text-2xl',
        md: 'text-3xl md:text-4xl',
        lg: 'text-5xl md:text-6xl',
    };

    return (
        <span className={`font-bold tracking-tight forge-text-gradient ${textSizes[size]} ${className}`}>
            Forge AI
        </span>
    );
}
