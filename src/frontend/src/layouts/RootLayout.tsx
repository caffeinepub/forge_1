import { Outlet } from '@tanstack/react-router';
import GlobalHeader from '../components/GlobalHeader';
import FooterNote from '../components/FooterNote';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function RootLayout() {
    useDocumentTitle();

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Ambient background drift */}
            <div className="forge-ambient-drift" />
            
            {/* Background texture */}
            <div 
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(/assets/generated/forge-bg-texture.dim_2400x1350.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Global sticky header */}
            <GlobalHeader />

            {/* Page content */}
            <div className="relative z-10 flex-1">
                <Outlet />
            </div>

            {/* Global footer */}
            <div className="relative z-10">
                <FooterNote />
            </div>
        </div>
    );
}
