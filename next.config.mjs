/**
 * Static export for GitHub Pages.
 *
 * This repo (boulder-silicon/bouldersilicon.github.io) is served as a
 * *project* site at https://boulder-silicon.github.io/bouldersilicon.github.io/
 * so the deploy workflow injects NEXT_PUBLIC_BASE_PATH from
 * actions/configure-pages. Locally it is empty and the site runs at "/".
 *
 * @type {import('next').NextConfig}
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
