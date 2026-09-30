import { useState } from "react"
import { Section, Eyebrow, ArrowLink } from "./ui"

const services = [
  {
    label: "Digital Strategy",
    detail:
      "Planning and positioning for digital growth across channels and platforms.",
  },
  {
    label: "Social Media Management",
    detail: "Consistent, purposeful content and community management.",
  },
  {
    label: "Content Systems",
    detail:
      "Structured content production, distribution, and editorial workflows.",
  },
  {
    label: "Campaign Planning & Execution",
    detail: "End-to-end campaign design built around measurable outcomes.",
  },
  {
    label: "Search Visibility",
    detail:
      "Technical and editorial improvements that help the right people find you.",
  },
  {
    label: "Brand & Communication Systems",
    detail:
      "Coherent messaging systems that communicate clearly and consistently.",
  },
  {
    label: "Lead Generation",
    detail: "Systems that attract, qualify, and convert the right audience.",
  },
  {
    label: "Analytics & Performance",
    detail: "Clear reporting, attribution, and improvement cycles.",
  },
  {
    label: "Product & Service Launches",
    detail:
      "Launch strategy, content, and execution for new products and services.",
  },
]

export default function DigitalMarketing() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <Section id="services">
      <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
        {/* Left: positioning */}
        <div className="lg:col-span-5 lg:pr-16 lg:border-r lg:border-[#D9D4C9]">
          <Eyebrow>Digital Marketing</Eyebrow>
          <h2
            className="font-serif leading-tight mb-5 sm:mb-6"
            style={{
              fontSize: "clamp(28px, 3.6vw, 46px)",
              color: "#171716",
              letterSpacing: "-0.02em",
            }}
          >
            Growth is not noise.
            <br />
            <em>It is a system.</em>
          </h2>
          <p
            className="font-sans leading-relaxed mb-7 sm:mb-8"
            style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
          >
            StratNovo helps businesses communicate clearly, reach the right
            audiences, and build repeatable digital growth systems. Our work
            connects strategy, technology, content, and measurement into a
            single coherent effort.
          </p>
          <ArrowLink href="#contact">Build a growth system</ArrowLink>
        </div>

        {/* Right: service index — a real disclosure accordion */}
        <div className="lg:col-span-7 lg:pl-16">
          <div className="border-t border-[#D9D4C9]">
            {services.map((svc, i) => {
              const isOpen = activeService === i
              const panelId = `service-panel-${i}`
              const buttonId = `service-button-${i}`

              return (
                <div key={svc.label} className="border-b border-[#D9D4C9]">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveService(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-4 text-left min-h-[52px] py-3 transition-colors duration-150 hover:bg-[rgba(23,23,22,0.03)] active:bg-[rgba(23,23,22,0.06)]"
                    >
                      <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <span
                          aria-hidden="true"
                          className="font-sans text-[10px] font-medium tracking-[0.12em] flex-shrink-0"
                          style={{ color: "#9B968D", minWidth: "20px" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="font-sans text-sm font-medium transition-colors duration-150"
                          style={{
                            color: isOpen ? "#171716" : "#2C2B28",
                          }}
                        >
                          {svc.label}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-base flex-shrink-0 transition-transform duration-200"
                        style={{
                          color: "#68655E",
                          transform: isOpen ? "rotate(45deg)" : "none",
                        }}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  {/* `grid-rows` transition keeps the reveal smooth without a
                      fixed height, so long copy is never clipped. */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-sans text-sm leading-relaxed pb-4 pl-8 sm:pl-9"
                        style={{ color: "#68655E", fontWeight: 300 }}
                      >
                        {svc.detail}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
