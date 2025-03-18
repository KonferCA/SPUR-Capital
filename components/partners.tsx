import Image from 'next/image';

export default function Partners() {
    return (
        <section className="container py-24 md:py-32 border-t">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Partners
                </h2>
                <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                    Working with industry leaders to build the future of data
                    center infrastructure.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full max-w-[200px] h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Image
                            src="/placeholder-logo.svg"
                            alt={`Partner ${i + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
