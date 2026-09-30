import { Section, Eyebrow } from "./ui"

const steps = [
  {
    num: "01",
    name: "Understand",
    description:
      "We begin by understanding the problem, the context, the people involved, and what success looks like.",
  },
  {
    num: "02",
    name: "Shape",
    description:
      "We define the product, system, campaign, or service — what it is, what it does, and how it should work.",
  },
  {
    num: "03",
    name: "Build",
    description:
      "We engineer, design, and construct the solution with clarity, rigor, and appropriate craft.",
  },
  {
    num: "04",
    name: "Refine",
    description:
      "We test, improve, and sharpen until the output is reliable, coherent, and effective.",
  },
  {
    num: "05",
    name: "Launch",
    description:
      "We release, monitor, and support — and continue improving based on real feedback and real data.",
  },
]

export default function HowWeWork() {
  return (
    <Section tone="beige">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
        <div className="lg:col-span-5">
          <Eyebrow>How We Work</Eyebrow>
          <h2
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(30px, 4.4vw, 52px)",
              color: "#171716",
              letterSpacing: "-0.02em",
            }}
          >
            A disciplined process that works across everything we do.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:flex lg:items-end">
          <p
            className="font-sans leading-relaxed"
            style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
          >
            Whether we are building software products, planning digital
            marketing systems, delivering training experiences, or managing
            property services — the same disciplined, practical approach
            applies.
          </p>
        </div>
      </div>

      {/* One vertical list at every breakpoint — on a phone a 5-column row
          would squeeze each step to ~55px, far below readable. */}
      <ol className="border-t border-[#D9D4C9] m-0 p-0 list-none">
        {steps.map((step) => (
          <li
            key={step.num}
            className="group border-b border-[#D9D4C9] py-6 sm:py-7 grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-3 sm:gap-4 transition-colors duration-150 hover:bg-[#F7F5EF]"
          >
            <span
              className="font-sans text-sm font-medium"
              style={{ color: "#9B968D" }}
            >
              {step.num}
            </span>
            <div>
              <div
                className="font-serif leading-tight mb-1.5 sm:mb-2"
                style={{ fontSize: "clamp(22px, 2.6vw, 24px)", color: "#171716" }}
              >
                {step.name}
              </div>
              <p
                className="font-sans text-sm leading-relaxed max-w-prose"
                style={{ color: "#68655E", fontWeight: 300 }}
              >
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
