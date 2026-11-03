import { Logo } from "@/components/visuals/Logo";
import { asicNetwork } from "@/data/network";
import { SITE } from "@/lib/site";

const links = [
  { label: "GitHub", href: SITE.githubUrl },
  { label: "LinkedIn", href: SITE.linkedinUrl },
  { label: "Instagram", href: SITE.instagramUrl },
  { label: "ASIC Network", href: asicNetwork.url },
];

export function Footer() {
  return (
    <footer className="bg-black px-6 pt-14 pb-10 text-[14px] text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo className="text-white" />
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-white/50">
              Student ASIC design club at the University of Colorado Boulder.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="hover:text-gold transition-colors"
            >
              {SITE.contactEmail}
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name} · Built by students, for
            students.
          </span>
          <span className="border-gold/30 text-gold/80 inline-flex w-fit items-center rounded-full border px-3 py-1 tracking-[0.12em] uppercase">
            Chips, designed in Boulder
          </span>
        </div>
        <p className="mt-5 max-w-[760px] text-[11px] leading-relaxed text-white/35">
          Boulder Silicon is an independent student organization. It does not
          speak for and is not endorsed by the University of Colorado Boulder.
        </p>
      </div>
    </footer>
  );
}
