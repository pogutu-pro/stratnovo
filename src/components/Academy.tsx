import { Container, ArrowLink, Tag } from "./ui"

const learningAreas = [
  {
    area: "Digital Skills",
    description:
      "Practical tools, platforms, and digital fluency for the modern workplace.",
  },
  {
    area: "Technology",
    description:
      "Programming, systems thinking, software fundamentals, and applied tech.",
  },
  {
    area: "Business & Entrepreneurship",
    description:
      "Building, running, and growing organizations with practical frameworks.",
  },
  {
    area: "Productivity",
    description:
      "Systems, tools, and habits for personal and team effectiveness.",
  },
  {
    area: "Professional Development",
    description:
      "Communication, leadership, and skills for career advancement.",
  },
]

export default function Academy() {
  return (
    <section
      id="academy"
      style={{ backgroundColor: "#E8E0D2", padding: "96px 0" }}
    >
      <Container>
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                ValidBridge Academy
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Learn skills that
              <br />
              <em>create movement.</em>
            </h2>
            <p
              className="font-sans text-base leading-relaxed"
              style={{
                color: "#68655E",
                fontWeight: 300,
                fontSize: "16px",
                maxWidth: "560px",
              }}
            >
              ValidBridge Academy is StratNovo's education venture — a practical
              learning platform focused on technology-driven training, digital
              skills, and professional development for individuals and teams
              ready to grow.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-end justify-end">
            <div
              className="w-full aspect-[4/3] relative overflow-hidden"
              style={{ backgroundColor: "#D5C9B7" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop&auto=format"
                alt="People learning and collaborating in a modern workspace"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "multiply", opacity: 0.85 }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(23,23,22,0.5) 0%, transparent 100%)",
                }}
              >
                <Tag>StratNovo Venture</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Learning areas */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
          <div className="lg:col-span-4 lg:pr-12">
            <h3
              className="font-sans text-sm font-medium mb-4 tracking-[0.08em] uppercase"
              style={{ color: "#9B968D" }}
            >
              Learning Areas
            </h3>
            <p
              className="font-sans text-sm leading-relaxed mb-8"
              style={{ color: "#68655E", fontWeight: 300 }}
            >
              A focused curriculum built around practical outcomes — not
              theoretical checkboxes. ValidBridge Academy is designed to develop
              skills that transfer directly into real-world roles and ventures.
            </p>
            <ArrowLink href="#contact">Explore the academy</ArrowLink>
          </div>

          <div className="lg:col-span-8 lg:pl-0">
            <div className="border-t" style={{ borderColor: "#D9D4C9" }}>
              {learningAreas.map((item) => (
                <div
                  key={item.area}
                  className="group grid md:grid-cols-5 border-b py-6 gap-4 transition-colors duration-150"
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
                    className="md:col-span-2 font-sans text-sm font-medium"
                    style={{ color: "#171716" }}
                  >
                    {item.area}
                  </div>
                  <div
                    className="md:col-span-3 font-sans text-sm leading-relaxed"
                    style={{ color: "#68655E", fontWeight: 300 }}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
