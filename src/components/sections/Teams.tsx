import {
  Eyebrow,
  SectionHeading,
} from "@/components/primitives/SectionHeading";
import { teams } from "@/data/teams";

export function Teams() {
  return (
    <section
      id="teams"
      className="bg-surface border-border scroll-mt-16 border-y px-6 py-24 md:scroll-mt-[72px] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <Eyebrow>Teams</Eyebrow>
            <SectionHeading>
              Six teams. <span className="text-ink-muted/70">One chip.</span>
            </SectionHeading>
          </div>
          <p className="text-ink-muted max-w-sm text-[16px] leading-relaxed">
            Every member joins a team that mirrors a role in industry. Teams
            meet weekly and sync at design reviews.
          </p>
        </div>

        <ol className="reveal rounded-card border-border bg-border mt-14 grid gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <li
              key={t.id}
              id={t.id}
              className="group bg-surface hover:bg-gold-soft/60 relative p-7 transition-colors duration-300 md:p-8"
            >
              <span className="text-gold-dark font-mono text-[13px] tracking-[0.1em]">
                {t.index}
              </span>
              <h3 className="mt-6 text-[24px] leading-tight font-semibold tracking-[-0.02em]">
                {t.name}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                {t.description}
              </p>
              <span
                aria-hidden="true"
                className="bg-gold absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
