/**
 * Neuro_Nomad Portfolio — main entry
 * Mounts all section components into their slots in index.html.
 * No build step. No framework. Just native ES modules.
 */

import { mountHeader } from './components/header.js';
import { mountHero } from './components/sections/hero.js';
import { mountAbout } from './components/sections/about.js';
import { mountAide } from './components/sections/aide.js';
import { mountGhostcode } from './components/sections/ghostcode.js';
import { mountProofGallery } from './components/proof/proof-gallery.js';
import { mountVitalis } from './components/sections/vitalis.js';
import { mountCyber } from './components/sections/cyber.js';
import { mountLorein } from './components/sections/lorein.js';
import { mountFooter } from './components/footer.js';

// Mount sections as soon as DOM is ready. Each section is wrapped in try/catch
// so a single failure (e.g. a broken import) doesn't blank the whole page.
function safeMount(name, fn, target) {
  try {
    const result = fn(target);
    if (result && typeof result.then === 'function') {
      result.catch((e) => console.error(`[${name}] async mount failed:`, e));
    }
  } catch (e) {
    console.error(`[${name}] mount failed:`, e);
  }
}

function mount() {
  safeMount('header',    mountHeader,       document.getElementById('site-header'));
  safeMount('hero',      mountHero,         document.getElementById('hero'));
  safeMount('about',     mountAbout,        document.getElementById('about'));
  safeMount('aide',      mountAide,         document.getElementById('aide'));
  safeMount('ghostcode', mountGhostcode,    document.getElementById('ghostcode'));
  safeMount('proof',     mountProofGallery, document.getElementById('proof'));
  safeMount('vitalis',   mountVitalis,      document.getElementById('vitalis'));
  safeMount('cyber',     mountCyber,        document.getElementById('cyber'));
  safeMount('lorein',    mountLorein,       document.getElementById('lorein'));
  safeMount('footer',    mountFooter,       document.getElementById('site-footer'));

  // Set up intersection-observer based reveal animations.
  setupRevealOnScroll();
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  );

  for (const el of document.querySelectorAll('[data-reveal]')) {
    observer.observe(el);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
