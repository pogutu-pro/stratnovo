import { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-sans text-[11px] font-medium tracking-[0.15em] uppercase sm:text-xs"
      style={{ color: "#68655E" }}
    >
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-sans text-[10px] font-medium tracking-[0.12em] uppercase px-2 py-1 border sm:text-[11px] sm:px-2.5"
      style={{ borderColor: "#D9D4C9", color: "#68655E" }}
    >
      {children}
    </span>
  )
}

export function ArrowLink({
  children,
  href = "#",
  light = false,
  className = "",
}: {
  children: ReactNode
  href?: string
  light?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group tap inline-flex items-center gap-2 font-sans text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-60 active:opacity-80 ${className}`}
      style={{ color: light ? "#F7F5EF" : "#171716" }}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1"
      >
        →
      </span>
    </a>
  )
}

/**
 * Centred, width-capped wrapper. Horizontal padding is fluid and clamped
 * against the display safe-area so content never sits under a notch, and
 * never gets closer than 20px to the edge on small phones.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "header" | "footer" | "nav" | "section" | "main" | "aside"
}) {
  return <Tag className={`site-container ${className}`}>{children}</Tag>
}

const sectionTones = {
  light: "#F7F5EF",
  porcelain: "#F8F7F2",
  beige: "#E8E0D2",
  strip: "#EDE6D8",
  charcoal: "#171716",
} as const

export type SectionTone = keyof typeof sectionTones

/**
 * Section shell with responsive vertical rhythm. The `96px 0` inline padding
 * that was hard-coded on every section is far too tall on a phone, so the
 * scale now steps 56px → 80px → 96px (`section-pad`) instead.
 */
export function Section({
  children,
  className = "",
  id,
  tone = "light",
  size = "default",
  innerClassName = "",
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: SectionTone
  size?: "default" | "lg"
  innerClassName?: string
}) {
  return (
    <section
      id={id}
      className={`${size === "lg" ? "section-pad-lg" : "section-pad"} ${className}`}
      style={{ backgroundColor: sectionTones[tone] }}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  )
}

export function Divider({ light = false }: { light?: boolean }) {
  return (
    <div
      className="w-full h-px"
      style={{ backgroundColor: light ? "rgba(247,245,239,0.12)" : "#D9D4C9" }}
    />
  )
}

/** Eyebrow marker used at the top of most sections. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="w-5 h-px sm:w-6 flex-shrink-0" style={{ backgroundColor: "#68655E" }} />
      <SectionLabel>{children}</SectionLabel>
    </div>
  )
}
