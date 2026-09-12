import './style.css';
import { resumeData } from './data/resume.js';
import { articlesData } from './data/articles.js';
import { homeData } from './data/home.js';
import { renderToolbar } from './components/Toolbar.js';
import { renderHeader } from './components/Header.js';
import { renderSummary } from './components/Summary.js';
import { renderExperience } from './components/Experience.js';
import { renderSkills } from './components/Skills.js';
import { renderEducation } from './components/Education.js';
import { renderContact } from './components/Contact.js';
import { renderBlogIndex, renderArticleView } from './components/Blog.js';
import { renderHome } from './components/Home.js';

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function copyEmail() {
  navigator.clipboard.writeText(resumeData.personal.email).then(() => {
    const label = document.getElementById('copy-email-label');
    if (label) {
      const originalText = label.textContent;
      label.textContent = 'Copied!';
      setTimeout(() => {
        label.textContent = originalText;
      }, 2000);
    }
  });
}

function attachCodeInteractions() {
  // File tab switching
  document.querySelectorAll('.code-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const articleSlug = btn.getAttribute('data-article-slug');
      const targetIndex = btn.getAttribute('data-tab-index');

      // Update tab styles
      document.querySelectorAll(`.code-tab-btn[data-article-slug="${articleSlug}"]`).forEach(tab => {
        const isSelected = tab.getAttribute('data-tab-index') === targetIndex;
        const dot = tab.querySelector('span:first-child');
        
        if (isSelected) {
          tab.className = 'code-tab-btn px-3.5 py-2 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-2 cursor-pointer bg-zinc-950 text-emerald-400 border-t-2 border-emerald-500 font-semibold';
          if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500';
        } else {
          tab.className = 'code-tab-btn px-3.5 py-2 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60';
          if (dot) dot.className = 'w-2 h-2 rounded-full bg-zinc-600';
        }
      });

      // Show target panel and hide siblings
      document.querySelectorAll(`.code-panel[data-article-slug="${articleSlug}"]`).forEach(panel => {
        if (panel.getAttribute('data-panel-index') === targetIndex) {
          panel.classList.remove('hidden');
          panel.classList.add('block');
        } else {
          panel.classList.remove('block');
          panel.classList.add('hidden');
        }
      });
    });
  });

  // Copy raw file code button
  document.querySelectorAll('.copy-file-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rawCode = decodeURIComponent(btn.getAttribute('data-raw-code') || '');
      if (!rawCode) return;

      navigator.clipboard.writeText(rawCode).then(() => {
        const label = btn.querySelector('.copy-file-label');
        if (label) {
          const original = label.textContent;
          label.textContent = 'Copied!';
          setTimeout(() => {
            label.textContent = original;
          }, 2000);
        }
      });
    });
  });
}

let brandObserver = null;

function initNavbarBrandObserver() {
  if (brandObserver) {
    brandObserver.disconnect();
    brandObserver = null;
  }

  const brandEl = document.getElementById('nav-brand-text');
  if (!brandEl) return;

  const heroNameEl = document.getElementById('profile-hero-name');
  if (!heroNameEl) {
    // When "Ladislao Ramirez" is not present on the page (e.g. Notes, Articles), display full name
    brandEl.textContent = 'Ladislao Ramirez';
    return;
  }

  // Observe when the profile hero name scrolls out of view on Resume
  brandObserver = new IntersectionObserver(
    ([entry]) => {
      const targetText = entry.isIntersecting ? 'LR' : 'Ladislao Ramirez';
      if (brandEl.textContent !== targetText) {
        brandEl.classList.add('opacity-0');
        setTimeout(() => {
          brandEl.textContent = targetText;
          brandEl.classList.remove('opacity-0');
        }, 120);
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-56px 0px 0px 0px',
    }
  );

  brandObserver.observe(heroNameEl);
}

function parseRoute() {
  const hash = window.location.hash || '#/';
  if (hash.startsWith('#/notes/')) {
    const slug = hash.replace('#/notes/', '').trim();
    return { view: 'article', slug };
  }
  if (hash.startsWith('#/blog/')) {
    const slug = hash.replace('#/blog/', '').trim();
    return { view: 'article', slug };
  }
  if (hash === '#/notes' || hash.startsWith('#/notes') || hash === '#/blog' || hash.startsWith('#/blog')) {
    return { view: 'blog' };
  }
  if (hash === '#/resume' || hash.startsWith('#/resume')) {
    return { view: 'resume' };
  }
  return { view: 'home' };
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const route = parseRoute();

  if (route.view === 'home') {
    document.body.className = "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen transition-colors duration-200 selection:bg-zinc-200 dark:selection:bg-zinc-800 print:bg-white print:p-0";
    app.innerHTML = renderHome(resumeData.personal, homeData);
  } else {
    document.body.className = "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen transition-colors duration-200 selection:bg-zinc-200 dark:selection:bg-zinc-800 print:bg-white print:p-0";

    const activeRouteKey = route.view === 'resume' ? 'resume' : 'blog';
    let mainContent = '';

    if (route.view === 'article') {
      const article = articlesData.find(a => a.slug === route.slug);
      if (article) {
        mainContent = renderArticleView(article);
      } else {
        mainContent = renderBlogIndex(articlesData);
      }
    } else if (route.view === 'blog') {
      mainContent = renderBlogIndex(articlesData);
    } else {
      // Resume View
      mainContent = `
        ${renderHeader(resumeData.personal)}
        ${renderSummary(resumeData.summary, resumeData.philosophy)}
        ${renderExperience(resumeData.experience)}
        ${renderSkills(resumeData.competencies)}
        ${renderEducation(resumeData.education, resumeData.certifications)}
        ${renderContact(resumeData.personal)}
        
        <footer class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-500 text-center sm:text-left print:hidden">
          <div>
            El Paso, TX &bull; ${new Date().getFullYear()}
          </div>
          <a href="#/notes" class="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <span>Explore Engineering Notes</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </footer>
      `;
    }

    app.innerHTML = `
      <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between px-4 sm:px-6 pt-0 pb-10 md:pb-16 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-white transition-colors duration-200 print:py-0 print:px-0 print:min-h-0">
        <div class="max-w-2xl mx-auto w-full flex flex-col justify-between flex-1 print:max-w-none">
          ${renderToolbar(resumeData.personal, activeRouteKey, articlesData.length)}
          <main class="space-y-2">
            ${mainContent}
          </main>
        </div>
      </div>
    `;

    // Attach event listeners for resume/blog
    document.getElementById('print-btn')?.addEventListener('click', () => window.print());
    document.getElementById('copy-email-btn')?.addEventListener('click', copyEmail);
    attachCodeInteractions();
    initNavbarBrandObserver();
  }

  // Global theme toggle listener for Home and Resume/Blog
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Scroll to top on navigation unless anchoring to studio
  if (route.view !== 'studio') {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// Router subscription
window.addEventListener('hashchange', renderApp);

// Bootstrap application
initTheme();
renderApp();
