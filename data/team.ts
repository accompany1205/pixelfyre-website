import type { TeamMemberProps } from "@/components/team-member-card"

export const teamMembers: TeamMemberProps[] = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Alex has 15+ years of experience in semiconductor design and AI research. Previously led AI hardware teams at NVIDIA and Google.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
    },
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Sarah is an AI researcher with a PhD from MIT. She has published numerous papers on efficient neural network architectures and hardware acceleration.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    bio: "Michael brings 12 years of experience in hardware engineering and has led teams at Intel and AMD before joining PixelFyre.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez",
    },
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Head of AI Research",
    bio: "Priya has a PhD in Computer Science from Stanford and specializes in large language models and efficient training methodologies.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/priyapatel",
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel",
    },
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Lead Hardware Architect",
    bio: "David is an expert in ASIC design with experience at Apple and Samsung. He leads the hardware architecture team at PixelFyre.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
    },
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    role: "VP of Product",
    bio: "Emma has a background in product management at Microsoft and Amazon, focusing on AI and cloud products for enterprise customers.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/emmawilson",
      linkedin: "https://linkedin.com/in/emmawilson",
    },
  },
]

export function getTeamMemberById(id: string): TeamMemberProps | undefined {
  return teamMembers.find((member) => member.id === id)
}

export function getLeadershipTeam(): TeamMemberProps[] {
  return teamMembers.filter(
    (member) => member.role.includes("CEO") || member.role.includes("CTO") || member.role.includes("VP"),
  )
}

