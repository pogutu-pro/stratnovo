import { Container, Highlight } from "./ui"

const steps = [
  {
    num: "01",
    name: "Understand",
    description: (
      <>
        We begin by understanding the problem, the context,{" "}
        <Highlight>the people involved</Highlight>, and what success looks like.
      </>
    ),
  },
  {
    num: "02",
    name: "Shape",
    description: (
      <>
        We define the product, system, campaign, or service — what it is, what
        it does, and <Highlight>how it should work</Highlight>.
      </>
    ),
  },
  {
    num: "03",
    name: "Build",
    description: (
      <>
        We engineer, design, and construct the solution with{" "}
        <Highlight>clarity, rigor, and craft</Highlight>.
      </>
    ),
  },
  {
    num: "04",
    name: "Refine",
    description: (
      <>
        We test, improve, and sharpen until the output is{" "}
        <Highlight>reliable and effective</Highlight>.
      </>
    ),
  },
  {
    num: "05",
    name: "Launch",
    description: (
      <>
        We release, monitor, and support — and continue improving based on{" "}
        <Highlight>real feedback and data</Highlight>.
      </>
    ),
  },
]

export default function HowWeWork() {
  return (
    <section style={{ backgroundColor: "#E8E0D2", padding: "96px 0" }}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                How We Work
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
              property services — the same{" "}
              <Highlight>disciplined, practical approach</Highlight> applies.
            </p>
          </div>
        </div>

        {/* Process steps — horizontal on desktop, vertical on mobile */}
        <div
          className="hidden lg:grid grid-cols-5 border-t"
          style={{ borderColor: "#D9D4C9" }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-r last:border-r-0 pt-8 pr-8 group"
              style={{ borderColor: "#D9D4C9" }}
            >
              <div
                className="font-sans text-xs font-medium tracking-[0.12em] mb-6"
                style={{ color: "#9B968D" }}
              >
                {step.num}
              </div>
              <div
                className="font-serif text-2xl mb-4"
                style={{ color: "#171716", letterSpacing: "-0.01em" }}
              >
                {step.name}
              </div>
              <p
                className="font-sans text-xs leading-relaxed"
                style={{ color: "#68655E", fontWeight: 300 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile process */}
        <div className="lg:hidden border-t" style={{ borderColor: "#D9D4C9" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-b py-8 grid grid-cols-12 gap-4"
              style={{ borderColor: "#D9D4C9" }}
            >
              <div className="col-span-2">
                <span
                  className="font-sans text-sm font-medium"
                  style={{ color: "#9B968D" }}
                >
                  {step.num}
                </span>
              </div>
              <div className="col-span-10">
                <div
                  className="font-serif text-2xl mb-2"
                  style={{ color: "#171716" }}
                >
                  {step.name}
                </div>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#68655E", fontWeight: 300 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
