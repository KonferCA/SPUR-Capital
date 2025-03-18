import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="container py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        About SPUR
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        SPUR Innovation Center is at the forefront of
                        revolutionizing data center infrastructure. We
                        specialize in acquiring and transforming commercial real
                        estate into state-of-the-art data centers, creating a
                        global network of sustainable, efficient, and scalable
                        facilities.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        Our mission is to bridge the gap between traditional
                        real estate and emerging technologies, providing robust
                        infrastructure for AI, quantum computing, and machine
                        learning while delivering value to our investors through
                        both real estate appreciation and technological
                        advancement.
                    </p>
                </div>
                <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent rounded-3xl" />
                    <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="Data Center Interior"
                        width={600}
                        height={600}
                        className="rounded-3xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
