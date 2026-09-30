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
 * artwork with its proportions and geometry untouched; `width`/`height` are the
 * intrinsic viewBox dimensions and `scale` optically balances the row, since
 * wordmarks read smaller than symbol-only marks at an equal height.
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
        <ul className="flex items-center gap-x-10 overflow-x-auto sm:flex-wrap sm:justify-center sm:gap-x-12 sm:overflow-x-visible lg:flex-nowrap lg:justify-between m-0 p-0 list-none">
          {ecosystem.map((logo) => (
            <li key={logo.name} className="flex items-center flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                decoding="async"
                className="w-auto opacity-[0.66] transition-opacity duration-150 hover:opacity-90 motion-reduce:transition-none"
                style={{ height: `calc(${BASE_HEIGHT} * ${logo.scale})` }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
