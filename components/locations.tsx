'use client';

import { Building2, Factory, Server, Warehouse, MapPin, ArrowRight, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from './section-wrapper';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import WaterlooCampus1 from '@/public/assets/waterloo-campus-1.jpg';
import WaterlooCampus2 from '@/public/assets/waterloo-campus-2.jpg';
import WaterlooCampus3 from '@/public/assets/waterloo-campus-3.jpg';
import WaterlooCampus4 from '@/public/assets/waterloo-campus-4.jpg';
import WaterlooCampus5 from '@/public/assets/waterloo-campus-5.jpg';
import WaterlooCampus6 from '@/public/assets/waterloo-campus-6.jpg';
import WaterlooCampus7 from '@/public/assets/waterloo-campus-7.jpg';
import WaterlooCampus8 from '@/public/assets/waterloo-campus-8.jpg';
import WaterlooCampus9 from '@/public/assets/waterloo-campus-9.png';
import WaterlooCampus10 from '@/public/assets/waterloo-campus-10.jpg';
import WaterlooCampus11 from '@/public/assets/waterloo-campus-11.jpg';
import WaterlooCampus12 from '@/public/assets/waterloo-campus-12.jpg';
import WaterlooCampus13 from '@/public/assets/waterloo-campus-13.jpg';

const waterlooImages = [
    WaterlooCampus1,
    WaterlooCampus2,
    WaterlooCampus3,
    WaterlooCampus4,
    WaterlooCampus5,
    WaterlooCampus6,
    WaterlooCampus7,
    WaterlooCampus8,
    WaterlooCampus9,
    WaterlooCampus10,
    WaterlooCampus11,
    WaterlooCampus12,
    WaterlooCampus13
];

const cities = [
    {
        name: 'Kitchener / Waterloo Region',
        country: 'Canada',
        sqft: '1,000,000+',
        spaces: ['Flex Industrial', 'Data Center', 'R&D Labs + Offices', 'Innovation Hub', 'Private Office Space', 'Co-Working Space'],
        occupancy: '95%',
        icon: Server,
        highlights: ['24/7 Security', 'Fiber Connection', 'Innovation Hub', 'Tech Campus', 'Premium Office Space'],
        description: 'Our flagship location featuring private and co-share office space right in the heart of Waterloo Region tech hub, cutting-edge cooling systems and direct connection to major network exchanges.',
        featured: true
    },
    {
        name: 'Mirabel / Montreal',
        country: 'Canada',
        sqft: '100,000',
        spaces: ['Flex Industrial', 'Data Center', 'R&D Labs + Offices'],
        occupancy: '90%',
        icon: Building2,
        highlights: ['AI Research', 'Innovation Campus', 'Strategic Location'],
        description: 'Purpose-built tech campus with integrated data center operations and collaborative innovation spaces.'
    },
    {
        name: 'Alberta',
        country: 'Canada',
        sqft: '70,000',
        spaces: ['Flex Industrial', 'Data Center', 'R&D Labs + Offices'],
        occupancy: '88%',
        icon: Factory,
        highlights: ['AI Research', 'Strategic Location'],
        description: 'Our largest facility, leveraging Quebec\'s low-cost renewable energy and cold climate for optimal efficiency.'
    },
    {
        name: 'Ottawa',
        country: 'Canada',
        sqft: '10,000',
        spaces: ['Flex Industrial', 'Data Center', 'R&D Labs + Offices'],
        occupancy: '92%',
        icon: Warehouse,
        highlights: ['Edge Computing', 'Strategic Location'],
        description: 'Strategically positioned facility with excellent connectivity to western markets.'
    },
];

function CampusCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        align: 'center',
        slidesToScroll: 1
    }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
    
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
        <div className="relative w-full h-80 rounded-xl overflow-hidden border border-branding-white/10">
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                <div className="flex h-full">
                    {waterlooImages.map((src, index) => (
                        <div className="relative flex-[0_0_100%] h-full" key={index}>
                            <Image
                                src={src}
                                alt={`Waterloo Campus View ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority={index < 2}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 z-20 pointer-events-none">
                {waterlooImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors pointer-events-auto ${
                            emblaApi?.selectedScrollSnap() === index 
                                ? "bg-branding-orange" 
                                : "bg-white/30 hover:bg-white/50"
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            emblaApi?.scrollTo(index)
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

const featuredCity = cities.find(city => city.name === 'Kitchener / Waterloo Region');
const otherCities = cities.filter(city => city.name !== 'Kitchener / Waterloo Region');

export default function Locations() {
    return (
        <SectionWrapper id="locations">
            <div className="container mx-auto px-4">
                <div className="space-y-16 border-t border-branding-white/10 pt-16">
                    <div className="text-center space-y-6 mb-12">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Strategic Presence
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Our Locations
                        </h2>

                        <span className="block w-16 h-1 bg-branding-orange mt-4 mx-auto rounded-full" />

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Strategic presence across major Canadian tech hubs,
                            providing state-of-the-art facilities and infrastructure.
                        </p>
                    </div>

                    <div className="max-w-[800px] mx-auto text-center mb-12">
                        <p className="text-branding-white/80 text-lg sm:text-xl">
                            SPUR's data centers are strategically located in Canada's technology corridors, 
                            offering clients access to reliable infrastructure, renewable energy sources, 
                            and optimal connectivity with minimal latency.
                        </p>
                    </div>
                    
                    {featuredCity && (
                        <div className="mb-12">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-branding-white mt-2">
                                    Our Flagship Facility
                                </h3>
                            </div>
                            
                            <Card className="group relative overflow-hidden border border-branding-orange/30 bg-background/30 backdrop-blur-sm hover:border-branding-orange/50 transition-colors">
                                <CardContent className="p-8 md:p-10">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <MapPin className="h-4 w-4 text-branding-orange mr-1" />
                                                <span className="text-sm font-medium text-branding-white/60">
                                                    {featuredCity.country}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-branding-white group-hover:text-branding-orange transition-colors">
                                                {featuredCity.name}
                                            </h3>
                                        </div>
                                        
                                        <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                            <featuredCity.icon className="h-12 w-12 text-branding-orange" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-branding-white/70 text-lg mb-6">
                                                {featuredCity.description}
                                            </p>
                                            
                                            <div className="flex items-center mb-4 text-branding-white/80">
                                                <Users className="h-5 w-5 text-branding-orange mr-2" />
                                                <span className="font-medium text-lg">Premium Office Space Available</span>
                                            </div>

                                            <p className="text-branding-white/70 mb-6 text-center text-md">
                                                Private and co-share office space right in the heart of Waterloo Region Tech Hub.
                                            </p>
                                            
                                            <p className="text-branding-white/70 mb-6">
                                                &#x2794; SPUR launched the co-working phenomenon. It emphasizes both community and convenience. <br /> <br />
                                                &#x2794; We offer custom spaces for all kinds of local startups, as well as full-sized companies. <br /> <br /> 
                                                &#x2794; With 4 different locations speckled throughout Kitchener-Waterloo our offices conveniently located next to major Universities, Colleges, and big companies, such as Google, Toyota, Research in Motion, OpenText, Manulife, Sunlife, and many more.  <br /><br />
                                                &#x2794; All our locations are easily accessible by public transportation and conveniently located near commercial districts and boutique shops. <br /><br />
                                                &#x2794; Members get access to amenities such as coffee, 24/7 space access, printing services, daily cleaning, mailing services access to conference rooms and much more.
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-5">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-sm font-medium text-branding-white/90">
                                                        Facility Size
                                                    </h4>
                                                    <span className="text-branding-orange font-bold">
                                                        {featuredCity.sqft} sq ft
                                                    </span>
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-branding-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-branding-orange transition-all"
                                                            style={{ width: featuredCity.occupancy }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-branding-white/80 whitespace-nowrap">
                                                        {featuredCity.occupancy} Occupied
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-medium text-branding-white/90 mb-2">
                                                    Available Spaces
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {featuredCity.spaces.map((space) => (
                                                        <Badge 
                                                            key={space} 
                                                            className="bg-branding-orange/10 text-branding-orange border-branding-orange/20"
                                                        >
                                                            {space}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-medium text-branding-white/90 mb-2">
                                                    Facility Highlights
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {featuredCity.highlights.map((highlight) => (
                                                        <Badge
                                                            key={highlight}
                                                            variant="outline"
                                                            className="text-branding-white/80 border-branding-white/20"
                                                        >
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="mt-6">
                                                <h4 className="text-sm font-medium text-branding-white/90 mb-3">
                                                    Campus Views
                                                </h4>
                                                <CampusCarousel />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </CardContent>
                            </Card>
                            
                            <div className="mt-6 text-center">
                                <p className="text-branding-white/80">
                                    Our Kitchener/Waterloo location is highly sought after with limited availability. 
                                    Contact us today to secure your space in this premier technology hub.
                                </p>
                            </div>
                        </div>
                    )}
                    
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-branding-white">
                                Additional Locations
                            </h3>
                        </div>
                        
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                            {otherCities.map((city) => (
                                <Card
                                    key={city.name}
                                    className="group relative overflow-hidden border border-branding-white/10 bg-background/30 backdrop-blur-sm hover:border-branding-orange/30 transition-colors"
                                >
                                    <CardContent className="p-8">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center mb-1">
                                                    <MapPin className="h-4 w-4 text-branding-orange mr-1" />
                                                    <span className="text-sm font-medium text-branding-white/60">
                                                        {city.country}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-branding-white group-hover:text-branding-orange transition-colors">
                                                    {city.name}
                                                </h3>
                                            </div>
                                            
                                            <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                                <city.icon className="h-10 w-10 text-branding-orange" />
                                            </div>
                                        </div>
                                        
                                        <p className="text-branding-white/70 mb-4">
                                            {city.description}
                                        </p>
                                        
                                        <div className="space-y-5">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-sm font-medium text-branding-white/90">
                                                        Facility Size
                                                    </h4>
                                                    <span className="text-branding-orange font-bold">
                                                        {city.sqft} sq ft
                                                    </span>
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-branding-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-branding-orange transition-all"
                                                            style={{ width: city.occupancy }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-branding-white/80 whitespace-nowrap">
                                                        {city.occupancy} Occupied
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-medium text-branding-white/90 mb-2">
                                                    Available Spaces
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {city.spaces.map((space) => (
                                                        <Badge 
                                                            key={space} 
                                                            className="bg-branding-orange/10 text-branding-orange border-branding-orange/20"
                                                        >
                                                            {space}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-medium text-branding-white/90 mb-2">
                                                    Facility Highlights
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {city.highlights.map((highlight) => (
                                                        <Badge
                                                            key={highlight}
                                                            variant="outline"
                                                            className="text-branding-white/80 border-branding-white/20"
                                                        >
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-center space-y-8 max-w-3xl mx-auto">
                        <p className="text-branding-white/80 text-lg">
                            Our facilities are designed to meet the demanding requirements of AI and quantum computing, 
                            with expandable capacity to support our clients' growth needs and specialized infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}