import { Building2, Factory, Server, Warehouse } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const cities = [
  {
    name: "Toronto",
    country: "Canada",
    sqft: "125,000",
    spaces: ["Data Centers", "Office Space", "R&D Labs"],
    occupancy: "95%",
    icon: Server,
    highlights: ["24/7 Security", "Renewable Energy", "Fiber Connection"],
  },
  {
    name: "Vancouver",
    country: "Canada",
    sqft: "85,000",
    spaces: ["Data Centers", "Innovation Hub"],
    occupancy: "90%",
    icon: Building2,
    highlights: ["Cooling Systems", "Green Infrastructure", "Tech Campus"],
  },
  {
    name: "Montreal",
    country: "Canada",
    sqft: "150,000",
    spaces: ["Data Centers", "Research Facilities", "Cold Storage"],
    occupancy: "88%",
    icon: Factory,
    highlights: ["Natural Cooling", "AI Research Hub", "Quantum Ready"],
  },
  {
    name: "Calgary",
    country: "Canada",
    sqft: "95,000",
    spaces: ["Data Centers", "Distribution Centers"],
    occupancy: "92%",
    icon: Warehouse,
    highlights: ["Solar Powered", "Edge Computing", "Strategic Location"],
  },
]

export default function Cities() {
  return (
    <section id="locations" className="container py-24 md:py-32 border-t">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Locations</h2>
        <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
          Strategic presence across major Canadian tech hubs, providing state-of-the-art facilities and infrastructure.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {cities.map((city) => (
          <div
            key={city.name}
            className="group relative overflow-hidden rounded-lg border bg-background p-8 transition-colors hover:border-primary/50"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {city.name}
                  <span className="text-sm font-normal text-muted-foreground ml-2">{city.country}</span>
                </h3>
                <p className="text-muted-foreground mt-1">Available Space: {city.sqft} sq ft</p>
              </div>
              <city.icon className="h-12 w-12 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Available Spaces</h4>
                <div className="flex flex-wrap gap-2">
                  {city.spaces.map((space) => (
                    <Badge key={space} variant="secondary">
                      {space}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {city.highlights.map((highlight) => (
                    <Badge key={highlight} variant="outline">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: city.occupancy }} />
                  </div>
                  <span className="text-sm font-medium">{city.occupancy} Occupied</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  )
}

