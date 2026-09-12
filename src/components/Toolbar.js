/**
 * Minimalist Universal Navigation Bar
 *
 * Clean, typography-first bar that perfectly aligns with the Home header:
 * - Left: "LR" monogram linking home
 * - Right: Direct links ("Home", "Notes"), native PDF export button, and theme toggle
 */

export function renderToolbar(personal = {}, activeRoute = 'resume', articleCount = 6) {
  const isNotes = activeRoute.startsWith('blog') || activeRoute.startsWith('notes');

  const headerClasses = 'sticky top-0 z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md py-3.5 sm:py-4 mb-6 border-b border-zinc-200/60 dark:border-zinc-800/60 -mx-4 px-4 sm:-mx-6 sm:px-6 flex items-center justify-between transition-colors duration-200 print:hidden';

  const isResume = activeRoute === 'resume';
  const initialBrandText = isResume ? 'LR' : 'Ladislao Ramirez';

  return `
    <header class="${headerClasses}">
      <!-- Left: Monogram / Dynamic Brand -->
      <a
        href="#/"
        id="nav-brand"
        class="font-mono text-xs font-bold tracking-wider text-zinc-950 dark:text-zinc-50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors min-w-0 shrink truncate mr-2"
        title="Ladislao Ramirez — Home"
      >
        <span id="nav-brand-text" class="transition-opacity duration-150 inline-block truncate">${initialBrandText}</span>
      </a>

      <!-- Right: Minimal font-mono navigation & controls -->
      <nav class="flex items-center gap-3 sm:gap-5 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
        <a href="#/" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          Home
        </a>

        ${isNotes ? `
          <a href="#/resume" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Resume
          </a>
        ` : `
          <a href="#/notes" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Notes
          </a>
        `}

        <!-- Native PDF / Print Button (Only shown on Resume) -->
        ${!isNotes ? `
          <button
            id="print-btn"
            type="button"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1"
            title="Export as PDF or Print"
          >
            <span>PDF</span>
            <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </button>
        ` : ''}

        <!-- Dark / Light Theme Toggle -->
        <button
          id="theme-toggle-btn"
          type="button"
          class="p-1 text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          <!-- Sun Icon (Shown in Dark) -->
          <svg class="w-3.5 h-3.5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon (Shown in Light) -->
          <svg class="w-3.5 h-3.5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </nav>
    </header>
  `;
}
