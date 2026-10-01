import { Container, Highlight } from "./ui"

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
    label: "Facebook",
    handle: "/stratnovo",
    href: "https://www.facebook.com/stratnovo",
    color: "#1877F2",
    icon: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.135 4.604 11.194 10.101 11.647Z",
  },
  {
    label: "X",
    handle: "@STRATNOVO__",
    href: "https://x.com/STRATNOVO__",
    color: "#F7F5EF",
    icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    label: "LinkedIn",
    handle: "StratNovo",
    href: "https://www.linkedin.com/company/stratnovo",
    color: "#0A66C2",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    handle: "@stratnovo",
    href: "https://www.instagram.com/stratnovo",
    color: "#E1306C",
    icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
  {
    label: "TikTok",
    handle: "@stratnovo_ke",
    href: "https://www.tiktok.com/@stratnovo_ke",
    color: "#FE2C55",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.06-.01-8.11.02-12.16Z",
  },
  {
    label: "WhatsApp",
    handle: "+254 792 475 624",
    href: "https://wa.me/254792475624",
    color: "#25D366",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z",
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
    <footer style={{ backgroundColor: "#171716", padding: "64px 0 32px" }}>
      <Container>
        <div
          className="grid lg:grid-cols-12 gap-12 pb-12"
          style={{ borderBottom: "1px solid #2C2B28" }}
        >
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
              Software, growth, learning, and property —{" "}
              <Highlight>one company, four connected areas</Highlight>.
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
                    aria-label={`${social.label} — ${social.handle}`}
                    className="group inline-flex items-center gap-3 font-sans text-sm transition-colors duration-150"
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
                    <span
                      className="inline-flex items-center justify-center shrink-0 w-6 h-6"
                      style={{ color: social.color }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-full h-full"
                        fill="currentColor"
                      >
                        <path d={social.icon} />
                      </svg>
                    </span>
                    {social.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <span className="font-sans text-xs" style={{ color: "#68655E" }}>
            © {new Date().getFullYear()} StratNovo. All rights reserved.
          </span>
          <span className="font-sans text-xs" style={{ color: "#68655E" }}>
            StratNovo — Build. Grow. Learn. Live.
          </span>
        </div>
      </Container>
    </footer>
  )
}
