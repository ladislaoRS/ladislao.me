import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';

/**
 * Highlights code using Prism for the given language grammar.
 *
 * @param {string} code
 * @param {string} language
 * @return {string}
 */
function highlightCode(code, language = 'php') {
  try {
    const lang = Prism.languages[language] ? language : 'php';
    return Prism.highlight(code, Prism.languages[lang], lang);
  } catch (error) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

/**
 * Formats Markdown into semantic, beautifully styled HTML.
 * Converts **bold**, `inline code`, numbered lists, and code blocks.
 *
 * @param {string} markdown
 * @return {string}
 */
export function formatMarkdown(markdown = '') {
  if (!markdown) return '';

  // 1. Multi-line code blocks: ```lang ... ```
  let html = markdown.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="my-4 p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs border border-zinc-800 overflow-x-auto leading-relaxed"><code>${code.trim()}</code></pre>`;
  });

  // 2. Bold text: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>');

  // 3. Inline code badges: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 text-xs font-mono font-medium rounded bg-zinc-100 dark:bg-zinc-800/80 text-emerald-600 dark:text-emerald-400 border border-zinc-200/80 dark:border-zinc-700/60">$1</code>');

  // 4. Split by double newlines into block groups
  const blocks = html.split(/\n\s*\n/);

  return blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<pre')) return block;

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);

    let result = '';
    let currentList = [];

    lines.forEach(line => {
      const match = line.match(/^(\d+)\.\s+(.*)$/);
      if (match) {
        currentList.push(match[2]);
      } else {
        if (currentList.length > 0) {
          result += `<ol class="list-decimal list-outside ml-5 my-3 space-y-2 text-zinc-700 dark:text-zinc-300">${currentList.map(item => `<li class="pl-1.5 leading-relaxed">${item}</li>`).join('')}</ol>`;
          currentList = [];
        }
        result += `<p class="leading-relaxed text-zinc-700 dark:text-zinc-300 mb-3 last:mb-0">${line}</p>`;
      }
    });

    if (currentList.length > 0) {
      result += `<ol class="list-decimal list-outside ml-5 my-3 space-y-2 text-zinc-700 dark:text-zinc-300">${currentList.map(item => `<li class="pl-1.5 leading-relaxed">${item}</li>`).join('')}</ol>`;
    }

    return result;
  }).join('');
}

/**
 * Render the list of engineering articles.
 *
 * @param {Array} articles
 * @return {string}
 */
export function renderBlogIndex(articles) {
  return `
    <div class="space-y-10 animate-fade-in">
      <!-- Header -->
      <header class="border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8 transition-colors duration-200">
        <div class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 rounded-full border border-emerald-200/60 dark:border-emerald-800/40 mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Architectural Notes</span>
        </div>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          Production Patterns
        </h1>
        <p class="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Real-world resilience, observability, and concurrency patterns from production experience. Eloquent Laravel architecture, decoupled files, and honest trade-offs.
        </p>
      </header>

      <!-- Articles List -->
      <div class="space-y-6">
        ${articles.map((article, index) => `
          <article class="group relative p-6 sm:p-8 bg-zinc-50/60 dark:bg-zinc-800/30 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl transition-all duration-200 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700">
            <div class="flex flex-wrap items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              <span class="font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider text-[11px] bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/50">
                ${article.category}
              </span>
              <span>&bull;</span>
              <span>${article.date}</span>
              <span>&bull;</span>
              <span>${article.readTime}</span>
            </div>

            <h2 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              <a href="#/notes/${article.slug}" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                ${article.title}
              </a>
            </h2>

            <p class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ${article.excerpt}
            </p>

            <div class="mt-5 flex items-center justify-between pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                Article 0${index + 1}
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                Read article
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Render an individual article view.
 *
 * @param {Object} article
 * @return {string}
 */
export function renderArticleView(article) {
  return `
    <article class="space-y-10 animate-fade-in max-w-4xl mx-auto">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pb-2">
        <a href="#/notes" class="inline-flex items-center gap-1.5 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Notes
        </a>
        <span class="font-mono text-[11px]">${article.readTime}</span>
      </nav>

      <!-- Article Header -->
      <header class="border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8 space-y-4">
        <div class="flex items-center gap-2">
          <span class="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/50 uppercase tracking-wider">
            ${article.category}
          </span>
          <span class="text-xs text-zinc-400">&bull;</span>
          <span class="text-xs text-zinc-500 dark:text-zinc-400">${article.date}</span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          ${article.title}
        </h1>

        <p class="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal bg-zinc-50 dark:bg-zinc-800/50 p-4 sm:p-5 rounded-xl border border-zinc-200/70 dark:border-zinc-700/60">
          ${article.excerpt}
        </p>
      </header>

      <!-- Section: The Problem -->
      <section class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </span>
          <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Production Failure Mode
          </h2>
        </div>
        <div class="text-sm sm:text-base leading-relaxed">
          ${formatMarkdown(article.problem)}
        </div>
      </section>

      <!-- Section: The Architectural Solution -->
      <section class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            The Architectural Solution
          </h2>
        </div>
        <div class="text-sm sm:text-base leading-relaxed">
          ${formatMarkdown(article.solution)}
        </div>
      </section>

      <!-- Section: Multi-File Code Implementation with Tabs -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-lg bg-zinc-500/10 text-zinc-600 dark:text-zinc-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Implementation
            </h2>
          </div>
          <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            ${article.files.length} decoupled files
          </span>
        </div>

        <!-- Code Workspace Container -->
        <div class="code-workspace rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-950 shadow-sm">
          <!-- File Tabs Bar -->
          <div class="flex items-center overflow-x-auto bg-zinc-900/90 border-b border-zinc-800/80 px-2 pt-2 gap-1.5">
            ${article.files.map((file, fileIndex) => `
              <button 
                type="button" 
                class="code-tab-btn px-3.5 py-2 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-2 cursor-pointer ${
                  fileIndex === 0 
                    ? 'bg-zinc-950 text-emerald-400 border-t-2 border-emerald-500 font-semibold' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }"
                data-article-slug="${article.slug}"
                data-tab-index="${fileIndex}"
              >
                <span class="w-2 h-2 rounded-full ${fileIndex === 0 ? 'bg-emerald-500' : 'bg-zinc-600'}"></span>
                <span>${file.name}</span>
              </button>
            `).join('')}
          </div>

          <!-- File Panels -->
          ${article.files.map((file, fileIndex) => {
            const lang = file.language || 'php';
            const highlightedHtml = highlightCode(file.code, lang);

            return `
              <div 
                class="code-panel ${fileIndex === 0 ? 'block' : 'hidden'}"
                data-article-slug="${article.slug}"
                data-panel-index="${fileIndex}"
              >
                <!-- File Meta Subheader -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2.5 bg-zinc-900/40 border-b border-zinc-800/60 text-xs">
                  <div class="flex items-center gap-2 truncate">
                    <span class="font-mono text-zinc-300 font-medium text-[11px] truncate">${file.path}</span>
                    <span class="text-zinc-600 hidden sm:inline">&bull;</span>
                    <span class="text-zinc-400 text-[11px] hidden sm:inline truncate">${file.description}</span>
                  </div>

                  <button 
                    type="button" 
                    class="copy-file-code-btn self-end sm:self-auto inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 rounded-md transition-colors cursor-pointer shrink-0"
                    data-raw-code="${encodeURIComponent(file.code)}"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span class="copy-file-label">Copy file</span>
                  </button>
                </div>

                <!-- Code Pre/Code Block with Prism Tokens -->
                <pre class="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono language-${lang}"><code>${highlightedHtml}</code></pre>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Section: Pros & Cons -->
      <section class="space-y-6 pt-4">
        <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Trade-offs: Pros vs Cons
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Pros -->
          <div class="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/50 space-y-4">
            <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">✓</span>
              <span>Key Advantages</span>
            </div>
            <ul class="space-y-3">
              ${article.pros.map(pro => `
                <li class="space-y-1">
                  <h4 class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">${pro.title}</h4>
                  <p class="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-snug">${pro.description}</p>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Cons -->
          <div class="p-5 sm:p-6 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/50 space-y-4">
            <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
              <span class="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">!</span>
              <span>Trade-offs & Real-World Caveats</span>
            </div>
            <ul class="space-y-3">
              ${article.cons.map(con => `
                <li class="space-y-1">
                  <h4 class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">${con.title}</h4>
                  <p class="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-snug">${con.description}</p>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </section>

      <!-- Technical Footnote -->
      ${article.techNote ? `
        <footer class="p-4 sm:p-5 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-1">
          <div class="font-mono font-semibold text-zinc-700 dark:text-zinc-300 text-[11px] uppercase tracking-wider">
            Technical Footnote
          </div>
          <div class="space-y-2">${formatMarkdown(article.techNote)}</div>
        </footer>
      ` : ''}

      <!-- Bottom Navigation Footer -->
      <footer class="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#/notes" class="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Notes
        </a>
        <a href="#/resume" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors">
          Return to Resume
        </a>
      </footer>
    </article>
  `;
}
