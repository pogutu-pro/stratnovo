import { Section, Eyebrow } from "./ui"

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
    <Section tone="beige">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
        <div className="lg:col-span-6">
          <Eyebrow>What We Build</Eyebrow>
          <h2
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(30px, 4.4vw, 52px)",
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

      {/* Single column on phones, 2 from `sm`, 4 from `lg`. The border box
          (`border-t border-l` on the grid, `border-b border-r` on the cells)
          keeps the rules correct at every column count. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#D9D4C9]">
        {capabilities.map((cap) => (
          <div
            key={cap.num}
            className="border-b border-r border-[#D9D4C9] p-5 sm:p-6 lg:p-8 transition-colors duration-200 hover:bg-[#F7F5EF] active:bg-[#F0EDE4]"
          >
            <div
              className="font-sans text-xs font-medium tracking-[0.1em] mb-3 sm:mb-4"
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
    </Section>
  )
}
