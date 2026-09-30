import { Section, SectionLabel, Tag } from "./ui"

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
    <Section>
      {/* Spacing lives on this row rather than being forced onto `Eyebrow`
          with a `mb-0` override, which loses to the component's own margin. */}
      <div className="flex items-center justify-between gap-4 mb-10 sm:mb-12">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-px sm:w-6 flex-shrink-0"
            style={{ backgroundColor: "#68655E" }}
          />
          <SectionLabel>What We Do</SectionLabel>
        </div>
        <span className="font-sans text-xs flex-shrink-0" style={{ color: "#9B968D" }}>
          Four connected areas
        </span>
      </div>

      <div className="border-t border-[#D9D4C9]">
        {areas.map((area) => (
          /* The whole row is one link, so the tap target is the full row on
             phones instead of just the small "Explore" label. */
          <a
            key={area.num}
            href={area.href}
            className="group grid lg:grid-cols-12 border-b border-[#D9D4C9] py-7 sm:py-9 md:py-12 no-underline transition-colors duration-200 hover:bg-[#E8E0D2] active:bg-[#E1D7C5]"
          >
            {/* Number */}
            <div className="lg:col-span-1 mb-3 lg:mb-0">
              <span
                className="font-sans text-sm font-medium"
                style={{ color: "#9B968D" }}
              >
                {area.num}
              </span>
            </div>

            {/* Area name */}
            <div className="lg:col-span-3 mb-3 lg:mb-0 lg:pr-8">
              <h3
                className="font-serif leading-none"
                style={{
                  fontSize: "clamp(34px, 4.4vw, 56px)",
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
                className="font-sans leading-relaxed mt-3 sm:mt-4"
                style={{
                  color: "#68655E",
                  fontWeight: 300,
                  fontSize: "15px",
                }}
              >
                {area.description}
              </p>
            </div>

            {/* Arrow — a span, not a link: the whole row is already a link and
                nested anchors are invalid HTML. */}
            <div className="lg:col-span-2 flex items-center justify-end mt-5 lg:mt-0">
              <span
                className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity duration-200 group-hover:opacity-60"
                style={{ color: "#171716" }}
              >
                Explore
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
