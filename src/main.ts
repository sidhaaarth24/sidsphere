import './styles.css';
import './spatial-motion';
import data from '../data/content.json';
import type { CertificateItem, ProjectItem, TimelineItem } from './types';

type Portfolio = typeof data;
const portfolio = data as Portfolio;

const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const $$ = <T extends Element>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
const esc = (value: string) => value.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m]!);

const arrow = '<span class="arrow-glyph">↗</span>';
const dots = '<span class="dot-row"><i></i><i></i><i></i><i></i></span>';
const socialIcons: Record<string, string> = {
  Instagram: 'fa-brands fa-instagram',
  Facebook: 'fa-brands fa-facebook',
  Snapchat: 'fa-brands fa-snapchat',
  LinkedIn: 'fa-brands fa-linkedin',
  X: 'fa-brands fa-x-twitter',
  Threads: 'fa-brands fa-threads',
  Discord: 'fa-brands fa-discord',
  Pinterest: 'fa-brands fa-pinterest',
  GitHub: 'fa-brands fa-github',
  Spotify: 'fa-brands fa-spotify',
  YouTube: 'fa-brands fa-youtube',
  Figma: 'fa-brands fa-figma',
  Slack: 'fa-brands fa-slack',
};
const footerLinks: [string, string, string][] = [
  ['Gmail', `mailto:${portfolio.contact.email}`, 'fa-solid fa-envelope'],
  ...portfolio.socials.map(([name, url]) => [name, url, socialIcons[name]] as [string, string, string]),
];

const timeline = (items: TimelineItem[], kind: 'education' | 'experience') => items.map((item, i) => `
  <article class="paper-event depth-card reveal" style="--i:${i}">
    <div class="paper-event-index">${String(i + 1).padStart(2, '0')}</div>
    <div class="paper-event-main">
      <div class="paper-meta"><span>${esc(item.period)}</span><span>${esc(item.type)}</span></div>
      <h3>${esc(item.title)}</h3>
      ${item.description ? `<p>${esc(item.description)}</p>` : `<div class="fact-list">${(item.details ?? []).map((d) => `<span>${esc(d)}</span>`).join('')}</div>`}
      ${item.company ? `<div class="company-stamp">${esc(item.company)}</div>` : ''}
    </div>
    <div class="paper-event-spine"><b>${kind === 'education' ? 'LEARN' : 'FIELD'}</b><span>${dots}</span></div>
  </article>`).join('');

const projectCard = (project: ProjectItem, i: number) => `
  <article class="poster depth-card reveal" style="--i:${i}">
    <div class="poster-top"><span>SIDSPHERE / WORK ${String(i + 1).padStart(2,'0')}</span><span>${esc(project.meta)}</span></div>
    <div class="poster-art ${project.image ? 'has-image' : ''}">
      ${project.image ? `<img class="project-image" src="${import.meta.env.BASE_URL}${esc(project.image)}" alt="${esc(project.name)} preview" loading="lazy">` : `<div class="poster-shape shape-a"></div><div class="poster-shape shape-b"></div><div class="poster-shape shape-c"></div><div class="poster-mark">${String(i + 1).padStart(2,'0')}</div><div class="poster-scan"></div>`}
    </div>
    <div class="poster-title"><span>${esc(project.meta)}</span><h3>${esc(project.name)}</h3></div>
    <p>${esc(project.description)}</p>
    <a class="poster-link magnetic" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer">OPEN PROJECT ${arrow}</a>
  </article>`;

const certificateCard = (item: CertificateItem, i: number) => `
  <article class="cert-card reveal ${i > 3 ? 'is-hidden' : ''}" data-index="${i}" style="--i:${i}">
    <div class="cert-cover"><img class="cert-image" src="${import.meta.env.BASE_URL}${esc(item.image)}" alt="${esc(item.title)} certificate" loading="lazy"></div>
    <div class="cert-info"><small>${esc(item.issuer)}</small><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">VERIFY ${arrow}</a></div>
  </article>`;

