import { Container, Highlight } from "./ui"

const stacks = [
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Vue",
      "NestJS",
      "Django",
      "WordPress",
    ],
  },
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "SQL",
      "Go",
      "HTML/CSS",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Vercel",
      "Docker",
      "Cloudflare",
    ],
  },
  {
    category: "Data & Intelligence",
    items: [
      "Analytics",
      "AI Integrations",
      "LLM APIs",
      "Automation",
      "Data Pipelines",
      "Reporting Systems",
    ],
  },
]

export default function Technology() {
  return (
    <section
      id="technology"
      style={{ backgroundColor: "#F7F5EF", padding: "96px 0" }}
    >
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
                Technology
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              The right tool for the right problem.
            </h2>
            <p
              className="font-sans text-base leading-relaxed"
              style={{
                color: "#68655E",
                fontWeight: 300,
                fontSize: "16px",
                maxWidth: "480px",
              }}
            >
              Our technology work focuses on{" "}
              <Highlight>
                practical, reliable, and maintainable software
              </Highlight>
              . We select technologies based on the problem, the team, and the
              long-term product — <Highlight>not on trends</Highlight>.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div
              className="grid gap-px"
              style={{ backgroundColor: "#D9D4C9", gridTemplateColumns: "1fr" }}
            >
              {stacks.map((stack) => (
                <div
                  key={stack.category}
                  className="grid sm:grid-cols-12 gap-6 p-8"
                  style={{ backgroundColor: "#F7F5EF" }}
                >
                  <div className="sm:col-span-4">
                    <span
                      className="font-sans text-xs font-medium tracking-[0.1em] uppercase"
                      style={{ color: "#9B968D" }}
                    >
                      {stack.category}
                    </span>
                  </div>
                  <div className="sm:col-span-8">
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span
                          key={item}
                          className="font-sans text-sm px-2 py-1"
                          style={{
                            color: "#68655E",
                            border: "1px solid #D9D4C9",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
