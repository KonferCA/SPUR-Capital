import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Building2,
    Server,
    Globe,
    Lightbulb,
    Users,
    ArrowRight,
    Network,
    RocketIcon,
    MapPin,
    Handshake,
    Focus,
    Link as LinkIcon
} from 'lucide-react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import RIM from '@/public/assets/carousel-2.jpg';

export default function AboutPage() {
    return (
        <div className="bg-background text-branding-white min-h-screen">
            <Navbar />

            <section id="story" className="relative py-16 sm:py-24 md:py-32 overflow-hidden mt-10 sm:mt-16 md:mt-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-branding-orange/5 rounded-full blur-2xl sm:blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-branding-lightBlue/5 rounded-full blur-2xl sm:blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                            Our Story
                        </Badge>

                        <h1 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent">
                            What is SPUR?
                        </h1>

                        <p className="text-branding-white/80 text-lg sm:text-xl md:text-2xl">
                            A community spurring innovation and enterprise
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="space-y-6 sm:space-y-8">
                            <p className="text-branding-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
                                <span className="font-bold">Welcome to SPUR Innovation Centres</span>, founded in the heart of Canada's Technology Triangle in Kitchener-Waterloo. Renowned as the world's top per capita startup community, with locations across Canada, we SPUR innovation, collaboration, and technological advancement.
                            </p>

                            <p className="text-branding-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
                                We believe innovators can change the world. That's why we invest in and accelerate impactful startups to spur a thriving ecosystem of change-makers.
                            </p>

                            <Button
                                className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6"
                            >
                                <Link
                                    href="/partners"
                                >
                                    Join our Ecosystem
                                </Link>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="relative h-96 sm:h-120 md:h-144">
                            <Image
                                src={RIM}
                                alt="SPUR Innovation Centre"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />

                            <div className="absolute bottom-6 right-6 z-20 bg-background/30 backdrop-blur-md p-4 rounded-lg border border-branding-white/10 shadow-xl max-w-[220px]">
                                <div className="space-y-2">
                                    <Badge variant="outline" className="bg-branding-orange/10 text-branding-orange border-branding-orange/20 text-xs">
                                        Innovation Hub
                                    </Badge>

                                    <h4 className="text-branding-white text-sm font-medium">
                                        Technology Triangle
                                    </h4>

                                    <p className="text-branding-white/70 text-xs">
                                        Canada's premier startup ecosystem in Kitchener-Waterloo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Our Advantages
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Why Choose SPUR?
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Strategic advantages that drive innovation and success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 shrink-0">
                                        <MapPin className="h-8 w-8 text-branding-orange" />
                                    </div>

                                    <div>
                                        <h3 className="text-branding-white font-medium text-xl mb-3">
                                            Strategic Location and Infrastructure
                                        </h3>

                                        <p className="text-branding-white/70 text-lg">
                                            Boasting millions of square feet of high-tech, custom-designed space, SPUR centers are strategically situated next to tech giants such as Google, data centers, airports, rail and transportation hubs, ensuring seamless connectivity for both data and logistics. The centres are a natural collision space for ideas, offering bespoke manufacturing, lab and space solutions, and other resources that are needed to SPUR success.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 shrink-0">
                                        <Lightbulb className="h-8 w-8 text-branding-orange" />
                                    </div>

                                    <div>
                                        <h3 className="text-branding-white font-medium text-xl mb-3">
                                            Innovation and Diversity of Success
                                        </h3>

                                        <p className="text-branding-white/70 text-lg">
                                            Our ecosystem nurtures startups across diverse fields such as AI, Nanotechnology, Blockchain, Medical Sciences, VR, and more. Success stories abound, with graduates from prestigious incubators like Velocity Garage, the Accelerator Center, Communitech, Y-Combinator and more.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 shrink-0">
                                        <Globe className="h-8 w-8 text-branding-orange" />
                                    </div>

                                    <div>
                                        <h3 className="text-branding-white font-medium text-xl mb-3">
                                            Global Reach and Selectivity
                                        </h3>

                                        <p className="text-branding-white/70 text-lg">
                                            At SPUR, we don't just focus on local talent; our reach is global. We apply a discerning strategy to select only the most promising startups worldwide. SPUR leverages its global network and resources to drive your success. With expert partners and tailored solutions to achieve your goals.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 shrink-0">
                                        <Handshake className="h-8 w-8 text-branding-orange" />
                                    </div>

                                    <div>
                                        <h3 className="text-branding-white font-medium text-xl mb-3">
                                            Government and Community Support
                                        </h3>

                                        <p className="text-branding-white/70 text-lg">
                                            Backed by regional, provincial, and federal support, we provide an environment conducive to high-tech business alliances and innovation. Our culture of innovation is continuously nurtured, offering a dynamic and proactive community for growth. SPUR recognizes entrepreneurs are the foundation of the economy. We proudly support them to nurture thriving and dynamic communities and growth.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-16 p-8 rounded-xl border border-branding-white/10 bg-gradient-to-br from-background/60 to-background/40 text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h3 className="text-branding-white text-2xl font-bold">Join Our Thriving Hub of Innovation</h3>

                            <p className="text-branding-white/80 text-lg">
                                We invite you to become part of this transformative journey, not only for substantial returns but also to drive the future of global innovation and enterprise. SPUR Innovation Centre means partnering with a leader in technological advancement and startup success. Together, we can spur the next generation of world-changing enterprises.
                            </p>

                            <Button
                                className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6 mt-4"
                            >
                                <a href="mailto:info@spur.com">
                                    Get In Touch
                                </a>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mission" className="py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Our Purpose
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Our Mandate
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-background/30 rounded-xl border border-branding-white/10 backdrop-blur-sm p-8 mb-16">
                        <p className="text-branding-white/80 text-xl leading-relaxed text-center">
                            At SPUR, our mandate is to ignite a culture of relentless innovation, foster a thriving community, and drive unparalleled success. We are committed to pushing boundaries, empowering individuals, and transforming industries through cutting-edge technology and visionary leadership.
                        </p>
                    </div>

                    <div className="text-center space-y-6 mb-16">
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                            Our Mission
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Nurture the best people in the culture of innovation, connection and creativity yielding the top results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-4">
                                    <Users className="h-8 w-8 text-branding-orange" />
                                </div>

                                <h3 className="text-branding-white font-medium text-xl mb-3">PEOPLE</h3>

                                <p className="text-branding-white/70">
                                    We believe success is what happens when the impact of what we do is grounded in the needs of our community.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-4">
                                    <RocketIcon className="h-8 w-8 text-branding-orange" />
                                </div>

                                <h3 className="text-branding-white font-medium text-xl mb-3">PROACTIVE</h3>

                                <p className="text-branding-white/70">
                                    We are go-getters that do not wait for the change to come to our community. We actively seek it.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-4">
                                    <LinkIcon className="h-8 w-8 text-branding-orange" />
                                </div>

                                <h3 className="text-branding-white font-medium text-xl mb-3">CONNECTION</h3>

                                <p className="text-branding-white/70">
                                    Business problems are more connected than we think, therefore, to solve them more efficiently; our solutions need to be connected as well.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-4">
                                    <Users className="h-8 w-8 text-branding-orange" />
                                </div>

                                <h3 className="text-branding-white font-medium text-xl mb-3">ACCESSIBILITY</h3>

                                <p className="text-branding-white/70">
                                    A diverse community provides the opportunity to share strengths, resources, experiences, knowledge and connections.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="overview" className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 hover:bg-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            At a Glance
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Company Overview
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <h3 className="text-branding-white font-bold text-2xl mb-4">Founding Rationale</h3>

                                    <p className="text-branding-white/80 text-lg leading-relaxed">
                                        The rapid advancements in AI, Quantum and High performance computing, has created massive demand for our cutting-edge Innovation and data centers. We are experts in building and converting legacy commercial industrial real estate to quickly and efficiently meet this emerging demand, providing higher yields and value appreciation while simultaneously providing established companies and fast growing startups with the best infrastructure and resources to spur their success.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <h3 className="text-branding-white font-bold text-2xl mb-4">Expansion Plans</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <Badge className="bg-branding-orange/20 text-branding-orange border-branding-orange/30">Phase 1</Badge>
                                            <p className="text-branding-white/80">North America</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Badge className="bg-branding-orange/20 text-branding-orange border-branding-orange/30">Phase 2</Badge>
                                            <p className="text-branding-white/80">EU / Middle East</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Badge className="bg-branding-orange/20 text-branding-orange border-branding-orange/30">Phase 3</Badge>
                                            <p className="text-branding-white/80">Asia Pacific</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <h3 className="text-branding-white font-bold text-2xl mb-4">Headquarters</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 text-branding-orange mt-1" />
                                            <p className="text-branding-white/80">Waterloo, Ontario, Canada</p>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 text-branding-orange mt-1" />
                                            <p className="text-branding-white/80">Lewes, Delaware, USA</p>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 text-branding-orange mt-1" />
                                            <p className="text-branding-white/80">Dubai, UAE</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <h3 className="text-branding-white font-bold text-2xl mb-4">Legal Structure</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                                <Building2 className="h-5 w-5 text-branding-orange" />
                                            </div>
                                            <p className="text-branding-white/80">Private Equity</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                                <Handshake className="h-5 w-5 text-branding-orange" />
                                            </div>
                                            <p className="text-branding-white/80">Limited Liability Partnership</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card> */}

                            <Card className="bg-background/30 border-branding-white/10 backdrop-blur-sm">
                                <CardContent className="p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <Server className="h-12 w-12 text-branding-orange mx-auto mb-4" />
                                        <h3 className="text-branding-white font-bold text-2xl">SPUR Innovation Centers</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full max-w-5xl mx-auto p-12 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/10 via-background/40 to-branding-lightBlue/10 rounded-xl backdrop-blur-sm" />
                        <div className="absolute -inset-4 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 rounded-xl blur-xl -z-10" />

                        <div className="absolute top-0 right-0 w-32 h-32 bg-branding-orange/10 rounded-full blur-lg" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-branding-lightBlue/10 rounded-full blur-xl" />

                        <div className="relative z-10 text-center space-y-8">
                            <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                                Join the Innovation Revolution
                            </h2>

                            <p className="text-branding-white/80 text-xl max-w-3xl mx-auto">
                                We provide leading-edge data centers, flex industrial / lab / tech / office spaces in strategic tech hubs—backed by funding and resources to spur success.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button
                                    className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6"
                                >
                                    <a href="mailto:info@spur.com">
                                        Get In Touch
                                    </a>
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <Button
                                    className="bg-transparent border border-branding-white/20 hover:border-branding-orange/90 hover:bg-transparent text-branding-white group text-lg px-8 py-6"
                                >
                                    <Link
                                        href="/#locations"
                                    >
                                        Explore Locations
                                    </Link>
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
