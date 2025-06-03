import type { TeamMemberProps } from "@/components/team-member-card"

export const teamMembers: TeamMemberProps[] = [
  {
    id: "rich-paul",
    name: "Richard Paul",
    role: "CEO & Co-Founder",
    bio: "Richard has 15+ years of experience in semiconductor design and AI research. Previously led AI hardware teams at NVIDIA and Google.",
    image: "/teams/rich.jpg",
    social: {
      twitter: "https://twitter.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
    },
  },
  {
    id: "will-jin",
    name: "William Jin",
    role: "CTO & Co-Founder",
    bio: "William is an AI researcher with a PhD from MIT. He has published numerous papers on efficient neural network architectures and hardware acceleration.",
    image: "/teams/william.jpg",
    social: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    id: "jon-neal",
    name: "Jon Neal",
    role: "Senior Software Engineer",
    bio: "Jon brings 12 years of experience in software engineering and has worked at Meta and Amazon before joining PixelFyre.",
    image: "/teams/jon.jpg",
    social: {
      twitter: "https://twitter.com/jonneal",
      linkedin: "https://linkedin.com/in/jon-neal-tx",
      github: "https://github.com/reportingsjr",
    },
  },
  {
    id: "cozmin-dinu",
    name: "Cozmin Dinu",
    role: "Senior Software Engineer",
    bio: "Cozmin brings 12 years of experience in software engineering and has worked at Meta and Amazon before joining PixelFyre.",
    image: "/teams/cozmin.jpeg",
    social: {
      linkedin: "https://linkedin.com/in/cozmindinu",
      github: "https://github.com/cozmindinu",
    },
  },
  {
    id: "christopher-vojick",
    name: "Christopher Vojick",
    role: "Senior Python Engineer",
    bio: "Christopher has a background in python development at Meta, focusing on AI and cloud products for enterprise customers.",
    image: "/teams/christopher.jpg",
    social: {
      twitter: "https://twitter.com/chr5tphr",
      linkedin: "https://www.linkedin.com/in/christopher-vojick-nc/",
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

