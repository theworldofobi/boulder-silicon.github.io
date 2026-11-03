import { cn } from "@/lib/cn";

/** Chip mark: a gold die with pins and a Flatirons silhouette. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="12" fill="#000" />
      <g stroke="#CFB87C" strokeWidth="3" strokeLinecap="round">
        <path d="M22 10v8M32 10v8M42 10v8M22 46v8M32 46v8M42 46v8M10 22h8M10 32h8M10 42h8M46 22h8M46 32h8M46 42h8" />
      </g>
      <rect x="18" y="18" width="28" height="28" rx="4" fill="#CFB87C" />
      <path d="M23 39l6-10 4 6 3-4 5 8z" fill="#000" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="rounded-[9px] ring-1 ring-white/15" />
      <span className="font-display text-[17px] font-semibold tracking-tight">
        Boulder <span className="text-gold">Silicon</span>
      </span>
    </span>
  );
}
