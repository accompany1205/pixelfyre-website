import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import TeamMemberCard from "@/components/team-member-card"
import { teamMembers } from "@/data/team"

export default function TeamPage() {
  // Split team members into leadership and other team members
  const leadershipTeam = teamMembers.filter(
    (member) => member.role.includes("CEO") || member.role.includes("CTO") || member.role.includes("VP"),
  )

  const otherTeamMembers = teamMembers.filter(
    (member) => !member.role.includes("CEO") && !member.role.includes("CTO") && !member.role.includes("VP"),
  )

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Team"
        subtitle="The People Behind PixelFyre"
        description="Our diverse team of experts is passionate about pushing the boundaries of AI hardware and LLM technology."
        primaryButtonText="Join Our Team"
        primaryButtonLink="/careers"
        showGraphic={false}
      />

      {/* Leadership Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Leadership Team"
            description="The visionaries guiding PixelFyre's mission and strategy."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Team Members Section */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Experts" description="The talented individuals bringing our vision to life." />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're always looking for talented individuals who are passionate about AI hardware and LLM technology.
              Check out our open positions and join us in shaping the future of AI.
            </p>
            <button className="rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-sm hover:bg-primary/90">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

