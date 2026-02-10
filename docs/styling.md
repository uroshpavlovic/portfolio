# Styling Guide

## Approach: Tailwind CSS Utilities

Style directly in JSX with Tailwind classes. No inline `style={{}}` objects, no custom CSS classes for static layout.

Use Tailwind 4 canonical class syntax:
- CSS variables: `bg-(--background)`, `text-(--text-muted)` (not `bg-[var(--background)]`)
- Spacing: `px-28.75` for 115px (not `px-[115px]`) where a canonical form exists
- Arbitrary values only when no canonical form exists (e.g., `lg:h-[181.5px]`)

**globals.css uses CSS Cascade Layers** (`@layer base`, `@layer components`):
- `@layer base`: CSS custom properties (`:root` variables), base resets (`*`, `body`, `a`, `img`)
- `@layer components`: Text-level classes, masonry grid, drawer animations, project layout
- Unlayered: View Transitions (`@supports`), responsive overrides

> **Important:** All custom CSS must be inside `@layer base` or `@layer components` so Tailwind utility classes (in `@layer utilities`) can override them. Unlayered CSS beats all layers and will break Tailwind utilities.

**Everything else → Tailwind classes in JSX.**

## Testing

Changes will be tested by the user in the browser. After making styling changes, ensure the dev server is running (`npm run dev`) for hot reload.

---

## CSS Variables

```css
:root {
  /* Palette */
  --color-beige: #F7F1ED;
  --color-black: #000000;
  --color-navy: #30354F;
  --color-gray-light: #BBB9BE;
  --color-white: #ffffff;
  --color-gray-dark: #666666;
  --color-overlay: rgba(0, 0, 0, 0.5);

  /* Semantic Colors */
  --background: var(--color-beige);
  --foreground: var(--color-black);
  --surface: var(--color-white);
  --placeholder: var(--color-gray-light);
  --text-muted: var(--color-gray-dark);
  --overlay: var(--color-overlay);

  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-md: 1.5rem;
  --font-size-lg: 2rem;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
}
```

## Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-beige` | `#F7F1ED` | Page background |
| `--color-black` | `#000000` | Primary text |
| `--color-navy` | `#30354F` | Drawer background |
| `--color-gray-light` | `#BBB9BE` | Image placeholder background |
| `--color-white` | `#ffffff` | Footer background |
| `--color-gray-dark` | `#666666` | Muted text (metadata, footer) |
| `--color-overlay` | `rgba(0,0,0,0.5)` | Drawer backdrop |

### Semantic Tokens

| Token | Default | Drawer Override | Usage |
|-------|---------|----------------|-------|
| `--background` | `--color-beige` | `--color-navy` | Page/section background |
| `--foreground` | `--color-black` | `--color-beige` | Primary text |
| `--surface` | `--color-white` | — | Footer background |
| `--placeholder` | `--color-gray-light` | — | Image placeholder bg |
| `--text-muted` | `--color-gray-dark` | `--color-beige` | Metadata text |
| `--overlay` | `rgba(0,0,0,0.5)` | — | Drawer backdrop |

The `.drawer` class overrides `--background`, `--foreground`, and `--text-muted` so text-level classes and Tailwind color utilities auto-flip inside the drawer.

## Typography

**Font:** Inter (Google Fonts, loaded via `next/font/google`)

| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| Project title (desktop) | `2rem` | 600 | 1.2 |
| Project title (mobile) | `1.5rem` | 600 | 1.2 |
| Contact heading | `1.5rem` | 600 | — |
| Body text | default (1rem) | 400 | — |
| Description paragraphs | — | — | 1.6 |
| Contact info | — | — | 1.8 |
| Footer / metadata | `0.875rem` | 400 | — |

## Spacing

Values currently used across components:

| Value | Where |
|-------|-------|
| `4px` | Meta paragraph margin-bottom |
| `16px` | Mobile main padding, masonry gutter, image margin-bottom, description paragraph gap |
| `24px` | Header/footer padding, drawer padding, heading margin-bottom, mobile project layout gap |
| `40px` | Project layout gap (desktop), project layout vertical padding |
| `48px` | Drawer content top margin |

## Responsive Breakpoints

Tailwind mobile-first: base = mobile, `md:` = 768px+, `lg:` = 1024px+.

| Element | Mobile (base) | Tablet (md:) | Desktop (lg:) |
|---------|---------------|--------------|---------------|
| Side padding | 16px (`px-4`) | 40px (`md:px-10`) | 115px (`lg:px-28.75`) |
| Header height | 100px (`h-25`) | 140px (`md:h-35`) | 181.5px (`lg:h-[181.5px]`) |
| Logo | 60×63 | 80×85 | 107×113 |
| Menu trigger | 70×48 | 92×64 | 123×85 |
| Footer padding | 24px 16px | 32px 40px | 40px 115px |
| Footer direction | column | row | row |
| Signature | 100×33 | 120×40 | 150×50 |
| Drawer logo | 54×57 (5px padding) | 72×77 | 96×102 |
| Masonry columns | 1 (≤640px) | 2 (≤1024px) | 3 |
| Project layout | stacked (≤768px) | side-by-side | side-by-side |

## Z-Index Stack

| Layer | Z-Index | Element |
|-------|---------|---------|
| Base content | 0 | Default |
| Header | 30 | Sticky navigation |
| Drawer overlay | 40 | Semi-transparent backdrop |
| Drawer panel | 50 | Slide-out contact panel |

## View Transitions

Enabled globally via `<ViewTransitions>` wrapper in layout.tsx (from `next-view-transitions`).

### Page Transition (root)
```
Duration: 0.35s
Easing: cubic-bezier(0.32, 0.72, 0, 1)
Old page: fade-out 0.25s ease-out
New page: fade-in 0.35s ease-out
```

### Shared Element — Project Image
```
Duration: 0.45s
Easing: cubic-bezier(0.32, 0.72, 0, 1)
CSS class: .project-image-transition
view-transition-name: project-image
```

The shared element transition creates a Pinterest-style expand effect when navigating from card → detail page. The cover image morphs in position/size from the grid card to the detail page.

## Drawer Animation

```
Overlay: opacity 0→1, visibility hidden→visible, 0.3s ease
Panel: opacity 0→1, visibility hidden→visible, 0.3s ease
Style: Full-screen overlay with fade in/out
Background: var(--color-navy) (#30354F)
```

## Masonry Grid (library-driven)

These classes are required by `react-masonry-css` and must stay in globals.css:

```css
.masonry-grid          /* display: flex, margin-left: -16px */
.masonry-grid_column   /* padding-left: 16px (gutter) */
.masonry-grid_column > div  /* margin-bottom: 16px */
```
