# Boulder Silicon website

Website for **Boulder Silicon**, the student ASIC design club at CU Boulder and a member of the [ASIC Network](https://asicnetwork.net/network.html).

Built with Next.js 15 (App Router, static export), TypeScript, and Tailwind CSS v4. It uses the CU Boulder palette: gold `#CFB87C`, black, dark gray `#565A5C`, and light gray `#A2A4A3`.

## Editing content

Most edits only touch these files:

| File | What it controls |
| --- | --- |
| `src/lib/site.ts` | Club email, application form link, GitHub/LinkedIn/Instagram URLs |
| `src/data/teams.ts` | Team cards |
| `src/data/project.ts` | Current chip project, its specs, and tapeout milestones |
| `src/data/network.ts` | ASIC Network tutorials and sister clubs |
| `src/data/sponsors.ts` | Sponsor list (logos go in `public/sponsors/`) |
| `src/data/nav.ts` | Header links |

To find every placeholder that still needs a real value, run `grep -rn TODO src`.

## Development

Requires Node 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck
npm run build      # static site in ./out
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup: go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

The repository is named `bouldersilicon.github.io` but the org is `boulder-silicon`, so GitHub serves it as a project site at
`https://boulder-silicon.github.io/bouldersilicon.github.io/`. The workflow sets the base path automatically. To get the shorter URL, either rename the repo to `boulder-silicon.github.io` or add a custom domain. Neither requires a code change.
