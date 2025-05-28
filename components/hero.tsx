'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SpurLogo from './spur-logo';
import SpurLogoText from '@/public/assets/spur-logo-text.svg';

export default function Hero() {
    return (
        <section className="relative w-full mt-20 min-h-[100svh] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url(/assets/hero-background.png)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-100 before:-z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90 -z-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-branding-darkBlue/30 to-transparent -z-5" />

            <div className="absolute top-1/4 right-[5%] w-32 h-32 md:w-64 md:h-64 border border-branding-orange/30 rounded-full -z-5 animate-pulse" />
            <div className="absolute bottom-1/4 left-[10%] w-24 h-24 md:w-40 md:h-40 border-2 border-branding-lightBlue/20 rounded-full -z-5 animate-ping opacity-20" />
            <div className="absolute top-1/2 left-[20%] w-48 h-48 md:w-96 md:h-96 bg-branding-orange/5 rounded-full blur-[100px] -z-5" />
            <div className="absolute bottom-1/3 right-[15%] w-40 h-40 md:w-80 md:h-80 bg-branding-lightBlue/5 rounded-full blur-[80px] -z-5" />

            <div className="absolute inset-0 overflow-hidden -z-5 hidden md:block">
                <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[120%] border-l border-branding-orange/10 -rotate-45" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[120%] border-r border-branding-lightBlue/10 -rotate-45" />
            </div>

            <div className="container relative z-10 px-4 mx-auto pb-16 sm:pb-20 lg:ml-32">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-8">
                    <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <Badge className="inline-flex bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Revolutionizing Data Infrastructure
                        </Badge>

                        <div className="space-y-4 sm:space-y-6">
                            <Image
                                src={SpurLogoText}
                                width={400}
                                height={400}
                                className="mx-auto lg:mx-0"
                                alt=""
                            />

                            <div className="h-1 w-20 bg-gradient-to-r from-branding-orange to-branding-orange/50 rounded-full mx-auto lg:mx-0" />

                            <p className="text-lg sm:text-3xl md:text-2xl text-branding-white/80 max-w-2xl mx-auto lg:mx-0">
                                Spurring the Future Innovation AI and Quantum
                                Computing Infrastructure
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium group"
                            >
                                <Link href="/contact">Contact Us</Link>
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-branding-white/20 text-branding-white hover:bg-branding-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium"
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 lg:pt-8 border-t border-branding-white/10">
                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-branding-orange">
                                    $1B+
                                </p>
                                <p className="text-sm sm:text-lg text-branding-white/70">
                                    Assets Under Management
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-branding-orange">
                                    100%
                                </p>
                                <p className="text-sm sm:text-lg text-branding-white/70">
                                    Data Center Occupancy
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-branding-orange">
                                    6
                                </p>
                                <p className="text-sm sm:text-lg text-branding-white/70">
                                    Operational Centers
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 flex items-center justify-center mb-8 lg:mb-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-branding-orange/10 rounded-full blur-[50px]" />

                            <div className="absolute -inset-4 sm:-inset-6 border-2 border-branding-orange/30 rounded-full animate-ping opacity-20" />
                            <div className="absolute -inset-8 sm:-inset-12 border border-branding-orange/20 rounded-full" />
                            <div className="absolute -inset-12 sm:-inset-20 border border-branding-orange/10 rounded-full" />

                            <div className="relative bg-background/30 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-full border border-branding-white/10">
                                <SpurLogo className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
