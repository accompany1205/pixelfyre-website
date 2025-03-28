import Link from "next/link"
import { ArrowRight, Cpu, Brain, Zap, Server, Shield, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import ProductCard from "@/components/product-card"
import { getFeaturedProducts } from "@/data/products"
import { getLeadershipTeam } from "@/data/team"
import TeamMemberCard from "@/components/team-member-card"

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const leadershipTeam = getLeadershipTeam().slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Pioneering the Future of AI Hardware"
        subtitle="Welcome to PixelFyre"
        description="We're building the next generation of AI accelerators and LLM solutions to power the future of artificial intelligence."
        primaryButtonText="Explore Products"
        primaryButtonLink="/products"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cutting-Edge AI Solutions"
            description="Our technology powers the most demanding AI workloads with unprecedented efficiency and performance."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">High-Performance Hardware</h3>
              <p className="text-muted-foreground">
                Custom-designed AI accelerators that deliver unmatched performance per watt for inference and training.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Advanced LLM Solutions</h3>
              <p className="text-muted-foreground">
                Optimized frameworks for deploying and fine-tuning large language models with minimal engineering
                effort.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Edge AI Capabilities</h3>
              <p className="text-muted-foreground">
                Run sophisticated AI models directly on edge devices with our power-efficient hardware and software
                stack.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Scalable Infrastructure</h3>
              <p className="text-muted-foreground">
                From single devices to data center deployments, our solutions scale to meet your AI computing needs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Secure AI Processing</h3>
              <p className="text-muted-foreground">
                Built-in security features to protect your AI models and data during training and inference.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive monitoring and optimization tools to maximize the efficiency of your AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Products"
            description="Discover our latest innovations in AI hardware and LLM solutions."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/products" className="flex items-center">
                View All Products <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Leadership"
            description="The team behind PixelFyre's groundbreaking AI technology."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/team" className="flex items-center">
                Meet the Full Team <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your AI capabilities?
            </h2>
            <p className="mb-10 text-xl text-white/80">
              Get in touch with our team to learn how PixelFyre can accelerate your AI journey.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

