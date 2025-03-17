import { Building2, Banknote, BarChart3 } from "lucide-react"

const assets = [
  {
    title: "$500M+ Assets Under Management",
    description: "6 Operational Datacenters. Currently, all data centers are leased to 95% occupancy.",
    icon: Building2,
  },
  {
    title: "$100M Capital Secured Allocation",
    description:
      "Secured Funding. We are currently pursuing debt financing of up to $200 million USD. Additionally, SPUR is targeting a minimum allocation of $1 billion USD.",
    icon: Banknote,
  },
  {
    title: "95% Data Center Occupancy",
    description:
      "High Demand Data Center Occupancy for existing facilities. Additional acquisitions are required for demand support. List of target acquisitions available upon request.",
    icon: BarChart3,
  },
]

export default function Assets() {
  return (
    <section className="container py-24 md:py-32">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Assets</h2>
        <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
          SPUR manages a growing portfolio of data center assets, delivering value through strategic acquisitions and
          operational excellence.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {assets.map((asset) => (
          <div
            key={asset.title}
            className="relative overflow-hidden rounded-lg border bg-background p-8 group hover:border-primary/50 transition-colors"
          >
            <div className="mb-6">
              <asset.icon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{asset.title}</h3>
            <p className="text-muted-foreground">{asset.description}</p>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  )
}

