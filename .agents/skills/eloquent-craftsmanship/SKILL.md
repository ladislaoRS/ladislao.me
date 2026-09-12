---
name: eloquent-craftsmanship
description: >-
  Use this skill when designing, writing, or refactoring code in this project following
  the Laravel, Clean Code, and Artisan philosophy of expressive naming, modular architecture,
  and elegant design patterns.
---

# Eloquent Craftsmanship Skill

This skill equips the agent to build, refactor, and review web applications with the artisan discipline inspired by Laravel's elegance and Uncle Bob's Clean Code principles.

## Core Philosophies & Rules of Thumb

### 1. Eloquent Expressiveness
- Choose names that read like well-crafted prose.
- Booleans should sound like assertions or questions: `isCurrentRole`, `hasPortfolioLink`, `canPrint`.
- Methods should convey action and intent: `renderTimelineItem()`, `formatDateRange()`, `calculateTotalTenure()`.
- Avoid mental mapping: readers shouldn't need a mental dictionary to decode variable names.

### 2. Separation of Data & Presentation
- Never hardcode dynamic content directly in HTML templates.
- Store structured data in dedicated, typed data files (`src/data/resume.js`).
- Use pure rendering functions or template components that accept data and return clean markup.

### 3. Tailwind Artisan Styling
- Keep markup semantic and orderly.
- Group utility classes logically (Layout -> Spacing -> Typography -> Visuals -> Transitions -> Print).
- Use CSS variables or Tailwind color scales consistently.
- Always verify print mode (`print:` classes) so exported PDFs look like professionally printed resumes.

### 4. Step-by-Step Refactoring Checklist
When reviewing or improving any component or file:
1. [ ] **Readability**: Can someone unfamiliar with the project grasp what this function does in 10 seconds?
2. [ ] **Single Responsibility**: Does each module or function have one clear reason to change?
3. [ ] **Defensive Defaults**: Does the code handle missing or empty fields without crashing (e.g., `role.highlights || []`)?
4. [ ] **Print & Responsive Check**: Does the view look crisp on mobile, desktop, and print preview?
