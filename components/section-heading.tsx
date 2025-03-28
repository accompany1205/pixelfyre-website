interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  alignment?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, description, alignment = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]} mb-12`}>
      {subtitle && <p className="mb-3 text-base font-semibold uppercase tracking-wide text-primary">{subtitle}</p>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title.split(" ").map((word, i) => (
          <span key={i} className={i % 3 === 0 ? "gradient-text" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}

