import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SpurLogo from "./spur-logo"

export default function Hero() {
  return (
    <section className="relative flex w-screen min-h-[calc(100vh-3.5rem)] items-center justify-center py-24 md:py-32 before:content-[''] before:absolute before:inset-0 before:bg-[url(/hero-background.png)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-30 before:-z-10">
      <div className="container flex flex-col items-center justify-center space-y-8 text-center">
        <SpurLogo className="w-32 h-32 mb-8" />
        <div className="space-y-4">
          <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            SPUR Capital
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Spurring the Future Funding of Decentralized Smart City Infrastructure.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Onboard
          </Button>
        </div>
      </div>
    </section>
  )
}

