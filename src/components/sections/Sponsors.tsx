import {
  Eyebrow,
  SectionHeading,
} from "@/components/primitives/SectionHeading";
import { sponsors } from "@/data/sponsors";
import { SITE, asset } from "@/lib/site";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-surface border-border scroll-mt-16 border-t px-6 py-24 md:scroll-mt-[72px] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mx-auto max-w-[820px] text-center">
          <Eyebrow>Sponsors</Eyebrow>
          <SectionHeading>
            Back the next generation{" "}
            <span className="text-ink-muted/70">of chip designers.</span>
          </SectionHeading>
          <p className="text-ink-muted mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed">
            Sponsorship funds tapeouts, EDA tooling, and workshops — and
            connects you with students who have actually shipped silicon.
          </p>
        </div>

        {sponsors.length > 0 ? (
          <ul className="reveal mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {sponsors.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                >
                  {s.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={asset(s.logo)}
                      alt={s.name}
                      className="h-10 w-auto"
                    />
                  ) : (
                    <span className="font-display text-xl font-semibold">
                      {s.name}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="reveal mx-auto mt-14 grid max-w-[920px] gap-4 sm:grid-cols-3">
            {["Tape-out support", "Tooling & EDA", "Recruiting"].map(
              (tier, i) => (
                <div
                  key={tier}
                  className="rounded-card border-border hover:border-gold border border-dashed p-6 text-left transition-colors"
                >
                  <span className="text-gold-dark font-mono text-[12px]">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-[19px] font-semibold tracking-tight">
                    {tier}
                  </p>
                </div>
              ),
            )}
          </div>
        )}

        <p className="reveal mt-10 text-center text-[15px]">
          <a
            href={`mailto:${SITE.contactEmail}?subject=Sponsoring%20Boulder%20Silicon`}
            className="text-gold-dark font-medium underline-offset-4 hover:underline"
          >
            Become a sponsor →
          </a>
        </p>
      </div>
    </section>
  );
}
