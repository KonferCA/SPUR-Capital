'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
    ArrowLeft, 
    ArrowRight, 
    Lightbulb, 
    Network, 
    Layers, 
    Cpu, 
    Rocket,
    Users,
    Handshake,
    Server,
    DollarSign,
    Building,
    BriefcaseBusiness,
    GraduationCap,
    Globe,
    Mail,
    MapPin
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Navbar from '@/components/navbar';

export default function PartnershipsPage() {
    const [activeTab, setActiveTab] = useState('all');
    
    const partnershipTypes = [
        {
            id: 'strategic',
            name: 'Strategic Partnerships',
            icon: <Handshake className="h-10 w-10 text-branding-orange" />,
            description: 'Align with us on shared goals, co-develop technologies, and engage in thought leadership across industries.'
        },
        {
            id: 'technology',
            name: 'Technology Partners',
            icon: <Server className="h-10 w-10 text-branding-orange" />,
            description: 'Collaborate with us to build, integrate, and scale innovative technologies across our platform.'
        },
        {
            id: 'investment',
            name: 'Investment Partners',
            icon: <DollarSign className="h-10 w-10 text-branding-orange" />,
            description: 'Join us to invest in and support promising startups on the SPUR platform. Benefit from early access to disruptive ideas and technologies.'
        },
        {
            id: 'corporate',
            name: 'Corporate Sponsorships',
            icon: <Building className="h-10 w-10 text-branding-orange" />,
            description: 'Support events, competitions, and incubation programs that attract top talent and cutting-edge projects.'
        }
    ];
    
    const benefits = [
        {
            id: 'technology',
            icon: <Cpu className="h-10 w-10 text-branding-orange" />,
            title: 'Cutting-Edge Technology',
            description: 'SPURIC focuses on leveraging the most cutting edge technology for AI, quantum computing, and high-performance computing. Our state-of-the-art infrastructure empowers you to push the boundaries of what\'s possible.',
            categories: ['all', 'strategic', 'technology']
        },
        {
            id: 'collaborative',
            icon: <Users className="h-10 w-10 text-branding-orange" />,
            title: 'Collaborative Innovation',
            description: 'At SPURIC, we believe that collaboration is the key to breakthroughs. Work alongside experts, startups, and established organizations to accelerate innovation.',
            categories: ['all', 'strategic', 'technology', 'corporate']
        },
        {
            id: 'compute',
            icon: <Server className="h-10 w-10 text-branding-orange" />,
            title: 'World-Class AI Compute Services',
            description: 'Through our unique cooperative model, our partner, Direct Global Data Center Division, provides cost-effective and scalable AI compute solutions to support your projects.',
            categories: ['all', 'technology', 'strategic']
        },
        {
            id: 'funding',
            icon: <DollarSign className="h-10 w-10 text-branding-orange" />,
            title: 'Funding Opportunities',
            description: 'We offer an integrated platform for decentralized funding via DAIT.IO and SPUR blockchain, allowing startups to raise capital through a secure and transparent model.',
            categories: ['all', 'investment', 'strategic']
        },
        {
            id: 'talent',
            icon: <BriefcaseBusiness className="h-10 w-10 text-branding-orange" />,
            title: 'Access to Talent and Expertise',
            description: 'Tap into our network of skilled professionals and cutting-edge researchers who can assist in developing and implementing groundbreaking solutions.',
            categories: ['all', 'strategic', 'technology', 'corporate']
        },
        {
            id: 'network',
            icon: <Network className="h-10 w-10 text-branding-orange" />,
            title: 'Expansive Industry Network',
            description: 'Connect with a diverse ecosystem of innovators, industry leaders, and potential clients to expand your reach and impact.',
            categories: ['all', 'strategic', 'corporate', 'investment']
        }
    ];
    
    const steps = [
        {
            number: '01',
            title: 'Submit a Proposal',
            description: 'Share your vision with us by filling out our partnership application form or emailing us at partners@spuric.com.'
        },
        {
            number: '02',
            title: 'Meet with Our Team',
            description: 'After reviewing your proposal, our team will schedule a meeting to explore partnership opportunities and discuss how we can collaborate.'
        },
        {
            number: '03',
            title: 'Collaborate and Innovate',
            description: 'Once we establish a partnership, you\'ll gain access to our facilities, resources, and a network of innovators committed to making a difference.'
        }
    ];
    
    const audienceGroups = [
        {
            name: 'Startups',
            icon: <Rocket className="h-10 w-10 text-branding-orange" />,
            description: 'Access resources, mentorship and funding opportunities to accelerate your growth'
        },
        {
            name: 'Established Businesses',
            icon: <Building className="h-10 w-10 text-branding-orange" />,
            description: 'Drive innovation initiatives and digital transformation through our collaborative ecosystem'
        },
        {
            name: 'Academic Institutions',
            icon: <GraduationCap className="h-10 w-10 text-branding-orange" />,
            description: 'Bridge the gap between theoretical research and practical applications through real-world collaborations'
        }
    ];
    
    const filteredBenefits = benefits.filter(benefit => 
        benefit.categories.includes(activeTab)
    );

    return (
        <div className="bg-background text-branding-white min-h-screen">
            <Navbar />
            
            <section className="relative py-32 overflow-hidden mt-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-branding-orange/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-branding-lightBlue/5 rounded-full blur-3xl" />
                </div>
                
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Collaborative Innovation
                        </Badge>
                        
                        <h1 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent">
                            Partner with SPUR
                        </h1>
                        
                        <p className="text-branding-white/80 text-xl sm:text-2xl">
                            Join our ecosystem of innovators shaping the future of technology
                            through collaboration, resources, and cutting-edge infrastructure.
                        </p>
                    </div>
                </div>
            </section>
            
            <section id="types" className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Engagement Models
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Types of Partnerships
                        </h2>
                        
                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Flexible partnership models tailored to meet your business needs
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnershipTypes.map((type) => (
                            <Card 
                                key={type.id}
                                className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden"
                                onClick={() => setActiveTab(type.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`p-3 rounded-lg border mb-4 ${activeTab === type.id ? 'bg-branding-orange/20 border-branding-orange/30' : 'bg-branding-orange/10 border-branding-orange/20'}`}>
                                            {type.icon}
                                        </div>
                                        
                                        <h3 className="text-branding-white font-bold text-xl mb-3">{type.name}</h3>
                                        
                                        <p className="text-branding-white/70">
                                            {type.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="benefits" className="py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-12">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Why Partner With Us
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Partnership Benefits
                        </h2>
                        
                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            SPURIC is not just an innovation hub - we are a gateway to a collaborative ecosystem designed for tomorrow's leaders
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <Badge 
                            className={`px-4 py-2 text-sm cursor-pointer ${activeTab === 'all' ? 'bg-branding-orange/20 text-branding-orange border-branding-orange/30' : 'bg-background/30 text-branding-white/80 border-branding-white/20 hover:bg-branding-orange/10 hover:text-branding-orange hover:border-branding-orange/20'}`}
                            onClick={() => setActiveTab('all')}
                        >
                            All Benefits
                        </Badge>
                        
                        {partnershipTypes.map((type) => (
                            <Badge 
                                key={type.id}
                                className={`px-4 py-2 text-sm cursor-pointer ${activeTab === type.id ? 'bg-branding-orange/20 text-branding-orange border-branding-orange/30' : 'bg-background/30 text-branding-white/80 border-branding-white/20 hover:bg-branding-orange/10 hover:text-branding-orange hover:border-branding-orange/20'}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                {type.name}
                            </Badge>
                        ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBenefits.map((benefit) => (
                            <Card 
                                key={benefit.id}
                                className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden h-full"
                            >
                                <CardContent className="p-8 h-full">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-branding-white mb-3">{benefit.title}</h3>
                                        
                                        <p className="text-branding-white/70 flex-grow">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="join" className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Getting Started
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            How to Partner with SPURIC
                        </h2>
                        
                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Partnering with SPURIC is a seamless process
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {steps.map((step, index) => (
                            <Card 
                                key={index}
                                className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden"
                            >
                                <CardContent className="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-branding-orange/10 border border-branding-orange/20 flex items-center justify-center mb-6">
                                            <span className="text-2xl font-bold text-branding-orange">{step.number}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-branding-white mb-4">{step.title}</h3>
                                        
                                        <p className="text-branding-white/70">
                                            {step.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 border-t border-branding-white/10 bg-gradient-to-b from-background to-background/90">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Our Audience
                        </Badge>
                        
                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Let's Shape the Future Together
                        </h2>
                        
                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Whether you're a startup, an established business, or an academic institution, 
                            SPURIC offers a dynamic environment for growth and innovation
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {audienceGroups.map((group, index) => (
                            <Card 
                                key={index}
                                className="bg-background/30 border-branding-white/10 backdrop-blur-sm hover:border-branding-orange/30 transition-colors overflow-hidden"
                            >
                                <CardContent className="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 bg-branding-orange/10 rounded-lg border border-branding-orange/20 mb-6">
                                            {group.icon}
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-branding-white mb-4">{group.name}</h3>
                                        
                                        <p className="text-branding-white/70">
                                            {group.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 border-t border-branding-white/10">
                <div className="container mx-auto px-4">
                    <div className="relative w-full max-w-5xl mx-auto p-12 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/10 via-background/40 to-branding-lightBlue/10 rounded-xl backdrop-blur-sm" />
                        <div className="absolute -inset-4 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 rounded-xl blur-xl -z-10" />
                        
                        <div className="absolute top-0 right-0 w-32 h-32 bg-branding-orange/10 rounded-full blur-lg" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-branding-lightBlue/10 rounded-full blur-xl" />
                        
                        <div className="relative z-10 text-center space-y-8">
                            <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                                Ready to Partner with Us?
                            </h2>
                            
                            <p className="text-branding-white/80 text-xl max-w-3xl mx-auto">
                                Together, we can transform industries, build cutting-edge solutions, 
                                and pioneer the future of technology.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button 
                                    className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center w-full sm:w-auto"
                                >
                                    <a
                                        href="mailto:partners@spuric.com"
                                    >
                                        Connect with Us
                                    </a>
                                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                            
                            <div className="pt-6 text-branding-white/60 flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-branding-orange/80" />
                                    <a href="https://www.spuric.com" className="hover:text-branding-orange transition-colors">www.spuric.com</a>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-branding-orange/80" />
                                    <span>partners@spuric.com</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-branding-orange/80" />
                                    <span>Waterloo, Ontario, Canada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
