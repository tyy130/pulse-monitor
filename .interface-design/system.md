# Design System — Pulse Monitor
> Direction: **Data & Analysis** — numbers-first, chart-optimized, high-signal density

## Context
Production Node.js microservice dashboard. Audience: operators, backend engineers.
Tone: clinical, informational. Every pixel earns its place.

---

## Direction
- **Personality:** Data & Analysis
- **Foundation:** Cool dark (neutral-950 base)
- **Depth:** Subtle borders + background elevation steps
- **Accent:** Cyan/teal — connotes uptime, network, health
- **Typography:** Mono for metrics; sans-serif for labels and prose

---

## Tokens

### Colors
```css
--color-bg:           #09090b   /* zinc-950 — deepest surface */
--color-bg-panel:     #111113   /* panel backgrounds */
--color-bg-card:      #18181b   /* zinc-900 — metric cards */
--color-bg-input:     #27272a   /* zinc-800 — inputs, chips */

--color-text:         #fafafa   /* zinc-50 — primary text */
--color-text-muted:   #a1a1aa   /* zinc-400 — labels, meta */
--color-text-subtle:  #71717a   /* zinc-500 — timestamps, units */

--color-accent:       #22d3ee   /* cyan-400 — healthy/active */
--color-accent-dim:   #0891b2   /* cyan-600 — hover */

--color-success:      #4ade80   /* green-400 — OK status */
--color-warning:      #fb923c   /* orange-400 — degraded */
--color-error:        #f87171   /* red-400 — down/error */

--color-border:       #27272a   /* zinc-800 */
--color-border-muted: #1c1c1e   /* dividers only */

--chart-1: #22d3ee
--chart-2: #818cf8
--chart-3: #4ade80
--chart-4: #fb923c
--chart-5: #f472b6
```

### Typography
```css
--font-sans: 'Inter', 'Geist', system-ui, sans-serif
--font-mono: 'JetBrains Mono', 'Fira Code', monospace
```

Scale: 11 / 12 / 13 / 14 / 16 / 20 / 24 / 32px
Weight: 400 (body) / 500 (labels) / 600 (metric values) / 700 (critical alerts)

Metrics use mono at 20–32px, 600 weight. Labels use sans at 11–13px, muted color.

### Spacing
Base: 4px grid — stay tight
```
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
```

### Radius
```
none: 0     — table cells, status bars
sm:   4px   — badges, chips, status dots
md:   6px   — cards, inputs, buttons
lg:   8px   — panels, dialogs
```

---

## Patterns

### Metric Card
- Background: `--color-bg-card`
- Border: `1px solid --color-border`
- Radius: 6px
- Padding: 16px
- Label: 11px, muted, uppercase, letter-spacing 0.08em
- Value: 28px, mono, 600, white
- Delta: 12px, success/error colored

### Status Badge
- Height: 20px
- Padding: 0 8px
- Radius: 4px
- Font: mono, 11px, 500
- States:
  - `UP`:       bg `rgba(74,222,128,0.1)`, text `--color-success`, border `rgba(74,222,128,0.25)`
  - `DEGRADED`: bg `rgba(251,146,60,0.1)`, text `--color-warning`, border `rgba(251,146,60,0.25)`
  - `DOWN`:     bg `rgba(248,113,113,0.1)`, text `--color-error`, border `rgba(248,113,113,0.25)`

### Status Dot (inline)
- Width/height: 8px, circle
- Green pulse animation for live/healthy
- Static red for error

### Button — Primary
- Height: 36px
- Padding: 0 16px
- Radius: 6px
- Background: `--color-accent`
- Text: `#09090b`, mono, 13px, 600

### Button — Ghost
- Height: 32px
- Padding: 0 12px
- Border: `1px solid --color-border`
- Text: muted → white on hover

### Data Table
- Row height: 40px
- Border-bottom: `1px solid --color-border-muted`
- Header: muted, 11px, uppercase, 500
- Hover row: bg `--color-bg-input`
- No outer borders — float in panel

### Log Line
- Font: mono, 12px
- Line height: 1.7
- Timestamp: `--color-text-subtle`
- Level tags: same as status badge pattern
- Error lines: background `rgba(248,113,113,0.05)`

### Chart Container
- Padding: 24px
- Border: `1px solid --color-border`
- Radius: 8px
- Axis labels: 11px, muted
- Grid lines: `--color-border-muted`
- Tooltips: dark bg `#1c1c1e`, border, 12px mono

---

## Layout

- Sidebar: 220px fixed, `--color-bg-panel`, right border
- Main content: fluid, `--color-bg`
- Top bar: 52px, `--color-bg-panel`, bottom border
- Card grid: 12-col, 16px gutter (tight)
- Responsive breakpoint: 1024px (collapse to mobile nav)

---

## Elevation Model

No shadows. Depth via:
1. Background step: bg → panel → card → input (`#090` → `#111` → `#181` → `#272`)
2. Border contrast (all cards bordered)
3. Hover states via background step up, no transition on border

---

## Do / Don't

✅ Mono font for ALL numeric values, percentages, IDs, timestamps  
✅ Keep metric cards consistent — same width grid, same padding  
✅ Use color only for state (green=ok, orange=warn, red=error) — not decoration  
✅ Minimize border-radius — this is precision tooling, not marketing UI  
❌ No rounded-full pill buttons  
❌ No gradients on charts or backgrounds  
❌ No icons without labels in tables  
❌ Never use accent color for non-interactive decoration  

---

*Last updated: 2026-03-05*
