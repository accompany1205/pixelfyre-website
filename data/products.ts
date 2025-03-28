import type { ProductProps } from "@/components/product-card"

export const products: ProductProps[] = [
  {
    id: "quantum-accelerator",
    name: "Quantum Accelerator X1",
    description:
      "Our flagship AI accelerator chip designed for enterprise-grade LLM inference with unparalleled performance.",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Accelerators",
    featured: true,
  },
  {
    id: "neural-processor",
    name: "Neural Processor N7",
    description:
      "A high-efficiency neural processing unit optimized for edge AI applications with minimal power consumption.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Edge Computing",
  },
  {
    id: "llm-framework",
    name: "PixelFyre LLM Framework",
    description:
      "A comprehensive software framework for deploying and fine-tuning large language models with minimal engineering effort.",
    image: "/placeholder.svg?height=400&width=600",
    category: "LLM Solutions",
    featured: true,
  },
  {
    id: "inference-engine",
    name: "Inference Engine Pro",
    description:
      "High-performance inference optimization software that reduces latency and increases throughput for production AI systems.",
    image: "/placeholder.svg?height=400&width=600",
    category: "LLM Solutions",
  },
  {
    id: "edge-ai-kit",
    name: "Edge AI Development Kit",
    description: "Complete hardware and software toolkit for developing and deploying AI applications at the edge.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Edge Computing",
  },
  {
    id: "training-cluster",
    name: "Training Cluster T9",
    description:
      "Scalable AI training infrastructure designed for distributed learning across multiple nodes with automatic synchronization.",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Accelerators",
  },
]

export function getProductById(id: string): ProductProps | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): ProductProps[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): ProductProps[] {
  return products.filter((product) => product.featured)
}

