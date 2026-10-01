import { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-sans font-medium tracking-[0.15em] uppercase"
      style={{ color: "#68655E" }}
    >
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block text-[11px] font-sans font-medium tracking-[0.12em] uppercase px-2.5 py-1 border"
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
}: {
  children: ReactNode
  href?: string
  light?: boolean
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-sans font-medium transition-all duration-200"
      style={{ color: light ? "#F7F5EF" : "#171716" }}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 lg:px-16 ${className}`}
      style={{ maxWidth: "1280px" }}
    >
      {children}
    </div>
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
