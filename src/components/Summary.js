/**
 * Resume Summary Component (Universal Read.cv Two-Column Style)
 *
 * Left column: "About" section indicator in monospaced uppercase.
 * Right column: Executive summary and core architectural focus points.
 */
export function renderSummary(summary, philosophy = []) {
  return `
    <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 border-b border-zinc-200/80 dark:border-zinc-800 print:py-3 print:grid-cols-[90px_1fr] print:border-zinc-300">
      <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5 print:text-[8pt] print:text-zinc-700">
        About
      </h2>
      <div class="space-y-4">
        <p class="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed print:text-[8.5pt] print:leading-normal">
          ${summary}
        </p>

        ${philosophy.length > 0 ? `
          <div class="space-y-2.5 pt-1 print:space-y-1">
            ${philosophy.map(item => `
              <div class="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed print:text-[8pt]">
                <strong class="font-medium text-zinc-950 dark:text-zinc-100 print:text-black">${item.title}:</strong>
                <span>${item.description}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </section>
  `;
}