const app = $('#app');
if (!app) throw new Error('Missing #app');

app.innerHTML = `
  <div class="folio-shell">
    <div class="grain"></div><div class="light-leak leak-1"></div><div class="light-leak leak-2"></div>
    <header class="folio-header">
      <a class="folio-logo" href="#home"><b>SIDSPHERE</b></a>
      <nav class="top-nav" aria-label="Main navigation">
        ${['home','about','skills','education','experience','projects','certificates','awards','contact'].map((id) => `<a href="#${id}" data-nav="${id}">${id}</a>`).join('')}
      </nav>
      <div class="header-actions"><button id="theme-toggle" class="circle-control magnetic" type="button" aria-label="Toggle theme">◐</button><button id="menu-toggle" class="circle-control menu-control" type="button" aria-label="Open navigation" aria-expanded="false"><span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span></button></div>
    </header>

    <div class="command-palette" id="command-palette" hidden>
      <div class="command-backdrop" data-command-close></div>
      <div class="command-dialog" role="dialog" aria-modal="true" aria-labelledby="command-title">
        <aside class="command-aside">
          <span class="command-aside-mark" aria-hidden="true"></span>
          <span class="command-aside-kicker">SIDSPHERE<br>PERSONAL INDEX</span>
          <span class="command-aside-caption">A considered collection<br>of work and ideas.</span>
          <span class="command-aside-count"><b>09</b> SECTIONS<br><b>02</b> ACTIONS</span>
        </aside>
        <div class="command-main">
          <div class="command-head">
            <div><span class="command-eyebrow">QUICK NAVIGATION</span><h2 id="command-title">Find your next stop.</h2></div>
            <button class="command-close-button" type="button" aria-label="Close command palette"><span aria-hidden="true"></span></button>
          </div>
          <label class="command-search-wrap">
            <span class="command-search-icon" aria-hidden="true">⌕</span>
            <input id="command-search" type="search" autocomplete="off" spellcheck="false" placeholder="Search pages and actions" aria-label="Search commands">
          </label>
          <div class="command-results" id="command-results" role="listbox" aria-label="Commands"></div>
          <div class="command-foot"><span><kbd>↑↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span></div>
        </div>
      </div>
    </div>

    <div class="sidsphere-egg" id="sidsphere-egg" hidden aria-hidden="true">
      <div class="egg-noise"></div>
      <div class="egg-grid"></div>
      <button class="egg-close" id="egg-close" type="button" aria-label="Close SidSphere easter egg">ESC / CLOSE</button>
      <div class="egg-orbit orbit-a"></div><div class="egg-orbit orbit-b"></div><div class="egg-orbit orbit-c"></div>
      <div class="egg-core"><i></i></div>
      <div class="egg-copy">
        <p class="eyebrow">SECRET LAYER / 00:00</p>
        <h2>YOU FOUND<br><em>SIDSPHERE.</em></h2>
        <p>There is always another layer. Keep building, keep exploring.</p>
        <button class="egg-return" id="egg-return" type="button">RETURN TO SURFACE <span>↗</span></button>
      </div>
      <div class="egg-footer"><span>SIDSPHERE // HIDDEN INTERFACE</span><span>TYPE THE NAME AGAIN TO DISCOVER</span></div>
    </div>

    <div class="mobile-menu" id="mobile-menu"><div class="mobile-links">${['home','about','skills','education','experience','projects','certificates','awards','contact'].map((id)=>`<a href="#${id}" data-nav="${id}">${id}</a>`).join('')}</div></div>

    <main>
      <section id="home" class="chapter hero-chapter" data-chapter="00">
        <div class="chapter-kicker"><span>00 / HOME</span>${dots}</div>
        <div class="hero-grid">
          <div class="hero-copy">
            <h1 class="display-title"><span>${esc(portfolio.hero.title[0])}</span><em>${esc(portfolio.hero.title[1])}</em></h1>
            <div class="hero-role" aria-live="polite"><span>I AM <i id="hero-role-article">${/^[aeiou]/i.test(portfolio.roles[0]) ? 'AN' : 'A'}</i></span><b id="hero-role">${esc(portfolio.roles[0].toUpperCase())}</b></div>
            <div class="hero-manifesto"><span>“</span><p>${esc(portfolio.hero.description)}</p></div>
            <div class="hero-actions"><a class="black-button magnetic" href="#projects">${esc(portfolio.hero.primaryCta)} ${arrow}</a><a class="line-button" href="#contact">${esc(portfolio.hero.secondaryCta)}</a></div>
          </div>
          <div class="hero-mosaic" aria-label="Selected projects">
            ${portfolio.projects.slice(0, 3).map((project, i) => `<a class="hero-project-tile tile-${i + 1}" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(project.name)} project"><img src="${import.meta.env.BASE_URL}${esc(project.image)}" alt="${esc(project.name)} project preview"><span class="hero-project-label"><i>${String(i + 1).padStart(2, '0')}</i><b>${esc(project.name)}</b></span></a>`).join('')}
          </div>
        </div>
      </section>

      <section id="about" class="chapter paper-chapter" data-chapter="01">
        <div class="chapter-kicker"><span>01 / ABOUT</span><span>NOTES FROM THE DESK</span></div>
        <div class="about-editorial">
          <div class="about-copy"><h2>${esc(portfolio.about.headline[0])}<br><span>${esc(portfolio.about.headline[1])}</span></h2>${portfolio.about.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<a class="underline-link" href="#contact">LET'S BUILD SOMETHING ${arrow}</a></div>
          <div class="about-sculpture stage-3d depth-card"><div class="stack-sheet s1"></div><div class="stack-sheet s2"></div><div class="stack-sheet s3"></div><div class="stack-label">Curious<br>By Default</div></div>
        </div>
      </section>

      <section id="skills" class="chapter ink-chapter" data-chapter="02">
        <div class="chapter-kicker light"><span>02 / SKILLS</span><span>12 DOMAINS / 08 WRITING SYSTEMS</span></div>
        <div class="skills-intro"><div><p class="eyebrow">THE TOOLBOX</p><h2>Things I<br><i>make move.</i></h2></div></div>
        <div class="skill-wall">${portfolio.skills.map(([name, list], i)=>`<article class="skill-tag depth-card reveal" data-number="${String(i + 1).padStart(2, '0')}" style="--i:${i}"><strong>${esc(name)}</strong><small>${esc(list)}</small></article>`).join('')}</div>
        <div class="language-index reveal">
          <div class="language-index-head">
            <div>
              <p class="eyebrow">LANGUAGE / SCRIPT</p>
              <h3>Words have <i>architecture.</i></h3>
              <p class="language-index-note">Languages I speak and writing systems I work across, presented as a small visual index.</p>
            </div>
            <div class="language-index-count"><b>${String(portfolio.languages.spoken.length + portfolio.languages.scripts.length).padStart(2,'0')}</b><span>ENTRIES</span></div>
          </div>
          <div class="language-switch" role="tablist" aria-label="Language and script index">
            <button class="language-switch-button active" type="button" role="tab" aria-selected="true" data-language-view="spoken">01 / SPOKEN</button>
            <button class="language-switch-button" type="button" role="tab" aria-selected="false" data-language-view="scripts">02 / SCRIPTS</button>
          </div>
          <div class="language-index-body">
            <div class="language-view active" data-language-panel="spoken">
              <div class="language-rows">${portfolio.languages.spoken.map((l,i)=>{ const name=l.split(' (')[0]; const samples=['Hello','नमस्ते','𑂣𑂹𑂩𑂝𑂰𑂧','𑂣𑂹𑂩𑂝𑂰𑂧','𑒣𑓂𑒩𑒝𑒰𑒧','নমস্কার','آداب']; return `<button class="language-row" type="button" data-language-sample="${esc(samples[i] ?? name)}" data-language-name="${esc(name)}"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(name)}</strong><em aria-hidden="true"></em><small>${['EN','HI','BH','MG','MA','BN','UR'][i] ?? '—'}</small></button>`; }).join('')}</div>
            </div>
            <div class="language-view" data-language-panel="scripts" hidden>
              <div class="script-rows">${portfolio.languages.scripts.map((l,i)=>{ const samples=['Roman','देवनागरी','পূর্বী নাগরী','𑂍𑂶𑂟𑂲','𑒞𑒱𑒩𑒯𑒳𑒞𑒰‎','ગુજરાતી','نستعلیق','نسخ']; return `<button class="script-row" type="button" data-language-sample="${esc(samples[i] ?? l)}" data-language-name="${esc(l)}"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(l)}</strong><b aria-hidden="true"></b></button>`; }).join('')}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="chapter paper-chapter" data-chapter="03">
        <div class="chapter-kicker"><span>03 / EDUCATION</span><span>FIELD NOTES</span></div>
        <div class="chapter-head"><div><p class="eyebrow">THE LONG WAY IN</p><h2>Learning,<br><span>in layers.</span></h2></div></div>
        <div class="paper-stack">${timeline(portfolio.education,'education')}</div>
      </section>

      <section id="experience" class="chapter warm-chapter" data-chapter="04">
        <div class="chapter-kicker"><span>04 / EXPERIENCE</span><span>WORKING NOTES</span></div>
        <div class="chapter-head"><div><p class="eyebrow">IN THE FIELD</p><h2>Work leaves<br><span>a mark.</span></h2></div></div>
        <div class="paper-stack experience-stack">${timeline(portfolio.experience,'experience')}</div>
      </section>

      <section id="projects" class="chapter poster-chapter" data-chapter="05">
        <div class="chapter-kicker light"><span>05 / PROJECTS</span><span>SELECTED WORKS</span></div>
        <div class="poster-head"><p class="eyebrow">THE PINBOARD</p><h2>Built things.<br><i>Left traces.</i></h2></div>
        <div class="poster-grid" role="region" aria-label="Selected projects" tabindex="0">${portfolio.projects.map(projectCard).join('')}</div>
      </section>

      <section id="certificates" class="chapter certificate-chapter" data-chapter="06">
        <div class="chapter-kicker"><span>06 / CERTIFICATES</span><span>ARCHIVE / 08</span></div>
        <div class="chapter-head"><div><p class="eyebrow">THE ARCHIVE</p><h2>Proof of<br><span>the process.</span></h2></div></div>
        <div class="certificate-grid">${portfolio.certificates.map(certificateCard).join('')}</div>
        <button class="archive-toggle" id="certificate-toggle"><span>VIEW MORE</span>${arrow}</button>
      </section>

      <section id="awards" class="chapter award-chapter" data-chapter="07">
        <div class="chapter-kicker light"><span>07 / AWARDS</span><span>ONE MOMENT</span></div>
        <div class="award-layout"><div class="award-copy"><p class="eyebrow">${esc(portfolio.award.issuer)}</p><h2>${esc(portfolio.award.title)}</h2><p>${esc(portfolio.award.description)}</p></div><div class="award-object award-gallery">${portfolio.award.images.map((image, i) => `<img class="award-image" src="${import.meta.env.BASE_URL}${esc(image)}" alt="${esc(portfolio.award.title)} image ${i + 1}" loading="lazy">`).join('')}</div></div>
      </section>

      <section id="contact" class="chapter contact-chapter" data-chapter="08">
        <div class="chapter-kicker light"><span>08 / CONTACT</span><span>END OF ISSUE</span></div>
        <div class="contact-cover"><div class="contact-type"><p class="eyebrow">HAVE AN IDEA?</p><h2>Let's make<br><i>the next page.</i></h2><a class="black-button magnetic" href="${esc(portfolio.contact.form)}" target="_blank" rel="noopener noreferrer">OPEN CONTACT FORM ${arrow}</a></div><div class="contact-mark stage-3d" aria-label="Animated connection signal"><div class="signal-orbit orbit-a"></div><div class="signal-orbit orbit-b"></div><div class="signal-core"><span>OPEN</span><b>CONNECT</b><i></i></div><div class="signal-dot dot-a"></div><div class="signal-dot dot-b"></div></div></div>
        <footer class="contact-footer">
          <div class="contact-footer-brand">
            <a class="footer-logo" href="#home"><span>&lt;</span>SidSphere<span>/&gt;</span></a>
            <p class="footer-copyright">© ${new Date().getFullYear()} SidSphere. All rights reserved.</p>
            <p class="footer-attribution">Designed &amp; Developed by Sidharth Kumar.</p>
          </div>
          <nav class="contact-footer-socials" aria-label="Contact and social links">
            ${footerLinks.map(([name, url, icon]) => `<a href="${esc(url)}" aria-label="${esc(name)}" title="${esc(name)}" ${name === 'Gmail' ? '' : 'target="_blank" rel="noopener noreferrer"'}><i class="${icon}" aria-hidden="true"></i></a>`).join('')}
          </nav>
        </footer>
      </section>
    </main>

  </div>`;

const setTheme = (theme: 'light' | 'dark') => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('sidsphere-theme', theme);
  const btn = $('#theme-toggle'); if (btn) btn.textContent = '◐';
};
setTheme((localStorage.getItem('sidsphere-theme') as 'light'|'dark'|null) ?? 'light');
$('#theme-toggle')?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

type Command = { label: string; hint: string; action: () => void; keywords?: string[] };

const commandPalette = $('#command-palette');
const commandSearch = $<HTMLInputElement>('#command-search');
const commandResults = $('#command-results');
let commandIndex = 0;
let commandOpen = false;
let commandPreviousFocus: HTMLElement | null = null;

const closeCommandPalette = () => {
  if (!commandOpen) return;
  commandOpen = false;
  commandPalette?.setAttribute('hidden', '');
  commandPreviousFocus?.focus();
  commandPreviousFocus = null;
};

const scrollToSection = (id: string) => {
  closeCommandPalette();
  document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
};

const commands: Command[] = [
  ...['home','about','skills','education','experience','projects','certificates','awards','contact'].map((id) => ({
    label: `Go to ${id}`,
    hint: `SECTION / ${id.toUpperCase()}`,
    action: () => scrollToSection(id),
    keywords: [id, 'section', 'navigate'],
  })),
  { label: 'Toggle theme', hint: 'APPEARANCE', action: () => { setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); closeCommandPalette(); }, keywords: ['dark', 'light', 'theme', 'mode'] },
  { label: 'Open contact form', hint: 'CONTACT', action: () => { closeCommandPalette(); window.open(portfolio.contact.form, '_blank', 'noopener,noreferrer'); }, keywords: ['contact', 'email', 'hire', 'message'] },
];

const renderCommands = (query = '') => {
  if (!commandResults) return;
  const normalized = query.trim().toLowerCase();
  const filtered = commands.filter(command => `${command.label} ${command.hint} ${(command.keywords ?? []).join(' ')}`.toLowerCase().includes(normalized));
  commandIndex = Math.min(commandIndex, Math.max(filtered.length - 1, 0));
  let previousGroup = '';
  commandResults.innerHTML = filtered.length ? filtered.map((command, index) => {
    const group = command.hint.startsWith('SECTION') ? 'Pages' : 'Actions';
    const heading = group === previousGroup ? '' : `<div class="command-group">${group}</div>`;
    previousGroup = group;
    const label = command.label.replace(/^Go to /, '').replace(/\b[a-z]/g, character => character.toUpperCase());
    return `${heading}
      <button class="command-item ${index === commandIndex ? 'selected' : ''}" type="button" role="option" aria-selected="${index === commandIndex}" data-command-index="${commands.indexOf(command)}">
        <span class="command-item-copy"><b>${esc(label)}</b></span><span class="command-item-enter" aria-hidden="true">↗</span>
      </button>`;
  }).join('') : '<div class="command-empty"><b>No matching commands</b><span>Try another search term.</span></div>';

  $$('.command-item').forEach(item => item.addEventListener('mouseenter', () => {
    commandIndex = Number((item as HTMLElement).dataset.commandIndex ?? 0);
    renderCommands(commandSearch?.value ?? '');
  }));
  $$('.command-item').forEach(item => item.addEventListener('click', () => {
    commands[Number((item as HTMLElement).dataset.commandIndex ?? 0)]?.action();
  }));
};

const openCommandPalette = () => {
  if (commandOpen) return;
  commandPreviousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  commandOpen = true;
  commandPalette?.removeAttribute('hidden');
  commandIndex = 0;
  if (commandSearch) {
    commandSearch.value = '';
    renderCommands();
    requestAnimationFrame(() => commandSearch.focus());
  }
};

commandSearch?.addEventListener('input', () => { commandIndex = 0; renderCommands(commandSearch.value); });
commandPalette?.addEventListener('click', event => {
  if ((event.target as HTMLElement).matches('[data-command-close], .command-close-button, .command-close-button *')) closeCommandPalette();
});
window.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  if ((event.metaKey || event.ctrlKey) && key === 'k') {
    event.preventDefault();
    commandOpen ? closeCommandPalette() : openCommandPalette();
    return;
  }
  if (commandOpen && key === 'escape') { event.preventDefault(); closeCommandPalette(); return; }
  if (!commandOpen) return;
  const visibleItems = $$('.command-item') as HTMLElement[];
  if (key === 'arrowdown') { event.preventDefault(); if (visibleItems.length) { commandIndex = (commandIndex + 1) % visibleItems.length; renderCommands(commandSearch?.value ?? ''); } }
  if (key === 'arrowup') { event.preventDefault(); if (visibleItems.length) { commandIndex = (commandIndex - 1 + visibleItems.length) % visibleItems.length; renderCommands(commandSearch?.value ?? ''); } }
  if (key === 'enter') { event.preventDefault(); const item = visibleItems[commandIndex]; if (item) commands[Number(item.dataset.commandIndex ?? 0)]?.action(); }
});

renderCommands();


const egg = $('#sidsphere-egg');
const eggClose = $('#egg-close');
const eggReturn = $('#egg-return');
let eggOpen = false;
const closeEgg = () => {
  if (!eggOpen) return;
  eggOpen = false;
  egg?.setAttribute('hidden', '');
  egg?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('egg-active');
};
const openEgg = () => {
  if (eggOpen) return;
  closeCommandPalette();
  closeMenu();
  eggOpen = true;
  egg?.removeAttribute('hidden');
  egg?.setAttribute('aria-hidden', 'false');
  document.body.classList.add('egg-active');
  requestAnimationFrame(() => eggClose?.focus());
};
eggClose?.addEventListener('click', closeEgg);
eggReturn?.addEventListener('click', closeEgg);
egg?.addEventListener('click', event => { if ((event.target as HTMLElement).matches('[data-egg-close]')) closeEgg(); });

let secretBuffer = '';
let secretReset: number | undefined;
window.addEventListener('keydown', event => {
  if (eggOpen && event.key.toLowerCase() === 'escape') { event.preventDefault(); closeEgg(); return; }
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key.length !== 1 || !/[a-z]/i.test(event.key)) return;
  secretBuffer = (secretBuffer + event.key.toLowerCase()).slice(-9);
  window.clearTimeout(secretReset);
  secretReset = window.setTimeout(() => { secretBuffer = ''; }, 1800);
  if (secretBuffer.endsWith('sidsphere')) {
    secretBuffer = '';
    openEgg();
  }
});

let roleIndex = 0;
const typing = $('#hero-role');
const roleArticle = $('#hero-role-article');
window.setInterval(() => {
  roleIndex = (roleIndex + 1) % portfolio.roles.length;
  if (typing) {
    typing.animate([{opacity:0, transform:'translateY(7px)'},{opacity:1, transform:'translateY(0)'}], {duration:420, easing:'cubic-bezier(.2,.8,.2,1)'});
    typing.textContent = portfolio.roles[roleIndex].toUpperCase();
    if (roleArticle) roleArticle.textContent = /^[aeiou]/i.test(portfolio.roles[roleIndex]) ? 'AN' : 'A';
  }
}, 2200);

const revealObserver = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), {threshold: .12});
$$('.reveal').forEach(el => revealObserver.observe(el));

const navLinks = $$<HTMLAnchorElement>('[data-nav]');
const chapterObserver = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const id = entry.target.id;
  navLinks.forEach(n => n.classList.toggle('active', n.dataset.nav === id));
}), {rootMargin:'-40% 0px -48% 0px'});
$$<HTMLElement>('.chapter').forEach(s => chapterObserver.observe(s));

const toggleCertificateVisibility = () => {
  const open = $$('.cert-card.is-hidden').length > 0; const button = $('#certificate-toggle');
  $$('.cert-card').forEach((card, i) => { if (i > 3) card.classList.toggle('is-hidden', !open); });
  if (button) button.innerHTML = open ? `<span>SHOW LESS</span>${arrow}` : `<span>VIEW MORE</span>${arrow}`;
  if (open) $$('.cert-card:not(.is-hidden)').forEach(el => revealObserver.observe(el));
};
$('#certificate-toggle')?.addEventListener('click', toggleCertificateVisibility);

const menu = $('#mobile-menu');
const menuToggle = $('#menu-toggle');
const header = $('.folio-header');
const setMenuOpen = (open: boolean) => {
  menu?.classList.toggle('open', open);
  header?.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
};
const closeMenu = () => setMenuOpen(false);
menuToggle?.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
$$<HTMLAnchorElement>('.mobile-links a').forEach(a => a.addEventListener('click', closeMenu));

$$<HTMLElement>('.depth-card, .stage-3d').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = card.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width-.5; const y = (e.clientY-r.top)/r.height-.5;
    card.style.setProperty('--rx', `${(-y*8).toFixed(2)}deg`); card.style.setProperty('--ry', `${(x*10).toFixed(2)}deg`); card.style.setProperty('--mx', `${(x*30).toFixed(0)}px`); card.style.setProperty('--my', `${(y*30).toFixed(0)}px`);
  });
  card.addEventListener('pointerleave', () => { card.style.setProperty('--rx','0deg'); card.style.setProperty('--ry','0deg'); card.style.setProperty('--mx','0px'); card.style.setProperty('--my','0px'); });
});

$$<HTMLElement>('.magnetic').forEach(el => {
  el.addEventListener('pointermove', e => { const r=el.getBoundingClientRect(); const x=(e.clientX-(r.left+r.width/2))*.08; const y=(e.clientY-(r.top+r.height/2))*.08; el.style.transform=`translate(${x}px,${y}px)`; });
  el.addEventListener('pointerleave',()=>el.style.transform='');
});

const languageSwitches = $$<HTMLButtonElement>('.language-switch-button');
const languagePanels = $$<HTMLElement>('[data-language-panel]');

const setLanguageView = (view: string) => {
  languageSwitches.forEach(button => {
    const active = button.dataset.languageView === view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  languagePanels.forEach(panel => {
    const active = panel.dataset.languagePanel === view;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
};
languageSwitches.forEach(button => button.addEventListener('click', () => setLanguageView(button.dataset.languageView ?? 'spoken')));

$$<HTMLButtonElement>('.script-row').forEach(button => {
  const title = button.querySelector('strong');
  const defaultLabel = button.dataset.languageName ?? title?.textContent ?? '';
  const hoverLabel = button.dataset.languageSample ?? defaultLabel;

  if (!title) return;

  const setTitle = (label: string) => {
    title.textContent = label;
  };

  setTitle(defaultLabel);
  button.addEventListener('mouseenter', () => setTitle(hoverLabel));
  button.addEventListener('mouseleave', () => setTitle(defaultLabel));
  button.addEventListener('focus', () => setTitle(hoverLabel));
  button.addEventListener('blur', () => setTitle(defaultLabel));
});

const projectCarousel = $<HTMLElement>('.poster-grid');
if (projectCarousel) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let isCarouselVisible = false;
  let previousFrame = 0;
  let previousPointerX: number | null = null;
  let pointerDirection = 1;
  let pointerBoostUntil = 0;
  let resumeAutoplayAt = 0;
  let scrollDirection = 1;
  let pointerDown = false;

  new IntersectionObserver(([entry]) => {
    isCarouselVisible = entry.isIntersecting;
  }, { threshold: 0.15 }).observe(projectCarousel);

  const animateProjects = (time: number) => {
    if (previousFrame && isCarouselVisible && !pointerDown && !reducedMotion.matches && time >= resumeAutoplayAt) {
      const elapsed = Math.min(time - previousFrame, 50) / 1000;
      const maxScroll = projectCarousel.scrollWidth - projectCarousel.clientWidth;
      if (maxScroll > 0) {
        const usingPointer = time < pointerBoostUntil;
        const speed = usingPointer ? 360 : 30;
        const direction = usingPointer ? pointerDirection : scrollDirection;
        const nextScroll = projectCarousel.scrollLeft + direction * speed * elapsed;
        if (nextScroll >= maxScroll) {
          projectCarousel.scrollLeft = maxScroll;
          scrollDirection = -1;
          pointerBoostUntil = 0;
        } else if (nextScroll <= 0) {
          projectCarousel.scrollLeft = 0;
          scrollDirection = 1;
          pointerBoostUntil = 0;
        } else {
          projectCarousel.scrollLeft = nextScroll;
        }
      }
    }
    previousFrame = time;
    requestAnimationFrame(animateProjects);
  };

  projectCarousel.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || pointerDown || reducedMotion.matches) return;
    if (previousPointerX !== null && Math.abs(event.clientX - previousPointerX) > 2) {
      pointerDirection = event.clientX > previousPointerX ? 1 : -1;
      pointerBoostUntil = performance.now() + 650;
    }
    previousPointerX = event.clientX;
  });
  projectCarousel.addEventListener('pointerleave', () => {
    previousPointerX = null;
    pointerBoostUntil = 0;
  });
  projectCarousel.addEventListener('pointerdown', () => {
    pointerDown = true;
    resumeAutoplayAt = performance.now() + 1200;
  });
  window.addEventListener('pointerup', () => {
    pointerDown = false;
  });
  projectCarousel.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      projectCarousel.scrollLeft += event.deltaY;
    }
    resumeAutoplayAt = performance.now() + 1400;
  }, { passive: false });
  projectCarousel.addEventListener('touchstart', () => {
    resumeAutoplayAt = performance.now() + 1400;
  }, { passive: true });
  projectCarousel.addEventListener('focusin', () => {
    resumeAutoplayAt = Number.POSITIVE_INFINITY;
  });
  projectCarousel.addEventListener('focusout', event => {
    if (!(event.relatedTarget instanceof Node) || !projectCarousel.contains(event.relatedTarget)) {
      resumeAutoplayAt = performance.now() + 1200;
    }
  });

  requestAnimationFrame(animateProjects);
}
