import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-gold-dark mb-4 font-mono text-[12px] tracking-[0.14em] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Large two-tone heading in the style of "Statement. Muted follow-up." */
export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-[clamp(32px,4.6vw,56px)] leading-[1.06] font-semibold tracking-[-0.03em]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
