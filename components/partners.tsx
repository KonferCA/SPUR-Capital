'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, X } from 'lucide-react';
import SectionWrapper from './section-wrapper';
import BlackBerry from '@/public/assets/blackberry-logo.jpg';
import Crawford from '@/public/assets/crawford-logo.png';
import Molex from '@/public/assets/molex-logo.png';
import MagnetForensics from '@/public/assets/magnet-forensics-logo.jpg';
import WSIB from '@/public/assets/wsib-logo.svg';
import Konfer from '@/public/assets/konfer-logo.svg';
import Partnerships from '@/public/assets/partnerships.jpg';

const partners = [
    {
        name: "BlackBerry",
        logo: BlackBerry,
        categories: ["Software", "Technology", "Cybersecurity"],
        description: "Secure data management and communication solutions"
    },
    {
        name: "Crawford",
        logo: Crawford,
        categories: ["Insurance", "Technology"],
        description: "Global claims management and risk solutions"
    },
    {
        name: "molex",
        logo: Molex,
        categories: ["Engineering", "Technology"],
        description: "Advanced physical and digital security solutions"
    },
    {
        name: "Magnet Forensics",
        logo: MagnetForensics,
        categories: ["Engineering", "Cybersecurity", "Software"],
        description: "Digital forensics and incident response software"
    },
    {
        name: "WSIB Ontario",
        logo: WSIB,
        categories: ["Insurance"],
        description: "Ontario Workplace Safety and Insurance Board"
    },
    {
        name: "Konfer",
        logo: Konfer,
        categories: ["Technology", "Logistics", "Software"],
        description: "Logistical partnership and software solutions"
    },
];

const categories = ["Technology", "Software", "Cybersecurity", "Insurance", "Engineering", "Logistics"];

export default function Partners() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [filteredPartners, setFilteredPartners] = useState(partners);
    
    useEffect(() => {
        if (activeFilters.length === 0) {
            setFilteredPartners(partners);
        } else {
            const filtered = partners.filter(partner => 
                partner.categories.some(category => 
                    activeFilters.includes(category)
                )
            );

            setFilteredPartners(filtered);
        }
    }, [activeFilters]);
    
    const toggleFilter = (category: string): void => {
        if (activeFilters.includes(category)) {
            setActiveFilters(activeFilters.filter((filter: string) => filter !== category));
        } else {
            setActiveFilters([...activeFilters, category]);
        }
    };
    
    const clearFilters = () => {
        setActiveFilters([]);
    };
    
    return (
        <SectionWrapper id="partners">
            <div className="container mx-auto px-4">
                <div className="space-y-16 border-t border-branding-white/10 pt-16">
                    <div className="text-center space-y-6 mb-12">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Our Collaborators
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Our Partners & Client Base
                        </h2>
                        
                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Working with industry leaders to build the future of data center infrastructure.
                        </p>
                    </div>

                    <div className="max-w-[800px] mx-auto text-center mb-12">
                        <p className="text-branding-white/80 text-lg sm:text-xl">
                            SPUR collaborates with best-in-class partners across technology, energy, security, and finance 
                            to deliver comprehensive data center solutions that meet the evolving needs of our clients.
                        </p>
                    </div>
                    
                    <div className="mb-8">
                        <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
                            {categories.map((category) => (
                                <Badge 
                                    key={category}
                                    className={`
                                        px-4 py-2 text-sm cursor-pointer transition-colors
                                        ${activeFilters.includes(category) 
                                            ? 'bg-branding-orange/20 text-branding-orange border-branding-orange/30 hover:bg-branding-orange/30' 
                                            : 'bg-background/30 text-branding-white/80 border-branding-white/20 hover:bg-branding-orange/10 hover:text-branding-orange hover:border-branding-orange/20'
                                        }
                                    `}
                                    onClick={() => toggleFilter(category)}
                                >
                                    {category}
                                </Badge>
                            ))}
                        </div>
                        
                        {activeFilters.length > 0 && (
                            <div className="flex justify-center mt-4">
                                <div className="flex items-center gap-2 bg-background/30 border border-branding-white/20 rounded-full px-4 py-2">
                                    <span className="text-sm text-branding-white/70">Active filters:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {activeFilters.map(filter => (
                                            <Badge 
                                                key={filter}
                                                className="bg-branding-orange/20 text-branding-orange border-branding-orange/30 flex items-center gap-1"
                                            >
                                                {filter}
                                                <X 
                                                    className="h-3 w-3 cursor-pointer" 
                                                    onClick={() => toggleFilter(filter)}
                                                />
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="text-branding-white/70 hover:text-branding-white hover:bg-background/40 ml-2 text-xs"
                                        onClick={clearFilters}
                                    >
                                        Clear all
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {filteredPartners.length === 0 ? (
                        <div className="text-center py-12 bg-background/30 border border-branding-white/10 rounded-xl">
                            <p className="text-branding-white/70">No partners match your selected filters.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredPartners.map((partner, i) => (
                                <Card
                                    key={i}
                                    className="group bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden"
                                >
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="w-full h-20 relative mb-4 transition-all duration-300">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        
                                        <div className="flex flex-wrap justify-center gap-2 mb-2">
                                            {partner.categories.map(category => (
                                                <Badge 
                                                    key={category}
                                                    className={`
                                                        text-xs
                                                        ${activeFilters.includes(category) 
                                                            ? 'bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20' 
                                                            : 'bg-background/40 text-branding-white/70 hover:bg-branding-orange/30 border-branding-white/20'
                                                        }
                                                    `}
                                                    onClick={() => toggleFilter(category)}
                                                >
                                                    {category}
                                                </Badge>
                                            ))}
                                        </div>
                                        
                                        <h3 className="text-branding-white font-medium text-lg mb-2 text-center">
                                            {partner.name}
                                        </h3>
                                        
                                        <p className="text-branding-white/70 text-sm text-center">
                                            {partner.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                    
                    <div className="mt-16 bg-gradient-to-br from-background/60 to-background/40 border border-branding-white/10 rounded-xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <Badge className="bg-branding-orange/10 text-branding-orange hover:bg-branding-orange/30 border-branding-orange/20 mb-4">
                                    Strategic Alliances
                                </Badge>
                                
                                <h3 className="text-2xl font-bold text-branding-white mb-4">
                                    Become a SPUR Partner
                                </h3>
                                
                                <p className="text-branding-white/80 mb-6">
                                    Join our ecosystem of industry-leading partners and help shape the future of data infrastructure. 
                                    We're constantly seeking innovative companies to collaborate with across our growing network of facilities.
                                </p>
                                
                                <Button 
                                    className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-6 py-5"
                                >
                                    <Link 
                                        href="/partner"
                                    >
                                        Partner with Us
                                    </Link>
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                            
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/20 via-branding-lightBlue/20 to-transparent rounded-lg" />
                                <Image
                                    src={Partnerships}
                                    alt="Partnership Opportunities"
                                    fill
                                    className="object-cover rounded-lg border border-branding-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}