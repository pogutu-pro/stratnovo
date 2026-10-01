import { Container, Highlight } from "./ui"

export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#E8E0D2", padding: "120px 0" }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
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
                Start a Conversation
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-8"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Have an idea worth building?
              <br />
              <em>Let us build it.</em>
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{
                color: "#68655E",
                fontWeight: 300,
                fontSize: "16px",
                maxWidth: "520px",
              }}
            >
              Whether you need software, a growth system, digital training, or
              property support —{" "}
              <Highlight>the first step is a conversation</Highlight>. Send us a
              message and we will reply personally.
            </p>
            <a
              href="mailto:hello@stratnovo.com"
              className="font-sans text-sm font-medium"
              style={{ color: "#171716" }}
            >
              hello@stratnovo.com →
            </a>
          </div>

          <div className="lg:col-span-5">
            <div
              className="border p-8 flex flex-col items-start"
              style={{ borderColor: "#D9D4C9" }}
            >
              <span
                className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-4"
                style={{ color: "#9B968D" }}
              >
                Response Time
              </span>
              <span
                className="font-serif text-3xl mb-8"
                style={{ color: "#171716" }}
              >
                24 hours
              </span>
              <span
                className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-4"
                style={{ color: "#9B968D" }}
              >
                Based In
              </span>
              <span
                className="font-serif text-3xl"
                style={{ color: "#171716" }}
              >
                Nairobi, Kenya
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
