import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Banknote,
    BarChart3,
    Server,
    ChartBar,
    Globe,
    Cpu,
    TrendingUp,
    Warehouse,
    Shield,
    MapPin,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Assets from '@/public/assets/carousel-7.png';

export default function AssetsPage() {
    return (
        <div className="bg-background text-branding-white min-h-screen">
            <Navbar />

            <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden mt-10 sm:mt-16 md:mt-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-branding-orange/5 rounded-full blur-2xl sm:blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-branding-lightBlue/5 rounded-full blur-2xl sm:blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Financial Growth
                        </Badge>

                        <h1 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent">
                            Our Assets
                        </h1>

                        <p className="text-branding-white/80 text-lg sm:text-xl md:text-2xl">
                            SPUR manages a growing portfolio of data center
                            assets, delivering exceptional value through
                            strategic acquisitions.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="aum"
                className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Assets Under Management
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
                            Current AUM
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-lg sm:text-xl md:text-2xl">
                            Four Innovation Centers located in Canada, Four Data
                            Centers at 100% Occupancy
                        </p>
                    </div>

                    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors h-full">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-branding-orange" />
                                        </div>
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Property
                                        </Badge>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-branding-white mb-2 sm:mb-4">
                                        $1 Billion+
                                    </h3>

                                    <p className="text-lg sm:text-xl font-semibold text-branding-white/90 mb-2 sm:mb-3">
                                        ASSETS UNDER MANAGEMENT (AUM)
                                    </p>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        SPUR Park designed by Blackberry at the
                                        height of their market capitalization,
                                        sparing no expense. This revolutionary
                                        campus offers leading-edge flexible tech
                                        lab, industrial space, and Canada's only
                                        Tier 4 Data Center.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6 text-sm sm:text-base text-branding-white/80">
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            37.5
                                        </Badge>
                                        acres
                                    </div>
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            LEED
                                        </Badge>
                                        Certified
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors h-full">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <Banknote className="h-8 w-8 sm:h-10 sm:w-10 text-branding-orange" />
                                        </div>
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Finance
                                        </Badge>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-branding-white mb-2 sm:mb-4">
                                        $100M
                                    </h3>

                                    <p className="text-lg sm:text-xl font-semibold text-branding-white/90 mb-2 sm:mb-3">
                                        CAPITAL SECURED ALLOCATION
                                    </p>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        Secured Funding through debt financing
                                        and internal investment. Target $1B USD
                                        minimum allocation by 4th quarter of
                                        2025, with strong investor backing and
                                        substantial internal commitment.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6 text-sm sm:text-base text-branding-white/80">
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            $200M
                                        </Badge>
                                        Debt Target
                                    </div>
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            $1B
                                        </Badge>
                                        Allocation Target
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors h-full lg:col-span-1 md:col-span-2">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-branding-orange" />
                                        </div>
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Performance
                                        </Badge>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-branding-white mb-2 sm:mb-4">
                                        100%
                                    </h3>

                                    <p className="text-lg sm:text-xl font-semibold text-branding-white/90 mb-2 sm:mb-3">
                                        DATA CENTER OCCUPANCY
                                    </p>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        High Demand Data Center Occupancy for
                                        existing facilities. Additional
                                        acquisitions are required to support
                                        growing client demand, with consistent
                                        maximum utilization across all current
                                        data center assets.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6 text-sm sm:text-base text-branding-white/80">
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            2M
                                        </Badge>
                                        Square Feet
                                    </div>
                                    <div className="flex items-center">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mr-2 text-xs sm:text-sm">
                                            100MW
                                        </Badge>
                                        Power Capacity
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                                Key Highlights
                            </Badge>

                            <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
                                Anchor Asset
                            </h2>

                            <p className="text-branding-white/80 text-base sm:text-lg md:text-xl">
                                $500 million business park in Waterloo, Ontario,
                                with four operational data centers at 100%
                                capacity. LEED® certified, with rainwater
                                irrigation, low-flow fixtures, and
                                energy-efficient design.
                            </p>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-branding-white mb-1">
                                            Growth Strategy
                                        </h3>
                                        <p className="text-sm sm:text-base text-branding-white/70">
                                            Acquire commercial properties,
                                            convert to cutting edge data
                                            centers, and invest in promising
                                            tech companies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-branding-white mb-1">
                                            Dual Revenue
                                        </h3>
                                        <p className="text-sm sm:text-base text-branding-white/70">
                                            Income from real estate leasing and
                                            venture capital returns from tech
                                            investments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-96 sm:h-120 md:h-144">
                            <Image
                                src={Assets}
                                alt="SPUR Innovation Centre"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />

                            <div className="absolute bottom-6 right-6 z-20 bg-background/30 backdrop-blur-md p-4 rounded-lg border border-branding-white/10 shadow-xl max-w-[220px]">
                                <div className="space-y-2">
                                    <Badge
                                        variant="outline"
                                        className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs"
                                    >
                                        Innovation Hub
                                    </Badge>

                                    <h4 className="text-branding-white text-sm font-medium">
                                        Technology Triangle
                                    </h4>

                                    <p className="text-branding-white/70 text-xs">
                                        Canada's premier startup ecosystem in
                                        Kitchener-Waterloo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="business"
                className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Strategic Approach
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
                            Business Model
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-lg sm:text-xl md:text-2xl">
                            ACQUIRE - CONVERT - GROW
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-3 sm:mb-4">
                                        <Building2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange" />
                                    </div>

                                    <h3 className="text-branding-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                                        Acquire
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        Identify and purchase underutilized
                                        commercial properties suitable for
                                        conversion into high-performance AI
                                        Innovation and data centers in strategic
                                        locations.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-3 sm:mb-4">
                                        <Server className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange" />
                                    </div>

                                    <h3 className="text-branding-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                                        Convert
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        Transform and upgrade properties into
                                        state-of-the-art facilities optimized
                                        for Innovation and AI and quantum
                                        computing. Including infrastructure
                                        upgrades to power, cooling systems,
                                        fiber connectivity and security
                                        enhancements.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-3 sm:mb-4">
                                        <Warehouse className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange" />
                                    </div>

                                    <h3 className="text-branding-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                                        Lease
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        Secure long-term leases with top-tier
                                        tech companies including companies we
                                        invest in from our portfolio to offer
                                        stable cash flow and strong ROI.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-3 sm:mb-4">
                                        <ChartBar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange" />
                                    </div>

                                    <h3 className="text-branding-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                                        Invest
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70">
                                        Deploy capital in high-growth AI,
                                        quantum, and cloud computing ventures,
                                        creating a synergistic ecosystem of
                                        portfolio companies and data center
                                        tenants.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section
                id="market"
                className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Market Trends
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
                            Market Analysis
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-lg sm:text-xl md:text-2xl">
                            SURGING ADVANCED DATA CENTER DEMAND
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Market Growth
                                        </Badge>
                                        <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange opacity-70" />
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-branding-white mb-2 sm:mb-3">
                                        $1 Trillion+
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70 flex-grow">
                                        Global AI, Quantum & data center market
                                        is projected to reach over $1 Trillion
                                        USD by 2034, growing at a CAGR of 27.6%.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Key Drivers
                                        </Badge>
                                        <Cpu className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange opacity-70" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-branding-white mb-2 sm:mb-3">
                                        AI, IoT, Cloud/Quantum Computing
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70 flex-grow">
                                        These technologies are fueling the
                                        unprecedented demand and surge for new
                                        data center infrastructure across global
                                        markets.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            Infrastructure
                                        </Badge>
                                        <Server className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-branding-orange opacity-70" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-branding-white mb-2 sm:mb-3">
                                        Specialized Requirements
                                    </h3>

                                    <p className="text-sm sm:text-base text-branding-white/70 flex-grow">
                                        Surging demand for next-gen applications
                                        requires robust, scalable, and secure
                                        data centers with specialized cooling
                                        and power systems.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-branding-white mb-4 sm:mb-6">
                                    Data Center Market Projections
                                </h3>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm sm:text-base text-branding-white/80">
                                            2024 Market Value
                                        </span>
                                        <span className="text-xl sm:text-2xl font-bold text-branding-orange">
                                            $344B
                                        </span>
                                    </div>

                                    <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-branding-orange w-1/3" />
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm sm:text-base text-branding-white/80">
                                            2034 Projected Value
                                        </span>
                                        <span className="text-xl sm:text-2xl font-bold text-branding-orange">
                                            $1000B
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 p-2 sm:p-3 bg-background/30 rounded-lg border border-branding-white/10 mt-4 sm:mt-6">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            27.1%
                                        </Badge>
                                        <span className="text-xs sm:text-sm md:text-base text-branding-white/80">
                                            Compound Annual Growth Rate
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-branding-white mb-4 sm:mb-6">
                                    AI Market Projections
                                </h3>

                                <div className="space-y-6 sm:space-y-8">
                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm sm:text-base text-branding-white/80">
                                                Global AI Market 2024
                                            </span>
                                            <span className="text-lg sm:text-xl font-bold text-branding-orange">
                                                $184B
                                            </span>
                                        </div>
                                        <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-branding-orange w-1/5" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm sm:text-base text-branding-white/80">
                                                Projected Value 2030
                                            </span>
                                            <span className="text-lg sm:text-xl font-bold text-branding-orange">
                                                $1T+
                                            </span>
                                        </div>
                                        <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-branding-orange w-full" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 p-2 sm:p-3 bg-background/30 rounded-lg border border-branding-white/10">
                                        <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                            38.1%
                                        </Badge>
                                        <span className="text-xs sm:text-sm md:text-base text-branding-white/80">
                                            Expected CAGR from 2022 to 2030
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section
                id="capital"
                className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                                Investment Strategy
                            </Badge>

                            <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
                                Capital Allocation
                            </h2>

                            <p className="text-branding-white/80 text-base sm:text-lg md:text-xl">
                                Our strategic approach to capital allocation
                                ensures maximum value creation across real
                                estate assets and technology investments.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
                                <div className="relative bg-background/30 border border-branding-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-50" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-branding-white">
                                                70%
                                            </h3>
                                            <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                                Real Estate
                                            </Badge>
                                        </div>

                                        <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden mb-3 sm:mb-4">
                                            <div className="h-full bg-branding-orange w-[70%]" />
                                        </div>

                                        <p className="text-xs sm:text-sm text-branding-white/70">
                                            Acquisition and conversion of
                                            properties into data centers. Focus
                                            on strategic locations with
                                            infrastructure advantages.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative bg-background/30 border border-branding-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-50" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-branding-white">
                                                20%
                                            </h3>
                                            <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                                Venture Capital
                                            </Badge>
                                        </div>

                                        <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden mb-3 sm:mb-4">
                                            <div className="h-full bg-branding-orange w-[20%]" />
                                        </div>

                                        <p className="text-xs sm:text-sm text-branding-white/70">
                                            Direct equity investments in AI &
                                            quantum ventures with potential for
                                            significant growth and synergy with
                                            our infrastructure.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative bg-background/30 border border-branding-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-50" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-branding-white">
                                                10%
                                            </h3>
                                            <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 text-xs sm:text-sm">
                                                Operations
                                            </Badge>
                                        </div>

                                        <div className="h-2 bg-branding-white/10 rounded-full overflow-hidden mb-3 sm:mb-4">
                                            <div className="h-full bg-branding-orange w-[10%]" />
                                        </div>

                                        <p className="text-xs sm:text-sm text-branding-white/70">
                                            Operational and overhead costs
                                            including team, R&D, marketing, and
                                            ongoing improvements to existing
                                            facilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-8 mt-6 lg:mt-0">
                            <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-4 sm:p-6 md:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-branding-white mb-4 sm:mb-6">
                                        Investment Security
                                    </h3>

                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                                    Asset Backed Security
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                                    Investors receive interest
                                                    secured by real estate
                                                    assets worth hundreds of
                                                    millions.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                                <Banknote className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                                    Lead Investor Committed
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                                    SPUR Capital's own $100
                                                    million commitment de-risks
                                                    the opportunity.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                                <ChartBar className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                                    Structured Debt & Equity
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                                    Combination of debt
                                                    financing secured by assets
                                                    and equity participation in
                                                    SPUR Capital's fund.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="projections"
                className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Growth Trajectory
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
                            Financial Projections & Targets
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mb-3 sm:mb-4 text-xs sm:text-sm">
                                    Short-Term (Year 1-2)
                                </Badge>

                                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-branding-white/80">
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Acquire and convert 2+ new
                                            properties
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Achieve 95% data center occupancy
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Make initial equity investments in
                                            AI and Quantum startups
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mb-3 sm:mb-4 text-xs sm:text-sm">
                                    Mid-Term (Year 3-5)
                                </Badge>

                                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-branding-white/80">
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Potential partial exits from
                                            successful startups
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Expand data centers to 100%
                                            occupancy
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            See portfolio value appreciation
                                            from real estate and equity stakes
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors sm:col-span-2 md:col-span-1">
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mb-3 sm:mb-4 text-xs sm:text-sm">
                                    Long-Term (Year 5+)
                                </Badge>

                                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-branding-white/80">
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Multiple liquidity events from
                                            portfolio companies
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Continuous reinvestment to expand
                                            global data center footprint
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-branding-orange mt-[0.4rem] sm:mt-[0.6rem] shrink-0" />
                                        <span>
                                            Target 20%+ IRR through blended real
                                            estate and venture capital returns
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 sm:mt-12 md:mt-16 bg-background/30 border border-branding-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-branding-white mb-4 sm:mb-6 text-center">
                            Risk Management
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                            Leasing Risk
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                            Mitigated by focusing on
                                            high-demand, specialized data center
                                            markets and leveraging relationships
                                            with portfolio companies.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                            Market Fluctuations
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                            Diversified approach—both real
                                            estate and VC investments—reduces
                                            vulnerability to a single market's
                                            volatility.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                            Technology Adoption
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                            Continued growth in AI, quantum and
                                            High Performance Computing ensures
                                            sustained demand for specialized
                                            data center space.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-1.5 sm:p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mt-1">
                                        <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-branding-orange" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-branding-white mb-1">
                                            Regulatory & Environmental
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base text-branding-white/70">
                                            Complying with local zoning, data
                                            security, and power regulation.
                                            Potential for green energy
                                            initiatives to address
                                            sustainability concerns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full max-w-5xl mx-auto p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/10 via-background/40 to-branding-lightBlue/10 rounded-lg sm:rounded-xl backdrop-blur-sm" />
                        <div className="absolute -inset-4 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 rounded-lg sm:rounded-xl blur-xl -z-10" />

                        <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-branding-orange/10 rounded-full blur-lg" />
                        <div className="absolute bottom-0 left-0 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 bg-branding-lightBlue/10 rounded-full blur-xl" />

                        <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8">
                            <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
                                Funding the Future
                            </h2>

                            <p className="text-branding-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                                SPUR is focused on building and expanding the
                                most efficient advanced data centers globally.
                                Please contact us for any partnership and
                                investment inquiries.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 sm:pt-4">
                                <Button className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
                                    Request Investment Information
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <Button className="bg-transparent border border-branding-white/20 hover:border-branding-white/40 text-branding-white group text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
                                    Download Investor Presentation
                                </Button>
                            </div>

                            <div className="pt-4 sm:pt-6 text-branding-white/60 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-branding-orange/80" />
                                    <a
                                        href="https://www.spuric.com"
                                        className="text-sm sm:text-base hover:text-branding-orange transition-colors"
                                    >
                                        www.SPURIC.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-branding-orange/80" />
                                    <span className="text-sm sm:text-base">
                                        Waterloo, Ontario, Canada
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Server className="h-4 w-4 sm:h-5 sm:w-5 text-branding-orange/80" />
                                    <span className="text-sm sm:text-base">
                                        info@spur.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
