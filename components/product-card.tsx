import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export interface ProductProps {
  id: string
  name: string
  description: string
  image: string
  category: string
  featured?: boolean
}

export default function ProductCard({ id, name, description, image, category, featured = false }: ProductProps) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${featured ? "border-primary/50" : ""}`}>
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-2 right-2 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="mb-2 text-sm font-medium text-muted-foreground">{category}</div>
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/products/${id}`} className="flex items-center justify-center">
            Learn More <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

