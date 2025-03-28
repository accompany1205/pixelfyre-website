import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import ProductCard from "@/components/product-card"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Products"
        subtitle="AI Hardware & LLM Solutions"
        description="Discover our cutting-edge AI accelerators and LLM solutions designed to power the next generation of artificial intelligence applications."
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
        showGraphic={false}
      />

      {/* Products Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Accelerators"
            description="High-performance hardware designed specifically for AI workloads."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => product.category === "AI Accelerators")
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="LLM Solutions"
            description="Software frameworks and tools for deploying and optimizing large language models."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => product.category === "LLM Solutions")
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Edge Computing"
            description="Solutions for running AI models directly on edge devices with minimal power consumption."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => product.category === "Edge Computing")
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need a custom solution?</h2>
            <p className="mb-10 text-xl text-white/80">
              Our team can work with you to develop tailored AI hardware and software solutions for your specific needs.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="rounded-md bg-white px-8 py-3 text-lg font-medium text-primary shadow-sm hover:bg-white/90">
                Contact Sales
              </button>
              <button className="rounded-md border border-white bg-transparent px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-white/10">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

