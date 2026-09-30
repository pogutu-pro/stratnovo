const areas = [
  { num: '01', label: 'Build', sub: 'Software & digital products', href: '#services' },
  { num: '02', label: 'Grow', sub: 'Digital marketing & growth', href: '#services' },
  { num: '03', label: 'Learn', sub: 'ValidBridge Academy', href: '#academy' },
  { num: '04', label: 'Live', sub: 'Property & real estate', href: '#properties' },
]

const panels = [
  {
    num: '01',
    area: 'Build',
    sub: 'Software & Digital Products',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=800&fit=crop&auto=format',
    alt: 'Engineers working on software at workstations',
  },
  {
    num: '02',
    area: 'Grow',
    sub: 'Digital Marketing',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=800&fit=crop&auto=format',
    alt: 'Developer laptop displaying software code',
  },
  {
    num: '03',
    area: 'Learn',
    sub: 'ValidBridge Academy',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=800&fit=crop&auto=format',
    alt: 'Professional learning and collaboration around laptop',
  },
  {
    num: '04',
    area: 'Live',
    sub: 'Property & Real Estate',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=800&fit=crop&auto=format',
    alt: 'Contemporary dining and residential property interior',
  },
]

function PhotoPanel({
  panel,
  loading,
}: {
  panel: (typeof panels)[0]
  loading: "eager" | "lazy"
}) {
  return (
    <a
      href={areas.find((a) => a.label === panel.area)?.href ?? '#'}
      className="group relative block overflow-hidden no-underline h-full active:opacity-90"
      style={{ backgroundColor: '#1E1E1C' }}
    >
      <img
        src={panel.img}
        alt={panel.alt}
        width={900}
        height={800}
        loading={loading}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{
          filter: 'grayscale(15%) contrast(1.06)',
          opacity: 0.78,
        }}
      />
      {/* Warm brand tint overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-10"
        style={{
          backgroundColor: '#B89A72',
          mixBlendMode: 'multiply',
          opacity: 0.18,
        }}
      />
      {/* Dark gradient for typography clarity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(23,23,22,0.88) 0%, rgba(23,23,22,0.18) 50%, rgba(23,23,22,0.35) 100%)',
        }}
      />

      {/* Top number indicator for panels 03 & 04 */}
      {(panel.num === '03' || panel.num === '04') && (
        <div
          className="absolute top-3 left-3 md:top-4 md:left-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,242,0.4)',
          }}
        >
          {panel.num}
        </div>
      )}

      {/* Bottom text block */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <div
            className="truncate"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,242,0.65)',
              marginBottom: '3px',
            }}
          >
            {panel.sub}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(18px, 2.2vw, 28px)',
              letterSpacing: '-0.01em',
              color: 'rgba(248,247,242,0.95)',
              lineHeight: 1,
            }}
          >
            {panel.area}
          </div>
        </div>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            color: 'rgba(248,247,242,0.4)',
            flexShrink: 0,
          }}
        >
          →
        </span>
      </div>
    </a>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#F8F7F2' }}>
      {/* ── MOBILE / TABLET LAYOUT (< lg) ── */}
      <div style={{ paddingTop: 'calc(4rem + env(safe-area-inset-top))' }}>
        <div className="px-5 py-7 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-16 animate-[fadeSlideIn_0.6s_ease_both]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-px bg-[#68655E] flex-shrink-0" />
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: '#68655E',
              }}
            >
              StratNovo / Technology &amp; Ventures
            </span>
          </div>

          <h1
            className="font-normal mb-4 sm:mb-5"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(38px, 10.5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#171716',
            }}
          >
            Ideas are cheap.
            <br />
            <em className="italic" style={{ color: '#68655E' }}>
              Execution
            </em>{' '}
            is the
            <br />
            product.
          </h1>

          <p
            className="font-sans mb-7 sm:mb-8"
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              fontWeight: 300,
              color: '#68655E',
              maxWidth: '46ch',
            }}
          >
            We build digital products, software systems, growth experiences, learning platforms, and
            property solutions for people and businesses ready to move forward.
          </p>

          <div className="flex flex-col xs:flex-row xs:items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 no-underline transition-colors duration-200 active:scale-[0.99] w-full xs:w-auto"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                minHeight: '48px',
                padding: '13px 28px',
                backgroundColor: '#171716',
                color: '#F8F7F2',
              }}
            >
              Start a conversation →
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center no-underline transition-opacity hover:opacity-60 w-full xs:w-auto"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                minHeight: '48px',
                padding: '6px 28px',
                color: '#68655E',
              }}
            >
              Explore our work
            </a>
          </div>
        </div>

        {/* 2×2 photo collage */}
        <div className="px-3 sm:px-4 pb-2">
          <div
            className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden shadow-sm"
            style={{
              backgroundColor: '#171716',
              // Square-ish cells, but never so short that the caption
              // overlaps the image on small phones.
              height: 'clamp(240px, 62vw, 340px)',
            }}
          >
            {panels.map((panel) => (
              <PhotoPanel key={panel.num} panel={panel} loading="eager" />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP SPLIT LAYOUT (lg:) ── */}
      <div
        className="hidden lg:grid lg:grid-cols-[44fr_56fr] xl:grid-cols-[41fr_59fr] items-start"
        style={{
          marginTop: '72px', // navbar height
          paddingTop: '28px', // comfortable, refined gap from navbar
          paddingBottom: '36px', // comfortable gap to below section
        }}
      >
        {/* Left Column: Focused text layout with tightened horizontal gap */}
        <div
          className="flex flex-col justify-start pl-8 lg:pl-12 xl:pl-16 pr-3 lg:pr-5 pt-3 xl:pt-5"
          style={{
            animation: 'fadeSlideIn 0.6s ease both',
            animationDelay: '0.1s',
          }}
        >
          {/* Eyebrow - positioned with tight, elegant distance from navbar */}
          <div className="flex items-center gap-3 mb-5 xl:mb-6">
            <div className="w-6 h-px bg-[#68655E] flex-shrink-0" />
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: '#68655E',
              }}
            >
              StratNovo / Technology &amp; Ventures
            </span>
          </div>

          {/* Headline - 3 lines with refined scale */}
          <h1
            className="font-normal mb-6 xl:mb-7"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(52px, 5.2vw, 78px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#171716',
            }}
          >
            Ideas are cheap.
            <br />
            <em className="italic" style={{ color: '#68655E' }}>
              Execution
            </em>{' '}
            is the
            <br />
            product.
          </h1>

          {/* Supporting paragraph - broader natural width closing empty space */}
          <p
            className="font-sans mb-8 xl:mb-9"
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              fontWeight: 300,
              color: '#68655E',
              maxWidth: '520px',
            }}
          >
            We build digital products, software systems, growth experiences, learning platforms, and
            property solutions for people and businesses ready to move forward.
          </p>

          {/* Dual CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 no-underline transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                padding: '14px 28px',
                backgroundColor: '#171716',
                color: '#F8F7F2',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2C2B28'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#171716'
              }}
            >
              Start a conversation →
            </a>
            <a
              href="#work"
              className="no-underline transition-opacity duration-150 hover:opacity-60 cursor-pointer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: '#171716',
              }}
            >
              Explore our work
            </a>
          </div>
        </div>

        {/* Right Column: Expanded 2×2 Photo Grid pulled bigger */}
        <div className="pr-6 lg:pr-10 xl:pr-14 pl-1 lg:pl-3">
          <div
            className="grid grid-cols-2 grid-rows-2 gap-[2px] rounded-xl overflow-hidden shadow-md"
            style={{
              backgroundColor: '#171716',
              height: 'clamp(560px, 78vh, 680px)',
              animation: 'fadeIn 0.5s ease both',
              animationDelay: '0.2s',
            }}
          >
            <PhotoPanel panel={panels[0]} loading="eager" />
            <PhotoPanel panel={panels[1]} loading="eager" />
            <PhotoPanel panel={panels[2]} loading="eager" />
            <PhotoPanel panel={panels[3]} loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}
