import { Section, Eyebrow, Divider } from "./ui"

const stats = [
  { num: "4", label: "Business areas" },
  { num: "4+", label: "Products & ventures" },
  { num: "∞", label: "Problems worth solving" },
  { num: "→", label: "Moving forward" },
]

export default function Positioning() {
  return (
    <Section id="about" tone="beige">
      <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
        {/* Left col */}
        <div className="lg:col-span-5 lg:pr-16">
          <Eyebrow>The Company</Eyebrow>
          <h2
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(30px, 4.4vw, 52px)",
              color: "#171716",
              letterSpacing: "-0.02em",
            }}
          >
            Technology, growth, learning, and places — built with intent.
          </h2>
        </div>

        {/* Right col */}
        <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-end">
          <p
            className="font-sans leading-relaxed mb-5 sm:mb-6"
            style={{ color: "#2C2B28", fontWeight: 300, fontSize: "17px" }}
          >
            StratNovo builds digital products and software systems, helps
            organizations grow through focused digital marketing, delivers
            practical education through ValidBridge Academy, and manages
            property experiences through real estate services.
          </p>
          <p
            className="font-sans leading-relaxed mb-8 sm:mb-10"
            style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
          >
            We do not only build for clients. We also build, operate, and
            improve our own products, platforms, learning experiences, and
            property services — which means we understand what it takes to
            move from idea to working system.
          </p>
          <Divider />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6 mt-7 sm:mt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                // 2 columns on phones, 4 from `md` — the last cell of a row
                // differs per breakpoint, so the divider is index-driven.
                className={`${
                  ["pr-5 border-r border-[#D9D4C9]", "md:pr-5 md:border-r md:border-[#D9D4C9]", "pr-5 border-r border-[#D9D4C9]", ""][i]
                }`}
              >
                <div
                  className="font-serif leading-none mb-1.5"
                  style={{ fontSize: "clamp(28px, 3.2vw, 30px)", color: "#171716" }}
                >
                  {stat.num}
                </div>
                <div
                  className="font-sans text-xs"
                  style={{ color: "#68655E", fontWeight: 400 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
