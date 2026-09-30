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

export default function AreaStrip() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4"
      style={{
        backgroundColor: "#EDE6D8",
        borderTop: "1px solid #D9D4C9",
        borderBottom: "1px solid #D9D4C9",
      }}
    >
      {areas.map((area, i) => (
        <a
          key={area.label}
          href={area.href}
          className="flex flex-col"
          style={{
            padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)",
            borderRight:
              i % 2 === 0
                ? "1px solid #D9D4C9"
                : i < 3
                  ? "1px solid #D9D4C9"
                  : "none",
            borderBottom: i < 2 ? "1px solid #D9D4C9" : "none",
            textDecoration: "none",
            transition: "background-color 150ms",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#E4DAC8"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#9B968D",
                textTransform: "uppercase",
              }}
            >
              {area.num}
            </span>
            <span style={{ fontSize: "12px", color: "#9B968D" }}>→</span>
          </div>
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "#171716",
              letterSpacing: "-0.01em",
              marginBottom: "4px",
              lineHeight: 1,
            }}
          >
            {area.label}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#9B968D",
              fontWeight: 300,
            }}
          >
            {area.sub}
          </span>
        </a>
      ))}
    </div>
  )
}