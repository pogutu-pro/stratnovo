import { useState, useEffect } from "react"
import { Container } from "./ui"
import stratnovoLogoNav from "../assets/stratnovo-logo-nav.png"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
]

const mobileLinks = [
  { label: "Products", href: "#products" },
  { label: "Digital Marketing", href: "#services" },
  { label: "ValidBridge Academy", href: "#academy" },
  { label: "Properties", href: "#properties" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(248,247,242,0.96)"
            : "rgba(248,247,242,0.92)",
          borderBottom: "1px solid #D9D4C9",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-18">
            <a
              href="#"
              className="flex items-center gap-2.5 no-underline group"
            >
              <img
                src={stratnovoLogoNav}
                alt="Stratnovo"
                className="h-8 md:h-9 w-auto block transition-transform duration-200 group-hover:scale-105"
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#171716",
                  lineHeight: 1,
                }}
              >
                Stratnovo
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm font-medium transition-colors duration-150 hover:opacity-60"
                  style={{ color: "#171716" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="font-sans text-sm font-medium px-4 py-2 border transition-all duration-200 hover:bg-charcoal hover:text-porcelain"
                style={{
                  borderColor: "#171716",
                  color: "#171716",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#171716"
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    "#F7F5EF"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "transparent"
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    "#171716"
                }}
              >
                Start a conversation
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: "#171716",
                  transform: menuOpen
                    ? "translateY(5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: "#171716",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: "#171716",
                  transform: menuOpen
                    ? "translateY(-5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col transition-all duration-400"
        style={{
          backgroundColor: "#F7F5EF",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "none" : "translateY(-8px)",
        }}
      >
        <div className="flex flex-col justify-center h-full px-6 pt-20 pb-10">
          <nav className="flex flex-col gap-1">
            {mobileLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl py-3 border-b flex items-center justify-between group transition-all duration-150"
                style={{
                  color: "#171716",
                  borderColor: "#D9D4C9",
                  transitionDelay: menuOpen ? `${i * 30}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "none" : "translateX(-12px)",
                }}
              >
                {link.label}
                <span className="text-base font-sans opacity-40 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-10">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block font-sans text-sm font-medium px-6 py-3 border"
              style={{ borderColor: "#171716", color: "#171716" }}
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}