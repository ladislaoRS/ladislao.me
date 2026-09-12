/**
 * Contact Component (Universal Read.cv Style)
 *
 * Clean 2-column tabular section matching Summary, Experience, Skills, and Education:
 * - Left column: "CONTACT" section title in font-mono uppercase
 * - Right column: 2-column grid of interactive cards with dedicated vector icons
 *
 * @param {Object} personal Personal details containing email, phone, github, linkedin
 * @returns {string} HTML markup
 */
export function renderContact(personal = {}) {
  const email = personal.email || 'ladislao.ramirez@gmail.com';
  const github = personal.github || 'https://github.com/ladislaoRS';
  const linkedin = personal.linkedin || 'https://www.linkedin.com/in/ladislao-ramirez-43b447207/';
  const phone = personal.phone;

  // Clean display handles
  const githubHandle = github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'ladislaoRS';
  const linkedinHandle = linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '').replace(/\/$/, '') || 'ladislao-ramirez';

  const channels = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      target: null,
      icon: `
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      `,
    },
    {
      label: 'LinkedIn',
      value: 'in/' + linkedinHandle,
      href: linkedin,
      target: '_blank',
      icon: `
        <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.78-1.75-1.75s.78-1.76 1.75-1.76 1.75.79 1.75 1.76c0 .97-.78 1.75-1.75 1.75M7.85 18.5v-8.37H5.06v8.37h2.79z" />
        </svg>
      `,
    },
    {
      label: 'GitHub',
      value: githubHandle,
      href: github,
      target: '_blank',
      icon: `
        <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      `,
    },
  ];

  if (phone) {
    channels.push({
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/[^0-9+]/g, '')}`,
      target: null,
      icon: `
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      `,
    });
  }

  const gridColsClass = channels.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2';

  return `
    <section class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 border-b border-zinc-200/80 dark:border-zinc-800 print:py-3 print:border-zinc-300 break-inside-avoid">
      <h2 class="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 pt-0.5 print:text-[8pt] print:text-zinc-600">
        Contact
      </h2>

      <div class="grid ${gridColsClass} gap-2.5 sm:gap-3">
        ${channels.map(channel => `
          <a
            href="${channel.href}"
            ${channel.target ? `target="${channel.target}" rel="noopener noreferrer"` : ''}
            class="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20 hover:border-emerald-500/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-200 print:border-zinc-200 print:p-1.5 print:bg-transparent"
          >
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors shadow-2xs print:border-zinc-300 print:w-6 print:h-6 print:text-zinc-700">
              ${channel.icon}
            </div>

            <div class="min-w-0 flex-1">
              <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 print:text-[7.5pt]">
                ${channel.label}
              </div>
              <div class="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors print:text-[8pt] print:text-zinc-900">
                ${channel.value}
              </div>
            </div>

            <span class="text-zinc-300 dark:text-zinc-700 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all text-xs print:hidden" aria-hidden="true">
              &rarr;
            </span>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}
