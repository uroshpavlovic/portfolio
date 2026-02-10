# Styling Guide

## Approach: Tailwind CSS Utilities

Style directly in JSX with Tailwind classes. No inline `style={{}}` objects, no custom CSS classes for static layout.

**globals.css is only for:**
- CSS custom properties (`:root` variables)
- Base resets (`*`, `body`, `a`, `img`)
- Masonry grid classes (required by `react-masonry-css` library)
- Contact drawer animations (open/close transitions)
- View Transitions API animations
- Responsive overrides that can't be done with Tailwind

**Everything else → Tailwind classes in JSX.**

---

## CSS Variables

```css
:root {
  --background: #F7F1ED;   /* Warm cream — page background */
  --foreground: #000000;   /* Pure black — primary text */
  --font-inter: ...;       /* Set by Next.js next/font/google */
}
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#F7F1ED` | Page background, drawer background |
| `--foreground` | `#000000` | Primary text color |
| Meta gray | `#666` | Metadata text (client, year), footer |
| Overlay | `rgba(0,0,0,0.5)` | Drawer backdrop |

Placeholder image backgrounds (for reference):
- `#e8ddd5` warm tan, `#ddd5e8` lavender, `#d5e8dd` soft green
- `#e8e5d5` beige, `#d5dde8` soft blue, `#e5d5e8` mauve

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

| Breakpoint | Usage |
|------------|-------|
| `640px` | Masonry grid: 1 column |
| `768px` | Project layout: stacked, smaller title, reduced padding |
| `1024px` | Masonry grid: 2 columns |
| Default (>1024) | Masonry grid: 3 columns |

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
Panel: translateX(-100%) → translateX(0), 0.3s ease
Direction: slides in from left
Width: 320px (max 80vw on mobile)
```

## Masonry Grid (library-driven)

These classes are required by `react-masonry-css` and must stay in globals.css:

```css
.masonry-grid          /* display: flex, margin-left: -16px */
.masonry-grid_column   /* padding-left: 16px (gutter) */
.masonry-grid_column > div  /* margin-bottom: 16px */
```
