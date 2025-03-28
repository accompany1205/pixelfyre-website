import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/data/products"
import SectionHeading from "@/components/section-heading"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  // Additional product details (would come from a database in a real app)
  const productDetails = {
    description: product.description,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    features: [
      "High-performance AI acceleration",
      "Low power consumption",
      "Compact form factor",
      "Easy integration with existing systems",
      "Comprehensive software support",
      "24/7 technical assistance",
    ],
    specifications: [
      { name: "Dimensions", value: "120mm x 80mm x 20mm" },
      { name: "Weight", value: "250g" },
      { name: "Power Consumption", value: "15W (typical), 30W (peak)" },
      { name: "Interface", value: "PCIe 4.0 x8" },
      { name: "Memory", value: "16GB HBM2e" },
      { name: "Performance", value: "50 TOPS (INT8)" },
    ],
    useCases: [
      "Natural language processing",
      "Computer vision",
      "Recommendation systems",
      "Autonomous vehicles",
      "Healthcare diagnostics",
      "Financial modeling",
    ],
  }

  return (
    <div>
      {/* Product Hero */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/products"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-primary px-3 py-1 text-sm font-medium text-primary-foreground rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div>
              <div className="mb-2 text-sm font-medium text-primary">{product.category}</div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{productDetails.longDescription}</p>
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold">Key Features</h3>
                <ul className="space-y-2">
                  {productDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button size="lg">Request a Demo</Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Specifications" description="Detailed specifications for the product." />

          <div className="mt-12 mx-auto max-w-3xl rounded-lg border bg-card p-6 shadow-sm">
            <div className="divide-y">
              {productDetails.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-4">
                  <dt className="font-medium">{spec.name}</dt>
                  <dd className="text-muted-foreground">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Use Cases"
            description="Discover how this product can be applied in various scenarios."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productDetails.useCases.map((useCase, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold">{useCase}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.
                </p>
              </div>
            ))}
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
              Get in touch with our team to learn how {product.name} can accelerate your AI journey.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="rounded-md bg-white px-8 py-3 text-lg font-medium text-primary shadow-sm hover:bg-white/90">
                Contact Sales
              </button>
              <button className="rounded-md border border-white bg-transparent px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-white/10">
                Download Datasheet
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

