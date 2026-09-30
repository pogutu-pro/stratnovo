import { useState } from "react"
import type { CSSProperties, ReactNode } from "react"
import { Container, Tag, ArrowLink } from "./ui"
import rumiaImg from "../assets/marketing_rumia_2k.png"

const projects = [
  {
    name: "Rumia",
    category: "Property Discovery Platform",
    description:
      "A property and accommodation discovery platform connecting people with the right spaces. Built end-to-end as a StratNovo venture.",
    type: "StratNovo Venture",
    year: "2024",
    img: rumiaImg,
    tags: ["Product Engineering", "UI/UX", "Real Estate"],
    url: "https://rumia.co.ke",
  },
  {
    name: "ValidBridge Academy",
    category: "Learning Platform",
    description:
      "A professional training and skills development platform built for practical, technology-focused education.",
    type: "StratNovo Venture",
    year: "2024",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop&auto=format",
    tags: ["Platform Engineering", "EdTech", "Product Design"],
    url: "https://validbridge.co.ke",
  },
  {
    name: "ValidPost",
    category: "Social Media Management",
    description:
      "A content publishing and social media management platform for teams and businesses managing their digital presence.",
    type: "StratNovo Product",
    year: "2024",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&h=600&fit=crop&auto=format",
    tags: ["SaaS", "Content Systems", "Automation"],
    url: "https://validpost.co.ke",
  },
  {
    name: "Digital Growth System",
    category: "Digital Marketing",
    description:
      "A comprehensive digital marketing system built for a growth-stage business — strategy, content, search, and reporting unified into a single operational structure.",
    type: "Client Project",
    year: "2024",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
    tags: ["Digital Marketing", "Strategy", "Analytics"],
    url: null,
  },
  {
    name: "RumiaRent",
    category: "Rental Property Technology",
    description:
      "A property technology platform focused on rental discovery — connecting prospective tenants with available spaces and giving property owners a structured way to present listings and receive leads.",
    type: "StratNovo Product",
    year: "2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format",
    tags: ["PropTech", "Product Engineering", "Rental Discovery"],
    url: "https://rumiarent.com",
  },
  {
    name: "DPrime",
    category: "Technology Community Platform",
    description:
      "A platform for discovering and connecting with technology communities across Kenya — developer groups, campus tech clubs, events and organizations in one place.",
    type: "Client Project",
    year: "2024",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
    tags: ["Community Platform", "Product Design", "Engineering"],
    url: "https://dprime.co.ke",
  },
  {
    name: "The Flying Decksman",
    category: "Brand & Digital Experience",
    description:
      "A polished digital presence for an aviation-oriented brand — editorial, premium, and personal. Designed to communicate aviation, identity, and story.",
    type: "Client Project",
    year: "2024",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=600&fit=crop&auto=format",
    tags: ["Brand Website", "Digital Experience", "Editorial Design"],
    url: "https://theflyicngdecksman.com",
  },
]

const domainOf = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "")

function ProjectCard({
  url,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  url: string | null
  className?: string
  style?: CSSProperties
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: ReactNode
}) {
  if (!url) {
    return (
      <div
        className={className}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

export default function SelectedWork() {
  const [hoveredName, setHoveredName] = useState<string | null>(null)

  return (
    <section
      id="work"
      style={{ backgroundColor: "#F7F5EF", padding: "96px 0" }}
    >
      <Container>
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                Selected Work
              </span>
            </div>
            <h2
              className="font-serif leading-tight"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Products, systems,
              <br />
              and ventures we have built.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
          {/* First project — full width */}
          <ProjectCard
            url={projects[0].url}
            className="group grid lg:grid-cols-12 border transition-all duration-300 no-underline"
            style={{
              borderColor:
                hoveredName === projects[0].name ? "#9B968D" : "#D9D4C9",
            }}
            onMouseEnter={() => setHoveredName(projects[0].name)}
            onMouseLeave={() => setHoveredName(null)}
          >
            <div
              className="lg:col-span-7 overflow-hidden"
              style={{ backgroundColor: "#D5C9B7", aspectRatio: "16/9" }}
            >
              <img
                src={projects[0].img}
                alt={projects[0].name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Tag>{projects[0].type}</Tag>
                  <span
                    className="font-sans text-xs"
                    style={{ color: "#9B968D" }}
                  >
                    {projects[0].year}
                  </span>
                </div>
                <h3
                  className="font-serif mb-3"
                  style={{
                    fontSize: "32px",
                    color: "#171716",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {projects[0].name}
                </h3>
                <div
                  className="font-sans text-xs mb-4 tracking-[0.08em] uppercase"
                  style={{ color: "#9B968D" }}
                >
                  {projects[0].category}
                </div>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#68655E", fontWeight: 300 }}
                >
                  {projects[0].description}
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2 mt-6 pt-6 border-t items-center justify-between"
                style={{ borderColor: "#D9D4C9" }}
              >
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 border"
                      style={{ borderColor: "#D9D4C9", color: "#68655E" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {projects[0].url && (
                  <span
                    className="font-sans text-sm font-medium flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "#171716" }}
                  >
                    {domainOf(projects[0].url)}{" "}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                )}
              </div>
            </div>
          </ProjectCard>

          {/* Remaining projects — 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(1).map((project) => (
              <ProjectCard
                key={project.name}
                url={project.url}
                className="group border transition-all duration-300 no-underline flex flex-col"
                style={{
                  borderColor:
                    hoveredName === project.name ? "#9B968D" : "#D9D4C9",
                }}
                onMouseEnter={() => setHoveredName(project.name)}
                onMouseLeave={() => setHoveredName(null)}
              >
                <div
                  className="overflow-hidden"
                  style={{ backgroundColor: "#D5C9B7", aspectRatio: "4/3" }}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Tag>{project.type}</Tag>
                    <span
                      className="font-sans text-xs"
                      style={{ color: "#9B968D" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className="font-serif mb-1"
                    style={{ fontSize: "22px", color: "#171716" }}
                  >
                    {project.name}
                  </h3>
                  <div
                    className="font-sans text-xs mb-3 tracking-[0.08em] uppercase"
                    style={{ color: "#9B968D" }}
                  >
                    {project.category}
                  </div>
                  <p
                    className="font-sans text-xs leading-relaxed"
                    style={{ color: "#68655E", fontWeight: 300 }}
                  >
                    {project.description}
                  </p>
                  {project.url && (
                    <span
                      className="font-sans text-xs font-medium mt-4 flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#171716" }}
                    >
                      {domainOf(project.url)} <span aria-hidden="true">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </span>
                  )}
                </div>
              </ProjectCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
