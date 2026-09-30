import { Container, ArrowLink } from "./ui"

export default function DarkStatement() {
  return (
    <section
      style={{
        backgroundColor: "#171716",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <span
            className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-8 inline-block"
            style={{ color: "#9B968D" }}
          >
            The StratNovo Standard
          </span>
          <h2
            className="font-serif leading-tight mb-10"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              color: "#F7F5EF",
              letterSpacing: "-0.02em",
            }}
          >
            We measure value by outcomes —
            <br />
            <em>not by work performed.</em>
          </h2>
          <p
            className="font-sans text-base leading-relaxed mb-10 mx-auto"
            style={{
              color: "#BFB8AC",
              fontWeight: 300,
              fontSize: "16px",
              maxWidth: "560px",
            }}
          >
            Every engagement — whether a product, a campaign, a learning
            program, or a property service — is judged by whether it moved
            something real for the people it was built for. That is the
            standard we hold ourselves to.
          </p>
          <div className="flex justify-center">
            <ArrowLink href="#contact" dark>
              Work with us
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  )
}