import { Section, Eyebrow, Tag } from "./ui"
import rumia480 from "../assets/rumia/rumia-480.webp"
import rumia800 from "../assets/rumia/rumia-800.webp"
import rumia1200 from "../assets/rumia/rumia-1200.webp"
import rumia1600 from "../assets/rumia/rumia-1600.webp"

const projects = [
  {
    name: "Rumia",
    category: "Property Discovery Platform",
    description:
      "A property and accommodation discovery platform connecting people with the right spaces. Built end-to-end as a StratNovo venture.",
    type: "StratNovo Venture",
    year: "2024",
    // Rendered via the responsive <img srcSet> below, not this field.
    tags: ["Product Engineering", "UI/UX", "Real Estate"],
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
  },
  {
    name: "DPrime",
    category: "Technology Community Platform",
    description:
      "A platform for discovering and connecting with technology communities across Kenya — developer groups, campus tech clubs, events and organizations in one place.",
    type: "Project",
    year: "2024",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
    tags: ["Community Platform", "Product Design", "Engineering"],
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
  },
]

export default function SelectedWork() {
  return (
    <Section id="work">
      <div className="mb-10 sm:mb-12">
        <Eyebrow>Selected Work</Eyebrow>
        <h2
          className="font-serif leading-tight"
          style={{
            fontSize: "clamp(30px, 4.4vw, 52px)",
            color: "#171716",
            letterSpacing: "-0.02em",
          }}
        >
          Products, systems,
          <br />
          and ventures we have built.
        </h2>
      </div>

      <div className="grid gap-5 sm:gap-6 md:gap-8">
        {/* Featured project — full width, image above copy on phones */}
        <div className="group grid lg:grid-cols-12 border border-[#D9D4C9] rounded-sm transition-colors duration-300 hover:border-[#9B968D] overflow-hidden">
          <div
            className="lg:col-span-7 overflow-hidden"
            style={{ backgroundColor: "#D5C9B7", aspectRatio: "16/9" }}
          >
            {/*
              The source asset was a 3.2 MB PNG served to every phone. These
              WebP variants plus `sizes` mean a 390px-wide screen downloads
              ~20 KB instead of 3.2 MB, and `width`/`height` reserve the box
              so the aspect-ratio container never shifts.
            */}
            <img
              src={rumia800}
              srcSet={`${rumia480} 480w, ${rumia800} 800w, ${rumia1200} 1200w, ${rumia1600} 1600w`}
              sizes="(min-width: 1024px) 58vw, (min-width: 640px) 90vw, 100vw"
              alt={`${projects[0].name} — ${projects[0].category}`}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                <Tag>{projects[0].type}</Tag>
                <span className="font-sans text-xs" style={{ color: "#9B968D" }}>
                  {projects[0].year}
                </span>
              </div>
              <h3
                className="font-serif leading-tight mb-2 sm:mb-3"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 32px)",
                  color: "#171716",
                  letterSpacing: "-0.01em",
                }}
              >
                {projects[0].name}
              </h3>
              <div
                className="font-sans text-xs mb-3 sm:mb-4 tracking-[0.08em] uppercase"
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
              className="flex flex-wrap gap-2 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#D9D4C9]"
            >
              {projects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 border border-[#D9D4C9] sm:text-[11px]"
                  style={{ color: "#68655E" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Remaining projects — 1 / 2 / 3 columns */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {projects.slice(1).map((project) => (
            <div
              key={project.name}
              className="group border border-[#D9D4C9] rounded-sm transition-colors duration-300 hover:border-[#9B968D] overflow-hidden flex flex-col"
            >
              <div
                className="overflow-hidden"
                style={{ backgroundColor: "#D5C9B7", aspectRatio: "4/3" }}
              >
                <img
                  src={project.img}
                  alt={`${project.name} — ${project.category}`}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                  <Tag>{project.type}</Tag>
                  <span className="font-sans text-xs" style={{ color: "#9B968D" }}>
                    {project.year}
                  </span>
                </div>
                <h3
                  className="font-serif leading-tight mb-1"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
