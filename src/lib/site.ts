/**
 * Site-wide constants. Everything marked TODO is a placeholder —
 * swap in the real value and it updates everywhere on the site.
 */
export const SITE = {
  name: "Boulder Silicon",
  tagline: "Chips, designed in Boulder.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://boulder-silicon.github.io/bouldersilicon.github.io",
  description:
    "Boulder Silicon is a student-run ASIC design club at the University of Colorado Boulder. We take chips from idea to tapeout — architecture, RTL, verification, and physical design.",
  // TODO: real club email
  contactEmail: "TODO-club-email@colorado.edu",
  // TODO: member application form (Google Form, etc.)
  applyUrl: "/#contact",
  githubUrl: "https://github.com/boulder-silicon",
  // TODO: real socials
  linkedinUrl: "https://www.linkedin.com/",
  instagramUrl: "https://www.instagram.com/",
} as const;

/** Prefix a path in /public with the configured basePath (needed for static export). */
export function asset(path: string) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
