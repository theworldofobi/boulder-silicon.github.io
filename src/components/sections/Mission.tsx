import type { ReactNode } from "react";
import {
  Eyebrow,
  SectionHeading,
} from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

type Card = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  accent?: boolean;
  className?: string;
};

// TODO: tune copy once the club's first project is locked in.
const cards: Card[] = [
  {
    eyebrow: "Hands-on",
    title: "Real chips, not coursework.",
    description:
      "Members design blocks that ship on actual silicon. You leave with GDSII, not just a grade.",
    accent: true,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    eyebrow: "Full flow",
    title: "RTL → GDSII",
    description:
      "Architecture, SystemVerilog, verification, synthesis, and place-and-route.",
  },
  {
    eyebrow: "Open source",
    title: "SKY130 + OpenLane",
    description:
      "An open PDK and toolchain anyone can install on day one. (TODO: confirm flow)",
  },
  {
    eyebrow: "Any major",
    title: "No experience required.",
    description:
      "ECE, CS, physics, applied math — if you're willing to put in the work, there's a team for you.",
    className: "md:col-span-1",
  },
  {
    eyebrow: "Industry ready",
    title: "Learn how chips are built.",
    description:
      "Design reviews, signoff checklists, and the same roles you'd hold at a chip company.",
    className: "md:col-span-1",
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-16 px-6 py-24 md:scroll-mt-[72px] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal max-w-[860px]">
          <Eyebrow>Mission</Eyebrow>
          <SectionHeading>
            Make chip design accessible at CU.{" "}
            <span className="text-ink-muted/70">
              Students learn the full ASIC flow by taping out together.
            </span>
          </SectionHeading>
        </div>

        <div className="reveal mt-14 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.eyebrow}
              className={cn(
                "rounded-card hover:shadow-elevated relative flex flex-col overflow-hidden border p-6 transition-all duration-300 hover:-translate-y-[2px]",
                c.accent
                  ? "justify-end border-black bg-black text-white"
                  : "bg-surface border-border shadow-card hover:border-gold",
                c.className,
              )}
            >
              {c.accent ? <DieArt /> : null}
              <p
                className={cn(
                  "relative mb-2 font-mono text-[11px] tracking-[0.12em] uppercase",
                  c.accent ? "text-gold" : "text-gold-dark",
                )}
              >
                {c.eyebrow}
              </p>
              <h3
                className={cn(
                  "relative font-semibold tracking-[-0.02em]",
                  c.accent
                    ? "text-[clamp(28px,3.4vw,40px)] leading-[1.05]"
                    : "text-[22px] leading-tight",
                )}
              >
                {c.title}
              </h3>
              <p
                className={cn(
                  "relative mt-2 max-w-[420px] text-[15px] leading-relaxed",
                  c.accent ? "text-white/70" : "text-ink-muted",
                )}
              >
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DieArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -top-6 -right-6 h-64 w-64 opacity-60 md:h-80 md:w-80"
    >
      <g fill="none" stroke="#CFB87C" strokeWidth="0.8">
        <rect x="40" y="40" width="120" height="120" rx="6" />
        <rect x="58" y="58" width="40" height="34" />
        <rect x="104" y="58" width="38" height="56" />
        <rect x="58" y="98" width="40" height="44" />
        <rect x="104" y="120" width="38" height="22" />
        {Array.from({ length: 9 }).map((_, i) => {
          const p = 52 + i * 12;
          return (
            <g key={i}>
              <path d={`M${p} 40v-14M${p} 160v14M40 ${p}h-14M160 ${p}h14`} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
