"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">PixelFyre</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.name}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>
        <button className="flex items-center justify-center md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button>Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

