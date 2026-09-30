import { Section } from "./ui"

const secondaryLinks = [
  { label: "Explore products", href: "#products" },
  { label: "Explore the academy", href: "#academy" },
  { label: "View properties", href: "#properties" },
  { label: "Digital marketing", href: "#services" },
]

export default function FinalCTA() {
  return (
    <Section id="contact" size="lg">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-10">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-5 h-px sm:w-6 flex-shrink-0" style={{ backgroundColor: "#68655E" }} />
            <span
              className="font-sans text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase"
              style={{ color: "#68655E" }}
            >
              Get in Touch
            </span>
          </div>

          <h2
            className="font-serif leading-tight mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(32px, 5.4vw, 72px)",
              color: "#171716",
              letterSpacing: "-0.025em",
            }}
          >
            Have something worth building, growing, learning, or finding?
          </h2>

          <p
            className="font-sans text-base sm:text-lg leading-relaxed mb-9 sm:mb-12 max-w-xl"
            style={{ color: "#68655E", fontWeight: 300 }}
          >
            Let's turn the idea into something real.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:info@stratnovo.co.ke"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 sm:px-8 no-underline transition-colors duration-200 w-full sm:w-auto"
              style={{
                minHeight: "52px",
                backgroundColor: "#171716",
                color: "#F7F5EF",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#2C2B28"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#171716"
              }}
            >
              Start a conversation →
            </a>
          </div>

          {/* Secondary links */}
          <nav
            aria-label="More"
            className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-[#D9D4C9]"
          >
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group font-sans text-sm font-medium flex items-center gap-2 no-underline transition-opacity duration-150 hover:opacity-60 active:opacity-80 min-h-[44px] xs:min-h-0"
                style={{ color: "#68655E" }}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </Section>
  )
}
