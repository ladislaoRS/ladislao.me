/**
 * Resume Skills Component (Universal Read.cv Two-Column Style)
 *
 * Left column: "Skills" section indicator in monospaced uppercase.
 * Right column: Categorized technical competencies and domain proficiencies.
 */
export function renderSkills(competencies) {
  const categoryBlocks = Object.entries(competencies).map(([category, skills]) => {
    const skillBadges = skills.map(skill => `
      <span class="inline-flex items-center px-2.5 py-1 sm:py-0.5 rounded text-xs sm:text-sm font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 print:border-zinc-300 print:bg-transparent print:text-zinc-800 print:text-[7.5pt] print:py-0 print:px-1">
        ${skill}
      </span>
    `).join('');

    return `
      <div class="space-y-1.5 print-avoid-break">
        <h3 class="text-xs sm:text-sm font-mono font-medium text-zinc-400 dark:text-zinc-500 print:text-[8pt] print:text-zinc-700">
          ${category}
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2 print:gap-1">
          ${skillBadges}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 border-b border-zinc-200/80 dark:border-zinc-800 print:py-3 print:grid-cols-[90px_1fr] print:border-zinc-300 print:break-inside-avoid">
      <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5 print:text-[8pt] print:text-zinc-700">
        Skills
      </h2>
      <div class="space-y-4 print:space-y-2">
        ${categoryBlocks}
      </div>
    </section>
  `;
}
