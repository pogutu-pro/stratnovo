import { Container, ArrowLink, Tag } from "./ui"

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
    <section
      id="properties"
      style={{ backgroundColor: "#F7F5EF", padding: "96px 0" }}
    >
      <Container>
        {/* Header */}
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
                Real Estate & Property
              </span>
            </div>
            <h2
              className="font-serif leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#171716",
                letterSpacing: "-0.02em",
              }}
            >
              Better ways to find, manage, and experience property.
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-4"
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
            <div className="border-t" style={{ borderColor: "#D9D4C9" }}>
              {services.map((svc) => (
                <div
                  key={svc.label}
                  className="border-b py-5 group"
                  style={{ borderColor: "#D9D4C9" }}
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
        <div className="border-t pt-12" style={{ borderColor: "#D9D4C9" }}>
          <div className="flex items-center justify-between mb-8">
            <span
              className="font-sans text-xs font-medium tracking-[0.12em] uppercase"
              style={{ color: "#9B968D" }}
            >
              Selected Properties
            </span>
            <ArrowLink href="#contact">View all</ArrowLink>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProperties.map((prop) => (
              <div key={prop.name} className="group cursor-pointer">
                <div
                  className="overflow-hidden mb-4 relative"
                  style={{ backgroundColor: "#D5C9B7", aspectRatio: "4/3" }}
                >
                  <img
                    src={prop.img}
                    alt={prop.name}
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
                <div className="flex items-start justify-between">
                  <div>
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
                    className="font-sans text-xs transition-transform duration-200 group-hover:translate-x-1 mt-1"
                    style={{ color: "#68655E" }}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Rumia connection */}
          <div
            className="mt-12 p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ borderColor: "#D9D4C9", backgroundColor: "#E8E0D2" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Tag>StratNovo Venture</Tag>
              </div>
              <div
                className="font-serif text-xl mb-1"
                style={{ color: "#171716" }}
              >
                Rumia
              </div>
              <p
                className="font-sans text-sm"
                style={{ color: "#68655E", fontWeight: 300 }}
              >
                Our accommodation and property discovery platform. Find,
                compare, and connect with properties through Rumia.
              </p>
            </div>
            <ArrowLink href="#products">Explore Rumia</ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
