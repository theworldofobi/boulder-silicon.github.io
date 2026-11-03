import { Button } from "@/components/primitives/Button";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-gold relative scroll-mt-16 overflow-hidden px-6 py-24 text-center text-black md:scroll-mt-[72px] md:py-32"
    >
      <div
        className="cta-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <h2 className="font-display relative mx-auto max-w-[800px] text-[clamp(44px,7vw,84px)] leading-[1.02] font-bold tracking-[-0.04em]">
        Interested?
      </h2>
      <p className="relative mx-auto mt-5 max-w-[560px] text-xl leading-relaxed text-black/75">
        We&apos;re looking for curious, driven students of any major — plus
        industry partners and faculty who want to help CU tape out.
      </p>
      <div className="relative mt-10 flex flex-wrap justify-center gap-3">
        {/* TODO: point SITE.applyUrl at the member application form */}
        <Button
          href={`mailto:${SITE.contactEmail}?subject=Joining%20Boulder%20Silicon`}
          variant="dark"
          size="lg"
        >
          Get in touch
        </Button>
        <Button
          href={SITE.githubUrl}
          variant="ghost"
          size="lg"
          className="border-black/25 bg-transparent text-black hover:border-black hover:text-black"
        >
          See our work
        </Button>
      </div>
      <p className="relative mt-8 text-lg font-medium tracking-tight">
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="underline-offset-4 select-all hover:underline"
        >
          {SITE.contactEmail}
        </a>
      </p>
    </section>
  );
}
