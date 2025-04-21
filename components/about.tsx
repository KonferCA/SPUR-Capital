'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Cpu, BarChart4, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from './section-wrapper';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Carousel1 from '@/public/assets/carousel-1.jpg';
import Carousel2 from '@/public/assets/carousel-2.jpg';
import Carousel3 from '@/public/assets/carousel-3.jpg';
import Carousel4 from '@/public/assets/carousel-4.jpg';
import Carousel5 from '@/public/assets/carousel-5.jpeg';
import Carousel6 from '@/public/assets/carousel-6.jpg';
import Carousel7 from '@/public/assets/carousel-7.png';
import Carousel8 from '@/public/assets/carousel-8.jpg';

const carouselImages = [
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
    Carousel7,
    Carousel8,
];

const features = [
    {
        icon: Server,
        title: 'Data Center Expertise',
        badge: 'Core',
        description:
            'Specializing in cutting-edge data center infrastructure for advanced technologies.',
    },
    {
        icon: Cpu,
        title: 'AI & Quantum Computing',
        badge: 'Innovation',
        description:
            'Driving innovation in AI and quantum computing with state-of-the-art facilities.',
    },
    {
        icon: BarChart4,
        title: 'High Performance',
        badge: 'Efficiency',
        description:
            'Delivering high-performance solutions for modern computing demands.',
    },
];

function ImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const [_, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);

        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="relative aspect-square lg:aspect-video w-full mx-auto rounded-xl overflow-hidden">
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                <div className="flex h-full">
                    {carouselImages.map((src, index) => (
                        <div
                            className="relative flex-[0_0_100%] h-full"
                            key={index}
                        >
                            <Image
                                src={src}
                                alt={`Carousel Image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="rounded-xl object-cover border border-branding-white/10"
                                priority={index < 2}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            emblaApi?.selectedScrollSnap() === index
                                ? 'bg-branding-orange'
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="container mx-auto px-4 border-t border-branding-white/10 pt-16">
                <div className="space-y-16">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Our Company
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            About Us
                        </h2>

                        <span className="block w-16 h-1 bg-branding-orange mt-4 mx-auto rounded-full" />

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Experts in creating cutting-edge data center
                            infrastructure for AI, quantum computing, and
                            advanced technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-branding-white/80 text-lg sm:text-xl">
                                    The rapid advancements in AI, quantum
                                    computing, and high-performance computing
                                    have created massive demand for cutting-edge
                                    innovation and data centers. We are experts
                                    in building and converting legacy commercial
                                    industrial real estate to quickly and
                                    efficiently meet this emerging demand.
                                </p>

                                <p className="text-branding-white/80 text-lg sm:text-xl">
                                    At SPUR, our mandate is to ignite a culture
                                    of relentless innovation, foster a thriving
                                    community, and drive unparalleled success.
                                    We are committed to pushing boundaries,
                                    empowering individuals, and transforming
                                    industries through cutting-edge technology
                                    and visionary leadership.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <Card
                                        key={index}
                                        className="bg-background/30 border-branding-white/10 backdrop-blur-sm overflow-hidden transition-all hover:border-branding-orange/30"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                                <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-3 sm:mb-0 shrink-0">
                                                    <feature.icon className="h-8 w-8 text-branding-orange" />
                                                </div>

                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-branding-white font-medium text-xl">
                                                            {feature.title}
                                                        </h3>

                                                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                                                            {feature.badge}
                                                        </Badge>
                                                    </div>

                                                    <p className="text-branding-white/70 text-lg">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Button className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6 w-full sm:w-auto">
                                    <Link href="/about">
                                        Explore Our Approach
                                    </Link>
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <ImageCarousel />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col justify-center items-center">
                                        <h3 className="text-3xl font-bold text-branding-orange mb-2">
                                            $1B+
                                        </h3>

                                        <p className="text-branding-white/70 text-lg text-center">
                                            In Commercial Real Estate Assets
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col justify-center items-center">
                                        <h3 className="text-3xl font-bold text-branding-orange mb-2">
                                            2M+ sq
                                        </h3>

                                        <p className="text-branding-white/70 text-lg text-center">
                                            Square Feet of Tech Space
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col justify-center items-center">
                                        <h3 className="text-3xl font-bold text-branding-orange mb-2">
                                            100+
                                        </h3>

                                        <p className="text-branding-white/70 text-lg text-center">
                                            Mega Watts
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col justify-center items-center">
                                        <h3 className="text-3xl font-bold text-branding-orange mb-2">
                                            100%
                                        </h3>

                                        <p className="text-branding-white/70 text-lg text-center">
                                            Capacity Utilization
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
