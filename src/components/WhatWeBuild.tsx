import { Container } from "./ui"

const capabilities = [
  {
    num: "01",
    name: "Software Products",
    description:
      "Full-featured applications and products built to last and evolve.",
  },
  {
    num: "02",
    name: "Web Platforms",
    description:
      "Performant, scalable web applications and digital experiences.",
  },
  {
    num: "03",
    name: "Automation Systems",
    description:
      "Workflows and systems that remove repetitive work and increase reliability.",
  },
  {
    num: "04",
    name: "AI Integrations",
    description:
      "Practical, purposeful AI features embedded within useful products.",
  },
  {
    num: "05",
    name: "Digital Infrastructure",
    description:
      "Cloud architecture, deployment pipelines, and operational systems.",
  },
  {
    num: "06",
    name: "Data Systems",
    description:
      "Data pipelines, storage, analytics, and reporting that inform decisions.",
  },
  {
    num: "07",
    name: "Custom Technology",
    description:
      "Bespoke solutions built around specific business problems and contexts.",
  },
  {
    num: "08",
    name: "Internal Tools",
    description:
      "Operational software that makes teams faster and more effective.",
  },
]

export default function WhatWeBuild() {
  return (
    <section style={{ backgroundColor: "#E8E0D2", padding: "96px 0" }}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                What We Build
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
              Software development is a core capability.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:items-end">
            <p
              className="font-sans leading-relaxed"
              style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
            >
              StratNovo moves from understanding a problem, to shaping a product
              or system, to designing the experience, to building the
              technology, to launching and improving it. The same end-to-end
              capability that we use for our own ventures is available for
              client projects.
            </p>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l"
          style={{ borderColor: "#D9D4C9" }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="border-b border-r p-8 group transition-colors duration-200"
              style={{ borderColor: "#D9D4C9" }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#F7F5EF"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "transparent"
              }}
            >
              <div
                className="font-sans text-xs font-medium tracking-[0.1em] mb-4"
                style={{ color: "#9B968D" }}
              >
                {cap.num}
              </div>
              <div
                className="font-sans text-sm font-medium mb-2"
                style={{ color: "#171716" }}
              >
                {cap.name}
              </div>
              <div
                className="font-sans text-xs leading-relaxed"
                style={{ color: "#68655E", fontWeight: 300 }}
              >
                {cap.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
