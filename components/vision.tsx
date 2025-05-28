import { Brain, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from './section-wrapper';
import Link from 'next/link';

const features = [
    {
        name: 'Global Network',
        description:
            'Building a worldwide network of advanced data centers strategically located near power sources and connectivity hubs to maximize efficiency and minimize latency.',
        icon: Brain,
        badge: 'Network',
    },
    {
        name: 'Next-Gen Computing',
        description:
            'Creating purpose-built infrastructure optimized for AI, Quantum Computing, and Machine Learning workloads with specialized cooling systems and high-density power distribution.',
        icon: Cloud,
        badge: 'Technology',
    },
    {
        name: 'Strategic Acquisitions',
        description: 'Rapidly converting underutilized commercial and industrial real estate into state-of-the-art data centers, reducing development time and costs while maximizing value creation.',
        icon: Shield,
        badge: 'Strategy',
    },
    {
        name: 'Dual Growth',
        description: 'Benefit from both real estate appreciation and emerging tech market growth through a diversified approach that balances stable assets with high-growth potential.',
        icon: Zap,
        badge: 'Investment',
    },
];

export default function Vision() {
    return (
        <SectionWrapper id="vision">
            <div className="container mx-auto px-4 border-t border-branding-white/10 pt-16">
                <div className="space-y-16">
                    <div className="text-center space-y-6 mb-8">
                        <Badge className="bg-branding-orange/20 text-branding-orange border hover:bg-branding-orange/30 border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Transformative Technologies
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Our Vision
                        </h2>

                        <span className="block w-16 h-1 bg-branding-orange mt-4 mx-auto rounded-full" />

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            SPUR is pioneering the next generation of
                            high-performance computing, scalable AI, and quantum computing
                            infrastructure.
                        </p>
                    </div>

                    <div className="max-w-[800px] mx-auto text-center mb-12">
                        <p className="text-branding-white/80 text-lg sm:text-xl">
                            Our mission is to bridge the gap between physical
                            real estate and digital innovation, creating a
                            global network of advanced data centers that power
                            the future of technology while delivering
                            exceptional value to our investors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <Card
                                key={feature.name}
                                className="group relative overflow-hidden border border-branding-white/10 bg-background/30 backdrop-blur-sm hover:border-branding-orange/30 transition-colors h-full"
                            >
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <feature.icon className="h-8 w-8 text-branding-orange" />
                                        </div>
                                        <Badge className="bg-branding-orange/10 text-branding-orange border-branding-orange/20">
                                            {feature.badge}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-branding-white group-hover:text-branding-orange transition-colors">
                                        {feature.name}
                                    </h3>

                                    <p className="text-branding-white/70 flex-grow">
                                        {feature.description}
                                    </p>

                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center space-y-8 max-w-3xl mx-auto">
                        <p className="text-branding-white/80 text-lg">
                            By combining cutting-edge technology with strategic
                            real estate development, SPUR is creating the
                            foundation for the next wave of computational
                            innovation while delivering sustainable growth and
                            returns.
                        </p>

                        <div className="pt-4">
                            <Button className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6 w-full sm:w-auto">
                                <Link href="/about">Learn More</Link>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
