# Data Model

## Project Interface

**File:** `types/index.ts`

```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  type: 'external' | 'internal';
  externalUrl?: string;
  description?: string[];
  client?: string;
  year?: string;
  images?: string[];
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier |
| `slug` | `string` | Yes | URL-friendly name for routing (`/projects/[slug]`) |
| `title` | `string` | Yes | Display title. Supports `\n` for line breaks. |
| `coverImage` | `string` | Yes | URL for the card thumbnail (600x800px portrait) |
| `type` | `'internal' \| 'external'` | Yes | Determines routing behavior |
| `externalUrl` | `string` | No | URL for external projects (opens in new tab) |
| `description` | `string[]` | No | Array of paragraphs for detail page |
| `client` | `string` | No | Client name |
| `year` | `string` | No | Year of project |
| `images` | `string[]` | No | Array of image URLs for detail gallery (1200x800px+) |

## Project Types

### Internal (`type: "internal"`)
- Has a detail page at `/projects/[slug]`
- Requires: `description`, `images` (for meaningful content)
- Optional: `client`, `year`
- Card links via `<Link>` with view transitions
- Pre-built at build time via `generateStaticParams()`

### External (`type: "external"`)
- No detail page — links directly to `externalUrl`
- Requires: `externalUrl`
- Card links via `<a target="_blank">`
- Accessing `/projects/[slug]` returns 404

## Current Sample Data

**File:** `data/projects.ts`

| ID | Slug | Type | Title |
|----|------|------|-------|
| 1 | project-one | internal | Project One\nMultiple Lines |
| 2 | project-two | external | Project Two |
| 3 | project-three | internal | Project Three |
| 4 | project-four | external | Project Four |
| 5 | project-five | external | Project Five |
| 6 | project-six | internal | Project Six\nWith Subtitle |

All images currently use `placehold.co` placeholders.
Internal projects have 3 gallery images each.
External URLs point to `example.com` and `behance.net`.

## Contact Data (Hardcoded)

Currently hardcoded in `components/ContactDrawer.tsx`:

| Field | Value | Status |
|-------|-------|--------|
| Name | Uroš Pavlović | Real |
| Title | Graphic Illustrator | Real |
| Email | email@example.com | Placeholder |
| Phone | +381 00 000 0000 | Placeholder |
