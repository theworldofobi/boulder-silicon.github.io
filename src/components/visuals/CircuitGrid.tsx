/**
 * Hero background: a faint die grid with routed gold traces and a
 * Flatirons skyline along the bottom. Pure SVG, no JS.
 */
export function CircuitGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(207,184,124,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(207,184,124,0.09) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, #000 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, #000 35%, transparent 85%)",
        }}
      />
      {/* glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(207,184,124,0.22), transparent 65%)",
        }}
      />
      {/* traces */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
      >
        <g
          fill="none"
          stroke="#CFB87C"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g opacity="0.22">
            <path d="M0 168h224v112h112v-56h168" />
            <path d="M1200 224H1008v112H896v56H728" />
            <path d="M0 560h168V448h112v56h112" />
            <path d="M1200 504h-168v-56H896v112H784" />
            <path d="M336 0v112h56v56" />
            <path d="M840 0v56h-56v112" />
          </g>
          <g opacity="0.7" strokeDasharray="6 394" className="animate-trace">
            <path d="M0 168h224v112h112v-56h168" />
            <path d="M1200 224H1008v112H896v56H728" />
            <path d="M0 560h168V448h112v56h112" />
            <path d="M1200 504h-168v-56H896v112H784" />
          </g>
        </g>
        <g fill="#CFB87C" opacity="0.45">
          <circle cx="504" cy="224" r="3.5" />
          <circle cx="728" cy="392" r="3.5" />
          <circle cx="392" cy="504" r="3.5" />
          <circle cx="784" cy="560" r="3.5" />
          <circle cx="392" cy="168" r="3.5" />
          <circle cx="784" cy="168" r="3.5" />
        </g>
      </svg>
      {/* Flatirons */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[22%] min-h-[110px] w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 200"
      >
        <path
          d="M0 200V150l90-30 70 22 80-64 60 40 55-95 45 70 50-110 55 85 45-60 60 92 70-48 60 36 80-42 90 50 80-26 90 34 70-14 100 36v54z"
          fill="#0b0b0b"
        />
        <path
          d="M0 150l90-30 70 22 80-64 60 40 55-95 45 70 50-110 55 85 45-60 60 92 70-48 60 36 80-42 90 50 80-26 90 34 70-14 100 36"
          fill="none"
          stroke="#CFB87C"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
