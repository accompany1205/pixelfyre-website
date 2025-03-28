import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About PixelFyre"
        subtitle="Our Story"
        description="We're on a mission to revolutionize AI hardware and make advanced LLM technology accessible to organizations of all sizes."
        primaryButtonText="Meet Our Team"
        primaryButtonLink="/team"
        showGraphic={false}
      />

      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="Our Journey"
                description="Founded in 2021, PixelFyre emerged from a simple yet powerful vision: to bridge the gap between cutting-edge AI research and practical, accessible hardware solutions."
                alignment="left"
              />
              <p className="mt-6 text-muted-foreground">
                Our founders, Alex Chen and Sarah Johnson, recognized that while AI models were growing exponentially in
                capability, the hardware needed to run these models efficiently wasn't keeping pace. They assembled a
                team of experts from leading technology companies and research institutions to tackle this challenge.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, PixelFyre is at the forefront of AI hardware innovation, developing specialized accelerators and
                software frameworks that make advanced AI accessible to organizations of all sizes.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="PixelFyre team working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-lg bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize access to advanced AI by creating hardware and software solutions that make large
                language models and other AI technologies more efficient, affordable, and accessible.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Develop energy-efficient AI accelerators",
                  "Create optimized software frameworks for LLMs",
                  "Reduce the cost of AI deployment",
                  "Enable edge AI capabilities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where AI capabilities are universally accessible, enabling organizations of all sizes to harness
                the power of artificial intelligence to solve complex problems and create innovative solutions.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "AI hardware as accessible as consumer electronics",
                  "Specialized AI accelerators for every use case",
                  "Sustainable AI infrastructure with minimal environmental impact",
                  "Democratized access to cutting-edge AI capabilities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            description="The principles that guide everything we do at PixelFyre."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We push the boundaries of what's possible in AI hardware and software, constantly seeking new approaches to solve complex problems.",
              },
              {
                title: "Accessibility",
                description:
                  "We believe advanced AI should be accessible to all organizations, not just those with massive resources.",
              },
              {
                title: "Sustainability",
                description:
                  "We design our products with energy efficiency in mind, minimizing the environmental impact of AI computation.",
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with our customers and the broader AI community to develop solutions that address real-world needs.",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from engineering to customer support.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency and honesty, building trust with our customers, partners, and employees.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-lg bg-card p-8 text-center shadow-sm">
            <h2 className="mb-4 text-3xl font-bold">Join Us on Our Journey</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you're looking to leverage our technology, partner with us, or join our team, we'd love to hear
              from you.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/team" className="flex items-center">
                  Meet Our Team <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

