/**
 * Resume Education & Credentials Component (Universal Read.cv Two-Column Style)
 *
 * Left column: "Education" section indicator in monospaced uppercase.
 * Right column: Formal degrees and verified industry credentials.
 */
export function renderEducation(education = [], certifications = []) {
  const educationItems = education.map(edu => `
    <div class="space-y-1 print-avoid-break">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <h3 class="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-100 leading-snug print:text-[9pt] print:text-black">
          ${edu.degree}
        </h3>
        <span class="text-sm font-mono text-zinc-500 dark:text-zinc-400 shrink-0 sm:text-right print:text-[8pt]">
          ${edu.period}
        </span>
      </div>
      <div class="text-sm font-mono text-zinc-500 dark:text-zinc-400 print:text-[8pt]">
        ${edu.institution}
      </div>
      ${edu.details ? `
        <p class="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-0.5 print:text-[7.5pt]">
          ${edu.details}
        </p>
      ` : ''}
    </div>
  `).join('');

  const certItems = certifications.map(cert => `
    <div class="flex items-baseline justify-between gap-3 text-base py-1.5 print:py-0.5 print-avoid-break">
      <div>
        <span class="font-medium text-zinc-900 dark:text-zinc-100 print:text-[8pt]">${cert.title}</span>
        <span class="text-zinc-400 dark:text-zinc-500 text-sm font-mono print:text-[7.5pt]"> &bull; ${cert.issuer}</span>
      </div>
      <span class="text-zinc-400 dark:text-zinc-500 text-sm font-mono shrink-0 print:text-[7.5pt]">${cert.year}</span>
    </div>
  `).join('');

  return `
    <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 border-b border-zinc-200/80 dark:border-zinc-800 print:py-3 print:grid-cols-[90px_1fr] print:border-zinc-300 print:break-inside-avoid">
      <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5 print:text-[8pt] print:text-zinc-700">
        Education
      </h2>
      <div class="space-y-6 print:space-y-3">
        <div class="space-y-4">
          ${educationItems}
        </div>

        ${certifications.length > 0 ? `
          <div class="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 print:border-zinc-300">
            <h3 class="text-sm font-mono font-medium text-zinc-400 dark:text-zinc-500 mb-2 print:text-[8pt] print:text-zinc-700">
              Credentials &amp; Certifications
            </h3>
            <div class="space-y-1">
              ${certItems}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}
