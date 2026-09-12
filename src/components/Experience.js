/**
 * Resume Experience Component (Universal Read.cv Two-Column Style)
 *
 * Left column: "Experience" section indicator in monospaced uppercase.
 * Right column: Comprehensive career timeline with achievements, metrics, and tech stacks.
 */
export function renderExperience(experiences) {
  const experienceItems = experiences.map((exp) => {
    const achievementsHtml = exp.achievements.map(ach => `
      <li class="flex items-start gap-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed print:text-[8pt] print:leading-snug">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500/80 dark:bg-emerald-400 mt-2 sm:mt-2.5 shrink-0 print:bg-zinc-700"></span>
        <span>${ach}</span>
      </li>
    `).join('');

    const techChips = (exp.techStack || []).map(tech => `
      <span class="inline-block px-2 py-0.5 text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 rounded border border-zinc-200/60 dark:border-zinc-700/50 print:border-zinc-300 print:text-[7pt] print:px-1 print:py-0">
        ${tech}
      </span>
    `).join('');

    return `
      <article class="space-y-2 pb-8 last:pb-0 print:pb-3.5 print:break-inside-avoid">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h3 class="text-base sm:text-lg font-semibold text-zinc-950 dark:text-zinc-100 leading-snug print:text-[9pt] print:text-black">
              ${exp.role} <span class="text-zinc-400 dark:text-zinc-500 font-normal">at</span> <span class="font-bold">${exp.company}</span>
            </h3>
            <div class="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-0.5 print:text-[7.5pt]">
              ${exp.location}
            </div>
          </div>
          <span class="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-500 shrink-0 sm:text-right print:text-[8pt] print:font-semibold">
            ${exp.period}
          </span>
        </div>

        ${exp.description ? `
          <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed print:text-[8pt] print:leading-snug">
            ${exp.description}
          </p>
        ` : ''}

        <ul class="space-y-1.5 pt-1 print:space-y-1">
          ${achievementsHtml}
        </ul>

        ${techChips ? `
          <div class="pt-2 flex flex-wrap gap-1.5 print:hidden">
            ${techChips}
          </div>
        ` : ''}
      </article>
    `;
  }).join('');

  return `
    <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 border-b border-zinc-200/80 dark:border-zinc-800 print:py-3 print:grid-cols-[90px_1fr] print:border-zinc-300">
      <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5 print:text-[8pt] print:text-zinc-700">
        Experience
      </h2>
      <div class="space-y-8 print:space-y-4">
        ${experienceItems}
      </div>
    </section>
  `;
}
