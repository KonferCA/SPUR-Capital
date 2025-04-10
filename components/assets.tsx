import { Building2, Banknote, BarChart3, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from './section-wrapper';
import Link from 'next/link';

const assets = [
    {
        title: '$1B+ Assets Under Management',
        description:
            '6 Operational Datacenters with strategic locations in key markets. Currently, all data centers are leased to 95% occupancy.',
        icon: Building2,
        badge: 'Property',
    },
    {
        title: '$100M Capital Secured Allocation',
        description:
            'Secured Funding with strong investor backing. Currently pursuing debt financing of up to $200 million USD with a target allocation of $1 billion USD.',
        icon: Banknote,
        badge: 'Finance',
    },
    {
        title: '100% Data Center Occupancy',
        description:
            'High Demand for Data Center space across our portfolio. Additional acquisitions required to support growing client demand.',
        icon: BarChart3,
        badge: 'Performance',
    },
];

export default function Assets() {
    return (
        <SectionWrapper id="assets">
            <div className="container mx-auto px-4 border-t border-branding-white/10 pt-16">
                <div className="space-y-12">
                    <div className="text-center space-y-6 mb-12">
                        <Badge className="bg-branding-orange/20 text-branding-orange border hover:bg-branding-orange/30 border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Financial Growth
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Our Assets
                        </h2>

                        <span className="block w-16 h-1 bg-branding-orange mt-4 mx-auto rounded-full" />

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            SPUR manages a growing portfolio of data center
                            assets, delivering exceptional value through
                            strategic acquisitions.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {assets.map((asset) => (
                            <Card
                                key={asset.title}
                                className="group relative overflow-hidden border border-branding-white/10 bg-background/30 backdrop-blur-sm hover:border-branding-orange/30 transition-colors h-full"
                            >
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <asset.icon className="h-8 w-8 text-branding-orange" />
                                        </div>

                                        <Badge className="bg-branding-orange/10 hover:bg-branding-orange/30 text-branding-orange border-branding-orange/20">
                                            {asset.badge}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-branding-white group-hover:text-branding-orange transition-colors">
                                        {asset.title}
                                    </h3>

                                    <p className="text-branding-white/70 flex-grow">
                                        {asset.description}
                                    </p>

                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <p className="text-branding-white/80 text-lg">
                            Our growth strategy combines disciplined capital
                            allocation with technical expertise, allowing us to
                            deliver exceptional returns for our investors while
                            meeting the growing demand for advanced computing
                            infrastructure.
                        </p>

                        <div className="pt-4">
                            <Button className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6 w-full sm:w-auto">
                                <Link href="/assets">Learn More</Link>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
