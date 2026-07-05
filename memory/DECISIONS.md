# DECISIONS.md
> Architectural decisions. Update only when a decision changes — note the date and reason.

---

## Approved Design
**Reference:** `UIDESIGN/Approved/puskar_os_mission_briefing`
- This is the only approved UI reference. All other designs in `/UIDESIGN/Archived/` are historical prototypes. Do not take design decisions from them.
- The Mission Briefing hero section, 80px sidebar, Daily Progression timeline, and floating AI Prompt Bar are all canonical UI elements.

---

## Tech Stack

| Layer | Decision | Locked |
|---|---|---|
| Framework | React | ✅ |
| Build Tool | Vite | ✅ |
| Language | TypeScript | ✅ |
| Styling | Tailwind CSS | ✅ |
| Component Library | shadcn/ui | ✅ |
| Animation | Framer Motion | ✅ |
| Icons | Lucide React | ✅ |
| Routing | React Router DOM | ✅ |

---

## Architecture Style
**Feature-based architecture.**
Each module lives in its own folder under `src/features/`. Shared primitives live in `src/components/`. Global state (if needed) in `src/store/`. No page-based flat structure.

```
src/
  features/
    home/
    career/
    learning/
    projects/
    fitness/
    settings/
  components/       ← shared/reusable UI primitives
  layouts/          ← AppLayout (sidebar + main workspace)
  lib/              ← utilities, constants, helpers
  hooks/            ← shared custom hooks
  store/            ← global state (if needed, e.g. Zustand)
  router/           ← React Router DOM config
  styles/           ← global CSS, Tailwind config
  App.tsx
  main.tsx
```

---

## Routing Strategy
React Router DOM (v6). Each feature maps to a top-level route. No nested sub-routes in V1 unless required.

| Route | Feature |
|---|---|
| `/` | Home Dashboard (Mission Briefing) |
| `/career` | Career Mode |
| `/learning` | Learning Hub |
| `/projects` | Project Tracker |
| `/fitness` | Fitness Mode |
| `/settings` | Settings |

---

## Styling Strategy
- **Tailwind CSS** for all utility styling
- **shadcn/ui** for accessible primitive components (dialogs, inputs, etc.)
- Custom Tailwind config to extend with Puskar OS color tokens (matching approved design palette)
- No inline styles except for dynamic values
- Dark mode via Tailwind's `class` strategy (`dark` class on `<html>`)

---

## Theme
- **Default:** Dark mode
- **Supported:** Light mode toggle (stored in localStorage)
- **Desktop-first** layout. Tablet support later. Mobile support in future versions.
- Accent color: `#ADC6FF` (primary), `#4D8EFF` (primary-container / active states)
- Background: `#0A0A0A`, Surface: `#131313` / `#1A1A1A`

---

## Landing Experience
Mission Briefing (`/`) is the default and primary experience. It is NOT a traditional dashboard — it is a daily operating interface. The hero section (greeting + 3 ordered mission tasks + CTA) must always be the first thing the user sees.

---

## Component Strategy
Build shared primitives first, then assemble feature pages from them. Every component that appears on more than one page must live in `src/components/`. Feature-specific one-off components live inside their `features/` subfolder.

Key shared components to build:
`GlassCard`, `GlassCardSubtle`, `ProgressBar`, `TimelineStep`, `PillBadge`, `ActivityGrid`, `AIPromptBar`, `PageHeader`, `SidebarNav`, `StatChip`, `NewsCard`

---

## Data Persistence
**V1:** Local state only (React useState / localStorage for theme preference and simple data).
**V2+:** To be decided (Firebase / Supabase / backend API).
No backend integration in V1.

---

## Daily Mission Data
**V1:** Static / manually configured data (hardcoded per sprint or user-editable local state).
**V2+:** AI-generated via LLM API.
