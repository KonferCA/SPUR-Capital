import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-branding-white/10 pt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="inline-block">
                                <h2 className="text-branding-white text-2xl font-bold">
                                    SPUR
                                </h2>
                            </Link>
                            <p className="text-branding-white/60 mt-2">
                                Spurring the Future Funding of Decentralized
                                Smart City Infrastructure
                            </p>
                        </div>

                        <div className="mt-4">
                            <p className="text-branding-white/70">
                                SPUR is redefining how cities implement smart
                                infrastructure with decentralized funding models
                                and technology solutions.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <Link
                                href="https://twitter.com/SpurInnovation"
                                className="p-2 bg-branding-orange/10 rounded-full text-branding-orange hover:bg-branding-orange/20 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>

                            <Link
                                href="https://linkedin.com/company/spur-innovation-center"
                                className="p-2 bg-branding-orange/10 rounded-full text-branding-orange hover:bg-branding-orange/20 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-end text-right">
                        <h3 className="text-branding-white font-semibold">
                            Contact Us
                        </h3>
                        <div className="flex items-start gap-3 justify-end">
                            <Link
                                href="https://maps.app.goo.gl/hnxxnz8D2ihV4PeZ9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-branding-white/80 hover:text-branding-orange transition-colors underline"
                            >
                                2240 University Ave, Waterloo, ON N2K 0A9, Canada
                            </Link>
                            <MapPin className="h-5 w-5 text-branding-orange mt-1 flex-shrink-0" />
                        </div>

                        <div className="flex items-center gap-3 justify-end">
                            <Link
                                href="tel:+18883174024"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-branding-orange transition-colors underline"
                            >
                                +1 (888) 317-4024
                            </Link>
                            <Phone className="h-5 w-5 text-branding-orange flex-shrink-0" />
                        </div>

                        <div className="flex items-center gap-3 justify-end">
                            <Link
                                href="mailto:info@spur.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-branding-orange transition-colors underline"
                            >
                                info@spur.com
                            </Link>
                            <Mail className="h-5 w-5 text-branding-orange flex-shrink-0" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-branding-white/10 py-6 mt-8 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-branding-white/50 text-sm">
                            &copy; {new Date().getFullYear()} SPUR Innovation
                            Center, Inc. All rights reserved.
                        </p>

                        {/* <div className="flex gap-4 text-branding-white/50 text-sm justify-center items-center">
                            <Link href="/privacy" className="hover:text-branding-orange transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-branding-orange transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-branding-orange transition-colors">
                                Cookie Policy
                            </Link>
                        </div> */}

                        {/* <div className="flex gap-4 justify-center items-center">
                            <p className="text-branding-white/50 text-sm">
                                Made & Designed by{' '}
                                <a
                                    href="https://konfer.ca/"
                                    className="hover:text-branding-orange transition-colors underline"
                                >
                                    Konfer
                                </a>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
