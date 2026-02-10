# Architecture

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.0.10 | App Router, SSR/SSG, image optimization |
| React | 19.2.1 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| react-masonry-css | 1.0.16 | Responsive masonry grid layout |
| next-view-transitions | 0.3.5 | View Transitions API for smooth page animations |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx               # Root layout — Header, Footer, ViewTransitions wrapper
│   ├── page.tsx                 # Home page — renders ProjectGrid with all projects
│   ├── globals.css              # Global styles, CSS vars, animations, masonry
│   ├── favicon.ico
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Dynamic project detail page (server component)
├── components/
│   ├── Header.tsx               # Sticky nav — logo + menu trigger (client component)
│   ├── Footer.tsx               # Copyright footer
│   ├── ContactDrawer.tsx        # Slide-out contact panel (client component)
│   ├── ProjectGrid.tsx          # Masonry grid container (client component)
│   └── ProjectCard.tsx          # Individual project card with image
├── data/
│   └── projects.ts              # Hardcoded project data array
├── types/
│   └── index.ts                 # TypeScript interfaces (Project)
├── public/
│   ├── logo.svg                 # Portfolio logo (107x113)
│   ├── menu_trigger_0.svg       # Menu/contact button icon (96x66)
│   └── images/                  # Placeholder image files
├── next.config.ts               # Image remote patterns (placehold.co)
├── postcss.config.mjs           # Tailwind CSS PostCSS plugin
├── tsconfig.json                # TypeScript config (strict, path alias @/*)
├── eslint.config.mjs            # ESLint 9 flat config
└── package.json
```

## Routing

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Server component | Home — masonry grid of all projects |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Server component | Project detail with image gallery |

- **Internal projects** → route to `/projects/[slug]` with view transitions
- **External projects** → open `externalUrl` in new tab (no detail page)
- Invalid slugs or external-type slugs → `notFound()` (404)

## Static Generation

`generateStaticParams()` in `[slug]/page.tsx` pre-builds pages for all internal projects at build time:

```typescript
export async function generateStaticParams() {
  return projects
    .filter((project) => project.type === "internal")
    .map((project) => ({ slug: project.slug }));
}
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── ViewTransitions (next-view-transitions wrapper)
│   ├── Header (client)
│   │   └── ContactDrawer (client)
│   ├── <main>
│   │   ├── Home → ProjectGrid (client)
│   │   │           └── ProjectCard (per project)
│   │   └── ProjectPage (server, dynamic [slug])
│   └── Footer
```

## Client vs Server Components

| Component | Type | Why |
|-----------|------|-----|
| Header | Client | useState for drawer toggle |
| ContactDrawer | Client | Receives isOpen prop, onClick handlers |
| ProjectGrid | Client | react-masonry-css requires client-side rendering |
| ProjectCard | Server | No state or effects — just renders link + image |
| Footer | Server | Static content only |
| Home page | Server | Just passes data to ProjectGrid |
| Project detail page | Server | Static generation, no interactivity |

## Image Handling

- Uses Next.js `Image` component for automatic optimization
- Remote pattern configured in `next.config.ts` for `placehold.co`
- Cover images: 600x800px (portrait ratio)
- Detail images: 1200x800px+ (variable aspect ratios)
- SVG assets served from `/public/` (logo, menu trigger)

## Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework |
| `react` / `react-dom` | UI rendering |
| `react-masonry-css` | Pinterest-style responsive grid layout |
| `next-view-transitions` | CSS View Transitions API wrapper for Next.js |
| `tailwindcss` / `@tailwindcss/postcss` | Utility CSS framework |
| `typescript` | Type checking |
| `eslint` / `eslint-config-next` | Code quality |
