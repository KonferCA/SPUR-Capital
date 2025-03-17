import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "Global Network",
    description: "Create a worldwide network of advanced data centers.",
    icon: Brain,
  },
  {
    name: "Next-Gen Computing",
    description: "Power AI, Quantum Computing, and Machine Learning infrastructure.",
    icon: Cloud,
  },
  {
    name: "Strategic Acquisitions",
    description: "Convert commercial real estate into state-of-the-art data centers.",
    icon: Shield,
  },
  {
    name: "Dual Growth",
    description: "Enable investors to benefit from real estate appreciation and emerging tech markets.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Vision</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          SPUR is a next-generation decentralized AI-driven tech company that builds data centers focused on sustainability, scalability, and efficiency.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

