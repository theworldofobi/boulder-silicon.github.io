import { Button } from "@/components/primitives/Button";
import {
  Eyebrow,
  SectionHeading,
} from "@/components/primitives/SectionHeading";
import { asicNetwork, sisterClubs, tutorials } from "@/data/network";

export function Network() {
  return (
    <section
      id="network"
      className="scroll-mt-16 px-6 py-24 md:scroll-mt-[72px] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Learn</Eyebrow>
            <SectionHeading>
              Start from zero.{" "}
              <span className="text-ink-muted/70">
                Open tutorials, shared across clubs.
              </span>
            </SectionHeading>
            <p className="text-ink-muted mt-6 max-w-[480px] text-[17px] leading-relaxed">
              New members ramp up on the ASIC Network&apos;s open tutorials
              before joining a team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tutorials.map((t) => (
              <a
                key={t.href}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-card border-border bg-surface shadow-card hover:border-gold hover:shadow-elevated flex flex-col border p-6 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <span className="text-gold-dark font-mono text-[13px]">
                  {t.index}
                </span>
                <h3 className="mt-5 text-[26px] font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="text-ink-muted mt-2 flex-1 text-[15px] leading-relaxed">
                  {t.description}
                </p>
                <span className="text-gold-dark mt-6 text-[14px] font-medium">
                  Open tutorials{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal rounded-card mt-20 overflow-hidden bg-black text-white">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <Eyebrow className="text-gold">The ASIC Network</Eyebrow>
              <h3 className="text-[clamp(28px,3.4vw,40px)] leading-[1.08] font-semibold tracking-[-0.025em]">
                Silicon is a team sport.
              </h3>
              <p className="mt-4 max-w-[420px] text-[16px] leading-relaxed text-white/65">
                Boulder Silicon is part of a collective of university ASIC and
                VLSI clubs working in the open — sharing docs, flows, and
                biweekly progress.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={asicNetwork.mapUrl}>See the network</Button>
                <Button href={asicNetwork.githubUrl} variant="secondary">
                  GitHub
                </Button>
              </div>
            </div>

            <div>
              <p className="mb-4 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
                Sister clubs
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {sisterClubs.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-gold/60 flex items-baseline justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="text-[15px] font-medium">{c.name}</span>
                      <span className="shrink-0 font-mono text-[11px] text-white/45">
                        {c.campus}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
