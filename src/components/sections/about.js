/**
 * About section — electrician → AI architect, evidence areas, how I work
 */

import { bio } from '../../data/bio.js';

export function mountAbout(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="container">
      <header class="section-header">
        <div class="section-eyebrow">// about</div>
        <h2 class="section-title">${bio.origin.role}</h2>
        <p class="section-lede">${bio.origin.description}</p>
      </header>

      <div class="about-grid">
        <div class="about-card" data-reveal>
          <div class="about-card-num">01</div>
          <h3 class="about-card-title">${bio.evidenceAreas[0].title}</h3>
          <p class="about-card-body">${bio.evidenceAreas[0].description}</p>
        </div>
        <div class="about-card" data-reveal>
          <div class="about-card-num">02</div>
          <h3 class="about-card-title">${bio.evidenceAreas[1].title}</h3>
          <p class="about-card-body">${bio.evidenceAreas[1].description}</p>
        </div>
        <div class="about-card" data-reveal>
          <div class="about-card-num">03</div>
          <h3 class="about-card-title">${bio.evidenceAreas[2].title}</h3>
          <p class="about-card-body">${bio.evidenceAreas[2].description}</p>
        </div>
      </div>

      <div class="how-i-work" data-reveal>
        <h3 class="how-label">How I work</h3>
        <ol class="how-pipeline">
          ${bio.howIWork
            .map(
              (step, i) => `
            <li class="how-step" style="--i:${i}">
              <span class="how-step-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="how-step-label">${step}</span>
            </li>
          `
            )
            .join('')}
        </ol>
        <p class="how-note">${bio.howIWorkNote}</p>
      </div>

      <div class="principles" data-reveal>
        ${bio.principles
          .map(
            (p) => `
          <div class="principle">
            <div class="principle-marker" aria-hidden="true"></div>
            <div>
              <h4 class="principle-title">${p.title}</h4>
              <p class="principle-body">${p.description}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

const STYLES = `
.about { position: relative; }
.section-header { max-width: 60ch; margin-bottom: var(--space-16); }
.section-eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--purple-neon);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-4);
}
.section-title {
  font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tighter);
  margin-bottom: var(--space-4);
}
.section-lede {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-20);
}
@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }

.about-card {
  position: relative;
  padding: var(--space-6);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal) var(--ease-out);
}
.about-card:hover {
  border-color: var(--purple-neon);
  transform: translateY(-4px);
  box-shadow: var(--glow-purple);
}
.about-card-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--purple-neon);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-4);
}
.about-card-title {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}
.about-card-body {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.how-i-work {
  padding: var(--space-10);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-3xl);
  margin-bottom: var(--space-12);
}
.how-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--purple-neon);
  margin-bottom: var(--space-6);
}
.how-pipeline {
  list-style: none;
  margin: 0 0 var(--space-6);
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}
.how-step {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--black-elevated);
  border: 1px solid var(--black-border-bright);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  color: var(--text-primary);
}
.how-step-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
  font-weight: var(--weight-bold);
}
.how-step-label { font-weight: var(--weight-medium); }
.how-note {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-style: italic;
  line-height: var(--leading-relaxed);
  max-width: 70ch;
}

.principles {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  max-width: 70ch;
}
.principle {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
}
.principle-marker {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 8px var(--green-matrix-glow);
  flex-shrink: 0;
  margin-top: 0.5rem;
}
.principle-title {
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}
.principle-body {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}
`;

// Inject once
if (!document.getElementById('about-styles')) {
  const style = document.createElement('style');
  style.id = 'about-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}