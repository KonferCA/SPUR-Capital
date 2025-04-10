import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function CTA() {
    return (
        <SectionWrapper id="cta">
            <div className="container mx-auto px-4">
                <div className="space-y-16 border-t border-branding-white/10 pt-16">
                    <div className="flex flex-col items-center gap-6 py-12 text-center md:py-16">
                        <Badge className="bg-branding-orange/20 text-branding-orange hover:bg-branding-orange/30 border border-branding-orange/30 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Get Started
                        </Badge>

                        <h2 className="bg-gradient-to-br from-branding-white from-30% via-branding-white/90 to-branding-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Ready to revolutionize your business?
                        </h2>

                        <p className="mx-auto max-w-[800px] text-branding-white/80 text-xl sm:text-2xl">
                            Join leading companies who trust SPUR to drive their
                            digital transformation and stay ahead in the rapidly
                            evolving tech landscape.
                        </p>

                        <div className="relative w-full max-w-3xl mx-auto mt-6 p-8 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-branding-orange/10 via-background/40 to-branding-lightBlue/10 rounded-xl backdrop-blur-sm" />
                            <div className="absolute -inset-4 bg-gradient-to-tr from-branding-orange/5 via-transparent to-branding-lightBlue/5 rounded-xl blur-xl -z-10" />

                            <div className="absolute top-0 right-0 w-32 h-32 bg-branding-orange/10 rounded-full blur-lg" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-branding-lightBlue/10 rounded-full blur-xl" />

                            <div className="relative z-10 flex flex-col items-center">
                                <p className="text-branding-white/90 text-lg mb-8 max-w-2xl">
                                    Whether you're looking to expand your data
                                    center capabilities, leverage cutting-edge
                                    AI infrastructure, or partner with us on
                                    strategic investments, our team is ready to
                                    help.
                                </p>

                                <Button className="bg-branding-orange hover:bg-branding-orange/90 text-branding-white group text-lg px-8 py-6 w-full sm:w-auto">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="pt-8 text-branding-white/60 text-sm">
                            Join the next generation of technology
                            infrastructure
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
