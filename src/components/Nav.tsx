import { useCallback, useEffect, useRef, useState } from "react"
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

const DESKTOP_QUERY = "(min-width: 64rem)"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close the mobile menu if the viewport grows past the `lg` breakpoint
  // (e.g. device rotation) so the panel can never be left orphaned/open.
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false)
    }
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  /**
   * iOS Safari ignores `overflow: hidden` on <body> for scroll locking, so the
   * body is pinned with `position: fixed` instead and restored verbatim on
   * close (including the scroll position).
   */
  useEffect(() => {
    if (!menuOpen) return
    const { body } = document
    const scrollY = window.scrollY
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }

    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"
    body.style.overflow = "hidden"

    return () => {
      body.style.position = previous.position
      body.style.top = previous.top
      body.style.width = previous.width
      body.style.overflow = previous.overflow
      window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  // Escape closes the menu and returns focus to the trigger.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  // Move focus into the panel on open, and keep Tab cycling inside it.
  useEffect(() => {
    if (!menuOpen) return
    const panel = panelRef.current
    if (!panel) return

    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      )

    focusables()[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  /**
   * The body is `position: fixed` while the menu is open, so a native anchor
   * jump would resolve against a pinned document. Close first, then scroll on
   * the next frames once the layout is restored.
   */
  const handleMenuLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setMenuOpen(false)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.querySelector<HTMLElement>(href)
          if (!target) {
            window.location.hash = href
            return
          }
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches
          target.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          })
          if (window.location.hash !== href) {
            window.history.pushState(null, "", href)
          }
        })
      })
    },
    [],
  )

  return (
    <>
      <a href="#main" className="sr-only-focusable">
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300">
        <div
          className="backdrop-blur-md"
          style={{
            backgroundColor: scrolled
              ? "rgba(248,247,242,0.96)"
              : "rgba(248,247,242,0.92)",
            borderBottom: "1px solid #D9D4C9",
            paddingTop: "env(safe-area-inset-top)",
          }}
        >
          <Container>
            <div className="flex items-center justify-between h-16 md:h-18">
              <a
                href="#top"
                className="group flex items-center gap-2 sm:gap-2.5 no-underline -ml-1 py-2"
                aria-label="StratNovo — back to top"
              >
                <img
                  src={stratnovoLogoNav}
                  alt=""
                  width={144}
                  height={36}
                  decoding="async"
                  className="h-8 md:h-9 w-auto block transition-transform duration-200 group-hover:scale-105"
                />
                <span
                  className="font-sans font-bold"
                  style={{
                    fontSize: "17px",
                    letterSpacing: "-0.02em",
                    color: "#171716",
                    lineHeight: 1,
                  }}
                >
                  Stratnovo
                </span>
              </a>

              {/* Desktop nav */}
              <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-sm font-medium transition-opacity duration-150 hover:opacity-60"
                    style={{ color: "#171716" }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="#contact"
                  className="tap font-sans text-sm font-medium px-4 py-2 border inline-flex items-center no-underline transition-colors duration-200 hover:bg-charcoal hover:text-porcelain"
                  style={{
                    borderColor: "#171716",
                    color: "#171716",
                  }}
                >
                  Start a conversation
                </a>
              </div>

              {/* Mobile trigger */}
              <button
                ref={buttonRef}
                type="button"
                className="lg:hidden tap -mr-1 flex flex-col justify-center items-center gap-[7px] rounded-sm active:bg-[rgba(23,23,22,0.06)] transition-colors duration-150"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span
                  className="w-6 h-px transition-transform duration-300"
                  style={{
                    backgroundColor: "#171716",
                    transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="w-6 h-px transition-opacity duration-300"
                  style={{
                    backgroundColor: "#171716",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="w-6 h-px transition-transform duration-300"
                  style={{
                    backgroundColor: "#171716",
                    transform: menuOpen
                      ? "translateY(-5.5px) rotate(-45deg)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!menuOpen}
        className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
        style={{
          backgroundColor: "#F7F5EF",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/*
          Scrollable: the link list is taller than short phones (e.g. iPhone
          SE). `min-h-full` + inner auto margin centres it when there is room
          while still allowing overflow to be reached by scrolling.
        */}
        <div
          className="h-full overflow-y-auto overscroll-contain"
          style={{
            paddingTop: "calc(4.5rem + env(safe-area-inset-top))",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <div className="site-container min-h-full flex flex-col justify-center">
            <nav
              aria-label="Mobile"
              className="flex flex-col"
              style={{
                animation: menuOpen
                  ? "slideDown 0.4s ease both"
                  : undefined,
              }}
            >
              {mobileLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleMenuLinkClick(e, link.href)}
                  className="group flex items-center justify-between gap-4 min-h-[56px] border-b no-underline transition-opacity duration-150 active:opacity-60"
                  style={{
                    color: "#171716",
                    borderColor: "#D9D4C9",
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    // Scales from 26px on a 320px phone to 36px on tablets,
                    // keeping every row at a comfortable tap size.
                    fontSize: "clamp(1.625rem, 6.6vw, 2.25rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    animationDelay: menuOpen ? `${i * 28}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "none" : "translateX(-10px)",
                    transition:
                      "opacity 260ms ease, transform 260ms ease, color 150ms ease",
                  }}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="font-sans text-base opacity-40 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1"
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                onClick={(e) => handleMenuLinkClick(e, "#contact")}
                className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 min-h-[48px] border no-underline transition-colors duration-200 active:bg-[rgba(23,23,22,0.08)]"
                style={{ borderColor: "#171716", color: "#171716" }}
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
