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

// Mount sections as soon as DOM is ready.
function mount() {
  mountHeader(document.getElementById('site-header'));
  mountHero(document.getElementById('hero'));
  mountAbout(document.getElementById('about'));
  mountAide(document.getElementById('aide'));
  mountGhostcode(document.getElementById('ghostcode'));
  mountProofGallery(document.getElementById('proof'));
  mountVitalis(document.getElementById('vitalis'));
  mountCyber(document.getElementById('cyber'));
  mountLorein(document.getElementById('lorein'));
  mountFooter(document.getElementById('site-footer'));

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
