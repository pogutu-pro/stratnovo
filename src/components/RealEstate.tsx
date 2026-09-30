import { Section, Eyebrow, ArrowLink, Tag } from "./ui"

const services = [
  {
    label: "Property Management",
    description:
      "End-to-end management of residential and commercial properties, keeping them well-run and owners informed.",
  },
  {
    label: "Property Listings",
    description:
      "Clear, well-presented listings that help owners connect with the right renters, buyers, or guests.",
  },
  {
    label: "Accommodation Discovery",
    description:
      "Helping renters, buyers, and guests find spaces that fit their needs, lifestyle, and budget.",
  },
  {
    label: "Owner Services",
    description:
      "Support, systems, and visibility for property owners who want their assets well-managed and well-presented.",
  },
]

const featuredProperties = [
  {
    name: "Urban Residence",
    type: "Managed Property",
    status: "Available",
    location: "City Centre",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=480&h=360&fit=crop&auto=format",
  },
  {
    name: "Executive Apartment",
    type: "Listing",
    status: "Enquire",
    location: "Business District",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=480&h=360&fit=crop&auto=format",
  },
  {
    name: "Contemporary Studio",
    type: "Short Stay",
    status: "Available",
    location: "Arts Quarter",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=480&h=360&fit=crop&auto=format",
  },
]

export default function RealEstate() {
  return (
    <Section id="properties">
      {/* Header */}
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
        <div className="lg:col-span-6">
          <Eyebrow>Real Estate &amp; Property</Eyebrow>
          <h2
            className="font-serif leading-tight mb-5 sm:mb-6"
            style={{
              fontSize: "clamp(30px, 4.4vw, 52px)",
              color: "#171716",
              letterSpacing: "-0.02em",
            }}
          >
            Better ways to find, manage, and experience property.
          </h2>
          <p
            className="font-sans leading-relaxed mb-5"
            style={{ color: "#68655E", fontWeight: 300, fontSize: "16px" }}
          >
            StratNovo manages and lists properties, supports property owners,
            and helps people find the right spaces. Our property services are
            connected to Rumia — our accommodation and property discovery
            platform.
          </p>
          <ArrowLink href="#contact">Explore listings</ArrowLink>
        </div>

        <div className="lg:col-span-6">
          {/* Services index */}
          <div className="border-t border-[#D9D4C9]">
            {services.map((svc) => (
              <div
                key={svc.label}
                className="border-b border-[#D9D4C9] py-4 sm:py-5"
              >
                <div
                  className="font-sans text-sm font-medium mb-1"
                  style={{ color: "#2C2B28" }}
                >
                  {svc.label}
                </div>
                <div
                  className="font-sans text-xs leading-relaxed"
                  style={{ color: "#68655E", fontWeight: 300 }}
                >
                  {svc.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property previews */}
      <div className="border-t border-[#D9D4C9] pt-8 sm:pt-12">
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <span
            className="font-sans text-xs font-medium tracking-[0.12em] uppercase"
            style={{ color: "#9B968D" }}
          >
            Selected Properties
          </span>
          <ArrowLink href="#contact">View all</ArrowLink>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProperties.map((prop) => (
            <a
              key={prop.name}
              href="#contact"
              className="group flex flex-col no-underline rounded-sm transition-opacity duration-200 hover:opacity-90 active:opacity-80"
            >
              <div
                className="overflow-hidden mb-4 relative rounded-sm"
                style={{ backgroundColor: "#D5C9B7", aspectRatio: "4/3" }}
              >
                <img
                  src={prop.img}
                  alt={prop.name}
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className="font-sans text-[10px] font-medium tracking-[0.1em] uppercase px-2 py-1"
                    style={{
                      backgroundColor: "#F7F5EF",
                      color:
                        prop.status === "Available" ? "#171716" : "#68655E",
                    }}
                  >
                    {prop.status}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div
                    className="font-sans text-sm font-medium mb-0.5"
                    style={{ color: "#171716" }}
                  >
                    {prop.name}
                  </div>
                  <div
                    className="font-sans text-xs"
                    style={{ color: "#9B968D" }}
                  >
                    {prop.location} · {prop.type}
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-sans text-xs transition-transform duration-200 group-hover:translate-x-1 mt-1 flex-shrink-0"
                  style={{ color: "#68655E" }}
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Rumia connection */}
        <div
          className="mt-10 sm:mt-12 p-6 sm:p-8 border border-[#D9D4C9] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 rounded-sm"
          style={{ backgroundColor: "#E8E0D2" }}
        >
          <div>
            <div className="mb-2">
              <Tag>StratNovo Venture</Tag>
            </div>
            <div
              className="font-serif text-xl mb-1"
              style={{ color: "#171716" }}
            >
              Rumia
            </div>
            <p
              className="font-sans text-sm max-w-md"
              style={{ color: "#68655E", fontWeight: 300 }}
            >
              Our accommodation and property discovery platform. Find,
              compare, and connect with properties through Rumia.
            </p>
          </div>
          <ArrowLink href="#products" className="flex-shrink-0">
            Explore Rumia
          </ArrowLink>
        </div>
      </div>
    </Section>
  )
}
