import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  // gold fill — use on dark or light backgrounds
  primary: "bg-gold text-black hover:bg-[#dcc995] border border-gold",
  // outline that adapts to dark sections
  secondary:
    "border border-white/30 text-white hover:border-gold hover:text-gold bg-white/5",
  ghost:
    "border border-border text-ink hover:border-gold-dark hover:text-gold-dark bg-surface",
  // black fill — for use on the gold CTA band
  dark: "bg-black text-white hover:bg-[#1c1c1c] border border-black",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "rounded-button inline-flex items-center justify-center gap-2 font-medium tracking-tight whitespace-nowrap transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  // Internal routes go through next/link so the basePath is applied.
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} prefetch={false} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
