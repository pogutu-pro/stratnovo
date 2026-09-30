import { Section, Eyebrow } from "./ui"

const pillars = [
  {
    label: "Product Engineering",
    note: "End-to-end software development from concept to production.",
  },
  {
    label: "Modern Web Architecture",
    note: "Performant, maintainable systems built on proven foundations.",
  },
  {
    label: "AI Integration",
    note: "Practical AI features embedded where they create genuine value.",
  },
  {
    label: "Automation",
    note: "Removing friction and increasing reliability through smart workflows.",
  },
  {
    label: "Cloud Infrastructure",
    note: "Reliable, scalable deployment and operational environments.",
  },
  {
    label: "Data Systems",
    note: "From storage and pipelines to analytics and reporting.",
  },
  {
    label: "Human-Centered Design",
    note: "Technology that works for the people who use it.",
  },
  {
    label: "Digital Growth Systems",
    note: "Tech-enabled marketing and performance infrastructure.",
  },
  {
    label: "Learning Platforms",
    note: "Accessible, structured education delivery at scale.",
  },
  {
    label: "Property Systems",
    note: "Technology powering discovery, management, and listing.",
  },
]

export default function Technology() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
        <div className="lg:col-span-5">
          <Eyebrow>Approach &amp; Technology</Eyebrow>
          <h2
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(28px, 3.6vw, 46px)",
              color: "#171716",
              letterSpacing: "-0.02em",
            }}
          >
            Technology underpins everything we build, grow, teach, and manage.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:flex lg:items-end">
          <p
            className="font-sans leading-relaxed"
            style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
          >
            We are an engineering and ventures company that applies technology
            practically. Our capabilities span product development, growth
            infrastructure, learning systems, and property technology — not as
            separate competencies, but as a connected approach to building
            things that work.
          </p>
        </div>
      </div>

      {/*
        The notes were previously `hidden group-hover:block`, so on a touch
        device they could never be revealed at all. Below `lg` they are now
        always visible (a tap has no hover state to rely on); from `lg` the
        hover/focus reveal is preserved. Both copies are real text in the DOM
        so screen readers and in-page find are unaffected.
      */}
      <ul className="flex flex-wrap gap-2 sm:gap-3 m-0 p-0 list-none">
        {pillars.map((pillar) => (
          <li key={pillar.label} className="max-w-full">
            <div className="group border border-[#D9D4C9] px-4 sm:px-5 py-3 rounded-sm transition-colors duration-200 hover:bg-[#E8E0D2] hover:border-[#C8C1B4] active:bg-[#E1D7C5] lg:hover:bg-transparent lg:hover:border-[#D9D4C9] lg:group-focus-within:bg-[#E8E0D2]">
              <div
                className="font-sans text-sm font-medium"
                style={{ color: "#171716" }}
              >
                {pillar.label}
              </div>

              <div
                className="font-sans text-xs font-light mt-1 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:whitespace-nowrap lg:transition-[max-height,opacity] lg:duration-200 lg:group-hover:max-h-[3rem] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[3rem] lg:group-focus-within:opacity-100"
                style={{ color: "#68655E" }}
              >
                {pillar.note}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
