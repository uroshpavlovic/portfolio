# Project Todo

## Debug Code to Remove

- [ ] `components/ProjectCard.tsx:18` — Red debug background `rgba(255, 0, 0, 0.3)`
- [ ] `app/projects/[slug]/page.tsx:34` — Blue debug background `rgba(0, 0, 255, 0.3)`

## Placeholder Content to Replace

- [ ] Contact email in `components/ContactDrawer.tsx` — currently `email@example.com`
- [ ] Contact phone in `components/ContactDrawer.tsx` — currently `+381 00 000 0000`
- [ ] All 6 project cover images — currently `placehold.co` URLs
- [ ] All gallery images for internal projects — currently `placehold.co` URLs
- [ ] Project titles, descriptions, client names, years in `data/projects.ts`
- [ ] External project URLs — currently `example.com` / `behance.net`

## Styling Migration (Inline → Tailwind)

- [ ] `components/Header.tsx` — All inline styles on `<header>` and `<button>`
- [ ] `components/Footer.tsx` — All inline styles on `<footer>`
- [ ] `components/ContactDrawer.tsx` — Inline styles on close button, content divs, heading
- [ ] `components/ProjectCard.tsx` — Inline styles on wrapper div and Image
- [ ] `app/projects/[slug]/page.tsx` — Inline styles on image wrappers and Image elements
- [ ] `app/globals.css` — Remove static layout classes that Tailwind replaces (`.project-layout`, `.project-info`, `.project-title`, `.project-description`, `.project-meta`)

## Missing Features

- [x] Logo SVG in header
- [x] Menu trigger SVG in header
- [ ] Keyboard support for ContactDrawer (Escape key to close)
- [ ] Focus trap in ContactDrawer when open
- [ ] Hover effects on ProjectCards
- [ ] Visual indicator for external project links
- [ ] Dynamic SEO metadata per project page (`generateMetadata`)
- [ ] Real image hosting (replace placehold.co remote pattern)

## Nice to Have

- [ ] Dark mode support (CSS variables already in place)
- [ ] Contact form (currently info-only drawer)
- [ ] Project filtering/categories
- [ ] Prev/next navigation on project detail pages
- [ ] Open Graph / social sharing metadata
- [ ] Mobile-responsive header (smaller on scroll or at mobile breakpoint)
