# Architectural & Implementation Decisions

This document outlines key technical decisions, intentional trade-offs, and transparency regarding AI usage for the **FocusFlow** homepage challenge.

---

## 1. Why this approach over the obvious alternative?

### Tech Stack Selection: React + Vite + Tailwind CSS + Local Data
- **Vite + React**: Selected for lightning-fast HMR (Hot Module Replacement), zero build overhead, and clean JS ecosystem compatibility. Next.js was intentionally avoided as SSR/SSG server infrastructure and server components add unnecessary build complexity for a single-page product showcase.
- **Tailwind CSS + Framer Motion**: Provides fine-grained design token control for dark mode, glassmorphism accents, and responsive typography without bulky component library overrides. Framer Motion enables fluid entrance animations and mobile drawer transitions.
- **Local Data vs Backend/Database**: A backend/database (Express, Node, Supabase, Firebase) was intentionally omitted because the objective is a premium, client-side frontend experience. Adding a database layer would introduce asynchronous network latency, setup overhead, and deployment complexity without adding value to the visual UI craft, spacing, and micro-interactions requested.

---

## 2. One trade-off made under the time limit

### Scope Trade-Off: Deep Core Interaction over Breadth
- **Trade-off**: Rather than building multiple shallow, partially working screens (e.g., full calendar sync, user account settings, modal wizards), effort was concentrated on delivering **one fully functional, polished micro-interaction** (the 25:00 Focus Session Timer with custom break modes, countdown, pause, and reset) alongside an **interactive task dashboard** featuring live state toggles and category filters.
- **What would be added with a full week**:
  1. Persistent local storage or IndexedDB sync for custom user tasks and session timer logs across browser refreshes.
  2. Keyboard shortcut triggers (`Space` to pause/start timer, `Escape` to close mobile drawer).
  3. Audio chimes (Web Audio API synthesis) upon timer completion.
  4. Customizable dashboard widget layouts via drag-and-drop (`dnd-kit`).

---

## 3. AI Usage Transparency

### Honest AI Collaboration Breakdown
- **Where AI was used**: AI was utilized as a pair programmer to assist in structuring component boilerplate, styling Tailwind grid layouts, and writing documentation drafts.
- **What AI helped with**: Generating initial layout skeletons for Framer Motion animation configurations, crafting clean responsive break-point classes (390px to 1440px), and drafting initial task data schemas.
- **What was personally reviewed & modified**:
  - Refined color contrast ratios (`slate-950` base with `indigo-500` accents) to ensure WCAG AA compliance.
  - Simplified animation timings from heavy spring physics to subtle 0.2s–0.4s ease-out transitions to ensure a clean, professional SaaS aesthetic.
  - Eliminated any default marketing fluff to strictly adhere to the project's honesty rules (zero fake testimonials, zero fake user metrics).
- **What was manually tested**:
  - Viewport responsive reflow across 390px, 768px, 1024px, and 1440px.
  - Focus Session timer interval accuracy, pause/resume behavior, and reset logic.
  - Mobile menu drawer open/close state and accessible keyboard focus navigation.
