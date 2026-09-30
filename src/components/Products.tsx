import { useState } from "react"
import { Container, Tag } from "./ui"

const products = [
  {
    num: "01",
    name: "Rumia",
    category: "Property Discovery",
    description:
      "Better living and accommodation discovery. Rumia helps people find the right spaces — connecting renters, buyers, and guests with properties that match how they want to live.",
    status: "Active",
    type: "StratNovo Venture",
  },
  {
    num: "02",
    name: "ValidBridge LMS",
    category: "Learning Technology",
    description:
      "The core learning infrastructure. A serious software platform for structured digital education — courses, learning paths, assessments, live lessons, progress tracking, and instructor tools.",
    status: "Active",
    type: "StratNovo Platform",
  },
  {
    num: "03",
    name: "ValidBridge Academy",
    category: "Professional Training",
    description:
      "The education and training experience powered by ValidBridge LMS. Practical, skills-focused learning for individuals and teams in digital, technology, and business fields.",
    status: "Active",
    type: "StratNovo Venture",
  },
  {
    num: "04",
    name: "RumiaRent",
    category: "Rental Property Technology",
    description:
      "A property technology product focused on rental discovery — connecting prospective tenants with available spaces and giving property owners a structured platform to present listings and receive leads.",
    status: "Active",
    type: "StratNovo Product",
  },
  {
    num: "06",
    name: "ValidPost",
    category: "Social Media Management",
    description:
      "Social media management, publishing, and digital content workflows — built to help teams and businesses manage their digital presence with consistency and clarity.",
    status: "Active",
    type: "StratNovo Product",
  },
  {
    num: "07",
    name: "ValidTeam",
    category: "Collaborative Work",
    description:
      "Collaborative work and productivity tools designed to help teams coordinate, communicate, and move projects forward with less friction.",
    status: "In Development",
    type: "StratNovo Product",
  },
]

export default function Products() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section
      id="products"
      style={{ backgroundColor: "#E8E0D2", padding: "96px 0" }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#68655E" }}
              />
              <span
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase"
                style={{ color: "#68655E" }}
              >
                Products & Ventures
              </span>
            </div>
            <h2
              className="font-serif leading-tight"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Things we build and operate ourselves.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:items-end">
            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
            >
              StratNovo is both a technology partner for clients and a builder
              and operator of its own products and ventures. These are some of
              what we have built, launched, and continue to improve.
            </p>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "#D9D4C9" }}>
          {products.map((product, i) => (
            <div
              key={product.num}
              className="group grid lg:grid-cols-12 border-b py-8 md:py-10 transition-all duration-200 cursor-pointer"
              style={{
                borderColor: "#D9D4C9",
                backgroundColor: hoveredIdx === i ? "#F7F5EF" : "transparent",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Number */}
              <div className="lg:col-span-1 flex items-start mb-3 lg:mb-0">
                <span
                  className="font-sans text-sm font-medium"
                  style={{ color: "#9B968D" }}
                >
                  {product.num}
                </span>
              </div>

              {/* Name + type */}
              <div className="lg:col-span-3 mb-3 lg:mb-0 lg:pr-8">
                <div
                  className="font-serif mb-1 transition-all duration-200"
                  style={{
                    fontSize: hoveredIdx === i ? "28px" : "26px",
                    color: "#171716",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {product.name}
                </div>
                <div className="font-sans text-xs" style={{ color: "#9B968D" }}>
                  {product.type}
                </div>
              </div>

              {/* Category + description */}
              <div className="lg:col-span-5 mb-3 lg:mb-0 lg:pr-8">
                <Tag>{product.category}</Tag>
                <p
                  className="font-sans text-sm leading-relaxed mt-3"
                  style={{
                    color: "#68655E",
                    fontWeight: 300,
                    fontSize: "14px",
                  }}
                >
                  {product.description}
                </p>
              </div>

              {/* Status + arrow */}
              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-4 lg:gap-0">
                <span
                  className="font-sans text-xs font-medium tracking-[0.1em] uppercase px-2.5 py-1"
                  style={{
                    color: product.status === "Active" ? "#171716" : "#9B968D",
                    backgroundColor:
                      product.status === "Active" ? "#D9D4C9" : "transparent",
                    border:
                      product.status === "Active"
                        ? "none"
                        : "1px solid #D9D4C9",
                  }}
                >
                  {product.status}
                </span>
                <span
                  className="font-sans text-sm font-medium flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "#171716" }}
                >
                  View product →
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}