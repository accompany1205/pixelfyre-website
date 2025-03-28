import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showGraphic?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showGraphic = true,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24">
      {showGraphic && (
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-pixelfyre-purple blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pixelfyre-blue blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-pixelfyre-cyan blur-3xl" />
        </div>
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-base font-semibold uppercase tracking-wide text-primary">{subtitle}</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i % 3 === 0 ? "gradient-text" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">{description}</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="px-8">
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

