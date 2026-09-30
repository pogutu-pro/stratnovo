import { Container } from "./ui"
import stratnovoLogoNav from "../assets/stratnovo-logo-nav.png"

const cols = [
  {
    heading: "Products",
    links: [
      { label: "Rumia", href: "#properties" },
      { label: "ValidBridge Academy", href: "#academy" },
      { label: "ValidPost", href: "#products" },
      { label: "ValidTeam", href: "#products" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Software & Digital Products", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Training", href: "#academy" },
      { label: "Property Management", href: "#properties" },
      { label: "Property Listings", href: "#properties" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Approach", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

const socials = [
  { label: "X", full: "X (formerly Twitter)", href: "https://x.com" },
  { label: "LinkedIn", full: "StratNovo on LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", full: "StratNovo on Instagram", href: "https://www.instagram.com" },
]

const legalLinks = ["Privacy Policy", "Terms of Service"]

const footerLinkClass =
  "font-sans text-xs transition-colors duration-150 flex items-center no-underline hover:text-[#F7F5EF] active:text-[#F7F5EF]"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#171716",
        paddingTop: "3rem",
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-8 sm:gap-x-10 lg:gap-12 mb-10 sm:mb-16">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={stratnovoLogoNav}
                alt=""
                width={144}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto block"
              />
              <span
                className="font-sans font-semibold text-sm tracking-[0.18em] uppercase"
                style={{ color: "#F7F5EF" }}
              >
                StratNovo
              </span>
            </div>
            <p
              className="font-sans text-xs leading-relaxed mb-5 sm:mb-6"
              style={{ color: "#68655E", fontWeight: 300, maxWidth: "280px" }}
            >
              Technology, growth, learning, and places — built with intent.
            </p>
            <ul className="flex gap-1 m-0 p-0 list-none">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.full}
                    className="font-sans text-[11px] flex items-center justify-center no-underline transition-colors duration-150 hover:text-[#F7F5EF] active:text-[#F7F5EF]"
                    style={{ color: "#68655E", width: "44px", height: "44px" }}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="col-span-1 lg:col-span-2">
              <div
                className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase mb-1"
                style={{ color: "#9B968D" }}
              >
                {col.heading}
              </div>
              <ul className="flex flex-col m-0 p-0 list-none">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={footerLinkClass}
                      style={{ color: "#68655E", minHeight: "44px" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div
              className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: "#9B968D" }}
            >
              Contact
            </div>
            <a
              href="mailto:info@stratnovo.co.ke"
              className={`${footerLinkClass} break-all`}
              style={{ color: "#68655E", minHeight: "44px" }}
            >
              info@stratnovo.co.ke
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-4 pt-6 sm:pt-8 border-t"
          style={{ borderColor: "rgba(217,212,201,0.12)" }}
        >
          <span className="font-sans text-xs py-2" style={{ color: "#68655E" }}>
            © {new Date().getFullYear()} StratNovo. All rights reserved.
          </span>
          <ul className="flex flex-wrap gap-x-5 sm:gap-x-6 m-0 p-0 list-none">
            {legalLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`${footerLinkClass} py-3 sm:py-0`}
                  style={{ color: "#68655E", minHeight: "44px" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
