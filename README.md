# Rojan Adhikari — Portfolio

A single-page personal portfolio for Rojan Adhikari, Data Engineer. Built as a
static-first Next.js App Router site with a sticky two-column desktop layout
(profile/nav sidebar + scrolling content) that collapses into a single-column
mobile layout with a compact sticky nav bar.

Deployed as a **static HTML export** (`output: "export"` in `next.config.ts`)
to Namecheap cPanel shared hosting at `www.rojanadhikari.dev` — there's no
Node.js server in production, `npm run build` emits a self-contained `out/`
directory of plain HTML/CSS/JS/images that any static file host can serve.

## Tech stack

- **Next.js (App Router)** — Server Components by default; only `Header`
  (active-section highlighting + mobile menu) is a Client Component.
- **TypeScript**
- **Tailwind CSS v4** — theme tokens (colors, fonts) defined in
  `app/globals.css` via `@theme`, no separate `tailwind.config.*` file needed.
- **lucide-react** for UI icons. GitHub/LinkedIn brand marks aren't part of
  lucide's icon set, so they're small inline SVGs in
  `components/icons/BrandIcons.tsx` instead of a second icon dependency.
- No UI component library, no animation library (Framer Motion etc. not used).

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD, skip link
  page.tsx               Home page — assembles the sidebar + all sections
  globals.css             Tailwind import + design tokens + a11y/motion CSS
  sitemap.ts / robots.ts  Generated sitemap.xml / robots.txt
  icon.tsx / apple-icon.tsx / opengraph-image.tsx   Generated favicon/OG images
  not-found.tsx           404 page
  projects/[slug]/page.tsx   Dynamic case-study route

components/              Reusable, presentational components (see below)
data/                    All editable content lives here, typed via data/types.ts
lib/useActiveSection.ts  IntersectionObserver hook for scrollspy nav
public/                  Static files served as-is (résumé PDF, etc.)
```

### Content data (edit these, not the components)

| File | Controls |
| --- | --- |
| `data/profile.ts` | Name, title, headline, email, social URLs, site URL, résumé path, availability, "Currently" panel |
| `data/nav.ts` | Nav labels/order — must match section `id`s in `app/page.tsx` |
| `data/experience.ts` | Work experience timeline entries |
| `data/projects.ts` | Featured projects + full case-study content |
| `data/skills.ts` | Skills grouped by category |
| `data/education.ts` | Degree, institution, coursework |
| `data/certifications.ts` | Certifications — leave `[]` to hide the section entirely |

### Components

`Header`, `Hero`, `SectionHeading`, `ActiveSectionNavigation`,
`ExperienceTimeline`/`ExperienceItem`, `ProjectCard`, `SkillGroup`,
`SocialLinks`, `ResumeButton`, `ContactSection`, `Footer`, plus small
presentational pieces (`AvailabilityBadge`, `CurrentlyPanel`, `TechPill`,
`CaseStudySection`, `SkipLink`).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build     # emits the static site to out/
npm run start     # serves out/ locally at http://localhost:3000, the same way cPanel will
```

`npm run start` runs `serve out` (a plain static file server) rather than
`next start` — with `output: "export"` set, there's no Next.js server to
start; `out/` is the entire deployable artifact.

## Linting and type checking

```bash
npm run lint
npm run typecheck
```

Both must pass with zero errors before deploying.

## Customizing content

All personal content is centralized in `data/*.ts` — no content is hardcoded
in components. To update the site:

1. Edit the relevant file in `data/`.
2. TypeScript will flag anything that no longer matches the shape defined in
   `data/types.ts`.
3. Run `npm run dev` and check the affected section.

### Adding the résumé

The résumé button/links point at `data/profile.ts` → `resumePath`
(`/rojan-adhikari-data-engineer-resume.pdf`). A file already exists at
`public/rojan-adhikari-data-engineer-resume.pdf`. To replace it:

1. Drop the new PDF in `public/`, keeping the same filename (or update
   `resumePath` if you rename it).
2. Update `resumeLastUpdated` in `data/profile.ts` so the "Last updated"
   label on the site stays accurate.

### Adding project images

Set `image: { src: "/projects/your-image.png", alt: "..." }` on a project in
`data/projects.ts`, and place the file in `public/projects/`. `ProjectCard`
only renders the image block when `image` is present — it's entirely
optional per project.

### Project links (GitHub / live demo)

`ProjectCard` and the case-study page only render a "Source" / "Live demo"
button when `links.github` / `links.demo` is set on that project in
`data/projects.ts`. Leave them unset rather than pointing at a placeholder —
broken or fake links are never rendered.

### Case studies

Each project's `caseStudy` object in `data/projects.ts` drives
`app/projects/[slug]/page.tsx`. `results` should stay an empty array until
you have real, verified measurements to report — the page shows "Verified
results have not been published for this project yet." instead of inventing
numbers. If you do add results, set `illustrative: true` on any entry that's
a placeholder rather than a confirmed measurement; the page labels those
explicitly.

