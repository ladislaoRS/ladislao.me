# 🛠️ Artisan Resume Engine

An authentic, elegant web resume and PDF generator built with **Vite**, **Tailwind CSS**, and **Antigravity (AGY)**. Designed under the principles of **Software Craftsmanship**, **Clean Code**, and the developer-first philosophy of **Laravel**.

---

## 🌟 Philosophy & Features

- **Artisan Craftsmanship**: Built with semantic HTML5, expressive naming, and clean modular code.
- **Eloquent Data Separation**: All resume content lives in [`src/data/resume.js`](file:///Users/ladislao/Code/projects/web/me/src/data/resume.js). Update your profile without ever touching layout markup.
- **Dual-Mode Web & Print**: Looks stunning as an interactive web page with light/dark theme toggling, and exports seamlessly as an ATS-compliant, single/double-page PDF using standard browser printing (`Cmd/Ctrl + P` or the **Save as PDF** button).
- **Embedded AGY Rules & Skills**: Pre-configured with workspace rules and custom skills for Antigravity AI pair programming.

---

## 🚀 Quick Start

### 1. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory ready to deploy to GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customizing Your Resume

To personalize your resume:
1. Open [`src/data/resume.js`](file:///Users/ladislao/Code/projects/web/me/src/data/resume.js).
2. Edit your **Personal Details**, **Summary & Philosophy**, **Experience & Impact**, **Competencies**, **Projects**, and **Education/Certifications**.
3. Changes will hot-reload instantly in the browser.

---

## 🤖 Antigravity (AGY) Rules & Skills

This workspace includes native Antigravity customizations:

- [`AGENTS.md`](file:///Users/ladislao/Code/projects/web/me/AGENTS.md): Workspace rules enforcing code elegance, expressive naming, single responsibility, and Tailwind CSS utility grouping.
- [`.agents/skills/eloquent-craftsmanship/SKILL.md`](file:///Users/ladislao/Code/projects/web/me/.agents/skills/eloquent-craftsmanship/SKILL.md): Actionable procedure for writing, refactoring, and auditing clean code following Laravel and Artisan principles.
- [`.agents/skills/resume-architect/SKILL.md`](file:///Users/ladislao/Code/projects/web/me/.agents/skills/resume-architect/SKILL.md): Guidelines for crafting authentic accomplishments (Google XYZ formula), ATS compliance, and print optimization.
