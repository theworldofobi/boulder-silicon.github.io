"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/primitives/Button";
import { Logo } from "@/components/visuals/Logo";
import { navLinks } from "@/data/nav";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b text-white transition-colors duration-300",
        scrolled || open
          ? "border-white/10 bg-black/85 backdrop-blur-md"
          : "border-transparent bg-black",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        <Link
          href="/"
          prefetch={false}
          aria-label={`${SITE.name} home`}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={`/${l.href}`}
              prefetch={false}
              className="hover:text-gold text-[14px] text-white/70 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Button href={SITE.applyUrl} size="md">
            Join
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 bg-white transition-all",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1.5 left-0 h-0.5 w-5 bg-white transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 bg-white transition-all",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-white/10 bg-black px-6 pt-2 pb-6 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={`/${l.href}`}
                prefetch={false}
                onClick={() => setOpen(false)}
                className="hover:text-gold block border-b border-white/10 py-3.5 text-[17px] text-white/85"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          href={SITE.applyUrl}
          size="lg"
          className="mt-5 w-full"
          onClick={() => setOpen(false)}
        >
          Join Boulder Silicon
        </Button>
      </nav>
    </header>
  );
}
