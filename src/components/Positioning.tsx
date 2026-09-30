import { Container, Divider } from "./ui"

export default function Positioning() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#E8E0D2", padding: "96px 0" }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
          {/* Left col */}
          <div className="lg:col-span-5 lg:pr-16">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                The Company
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-0"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
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
              className="font-sans text-base leading-relaxed mb-6"
              style={{ color: "#2C2B28", fontWeight: 300, fontSize: "17px" }}
            >
              StratNovo builds digital products and software systems, helps
              organizations grow through focused digital marketing, delivers
              practical education through ValidBridge Academy, and manages
              property experiences through real estate services.
            </p>
            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
            >
              We do not only build for clients. We also build, operate, and
              improve our own products, platforms, learning experiences, and
              property services — which means we understand what it takes to
              move from idea to working system.
            </p>
            <Divider />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-8">
              {[
                { num: "4", label: "Business areas" },
                { num: "4+", label: "Products & ventures" },
                { num: "∞", label: "Problems worth solving" },
                { num: "→", label: "Moving forward" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-r last:border-r-0 pr-6 mr-6 last:mr-0"
                  style={{ borderColor: "#D9D4C9" }}
                >
                  <div
                    className="font-serif text-3xl mb-1"
                    style={{ color: "#171716" }}
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
      </Container>
    </section>
  )
}