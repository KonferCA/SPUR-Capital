import './globals.css';
import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import MouseMoveEffect from '@/components/mouse-move-effect';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'SPUR Capital - Spurring the Future Funding of Decentralized Smart City Infrastructure ',
    description:
        'SPUR is redefining how cities implement smart infrastructure with decentralized funding models and technology solutions.',
    keywords: [
        'SPUR Capital',
        'SPUR Innovation',
        'SPUR',
        'SPUR Innovation Center',
        'SPURIC',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="apple-touch-icon" href="/assets/spur-icon.svg" />
                <link rel="icon" href="/assets/spur-icon.svg" />
            </head>
            <body
                className={`${roboto.className} bg-background text-foreground antialiased`}
            >
                <MouseMoveEffect />
                {children}
            </body>
        </html>
    );
}

export const viewport: Viewport = {
  themeColor: 'black',
}
