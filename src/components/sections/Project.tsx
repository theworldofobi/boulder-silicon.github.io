import {
  Eyebrow,
  SectionHeading,
} from "@/components/primitives/SectionHeading";
import { milestones, project } from "@/data/project";
import { cn } from "@/lib/cn";

export function Project() {
  return (
    <section
      id="project"
      className="bg-night scroll-mt-16 px-6 py-24 text-white md:scroll-mt-[72px] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow className="text-gold">First tapeout</Eyebrow>
            <SectionHeading className="text-white">
              Project <span className="text-gold">{project.codename}.</span>{" "}
              <span className="text-white/50">Our first student chip.</span>
            </SectionHeading>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-white/70">
              {project.summary}
            </p>

            <dl className="rounded-card mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              {project.specs.map((s) => (
                <div key={s.label} className="bg-night p-5">
                  <dt className="font-mono text-[11px] tracking-[0.12em] text-white/45 uppercase">
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 text-[17px] font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <BlockDiagram />
        </div>

        <div className="reveal mt-20">
          <p className="mb-6 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
            Road to tapeout
          </p>
          <ol className="grid gap-3 sm:grid-cols-5">
            {milestones.map((m, i) => (
              <li
                key={m.label}
                className={cn(
                  "rounded-card relative border p-5",
                  m.status === "active"
                    ? "border-gold bg-gold/10"
                    : m.status === "done"
                      ? "border-white/15 bg-white/[0.04]"
                      : "border-dashed border-white/10",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-white/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StatusPill status={m.status} />
                </div>
                <p className="mt-4 text-[20px] font-semibold tracking-tight">
                  {m.label}
                </p>
                <p className="mt-1 text-[14px] leading-snug text-white/55">
                  {m.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: "done" | "active" | "upcoming" }) {
  const label =
    status === "done"
      ? "Done"
      : status === "active"
        ? "In progress"
        : "Upcoming";
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] uppercase",
        status === "active" && "bg-gold text-black",
        status === "done" && "bg-white/10 text-white/80",
        status === "upcoming" && "text-white/40",
      )}
    >
      {label}
    </span>
  );
}

/** Illustrative SoC floorplan — TODO: swap for the real block diagram. */
function BlockDiagram() {
  const block = "fill-[#141414] stroke-[#CFB87C]/60";
  return (
    <figure className="rounded-card border border-white/10 bg-black p-5 md:p-7">
      <svg
        viewBox="0 0 400 320"
        className="h-auto w-full"
        role="img"
        aria-labelledby="bd-title"
      >
        <title id="bd-title">
          Illustrative block diagram of the Flatiron chip
        </title>
        {/* pad ring */}
        <rect
          x="6"
          y="6"
          width="388"
          height="308"
          rx="10"
          fill="none"
          stroke="#CFB87C"
          strokeOpacity="0.35"
          strokeDasharray="4 6"
        />
        <g className={block} strokeWidth="1.2">
          <rect x="30" y="30" width="150" height="120" rx="6" />
          <rect x="200" y="30" width="170" height="70" rx="6" />
          <rect x="200" y="112" width="80" height="80" rx="6" />
          <rect x="290" y="112" width="80" height="80" rx="6" />
          <rect x="30" y="166" width="150" height="56" rx="6" />
          <rect x="30" y="236" width="340" height="56" rx="6" />
          <rect x="200" y="204" width="170" height="20" rx="4" />
        </g>
        <g
          fill="#CFB87C"
          fontFamily="ui-monospace, monospace"
          fontSize="12"
          letterSpacing="1"
        >
          <text x="44" y="56">
            RV32 CORE
          </text>
          <text x="214" y="56">
            ACCELERATOR
          </text>
          <text x="214" y="138">
            SRAM
          </text>
          <text x="304" y="138">
            SRAM
          </text>
          <text x="44" y="192">
            DEBUG / JTAG
          </text>
          <text x="44" y="262">
            GPIO · UART · SPI
          </text>
        </g>
        <g
          fill="#fff"
          fillOpacity="0.4"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
        >
          <text x="44" y="74">
            5-stage pipeline
          </text>
          <text x="214" y="74">
            int8 MAC array
          </text>
          <text x="214" y="154">
            2 KB
          </text>
          <text x="304" y="154">
            2 KB
          </text>
          <text x="210" y="218">
            SYSTEM BUS
          </text>
          <text x="44" y="280">
            peripherals
          </text>
        </g>
        {/* hatched compute area */}
        <g stroke="#CFB87C" strokeOpacity="0.25">
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M${44 + i * 14} 140l14-40`} />
          ))}
        </g>
      </svg>
      <figcaption className="mt-3 font-mono text-[11px] tracking-[0.1em] text-white/40 uppercase">
        Floorplan sketch · not to scale
      </figcaption>
    </figure>
  );
}