### Certifications

`data/certifications.ts` exports an empty array by default. The Certifications
block inside the Education section only renders when this array is non-empty
— add real, earned certifications only.

## SEO metadata

Most SEO configuration lives in `app/layout.tsx`:

- `title` / `description` — also update the constants at the top of the file.
- `metadataBase` / `alternates.canonical` — derived from `profile.siteUrl` in
  `data/profile.ts`. **Update `siteUrl` to your real deployed domain.**
- Open Graph / Twitter card metadata — same file; the OG/Twitter image is
  generated at request time by `app/opengraph-image.tsx`.
- JSON-LD `Person` structured data — built from `data/profile.ts`, rendered
  as a `<script type="application/ld+json">` tag in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` are generated automatically from
  `profile.siteUrl` and the `projects` data — no manual XML/text files to
  maintain.
- `app/icon.png` / `app/apple-icon.png` / `app/opengraph-image.png` are the
  favicon, Apple touch icon, and Open Graph/Twitter card image (an "RA"
  monogram, generated once and saved as static files — see below for why
  they're static rather than generated per-request). Replace them with
  designed images of the same filename/size to change the artwork.

## Replacing placeholder URLs

Two values in `data/` are intentionally left as placeholders because they
weren't provided as real content:

- `data/education.ts` → `institution: "[UNIVERSITY NAME]"` — replace with the
  real institution name.
- Any project's `links.github` / `links.demo` — currently unset (hidden) for
  all four featured projects; add real URLs when available.

Everything else (GitHub, LinkedIn, email, site URL) is filled in with real
values in `data/profile.ts` — update there if any of them change.

## Deploying to GitHub Pages (current setup)

This repo is a GitHub Pages user-site repo (`rojan998.github.io`), so Pages
is free, requires no hosting account, and — since the site is a static
export — needs no server. `.github/workflows/deploy.yml` builds and deploys
automatically on every push to `master`.

**One-time setup:**

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Repo → Settings → Pages → Custom domain: `www.rojanadhikari.dev`, then
   check **Enforce HTTPS** once the certificate has been issued (can take a
   few minutes after DNS is correct).
3. At your DNS provider (Namecheap → Domain List → Manage →
   Advanced DNS for `rojanadhikari.dev`):
   - Four `A` records, host `@`, pointing at GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record, host `www`, pointing at `rojan998.github.io`
   - Remove any other A/CNAME records for `@`/`www` left over from a
     previous host.
4. Push to `master` (merge this branch in when ready) — the workflow builds
   and deploys automatically. Re-run it any time from the Actions tab.

The repo's `CNAME` file (already present, containing `www.rojanadhikari.dev`)
is what tells GitHub Pages which custom domain to serve; the deploy workflow
publishes it along with the rest of `out/`.

## Alternative: Namecheap cPanel shared hosting

If this ever moves to shared hosting instead, the static export still
applies — no Next.js server needed there either:

1. `npm run build` — produces `out/`, a complete, self-contained static site
   (includes `.htaccess`, favicon/OG images, résumé PDF, sitemap, robots.txt).
2. Zip the **contents** of `out/` (not the folder itself — files must sit at
   the zip root so they extract directly into `public_html/`).
3. In cPanel → File Manager, upload the zip into `public_html` and use
   "Extract" to unpack it in place.
4. Confirm `www.rojanadhikari.dev` and `rojanadhikari.dev` both resolve to
   that document root, and that AutoSSL has issued a certificate for both —
   `public/.htaccess` redirects everything to `https://www.rojanadhikari.dev`,
   which will loop/fail without a valid cert.

`public/.htaccess` is inert on GitHub Pages (it doesn't process `.htaccess`
at all) — it's kept only for this scenario.

### Switching to a Node.js host (Vercel, etc.)

If this ever moves to a host that runs Next.js itself (Vercel, a cPanel plan
with "Setup Node.js App", etc.), remove `output: "export"` and
`images.unoptimized` from `next.config.ts`, remove the
`export const dynamic = "force-static"` lines from `app/sitemap.ts` and
`app/robots.ts` (static-export-only requirements), and change the `start`
script back to `next start`. The static `app/icon.png` /
`app/apple-icon.png` / `app/opengraph-image.png` files work unchanged on a
Node host too — no need to revert those to dynamic routes.

## Environment variables

None are required. All configuration is static, compiled from `data/*.ts` at
build time.

## Accessibility notes

- Skip-to-content link at the top of every page (`components/SkipLink.tsx`).
- Active nav item uses `aria-current="location"`.
- Smooth scrolling and the small entrance "reveal" animation are both gated
  behind `prefers-reduced-motion: no-preference` in `app/globals.css`.
- All interactive elements have a minimum 44×44px hit target and a visible
  `:focus-visible` outline.
