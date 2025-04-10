import type { ReactNode } from 'react';

interface SectionWrapperProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

export default function SectionWrapper({
    id,
    children,
    className = '',
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative py-12 md:py-12 overflow-hidden ${className}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {children}
            </div>
        </section>
    );
}
