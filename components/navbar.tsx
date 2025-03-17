import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">SPUR Innovation Center</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#vision" className="transition-colors hover:text-primary">
            Vision
          </Link>
          <Link href="#assets" className="transition-colors hover:text-primary">
            Assets
          </Link>
          <Link href="#locations" className="transition-colors hover:text-primary">
            Locations
          </Link>
          <Link href="#partner" className="transition-colors hover:text-primary">
            Partners
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://linkedin.com/company/spur-innovation-center" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}

