import { useEffect, useRef, type CSSProperties } from "react"
import { Container, SectionLabel } from "./ui"
import googleCloud from "../assets/logos/google-cloud.svg"
import oracleCloud from "../assets/logos/oracle-cloud.svg"
import cloudflare from "../assets/logos/cloudflare.svg"
import github from "../assets/logos/github.svg"
import paystack from "../assets/logos/paystack.svg"
import sentry from "../assets/logos/sentry.svg"
import posthog from "../assets/logos/posthog.svg"
import resend from "../assets/logos/resend.svg"
import brevo from "../assets/logos/brevo.svg"
import figma from "../assets/logos/figma.svg"

/**
 * Official vendor marks, stored locally as SVG. Every file is the vendor's own
 * artwork with its proportions and geometry untouched, filled with that vendor's
 * published brand colour; `width`/`height` are the intrinsic viewBox dimensions
 * and `scale` optically balances the row, since wordmarks read smaller than
 * symbol-only marks at an equal height.
 */
const ecosystem = [
  {
    name: "Google Cloud",
    src: googleCloud,
    width: 123,
    height: 20,
    scale: 1,
  },
  {
    name: "Oracle Cloud",
    src: oracleCloud,
    width: 1239,
    height: 160,
    scale: 0.86,
  },
  {
    name: "Cloudflare",
    src: cloudflare,
    width: 341,
    height: 156,
    scale: 1.32,
  },
  {
    name: "GitHub",
    src: github,
    width: 24,
    height: 24,
    scale: 1.34,
  },
  {
    name: "Paystack",
    src: paystack,
    width: 157,
    height: 28,
    scale: 1.02,
  },
  {
    name: "Sentry",
    src: sentry,
    width: 80,
    height: 80,
    scale: 1.34,
  },
  {
    name: "PostHog",
    src: posthog,
    width: 160,
    height: 28,
    scale: 0.95,
  },
  {
    name: "Resend",
    src: resend,
    width: 1978,
    height: 420,
    scale: 0.95,
  },
  {
    name: "Brevo",
    src: brevo,
    width: 32,
    height: 32,
    scale: 1.42,
  },
  {
    name: "Figma",
    src: figma,
    width: 64,
    height: 64,
    scale: 1.42,
  },
]

/** Shared cap height for the row, scaled per logo for optical balance. */
const BASE_HEIGHT = "clamp(18px, 1.6vw, 23px)"

export default function PoweredBy() {
  const listRef = useRef<HTMLDivElement>(null)

  /*
    Pause the marquee while the section is off-screen. `useEffect` with no
    dependencies runs once; the class is written straight to the node so this
    never triggers a re-render, and the observer is disconnected on unmount.
    The initial state is "paused" so the logos stay still until we know the row
    is actually visible.
  */
  useEffect(() => {
    const list = listRef.current
    if (!list) return

    list.classList.add("is-paused")

    if (typeof IntersectionObserver === "undefined") {
      list.classList.remove("is-paused")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        list.classList.toggle("is-paused", !entry.isIntersecting)
      },
      { rootMargin: "80px 0px" },
    )

    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-labelledby="powered-by-heading"
      style={{
        backgroundColor: "#EDE6D8",
        borderTop: "1px solid #D9D4C9",
        borderBottom: "1px solid #D9D4C9",
        padding: "clamp(30px, 4vw, 46px) 0",
      }}
    >
      <Container>
        <div className="flex items-center gap-3 mb-7 lg:mb-9">
          <div
            className="w-6 h-px flex-shrink-0"
            style={{ backgroundColor: "#68655E" }}
          />
          <h2 id="powered-by-heading" className="m-0">
            <SectionLabel>Powered by</SectionLabel>
          </h2>
        </div>

        {/*
          Continuous left-to-right marquee. Two identical logo sets sit
          side by side inside one track, so translating the track from -50% to 0
          is exactly one set width and the loop repeats with no visible seam.
          The duplicate set is hidden from assistive tech.
        */}
        <div ref={listRef} className="logo-viewport">
          <div
            className="logo-track"
            style={{ "--marquee-duration": "34s" } as CSSProperties}
          >
            {[false, true].map((isClone) => (
              <ul
                key={String(isClone)}
                aria-hidden={isClone || undefined}
                className="logo-set flex items-center gap-x-10 sm:gap-x-12"
              >
                {ecosystem.map((logo) => (
                  <li
                    key={logo.name}
                    className="flex items-center flex-shrink-0"
                  >
                    <span className="ecosystem-logo block">
                      <img
                        src={logo.src}
                        alt={isClone ? "" : logo.name}
                        width={logo.width}
                        height={logo.height}
                        decoding="async"
                        className="block w-auto opacity-[0.72] scale-[0.97] transition-[opacity,transform] duration-300 ease-out hover:opacity-100 hover:scale-100 motion-reduce:transition-none motion-reduce:transform-none"
                        style={{
                          height: `calc(${BASE_HEIGHT} * ${logo.scale})`,
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
