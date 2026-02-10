# Components Reference

## Layout

### `app/layout.tsx` — Root Layout (Server)

Wraps entire app with `<ViewTransitions>`, loads Inter font, renders Header + main + Footer.

```
Metadata: "Uroš Pavlović - Graphic Illustrator"
Font: Inter (variable: --font-inter)
```

---

## Pages

### `app/page.tsx` — Home (Server)

Imports `projects` from data, passes to `<ProjectGrid>`. No props, no state.

### `app/projects/[slug]/page.tsx` — Project Detail (Server)

- Receives `params: Promise<{ slug: string }>`
- Finds project by slug, returns `notFound()` if missing or external
- Uses `generateStaticParams()` for SSG of internal projects
- Renders: image gallery (left) + project info sidebar (right)
- First image gets `.project-image-transition` class for view transitions
- Title supports `\n` for multi-line rendering via `.split("\n")`

**Known issues:**
- Line 34: Debug blue background `rgba(0, 0, 255, 0.3)` on first image
- All inline styles need migration to Tailwind

---

## Components

### `components/Header.tsx` (Client)

**Purpose:** Sticky navigation bar with logo and menu trigger.

| Prop | Type | Description |
|------|------|-------------|
| — | — | No props |

| State | Type | Description |
|-------|------|-------------|
| `isDrawerOpen` | `boolean` | Controls ContactDrawer visibility |

**Current styling:** Inline styles (flex, sticky, z-index 30, height 181.5px)

**Elements:**
- Logo: `<Image src="/logo.svg">` wrapped in `<Link href="/">`
- Menu trigger: `<Image src="/menu_trigger_0.svg">` inside `<button>`

---

### `components/Footer.tsx` (Server)

**Purpose:** Simple copyright footer with dynamic year.

| Prop | Type | Description |
|------|------|-------------|
| — | — | No props |

**Current styling:** Inline styles (padding 24px, text-center, 0.875rem, color #666)

---

### `components/ContactDrawer.tsx` (Client)

**Purpose:** Slide-out drawer from left side with contact information.

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Whether drawer is visible |
| `onClose` | `() => void` | Callback to close drawer |

**Current styling:** CSS classes for drawer/overlay animations + inline styles for content.

**Contact info (placeholder):**
- Name: Uroš Pavlović
- Title: Graphic Illustrator
- Email: `email@example.com`
- Phone: `+381 00 000 0000`

**Known issues:**
- Hardcoded placeholder contact info
- Close button uses `&times;` character (should be SVG)
- No keyboard support (Escape to close)
- No focus trap when open

---

### `components/ProjectGrid.tsx` (Client)

**Purpose:** Responsive masonry grid layout for project cards.

| Prop | Type | Description |
|------|------|-------------|
| `projects` | `Project[]` | Array of projects to display |

**Breakpoints:**
- Default: 3 columns
- ≤1024px: 2 columns
- ≤640px: 1 column

**Styling:** Uses `react-masonry-css` with CSS classes from globals.css.

---

### `components/ProjectCard.tsx` (Server)

**Purpose:** Individual project card — renders cover image with appropriate link.

| Prop | Type | Description |
|------|------|-------------|
| `project` | `Project` | Project data object |

**Behavior:**
- **Internal projects:** Wrapped in `<Link>` from `next-view-transitions` → `/projects/[slug]`
- **External projects:** Wrapped in `<a target="_blank">` → `externalUrl`
- Internal cards get `.project-image-transition` class for shared element transition

**Current styling:** Inline styles (position relative, overflow hidden) + debug red background.

**Known issues:**
- Line 18: Debug red background `rgba(255, 0, 0, 0.3)`
- No hover effects
- No visual indicator for external links
