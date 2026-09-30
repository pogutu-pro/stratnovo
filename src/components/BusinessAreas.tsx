import { Container, Tag, ArrowLink } from "./ui"

const areas = [
  {
    num: "01",
    name: "Build",
    category: "Software & Technology",
    description:
      "Software products, web platforms, automation systems, AI integrations, and custom technology. Includes ValidBridge LMS, Rumia, ValidPost, ValidTeam, and bespoke digital systems — engineered to work reliably and scale.",
    href: "#services",
  },
  {
    num: "02",
    name: "Grow",
    category: "Digital Marketing",
    description:
      "Digital marketing, content strategy, social media management, campaign execution, search visibility, brand systems, and performance-focused growth that connects businesses to the audiences that matter.",
    href: "#services",
  },
  {
    num: "03",
    name: "Learn",
    category: "ValidBridge Academy",
    description:
      "The education and training experience built on ValidBridge LMS. Practical courses, digital skills, business capabilities, and career development — delivered through StratNovo's own learning infrastructure.",
    href: "#academy",
  },
  {
    num: "04",
    name: "Live",
    category: "Real Estate & Property",
    description:
      "Real estate services including property management, listings, accommodation discovery, and helping people find the right spaces to live, stay, or work.",
    href: "#properties",
  },
]

export default function BusinessAreas() {
  return (
    <section style={{ backgroundColor: "#F7F5EF", padding: "96px 0" }}>
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px" style={{ backgroundColor: "#68655E" }} />
            <span
              className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
              style={{ color: "#68655E" }}
            >
              What We Do
            </span>
          </div>
          <span className="font-sans text-xs" style={{ color: "#9B968D" }}>
            Four connected areas
          </span>
        </div>

        <div className="border-t" style={{ borderColor: "#D9D4C9" }}>
          {areas.map((area) => (
            <div
              key={area.num}
              className="group grid lg:grid-cols-12 border-b py-10 md:py-12 transition-colors duration-200 cursor-pointer"
              style={{ borderColor: "#D9D4C9" }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#E8E0D2"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "transparent"
              }}
            >
              {/* Number */}
              <div className="lg:col-span-1 mb-4 lg:mb-0">
                <span
                  className="font-sans text-sm font-medium"
                  style={{ color: "#9B968D" }}
                >
                  {area.num}
                </span>
              </div>

              {/* Area name */}
              <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pr-8">
                <h3
                  className="font-serif leading-none"
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    color: "#171716",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {area.name}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6 lg:pr-8">
                <Tag>{area.category}</Tag>
                <p
                  className="font-sans text-sm leading-relaxed mt-4"
                  style={{
                    color: "#68655E",
                    fontWeight: 300,
                    fontSize: "15px",
                  }}
                >
                  {area.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="lg:col-span-2 flex items-center justify-end mt-6 lg:mt-0">
                <ArrowLink href={area.href}>Explore</ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}