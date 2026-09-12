# Antigravity Rules & Engineering Philosophy: The Artisan Way

This project adheres to the craftsmanship, elegance, and developer-happiness philosophies inspired by Laravel, Robert C. Martin's Clean Code, and Martin Fowler's Refactoring principles.

---

## ⚠️ Core Operating Protocol: Plan-First & Approval Gate

1. **Implementation Plan First & Explicit Permission Required**:
   - When asked to perform a task, modify, or create code, **NEVER edit, alter, or create any code or files without explicit user permission**.
   - Read-only inspection tools (`view_file`, `grep_search`, `find_by_name`, `list_dir`) are allowed to research the codebase and formulate a plan.
   - Always present a clear **Implementation Plan** first:
     - **Objective**: What will be achieved.
     - **Proposed Changes**: Files to create/modify and what will change in each.
     - **Verification**: How it will be validated.
   - Conclude with an explicit question asking for approval to proceed (e.g., *"Would you like me to proceed with this plan, or would you like to make any adjustments?"*).
   - Only execute code changes after the user gives their explicit approval.

2. **Mandatory Post-Implementation Change Summary**:
   - Immediately upon completing approved changes and verifications, always provide a structured **Summary of Changes**:
     - Summary of what was modified and why.
     - List of touched files with clickable markdown links.
     - Build/verification status.
     - How to review or test the result.

3. **English-First Application & Content**:
   - **All application copy, UI strings, documentation, articles, commit messages, code, comments, and DocBlocks MUST be written in English**.
   - While conversation with the user in chat may occur in Spanish or another language per user preference, **all project files and user-facing copy must strictly remain in English**.

---

## 1. The Artisan Core Principles

1. **Code is Written for Humans First**
   - Code clarity and expressiveness take precedence over clever one-liners.
   - Names should be self-documenting, eloquent, and intention-revealing.
   - Avoid cryptic abbreviations: use `calculateTotalExperience()` instead of `calcTotExp()`.

2. **Eloquent & Declarative Design**
   - Model data cleanly. Isolate data definitions (e.g., `resume.js`) from presentation logic.
   - Express intent declaratively rather than imperatively when possible.
   - Maintain a single source of truth for all content and configuration.

3. **Single Responsibility & Modularity (Clean Code)**
   - Functions and components should do one thing and do it exceptionally well.
   - Keep files small, focused, and purposeful.
   - Favor composition over inheritance; favor clear, predictable pure functions.

4. **Convention Over Configuration**
   - Follow standard directory layouts:
     - `src/data/` for domain data and models
     - `src/components/` for reusable UI components
     - `src/utils/` for helper functions
     - `src/styles/` for custom CSS and theme definitions

---

## 2. Tailwind CSS & UI Craftsmanship

1. **Utility Discipline & Semantic Structure**
   - Pair Tailwind utilities with semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Group related Tailwind classes logically:
     1. Display & Layout (`flex`, `grid`, `relative`, `block`)
     2. Sizing & Spacing (`w-full`, `max-w-4xl`, `p-6`, `m-auto`, `space-y-4`)
     3. Typography (`font-sans`, `text-lg`, `font-semibold`, `text-zinc-900`)
     4. Visuals & Borders (`bg-white`, `border`, `rounded-xl`, `shadow-sm`)
     5. Interactions & Transitions (`transition-all`, `duration-200`, `hover:bg-zinc-50`)
     6. Print Utilities (`print:hidden`, `print:text-black`, `print:p-0`)

2. **Pixel-Perfect Print & PDF Fidelity**
   - Resumes must be dual-purpose: visually stunning on screen and flawless when printed or exported to PDF (`@media print`).
   - Hide interactive chrome (buttons, theme toggles, floating toolbars) during printing via `print:hidden`.
   - Prevent awkward page breaks across job experiences using `break-inside-avoid`.

3. **Typography & Color Harmony**
   - Use warm, professional slate/zinc neutral palettes with refined accent touches (e.g., emerald, amber, or indigo).
   - Ensure WCAG AA contrast compliance for all text and badges.

---

## 3. The Development & Refactoring Workflow

- **Boy Scout Rule**: Always leave the code cleaner than you found it.
- **Fail Gracefully**: Provide sensible defaults, defensive null-checks, and fallback states.
- **Performant & Lightweight**: Minimize external dependencies; leverage Vite's native module bundling and modern browser APIs.
