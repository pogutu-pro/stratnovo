import { useState } from "react"
import { Container, ArrowLink, Highlight } from "./ui"

const services = [
  {
    label: "Digital Strategy",
    detail: (
      <>
        Planning and positioning for <Highlight>digital growth</Highlight>{" "}
        across channels and platforms.
      </>
    ),
  },
  {
    label: "Social Media Management",
    detail: (
      <>
        Consistent, purposeful{" "}
        <Highlight>content and community management</Highlight>.
      </>
    ),
  },
  {
    label: "Content Systems",
    detail: (
      <>
        Structured content production, distribution, and{" "}
        <Highlight>editorial workflows</Highlight>.
      </>
    ),
  },
  {
    label: "Campaign Planning & Execution",
    detail: (
      <>
        End-to-end campaign design built around{" "}
        <Highlight>measurable outcomes</Highlight>.
      </>
    ),
  },
  {
    label: "Search Visibility",
    detail: (
      <>
        Technical and editorial improvements that help{" "}
        <Highlight>the right people find you</Highlight>.
      </>
    ),
  },
  {
    label: "Brand & Communication Systems",
    detail: (
      <>
        Coherent messaging systems that communicate{" "}
        <Highlight>clearly and consistently</Highlight>.
      </>
    ),
  },
  {
    label: "Lead Generation",
    detail: (
      <>
        Systems that <Highlight>attract, qualify, and convert</Highlight> the
        right audience.
      </>
    ),
  },
  {
    label: "Analytics & Performance",
    detail: (
      <>
        Clear reporting, attribution, and{" "}
        <Highlight>improvement cycles</Highlight>.
      </>
    ),
  },
  {
    label: "Product & Service Launches",
    detail: (
      <>
        Launch strategy, content, and execution for{" "}
        <Highlight>new products and services</Highlight>.
      </>
    ),
  },
]

export default function DigitalMarketing() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section
      id="services"
      style={{ backgroundColor: "#F7F5EF", padding: "96px 0" }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
          {/* Left: positioning */}
          <div
            className="lg:col-span-5 lg:pr-16 lg:border-r"
            style={{ borderColor: "#D9D4C9" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                Digital Marketing
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 46px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Growth is not noise.
              <br />
              <em>
                <Highlight>It is a system.</Highlight>
              </em>
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
            >
              StratNovo helps businesses communicate clearly, reach the right
              audiences, and build{" "}
              <Highlight>repeatable digital growth systems</Highlight>. Our work
              connects strategy, technology, content, and measurement into a{" "}
              <Highlight>single coherent effort</Highlight>.
            </p>
            <ArrowLink href="#contact">Build a growth system</ArrowLink>
          </div>

          {/* Right: service index */}
          <div className="lg:col-span-7 lg:pl-16">
            <div className="border-t" style={{ borderColor: "#D9D4C9" }}>
              {services.map((svc, i) => (
                <div
                  key={svc.label}
                  className="border-b py-4 cursor-pointer group"
                  style={{ borderColor: "#D9D4C9" }}
                  onClick={() =>
                    setActiveService(activeService === i ? null : i)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-sans text-[10px] font-medium tracking-[0.12em]"
                        style={{ color: "#9B968D", minWidth: "20px" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-sans text-sm font-medium transition-colors duration-150"
                        style={{
                          color: activeService === i ? "#171716" : "#2C2B28",
                        }}
                      >
                        {svc.label}
                      </span>
                    </div>
                    <span
                      className="font-sans text-sm transition-transform duration-200"
                      style={{
                        color: "#68655E",
                        transform:
                          activeService === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </div>
                  {activeService === i && (
                    <div className="pl-9 mt-3">
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "#68655E", fontWeight: 300 }}
                      >
                        {svc.detail}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
