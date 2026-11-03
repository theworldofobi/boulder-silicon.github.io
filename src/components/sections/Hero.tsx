import { Button } from "@/components/primitives/Button";
import { CircuitGrid } from "@/components/visuals/CircuitGrid";
import { asicNetwork } from "@/data/network";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-black text-white md:min-h-[calc(100svh-4.5rem)]">
      <CircuitGrid />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-6 pt-14 pb-36 text-center md:pt-20 md:pb-44">
        <a
          href={asicNetwork.url}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up border-gold/30 hover:border-gold/60 mb-8 inline-flex items-center gap-2 rounded-full border bg-white/5 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-white/75 uppercase transition-colors"
        >
          <span className="bg-gold h-1.5 w-1.5 rounded-full" />
          CU Boulder · ASIC Design Club
        </a>

        <h1
          className="animate-fade-up font-display text-[clamp(44px,8.5vw,96px)] leading-[1.02] font-bold tracking-[-0.04em]"
          style={{ animationDelay: "0.08s" }}
        >
          Chips, designed
          <br />
          <span className="text-gold">in Boulder.</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          style={{ animationDelay: "0.16s" }}
        >
          A student-run team at the University of Colorado Boulder taking real
          silicon from spec to tapeout — architecture, RTL, verification, and
          layout.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <Button href={SITE.applyUrl} size="lg">
            Join the club
          </Button>
          <Button href={SITE.githubUrl} variant="secondary" size="lg">
            View our GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
