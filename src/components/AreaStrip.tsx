const areas = [
  {
    num: "01",
    label: "Build",
    sub: "Software & digital products",
    href: "#services",
  },
  {
    num: "02",
    label: "Grow",
    sub: "Digital marketing & growth",
    href: "#services",
  },
  { num: "03", label: "Learn", sub: "ValidBridge Academy", href: "#academy" },
  {
    num: "04",
    label: "Live",
    sub: "Property & real estate",
    href: "#properties",
  },
]

/**
 * Divider placement is index-aware so a cell only gets a rule where it has a
 * neighbour to its right (or below) at that breakpoint. `grid-cols-2` on
 * phones and `grid-cols-4` from `lg` have different neighbours, so the
 * `lg:` prefix flips cell 02 back on.
 */
const borderClasses = [
  "border-r border-b",
  "lg:border-r border-b",
  "border-r",
  "",
]

export default function AreaStrip() {
  return (
    <nav
      aria-label="Business areas"
      className="grid grid-cols-2 lg:grid-cols-4 border-[#D9D4C9] border-y"
      style={{ backgroundColor: "#EDE6D8" }}
    >
      {areas.map((area, i) => (
        <a
          key={area.label}
          href={area.href}
          className={`flex flex-col justify-center no-underline transition-colors duration-150 hover:bg-[#E4DAC8] active:bg-[#DFD3BE] ${borderClasses[i]}`}
          style={{
            minHeight: "104px",
            padding: "clamp(16px, 3.5vw, 24px) clamp(14px, 3.5vw, 28px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "#9B968D",
              }}
            >
              {area.num}
            </span>
            <span
              aria-hidden="true"
              className="font-sans"
              style={{ fontSize: "12px", color: "#9B968D" }}
            >
              →
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(19px, 2.6vw, 22px)",
              color: "#171716",
              letterSpacing: "-0.01em",
              marginBottom: "4px",
              lineHeight: 1.05,
            }}
          >
            {area.label}
          </span>
          <span
            className="font-sans font-light"
            style={{
              fontSize: "clamp(10px, 2.6vw, 11px)",
              color: "#9B968D",
            }}
          >
            {area.sub}
          </span>
        </a>
      ))}
    </nav>
  )
}
