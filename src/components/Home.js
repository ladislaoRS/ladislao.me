import { homeData } from '../data/home.js';

/**
 * Home Component (Editorial & Read.cv Fusion)
 *
 * Minimalist editorial landing page combining the read.cv profile lockup,
 * curated experience highlights, selected engineering writing, and contact links.
 *
 * @param {Object} personal Personal profile model from resumeData
 * @param {Object} content Domain content model for Home from homeData
 * @returns {string} HTML markup
 */
export function renderHome(personal = {}, content = homeData) {
  const name = content.profile?.name || personal.name || 'Ladislao Ramirez';
  const role = content.profile?.role || personal.role || 'Lead Software Engineer';
  const location = content.profile?.location || personal.location || 'El Paso, TX';
  const avatar = content.profile?.avatar || personal.avatar || '/avatar.jpeg';
  const availability = content.profile?.availability || personal.availability || '@ Guild Mortgage';

  const email = personal.email || 'ladislao.ramirez@gmail.com';
  const github = personal.github || 'https://github.com/ladislaoRS';
  const linkedin = personal.linkedin || 'https://www.linkedin.com/in/ladislao-ramirez-43b447207/';

  const featuredExperience = content.featuredExperience || [];
  const featuredWriting = content.featuredWriting || [];
  const footerLocation = content.footer?.location || location;
  const footerYear = content.footer?.year || new Date().getFullYear();

  return `
    <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between px-4 sm:px-6 py-5 sm:py-10 md:py-16 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-white transition-colors duration-200">
      <div class="max-w-2xl mx-auto w-full flex flex-col justify-between flex-1">

        <!-- Main Content Body -->
        <main class="space-y-4 sm:space-y-8 my-0 sm:my-auto py-1 sm:py-4">

          <!-- Profile Header (Two-Row Architecture: Lockup + Status/Actions) -->
          <section class="space-y-2.5 sm:space-y-3 pb-4 sm:pb-6 border-b border-zinc-200/80 dark:border-zinc-800">
            <!-- Row 1: Profile Lockup (Identical to Resume Header) + Theme Toggle -->
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4 sm:gap-6 min-w-0">
                <img
                  src="${avatar}"
                  alt="${name} headshot"
                  class="w-16 h-16 sm:w-22 sm:h-22 rounded-full object-cover object-center border border-zinc-200/80 dark:border-zinc-800 shadow-sm shrink-0"
                />
                <div class="space-y-1 sm:space-y-1.5 min-w-0">
                  <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                    ${name}
                  </h1>
                  <p class="text-sm sm:text-base font-mono text-zinc-500 dark:text-zinc-400">
                    ${role} &bull; ${location}
                  </p>
                </div>
              </div>

              <!-- Theme Toggle -->
              <button
                id="theme-toggle-btn"
                type="button"
                class="p-1.5 text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
                aria-label="Toggle theme"
              >
                <!-- Sun Icon (Shown in Dark) -->
                <svg class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <!-- Moon Icon (Shown in Light) -->
                <svg class="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>

            <!-- Row 2: Status & Action Bar (Availability on left, Action on right) -->
            <div class="flex items-center justify-between gap-3 pt-1.5 sm:pt-0.5">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ${availability}
              </span>

              <a
                href="#/resume"
                class="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors shrink-0"
              >
                <span>...more about me</span>
                <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>

          <!-- About Section (Two-Column read.cv Alignment) -->
          <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1.5 sm:gap-6 py-4 sm:py-6 border-b border-zinc-200/80 dark:border-zinc-800">
            <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5">
              About
            </h2>
            <p class="text-base sm:text-[17px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
              ${content.about}
            </p>
          </section>

          <!-- Selected Experience (Two-Column read.cv Alignment) -->
          <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1.5 sm:gap-6 py-4 sm:py-6 border-b border-zinc-200/80 dark:border-zinc-800">
            <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5">
              Experience
            </h2>
            <div class="space-y-4 sm:space-y-6">
              ${featuredExperience.map(exp => `
                <div class="space-y-1">
                  <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div class="text-base font-medium text-zinc-900 dark:text-zinc-100">
                      ${exp.role} <span class="text-zinc-400 dark:text-zinc-500 font-normal">at</span> <span class="text-zinc-950 dark:text-zinc-100 font-semibold">${exp.company}</span>
                    </div>
                    <div class="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                      ${exp.period}
                    </div>
                  </div>
                  <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    ${exp.description}
                  </p>
                </div>
              `).join('')}

              <div class="pt-1 sm:pt-2">
                <a
                  href="#/resume"
                  class="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <span>View complete 15+ years career timeline</span>
                  <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </section>

          <!-- Selected Writing (Two-Column read.cv Alignment) -->
          <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1.5 sm:gap-6 py-4 sm:py-6 border-b border-zinc-200/80 dark:border-zinc-800">
            <h2 class="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5">
              Writing
            </h2>
            <div class="space-y-2.5 sm:space-y-3.5">
              ${featuredWriting.map(art => `
                <a
                  href="#/notes/${art.slug}"
                  class="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 text-base"
                >
                  <span class="text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-medium">
                    ${art.title}
                  </span>
                  <div class="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                    <span>${art.readTime}</span>
                  </div>
                </a>
              `).join('')}

              <div class="pt-1 sm:pt-2">
                <a
                  href="#/notes"
                  class="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <span>Read all engineering notes</span>
                  <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </section>

        </main>

        <!-- 3. Minimal Monospaced Footer -->
        <footer class="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 text-center sm:text-left">
          <div>
            ${footerLocation} &bull; ${footerYear}
          </div>
          <div class="flex items-center justify-center gap-4 text-zinc-500 dark:text-zinc-400">
            <a
              href="${github}"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <span class="text-zinc-300 dark:text-zinc-800">&bull;</span>
            <a
              href="${linkedin}"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <span class="text-zinc-300 dark:text-zinc-800">&bull;</span>
            <a
              href="mailto:${email}"
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
          </div>
        </footer>

      </div>
    </div>
  `;
}
