import { Section } from "./ui"

export default function DarkStatement() {
  return (
    <Section tone="charcoal" size="lg">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <p
            className="font-serif leading-[1.08] mb-8 sm:mb-12"
            style={{
              fontSize: "clamp(34px, 6.5vw, 88px)",
              color: "#F7F5EF",
              letterSpacing: "-0.025em",
            }}
          >
            Ideas are cheap.
            <br />
            <em style={{ color: "#9B968D" }}>Execution is the product.</em>
          </p>

          <div
            className="w-12 h-px mb-8 sm:mb-12"
            style={{ backgroundColor: "#68655E" }}
          />

          <p
            className="font-sans text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "#9B968D", fontWeight: 300 }}
          >
            StratNovo exists to move things forward — whether that means
            engineering a new product, building a growth system, delivering a
            course, or finding someone the right place to live. The work is
            always practical, always intentional.
          </p>
        </div>
      </div>
    </Section>
  )
}
