import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export interface TeamMemberProps {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    facebook?: string
  }
}

export default function TeamMemberCard({ id, name, role, bio, image, social }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-sm font-medium text-primary">{role}</p>
        <p className="mb-4 text-sm text-muted-foreground">{bio}</p>
        {social && (
          <div className="flex space-x-3">
            {social.twitter && (
              <Link
                href={social.twitter}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {social.linkedin && (
              <Link
                href={social.linkedin}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {social.github && (
              <Link
                href={social.github}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {social.facebook && (
              <Link
                href={social.facebook}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

