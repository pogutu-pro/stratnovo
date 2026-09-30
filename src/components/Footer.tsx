import { Container } from "./ui"

const links = [
  {
    label: "What We Do",
    href: "#services",
  },
  {
    label: "Products",
    href: "#products",
  },
  {
    label: "Selected Work",
    href: "#work",
  },
  {
    label: "Academy",
    href: "#academy",
  },
  {
    label: "Properties",
    href: "#properties",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/stratnovo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/stratnovo",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/stratnovo",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@stratnovo",
  },
]

const ventures = [
  {
    label: "Rumia",
    href: "#",
  },
  {
    label: "ValidBridge Academy",
    href: "#academy",
  },
  {
    label: "ValidBridge LMS",
    href: "#",
  },
]

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#171716", padding: "64px 0 32px" }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 pb-12" style={{ borderBottom: "1px solid #2C2B28" }}>
          <div className="lg:col-span-4">
            <div
              className="font-serif text-2xl mb-4"
              style={{ color: "#F7F5EF" }}
            >
              StratNovo
            </div>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "#9B968D", fontWeight: 300, maxWidth: "320px" }}
            >
              Software, growth, learning, and property — one company, four
              connected areas.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-6"
              style={{ color: "#68655E" }}
            >
              Navigate
            </div>
            <div className="space-y-3">
              {links.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-150"
                    style={{ color: "#BFB8AC" }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#F7F5EF"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#BFB8AC"
                    }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-6"
              style={{ color: "#68655E" }}
            >
              Ventures & Products
            </div>
            <div className="space-y-3">
              {ventures.map((venture) => (
                <div key={venture.label}>
                  <a
                    href={venture.href}
                    className="font-sans text-sm transition-colors duration-150"
                    style={{ color: "#BFB8AC" }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#F7F5EF"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#BFB8AC"
                    }}
                  >
                    {venture.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase mb-6"
              style={{ color: "#68655E" }}
            >
              Follow
            </div>
            <div className="space-y-3">
              {socials.map((social) => (
                <div key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm transition-colors duration-150"
                    style={{ color: "#BFB8AC" }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#F7F5EF"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color =
                        "#BFB8AC"
                    }}
                  >
                    {social.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
        >
          <span
            className="font-sans text-xs"
            style={{ color: "#68655E" }}
          >
            © {new Date().getFullYear()} StratNovo. All rights reserved.
          </span>
          <span
            className="font-sans text-xs"
            style={{ color: "#68655E" }}
          >
            StratNovo — Build. Grow. Learn. Live.
          </span>
        </div>
      </Container>
    </footer>
  )
}