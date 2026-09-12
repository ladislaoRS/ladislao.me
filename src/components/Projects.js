export function renderProjects(projects) {
  const projectCards = projects.map(proj => {
    const tagsHtml = proj.tags.map(tag => `
      <span class="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
        #${tag}
      </span>
    `).join(' ');

    return `
      <div class="print-avoid-break h-full flex flex-col justify-between p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group">
        <div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              ${proj.name}
            </h3>
            ${proj.link && proj.link !== '#' ? `
              <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-emerald-500 transition-colors" aria-label="Open project link">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ` : ''}
          </div>
          <p class="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">
            ${proj.tagline}
          </p>
          <p class="mt-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            ${proj.description}
          </p>
        </div>

        <div class="mt-4 pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-2">
          ${tagsHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="mt-10">
      <h2 class="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
        <span>Selected Works</span>
        <span class="h-px bg-zinc-200/80 dark:border-zinc-800 flex-1"></span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${projectCards}
      </div>
    </section>
  `;
}
