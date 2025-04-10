'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Menu, X, ChevronDown } from 'lucide-react';
import SpurLogo from './spur-logo';

const navLinks = [
    {
        name: 'About',
        path: '/about',
        scrollTo: 'about',
        dropdown: [
            { name: 'Our Story', path: '/about#story' },
            { name: 'Mission', path: '/about#mission' },
            { name: 'Our Plans', path: '/about#overview' },
        ],
    },
    {
        name: 'Vision',
        path: '/',
        scrollTo: 'vision',
    },
    {
        name: 'Assets',
        path: '/assets',
        scrollTo: 'assets',
        dropdown: [
            { name: 'Current AUM', path: '/assets#aum' },
            { name: 'Business Model', path: '/assets#business' },
            { name: 'Market Analysis', path: '/assets#market' },
            { name: 'Capital Allocation', path: '/assets#capital' },
            { name: 'Financial Projections', path: '/assets#projections' },
        ],
    },
    {
        name: 'Locations',
        path: '/',
        scrollTo: 'locations',
    },
    {
        name: 'Partners',
        path: '/partners',
        scrollTo: 'partners',
        dropdown: [
            { name: 'Partnership Types', path: '/partners#types' },
            { name: 'Benefits', path: '/partners#benefits' },
            { name: 'Become a Partner', path: '/partners#join' },
        ],
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<
        string | null
    >(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;

            setScrolled(position > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (pathname === '/') {
            const hash = window.location.hash.substring(1);

            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash);

                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }, 100);
            }
        }
    }, [pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                openDesktopDropdown &&
                !(event.target as HTMLElement).closest(
                    '.desktop-dropdown-container'
                )
            ) {
                setOpenDesktopDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDesktopDropdown]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleMobileExpanded = (name: string): void => {
        setExpandedItem(expandedItem === name ? null : name);
    };

    const toggleDesktopDropdown = (name: string): void => {
        setOpenDesktopDropdown(openDesktopDropdown === name ? null : name);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setExpandedItem(null);
        setOpenDesktopDropdown(null);
    };

    const handleSectionNavigation = (sectionId: string) => {
        if (pathname === '/') {
            const element = document.getElementById(sectionId);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            handleLinkClick();
        } else {
            router.push(`/#${sectionId}`);

            handleLinkClick();
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 z-40 w-full border-b border-branding-white/10 transition-all duration-300',
                scrolled
                    ? 'bg-background/90 backdrop-blur-md'
                    : 'bg-background/50 backdrop-blur-sm'
            )}
        >
            <div className="container mx-auto px-4 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 z-30">
                    <SpurLogo className="h-10 w-10" />

                    <span className="font-bold text-xl hidden sm:inline text-branding-white">
                        SPUR Capital
                    </span>
                </Link>

                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative desktop-dropdown-container px-1"
                            >
                                {link.path === '/' ? (
                                    link.dropdown &&
                                    link.dropdown.length > 0 ? (
                                        <>
                                            <button
                                                className={cn(
                                                    'flex items-center h-10 px-4 text-base font-medium rounded-md text-branding-white hover:text-branding-orange focus:outline-none'
                                                )}
                                                onClick={() =>
                                                    toggleDesktopDropdown(
                                                        link.name
                                                    )
                                                }
                                                aria-expanded={
                                                    openDesktopDropdown ===
                                                    link.name
                                                }
                                            >
                                                {link.name}

                                                <ChevronDown
                                                    className={cn(
                                                        'ml-1 h-4 w-4 transition-transform',
                                                        openDesktopDropdown ===
                                                            link.name &&
                                                            'rotate-180'
                                                    )}
                                                />
                                            </button>

                                            <div
                                                className={cn(
                                                    'absolute left-0 mt-1 w-56 rounded-md shadow-lg transition-all duration-200 z-50',
                                                    openDesktopDropdown ===
                                                        link.name
                                                        ? 'opacity-100 visible'
                                                        : 'opacity-0 invisible'
                                                )}
                                            >
                                                <div className="rounded-md bg-background/95 backdrop-blur-md border border-branding-white/10 shadow-xs py-1">
                                                    <button
                                                        onClick={() =>
                                                            handleSectionNavigation(
                                                                link.scrollTo
                                                            )
                                                        }
                                                        className="block w-full text-left px-4 py-2 text-base text-branding-white hover:bg-branding-orange/10 hover:text-branding-orange cursor-pointer"
                                                    >
                                                        Overview
                                                    </button>

                                                    <div className="my-1 h-px w-full bg-branding-white/10" />

                                                    {link.dropdown.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.path}
                                                                className="block px-4 py-2 text-base text-branding-white hover:bg-branding-orange/10 hover:text-branding-orange"
                                                                onClick={
                                                                    handleLinkClick
                                                                }
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleSectionNavigation(
                                                    link.scrollTo
                                                )
                                            }
                                            className={cn(
                                                'flex items-center h-10 px-4 text-base font-medium rounded-md text-branding-white hover:text-branding-orange cursor-pointer'
                                            )}
                                        >
                                            {link.name}
                                        </button>
                                    )
                                ) : link.dropdown &&
                                  link.dropdown.length > 0 ? (
                                    <>
                                        <button
                                            className={cn(
                                                'flex items-center h-10 px-4 text-base font-medium rounded-md text-branding-white hover:text-branding-orange focus:outline-none'
                                            )}
                                            onClick={() =>
                                                toggleDesktopDropdown(link.name)
                                            }
                                            aria-expanded={
                                                openDesktopDropdown ===
                                                link.name
                                            }
                                        >
                                            {link.name}

                                            <ChevronDown
                                                className={cn(
                                                    'ml-1 h-4 w-4 transition-transform',
                                                    openDesktopDropdown ===
                                                        link.name &&
                                                        'rotate-180'
                                                )}
                                            />
                                        </button>

                                        <div
                                            className={cn(
                                                'absolute left-0 mt-1 w-56 rounded-md shadow-lg transition-all duration-200 z-50',
                                                openDesktopDropdown ===
                                                    link.name
                                                    ? 'opacity-100 visible'
                                                    : 'opacity-0 invisible'
                                            )}
                                        >
                                            <div className="rounded-md bg-background/95 backdrop-blur-md border border-branding-white/10 shadow-xs py-1">
                                                <button
                                                    onClick={() =>
                                                        handleSectionNavigation(
                                                            link.scrollTo
                                                        )
                                                    }
                                                    className="block w-full text-left px-4 py-2 text-base text-branding-white hover:bg-branding-orange/10 hover:text-branding-orange cursor-pointer"
                                                >
                                                    Overview
                                                </button>

                                                <div className="my-1 h-px w-full bg-branding-white/10" />

                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.path}
                                                        className="block px-4 py-2 text-base text-branding-white hover:bg-branding-orange/10 hover:text-branding-orange"
                                                        onClick={
                                                            handleLinkClick
                                                        }
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className={cn(
                                            'flex items-center h-10 px-4 text-base font-medium rounded-md text-branding-white hover:text-branding-orange'
                                        )}
                                        onClick={handleLinkClick}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4 ml-4">
                        <Link
                            href="https://linkedin.com/company/spur-innovation-center"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="p-2 bg-branding-orange/10 rounded-full text-branding-orange hover:bg-branding-orange/20 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>

                        <Link
                            href="https://twitter.com/SpurInnovation"
                            className="p-2 bg-branding-orange/10 rounded-full text-branding-orange hover:bg-branding-orange/20 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>

                        <Button
                            variant="outline"
                            size="default"
                            className="border border-branding-orange hover:bg-branding-orange text-branding-white font-medium px-6"
                        >
                            <a
                                href="https://onboard.spuric.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Onboard
                            </a>
                        </Button>

                        <Button
                            variant="default"
                            size="default"
                            className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white font-medium px-6"
                        >
                            <a href="mailto:info@spur.com">Contact</a>
                        </Button>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden z-50 hover:bg-branding-lightBlue/10 text-branding-white"
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}

                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </div>

            <div
                className={cn(
                    'fixed inset-0 top-0 z-40 bg-black/95 backdrop-blur-lg lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out',
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
                style={{ height: '100vh' }}
            >
                <div className="flex items-center justify-between h-20 px-4 border-b border-branding-white/10">
                    <Link
                        href="/"
                        className="flex items-center space-x-3"
                        onClick={handleLinkClick}
                    >
                        <SpurLogo className="h-10 w-10" />

                        <span className="font-bold text-xl text-branding-white">
                            SPUR Innovation
                        </span>
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-branding-lightBlue/10 text-branding-white"
                        onClick={toggleMobileMenu}
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6" />
                    </Button>
                </div>

                <div className="container mx-auto px-4 py-8 flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
                    <nav className="flex flex-col space-y-0 text-lg font-medium">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="border-b border-branding-white/10 py-1"
                            >
                                {link.path === '/' ? (
                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <button
                                                onClick={() =>
                                                    handleSectionNavigation(
                                                        link.scrollTo
                                                    )
                                                }
                                                className="py-4 text-lg font-medium transition-colors hover:text-branding-orange cursor-pointer w-full text-left"
                                            >
                                                {link.name}
                                            </button>

                                            {link.dropdown &&
                                                link.dropdown.length > 0 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="hover:bg-transparent px-2 text-branding-white"
                                                        onClick={() =>
                                                            toggleMobileExpanded(
                                                                link.name
                                                            )
                                                        }
                                                    >
                                                        <ChevronDown
                                                            className={cn(
                                                                'h-5 w-5 transition-transform',
                                                                expandedItem ===
                                                                    link.name &&
                                                                    'rotate-180'
                                                            )}
                                                        />
                                                    </Button>
                                                )}
                                        </div>

                                        {expandedItem === link.name &&
                                            link.dropdown && (
                                                <div className="pl-4 py-2 space-y-1 text-base border-t border-branding-white/5">
                                                    <button
                                                        onClick={() =>
                                                            handleSectionNavigation(
                                                                link.scrollTo
                                                            )
                                                        }
                                                        className="block py-3 text-branding-white hover:text-branding-orange w-full text-left"
                                                    >
                                                        Overview
                                                    </button>

                                                    {link.dropdown.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.path}
                                                                className="block py-3 text-branding-white/80 hover:text-branding-orange"
                                                                onClick={
                                                                    handleLinkClick
                                                                }
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <Link
                                                href={link.path}
                                                className="py-4 text-lg font-medium transition-colors hover:text-branding-orange"
                                                onClick={handleLinkClick}
                                            >
                                                {link.name}
                                            </Link>

                                            {link.dropdown &&
                                                link.dropdown.length > 0 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="hover:bg-transparent px-2 text-branding-white"
                                                        onClick={() =>
                                                            toggleMobileExpanded(
                                                                link.name
                                                            )
                                                        }
                                                    >
                                                        <ChevronDown
                                                            className={cn(
                                                                'h-5 w-5 transition-transform',
                                                                expandedItem ===
                                                                    link.name &&
                                                                    'rotate-180'
                                                            )}
                                                        />
                                                    </Button>
                                                )}
                                        </div>

                                        {expandedItem === link.name &&
                                            link.dropdown && (
                                                <div className="pl-4 py-2 space-y-1 text-base border-t border-branding-white/5">
                                                    <button
                                                        onClick={() =>
                                                            handleSectionNavigation(
                                                                link.scrollTo
                                                            )
                                                        }
                                                        className="block py-3 text-branding-white hover:text-branding-orange w-full text-left"
                                                    >
                                                        Overview
                                                    </button>

                                                    {link.dropdown.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.path}
                                                                className="block py-3 text-branding-white/80 hover:text-branding-orange"
                                                                onClick={
                                                                    handleLinkClick
                                                                }
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 flex flex-col pb-16 space-y-6">
                        <Link
                            href="https://linkedin.com/company/spur-innovation-center"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-3 text-branding-white hover:text-branding-orange"
                            onClick={handleLinkClick}
                        >
                            <Linkedin className="h-6 w-6" />
                            <span>Follow us on LinkedIn</span>
                        </Link>

                        <Link
                            href="https://twitter.com/SpurInnovation"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-3 text-branding-white hover:text-branding-orange"
                            onClick={handleLinkClick}
                        >
                            <Twitter className="h-6 w-6" />
                            <span>Follow us on Twitter</span>
                        </Link>

                        <Button
                            variant="outline"
                            size="default"
                            className="border border-branding-orange hover:bg-branding-orange text-branding-white text-lg py-6"
                        >
                            <a
                                href="https://onboard.spuric.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Onboard
                            </a>
                        </Button>

                        <Button
                            variant="default"
                            size="lg"
                            className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white font-medium w-full text-lg py-6"
                            onClick={handleLinkClick}
                        >
                            <a href="mailto:info@spur.com">Contact Us</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
