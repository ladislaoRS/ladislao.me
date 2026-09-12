/**
 * Resume Header Component (Universal Read.cv Style)
 *
 * Clean profile hero lockup presenting avatar, full name, role,
 * and geographic location aligned with the read.cv design system.
 *
 * @param {Object} personal Personal profile model
 * @returns {string} HTML markup
 */
export function renderHeader(personal = {}) {
  const avatar = personal.avatar || '/avatar.jpeg';
  const name = personal.name || 'Ladislao Ramirez';
  const role = personal.role || 'Lead Software Engineer';
  const location = personal.location || 'El Paso, TX';

  return `
    <header class="pb-8 border-b border-zinc-200/80 dark:border-zinc-800 transition-colors duration-200 print:pb-4 print:border-zinc-300">
      <div class="flex flex-row items-center gap-4 sm:gap-6">
        ${avatar ? `
          <img 
            src="${avatar}" 
            alt="${name} headshot" 
            class="w-16 h-16 sm:w-22 sm:h-22 rounded-full object-cover object-top border border-zinc-200/80 dark:border-zinc-800 shadow-sm shrink-0 print:w-16 print:h-16 print:border-zinc-300" 
          />
        ` : ''}

        <div class="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
          <h1 id="profile-hero-name" class="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 print:text-2xl print:text-black leading-tight">
            ${name}
          </h1>

          <p class="text-sm sm:text-base font-mono text-zinc-500 dark:text-zinc-400 print:text-[8.5pt] print:text-zinc-700">
            ${role} &bull; ${location}
          </p>
        </div>
      </div>
    </header>
  `;
}
