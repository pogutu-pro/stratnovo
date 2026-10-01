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
 *
 * `driftX`/`driftY` are the per-logo displacement vectors for the `logoDrift`
 * keyframes in index.css. Spreading both the direction and the duration keeps the
 * row from pulsing as one unit; `phase` is a negative delay so the marks are
 * already mid-cycle on first paint rather than all starting from rest.
 */
const ecosystem = [
  {
    name: "Google Cloud",
    src: googleCloud,
    width: 123,
    height: 20,
    scale: 1,
    driftX: 2,
    driftY: -6,
    duration: 7.5,
    phase: -1.2,
  },
  {
    name: "Oracle Cloud",
    src: oracleCloud,
    width: 1239,
    height: 160,
    scale: 0.86,
    driftX: -2,
    driftY: -5,
    duration: 8.4,
    phase: -3.1,
  },
  {
    name: "Cloudflare",
    src: cloudflare,
    width: 341,
    height: 156,
    scale: 1.32,
    driftX: 2,
    driftY: 6,
    duration: 6.8,
    phase: -4.6,
  },
  {
    name: "GitHub",
    src: github,
    width: 24,
    height: 24,
    scale: 1.34,
    driftX: -1,
    driftY: -6,
    duration: 7.1,
    phase: -2.4,
  },
  {
    name: "Paystack",
    src: paystack,
    width: 157,
    height: 28,
    scale: 1.02,
    driftX: 2,
    driftY: 5,
    duration: 8.9,
    phase: -5.5,
  },
  {
    name: "Sentry",
    src: sentry,
    width: 80,
    height: 80,
    scale: 1.34,
    driftX: -2,
    driftY: 6,
    duration: 7.8,
    phase: -0.6,
  },
  {
    name: "PostHog",
    src: posthog,
    width: 160,
    height: 28,
    scale: 0.95,
    driftX: 1,
    driftY: -5,
    duration: 6.5,
    phase: -3.8,
  },
  {
    name: "Resend",
    src: resend,
    width: 1978,
    height: 420,
    scale: 0.95,
    driftX: -2,
    driftY: -6,
    duration: 8.1,
    phase: -2.9,
  },
  {
    name: "Brevo",
    src: brevo,
    width: 32,
    height: 32,
    scale: 1.42,
    driftX: 1,
    driftY: 6,
    duration: 7.3,
    phase: -5.1,
  },
  {
    name: "Figma",
    src: figma,
    width: 64,
    height: 64,
    scale: 1.42,
    driftX: -1,
    driftY: 5,
    duration: 8.7,
    phase: -1.7,
  },
]

/** Shared cap height for the row, scaled per logo for optical balance. */
const BASE_HEIGHT = "clamp(18px, 1.6vw, 23px)"

export default function PoweredBy() {
  const listRef = useRef<HTMLUListElement>(null)

  /*
    Pause the drift while the section is off-screen. `useEffect` with no
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
          One horizontal ecosystem row: no cards, no borders, no captions.
          Narrow viewports keep a single line and scroll sideways rather than
          shrinking the marks; from `sm` the row wraps and centres itself, and
          at `lg` it settles into one line spread across the full content width.
        */}
        <ul
          ref={listRef}
          className="flex items-center gap-x-10 overflow-x-auto sm:flex-wrap sm:justify-center sm:gap-x-12 sm:overflow-x-visible lg:flex-nowrap lg:justify-between m-0 p-0 list-none"
        >
          {ecosystem.map((logo) => (
            <li key={logo.name} className="flex items-center flex-shrink-0">
              {/*
                The drift runs on a wrapper so the `transform` it animates and the
                `scale`/`opacity` the hover state animates never collide on one
                element. Custom properties feed the keyframes in index.css.
              */}
              <span
                className="ecosystem-logo block"
                style={
                  {
                    "--drift-x": `${logo.driftX}px`,
                    "--drift-y": `${logo.driftY}px`,
                    "--drift-duration": `${logo.duration}s`,
                    "--drift-delay": `${logo.phase}s`,
                  } as CSSProperties
                }
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  decoding="async"
                  className="block w-auto opacity-[0.72] scale-[0.97] transition-[opacity,transform] duration-300 ease-out hover:opacity-100 hover:scale-100 motion-reduce:transition-none motion-reduce:transform-none"
                  style={{ height: `calc(${BASE_HEIGHT} * ${logo.scale})` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
