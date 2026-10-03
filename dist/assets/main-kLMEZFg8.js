(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const _=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!_){const e=document.documentElement;let a=0,t=0,n=0,s=0,o=0,d=0;window.addEventListener("pointermove",h=>{a=(h.clientX/innerWidth-.5)*2,t=(h.clientY/innerHeight-.5)*2},{passive:!0}),window.addEventListener("scroll",()=>{o=scrollY},{passive:!0});const u=()=>{n+=(a-n)*.055,s+=(t-s)*.055,d+=(o-d)*.06,e.style.setProperty("--pointer-x",n.toFixed(3)),e.style.setProperty("--pointer-y",s.toFixed(3)),e.style.setProperty("--scroll-y",d.toFixed(1)),requestAnimationFrame(u)};requestAnimationFrame(u)}const J=["engineer","developer","designer","programmer","editor","translator","author","artist"],Q={title:["Sidharth","Kumar"],description:"I take ideas that exist only in my head and turn them into polished digital experiences people can actually use.",primaryCta:"Explore my work",secondaryCta:"Let's connect"},Z={headline:["Curiosity","made tangible."],paragraphs:["I'm Sidharth Kumar, a Computer Science & Engineering student who loves turning ideas into digital experiences.","From websites and interfaces to creative projects, I explore the intersection of technology, design and creativity.","I'm constantly learning new technologies, experimenting with ideas and improving the way I build things."]},ee=[["Frontend","HTML · CSS · JavaScript"],["Programming","C · Python · Java"],["Backend","Firebase"],["Database","Firestore"],["Document Markup","Markdown · LaTeX"],["Design","UI · UX · Web · Graphic · Illustration · Presentation · Email · Typography"],["Version Control","Git · GitHub"],["Operating Systems","Windows · macOS · iOS · Linux · Android"],["Tools","Visual Studio Code · Apple Creative Studio · Adobe Creative Suite · LibreOffice · Canva · CorelDRAW · Inkscape · WordPress · Figma"],["Artificial Intelligence","ChatGPT · Claude · Gemini · Grok · Copilot · Julius · Perplexity · LM Studio · Runway · MidJourney · Seedance · Kling · Sora"],["Soft Skills","Communication · Leadership · Adaptability · Time Management · Quick Learner · Problem Solving · Hard Working"],["Creativity","Image/Video Generation, Writing & Data Analysis using Ai · Calligraphy & Handwriting · Translator, Transliterator & Transcriber · Artist · Content Creator & Social Media Manager · Editor · Prompt"]],ae={spoken:["English","Hindi (हिन्दी)","Bhojpuri (𑂦𑂷𑂔𑂣𑂳𑂩𑂲)","Magahi (𑂧𑂏𑂯𑂲)","Maithili (𑒧𑒻𑒟𑒱𑒪𑒲)","Bangla (বাংলা)","Urdu (اُرْدُو)"],scripts:["Roman","Devanagari","Eastern Nagari","Kaithi","Tirhuta","Gujarati","Nastaliq","Naskh"]},te=[{period:"2025 — 2028",type:"Engineering diploma",title:"Government Polytechnic Institute",details:["Supaul, India","Computer Science & Engineering","State Board of Technical Education"]},{period:"2015 — 2025",type:"Secondary education",title:"St. Anne's High School",details:["Patna, India","General Studies","Central Board of Secondary Education"]}],ie=[{period:"2026 — 2027",type:"Contractual / Temporary",title:"Training & Placement Coordinator",description:"Coordinated training and placement activities for students, organized workshops, and facilitated industry interactions to enhance employability skills.",company:"Govt. Polytechnic Institute"},{period:"June 2026",type:"Internship",title:"Web Designer",description:"Completed a 1-month internship in web design, working on responsive layouts, UI design, and user-friendly websites.",company:"Amyra Cadezone Pvt. Ltd."}],se=[{name:"SidSphere",meta:"01",description:"Personal portfolio website with an interactive code-inspired interface.",url:"https://sidhaaarth24.github.io/sidsphere/",image:"images/projects/project1.png"},{name:"CalcX",meta:"02",description:"A basic, scientific and engineering calculator web application with unit conversion.",url:"https://sidhaaarth24.github.io/calcx/",image:"images/projects/project2.png"},{name:"PassForge",meta:"03",description:"A password manager web application to check password strength and generate strong passwords.",url:"https://sidhaaarth24.github.io/passforge/",image:"images/projects/project3.png"},{name:"My Works Drive",meta:"Drive",description:"A Google Drive folder containing all my works, projects, and documents.",url:"https://drive.google.com/drive/folders/1yy9t0jdydu0Nlz9HO58oNg8P9aviou_L?usp=share_link",image:"images/projects/project4.png"}],ne=[{number:"01",issuer:"Cisco Networking Academy",title:"Introduction to Cybersecurity",description:"Certificate for completing an introduction to cybersecurity and its fundamental concepts.",image:"images/certificates/certificate1.png",url:"https://www.credly.com/badges/5f781509-b77f-4b3f-a7f1-3423204b32e1/embedded"},{number:"02",issuer:"Cisco Networking Academy",title:"Introduction to IoT",description:"Certificate for completing an introduction to Internet of Things (IoT) and its fundamental concepts.",image:"images/certificates/certificate2.png",url:"https://www.credly.com/badges/9444d273-8f06-4195-9bf2-ac1a952e13b0/embedded"},{number:"03",issuer:"Cisco Networking Academy",title:"Introduction to Modern AI",description:"Certificate for completing an introduction to modern artificial intelligence (AI) and its fundamental concepts.",image:"images/certificates/certificate3.png",url:"https://www.credly.com/badges/c378b357-c76a-4159-9fef-30795d2b6926/embedded"},{number:"04",issuer:"Cisco Networking Academy",title:"Introduction to Data Science",description:"Certificate focused on foundational concepts and workflows in data science.",image:"images/certificates/certificate4.png",url:"https://www.credly.com/badges/38889060-8b19-4138-b571-fe35e067817f/embedded"},{number:"05",issuer:"Amyra Cadezone Pvt. Ltd.",title:"Internship in Web Designing",description:"Certificate for completing a web design internship.",image:"images/certificates/certificate5.png",url:"https://cadezonedesign.com/verify-certificate.php?cert_no=CADE%2F26%2FWD%2F321"},{number:"06",issuer:"be10x",title:"AI Tools Workshop",description:"Certificate for participating in an AI tools workshop.",image:"images/certificates/certificate6.png",url:"https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971703678"},{number:"07",issuer:"Coursera",title:"Build Website with WordPress",description:"Course completion certificate for building websites with WordPress.",image:"images/certificates/certificate7.png",url:"https://www.coursera.org/account/accomplishments/verify/PP9HSFO1F0FK"},{number:"08",issuer:"Coursera",title:"SEO with Squarespace",description:"Course completion certificate covering search engine optimization with Squarespace.",image:"images/certificates/certificate8.png",url:"https://www.coursera.org/account/accomplishments/verify/ZF7BE3VHPP62"}],re={issuer:"Government of India",title:"Pariksha Pe Charcha 2023",description:"A Government of India initiative encouraging students to interact and discuss examination, learning and student-related experiences.",images:["images/awards/award1.jpeg","images/awards/award2.jpeg"]},oe={form:"https://docs.google.com/forms/d/e/1FAIpQLScYkwIUiO87GaXWFugKqochY8cwAIWiqM5UN4p9yEP4dtCgbg/viewform",email:"sidhaaarth.work@gmail.com"},ce=[["Instagram","https://instagram.com/sidhaaarth24"],["Facebook","https://www.facebook.com/profile.php?id=61589138392154"],["Snapchat","https://www.snapchat.com/add/sidhaaarth.24"],["LinkedIn","https://www.linkedin.com/in/sidhaaarth24"],["X","https://x.com/sidhaaarth24"],["Threads","https://threads.net/@sidhaaarth24"],["Discord","https://discord.gg/dJ9rqzEjJB"],["Pinterest","https://pinterest.com/sidhaaarth24"],["GitHub","https://github.com/sidhaaarth24"],["Spotify","https://open.spotify.com/user/31q74t27dd7n655tcrnp5mq5ascq"],["YouTube","https://www.youtube.com/@sidhaaarth24"],["Figma","https://www.figma.com/@sidhaaarth24"],["Slack","https://join.slack.com/t/sidharthsworkspacehq/shared_invite/zt-4avbvvm0l-oMP4Eoqsm8AvTuH271llkQ"]],de={roles:J,hero:Q,about:Z,skills:ee,languages:ae,education:te,experience:ie,projects:se,certificates:ne,award:re,contact:oe,socials:ce},r=de,p=e=>document.querySelector(e),m=e=>Array.from(document.querySelectorAll(e)),i=e=>e.replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a]),v='<span class="arrow-glyph">↗</span>',W='<span class="dot-row"><i></i><i></i><i></i><i></i></span>',le={Instagram:"fa-brands fa-instagram",Facebook:"fa-brands fa-facebook",Snapchat:"fa-brands fa-snapchat",LinkedIn:"fa-brands fa-linkedin",X:"fa-brands fa-x-twitter",Threads:"fa-brands fa-threads",Discord:"fa-brands fa-discord",Pinterest:"fa-brands fa-pinterest",GitHub:"fa-brands fa-github",Spotify:"fa-brands fa-spotify",YouTube:"fa-brands fa-youtube",Figma:"fa-brands fa-figma",Slack:"fa-brands fa-slack"},pe=[["Gmail",`mailto:${r.contact.email}`,"fa-solid fa-envelope"],...r.socials.map(([e,a])=>[e,a,le[e]])],M=(e,a)=>e.map((t,n)=>`
  <article class="paper-event depth-card reveal" style="--i:${n}">
    <div class="paper-event-index">${String(n+1).padStart(2,"0")}</div>
    <div class="paper-event-main">
      <div class="paper-meta"><span>${i(t.period)}</span><span>${i(t.type)}</span></div>
      <h3>${i(t.title)}</h3>
      ${t.description?`<p>${i(t.description)}</p>`:`<div class="fact-list">${(t.details??[]).map(s=>`<span>${i(s)}</span>`).join("")}</div>`}
      ${t.company?`<div class="company-stamp">${i(t.company)}</div>`:""}
    </div>
    <div class="paper-event-spine"><b>${a==="education"?"LEARN":"FIELD"}</b><span>${W}</span></div>
  </article>`).join(""),me=(e,a)=>`
  <article class="poster depth-card reveal" style="--i:${a}">
    <div class="poster-top"><span>SIDSPHERE / WORK ${String(a+1).padStart(2,"0")}</span><span>${i(e.meta)}</span></div>
    <div class="poster-art ${e.image?"has-image":""}">
      ${e.image?`<img class="project-image" src="/sidsphere/${i(e.image)}" alt="${i(e.name)} preview" loading="lazy">`:`<div class="poster-shape shape-a"></div><div class="poster-shape shape-b"></div><div class="poster-shape shape-c"></div><div class="poster-mark">${String(a+1).padStart(2,"0")}</div><div class="poster-scan"></div>`}
    </div>
    <div class="poster-title"><span>${i(e.meta)}</span><h3>${i(e.name)}</h3></div>
    <p>${i(e.description)}</p>
    <a class="poster-link magnetic" href="${i(e.url)}" target="_blank" rel="noopener noreferrer">OPEN PROJECT ${v}</a>
  </article>`,ge=(e,a)=>`
  <article class="cert-card reveal ${a>3?"is-hidden":""}" data-index="${a}" style="--i:${a}">
    <div class="cert-cover"><img class="cert-image" src="/sidsphere/${i(e.image)}" alt="${i(e.title)} certificate" loading="lazy"></div>
    <div class="cert-info"><small>${i(e.issuer)}</small><h3>${i(e.title)}</h3><p>${i(e.description)}</p><a href="${i(e.url)}" target="_blank" rel="noopener noreferrer">VERIFY ${v}</a></div>
  </article>`,G=p("#app");if(!G)throw new Error("Missing #app");G.innerHTML=`
  <div class="folio-shell">
    <div class="grain"></div><div class="light-leak leak-1"></div><div class="light-leak leak-2"></div>
    <header class="folio-header">
      <a class="folio-logo" href="#home"><b>SIDSPHERE</b></a>
      <nav class="top-nav" aria-label="Main navigation">
        ${["home","about","skills","education","experience","projects","certificates","awards","contact"].map(e=>`<a href="#${e}" data-nav="${e}">${e}</a>`).join("")}
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

    <div class="mobile-menu" id="mobile-menu"><div class="mobile-links">${["home","about","skills","education","experience","projects","certificates","awards","contact"].map(e=>`<a href="#${e}" data-nav="${e}">${e}</a>`).join("")}</div></div>

    <main>
      <section id="home" class="chapter hero-chapter" data-chapter="00">
        <div class="chapter-kicker"><span>00 / HOME</span>${W}</div>
        <div class="hero-grid">
          <div class="hero-copy">
            <h1 class="display-title"><span>${i(r.hero.title[0])}</span><em>${i(r.hero.title[1])}</em></h1>
            <div class="hero-role" aria-live="polite"><span>I AM <i id="hero-role-article">${/^[aeiou]/i.test(r.roles[0])?"AN":"A"}</i></span><b id="hero-role">${i(r.roles[0].toUpperCase())}</b></div>
            <div class="hero-manifesto"><span>“</span><p>${i(r.hero.description)}</p></div>
            <div class="hero-actions"><a class="black-button magnetic" href="#projects">${i(r.hero.primaryCta)} ${v}</a><a class="line-button" href="#contact">${i(r.hero.secondaryCta)}</a></div>
          </div>
          <div class="hero-mosaic" aria-label="Selected projects">
            ${r.projects.slice(0,3).map((e,a)=>`<a class="hero-project-tile tile-${a+1}" href="${i(e.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${i(e.name)} project"><img src="/sidsphere/${i(e.image)}" alt="${i(e.name)} project preview"><span class="hero-project-label"><i>${String(a+1).padStart(2,"0")}</i><b>${i(e.name)}</b></span></a>`).join("")}
          </div>
        </div>
      </section>

      <section id="about" class="chapter paper-chapter" data-chapter="01">
        <div class="chapter-kicker"><span>01 / ABOUT</span><span>NOTES FROM THE DESK</span></div>
        <div class="about-editorial">
          <div class="about-copy"><h2>${i(r.about.headline[0])}<br><span>${i(r.about.headline[1])}</span></h2>${r.about.paragraphs.map(e=>`<p>${i(e)}</p>`).join("")}<a class="underline-link" href="#contact">LET'S BUILD SOMETHING ${v}</a></div>
          <div class="about-sculpture stage-3d depth-card"><div class="stack-sheet s1"></div><div class="stack-sheet s2"></div><div class="stack-sheet s3"></div><div class="stack-label">Curious<br>By Default</div></div>
        </div>
      </section>

      <section id="skills" class="chapter ink-chapter" data-chapter="02">
        <div class="chapter-kicker light"><span>02 / SKILLS</span><span>12 DOMAINS / 08 WRITING SYSTEMS</span></div>
        <div class="skills-intro"><div><p class="eyebrow">THE TOOLBOX</p><h2>Things I<br><i>make move.</i></h2></div></div>
        <div class="skill-wall">${r.skills.map(([e,a],t)=>`<article class="skill-tag depth-card reveal" data-number="${String(t+1).padStart(2,"0")}" style="--i:${t}"><strong>${i(e)}</strong><small>${i(a)}</small></article>`).join("")}</div>
        <div class="language-index reveal">
          <div class="language-index-head">
            <div>
              <p class="eyebrow">LANGUAGE / SCRIPT</p>
              <h3>Words have <i>architecture.</i></h3>
              <p class="language-index-note">Languages I speak and writing systems I work across, presented as a small visual index.</p>
            </div>
            <div class="language-index-count"><b>${String(r.languages.spoken.length+r.languages.scripts.length).padStart(2,"0")}</b><span>ENTRIES</span></div>
          </div>
          <div class="language-switch" role="tablist" aria-label="Language and script index">
            <button class="language-switch-button active" type="button" role="tab" aria-selected="true" data-language-view="spoken">01 / SPOKEN</button>
            <button class="language-switch-button" type="button" role="tab" aria-selected="false" data-language-view="scripts">02 / SCRIPTS</button>
          </div>
          <div class="language-index-body">
            <div class="language-view active" data-language-panel="spoken">
              <div class="language-rows">${r.languages.spoken.map((e,a)=>{const t=e.split(" (")[0];return`<button class="language-row" type="button" data-language-sample="${i(["Hello","नमस्ते","𑂣𑂹𑂩𑂝𑂰𑂧","𑂣𑂹𑂩𑂝𑂰𑂧","𑒣𑓂𑒩𑒝𑒰𑒧","নমস্কার","آداب"][a]??t)}" data-language-name="${i(t)}"><span>${String(a+1).padStart(2,"0")}</span><strong>${i(t)}</strong><em aria-hidden="true"></em><small>${["EN","HI","BH","MG","MA","BN","UR"][a]??"—"}</small></button>`}).join("")}</div>
            </div>
            <div class="language-view" data-language-panel="scripts" hidden>
              <div class="script-rows">${r.languages.scripts.map((e,a)=>`<button class="script-row" type="button" data-language-sample="${i(["Roman","देवनागरी","পূর্বী নাগরী","𑂍𑂶𑂟𑂲","𑒞𑒱𑒩𑒯𑒳𑒞𑒰‎","ગુજરાતી","نستعلیق","نسخ"][a]??e)}" data-language-name="${i(e)}"><span>${String(a+1).padStart(2,"0")}</span><strong>${i(e)}</strong><b aria-hidden="true"></b></button>`).join("")}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="chapter paper-chapter" data-chapter="03">
        <div class="chapter-kicker"><span>03 / EDUCATION</span><span>FIELD NOTES</span></div>
        <div class="chapter-head"><div><p class="eyebrow">THE LONG WAY IN</p><h2>Learning,<br><span>in layers.</span></h2></div></div>
        <div class="paper-stack">${M(r.education,"education")}</div>
      </section>

      <section id="experience" class="chapter warm-chapter" data-chapter="04">
        <div class="chapter-kicker"><span>04 / EXPERIENCE</span><span>WORKING NOTES</span></div>
        <div class="chapter-head"><div><p class="eyebrow">IN THE FIELD</p><h2>Work leaves<br><span>a mark.</span></h2></div></div>
        <div class="paper-stack experience-stack">${M(r.experience,"experience")}</div>
      </section>

      <section id="projects" class="chapter poster-chapter" data-chapter="05">
        <div class="chapter-kicker light"><span>05 / PROJECTS</span><span>SELECTED WORKS</span></div>
        <div class="poster-head"><p class="eyebrow">THE PINBOARD</p><h2>Built things.<br><i>Left traces.</i></h2></div>
        <div class="poster-grid" role="region" aria-label="Selected projects" tabindex="0">${r.projects.map(me).join("")}</div>
      </section>

      <section id="certificates" class="chapter certificate-chapter" data-chapter="06">
        <div class="chapter-kicker"><span>06 / CERTIFICATES</span><span>ARCHIVE / 08</span></div>
        <div class="chapter-head"><div><p class="eyebrow">THE ARCHIVE</p><h2>Proof of<br><span>the process.</span></h2></div></div>
        <div class="certificate-grid">${r.certificates.map(ge).join("")}</div>
        <button class="archive-toggle" id="certificate-toggle"><span>VIEW MORE</span>${v}</button>
      </section>

      <section id="awards" class="chapter award-chapter" data-chapter="07">
        <div class="chapter-kicker light"><span>07 / AWARDS</span><span>ONE MOMENT</span></div>
        <div class="award-layout"><div class="award-copy"><p class="eyebrow">${i(r.award.issuer)}</p><h2>${i(r.award.title)}</h2><p>${i(r.award.description)}</p></div><div class="award-object award-gallery">${r.award.images.map((e,a)=>`<img class="award-image" src="/sidsphere/${i(e)}" alt="${i(r.award.title)} image ${a+1}" loading="lazy">`).join("")}</div></div>
      </section>

      <section id="contact" class="chapter contact-chapter" data-chapter="08">
        <div class="chapter-kicker light"><span>08 / CONTACT</span><span>END OF ISSUE</span></div>
        <div class="contact-cover"><div class="contact-type"><p class="eyebrow">HAVE AN IDEA?</p><h2>Let's make<br><i>the next page.</i></h2><a class="black-button magnetic" href="${i(r.contact.form)}" target="_blank" rel="noopener noreferrer">OPEN CONTACT FORM ${v}</a></div><div class="contact-mark stage-3d" aria-label="Animated connection signal"><div class="signal-orbit orbit-a"></div><div class="signal-orbit orbit-b"></div><div class="signal-core"><span>OPEN</span><b>CONNECT</b><i></i></div><div class="signal-dot dot-a"></div><div class="signal-dot dot-b"></div></div></div>
        <footer class="contact-footer">
          <div class="contact-footer-brand">
            <a class="footer-logo" href="#home"><span>&lt;</span>SidSphere<span>/&gt;</span></a>
            <p class="footer-copyright">© ${new Date().getFullYear()} SidSphere. All rights reserved.</p>
            <p class="footer-attribution">Designed &amp; Developed by Sidharth Kumar.</p>
          </div>
          <nav class="contact-footer-socials" aria-label="Contact and social links">
            ${pe.map(([e,a,t])=>`<a href="${i(a)}" aria-label="${i(e)}" title="${i(e)}" ${e==="Gmail"?"":'target="_blank" rel="noopener noreferrer"'}><i class="${t}" aria-hidden="true"></i></a>`).join("")}
          </nav>
        </footer>
      </section>
    </main>

  </div>`;const N=e=>{document.documentElement.dataset.theme=e,localStorage.setItem("sidsphere-theme",e);const a=p("#theme-toggle");a&&(a.textContent="◐")};N(localStorage.getItem("sidsphere-theme")??"light");p("#theme-toggle")?.addEventListener("click",()=>N(document.documentElement.dataset.theme==="dark"?"light":"dark"));const D=p("#command-palette"),f=p("#command-search"),R=p("#command-results");let g=0,b=!1,O=null;const y=()=>{b&&(b=!1,D?.setAttribute("hidden",""),O?.focus(),O=null)},he=e=>{y(),document.getElementById(e)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},I=[...["home","about","skills","education","experience","projects","certificates","awards","contact"].map(e=>({label:`Go to ${e}`,hint:`SECTION / ${e.toUpperCase()}`,action:()=>he(e),keywords:[e,"section","navigate"]})),{label:"Toggle theme",hint:"APPEARANCE",action:()=>{N(document.documentElement.dataset.theme==="dark"?"light":"dark"),y()},keywords:["dark","light","theme","mode"]},{label:"Open contact form",hint:"CONTACT",action:()=>{y(),window.open(r.contact.form,"_blank","noopener,noreferrer")},keywords:["contact","email","hire","message"]}],w=(e="")=>{if(!R)return;const a=e.trim().toLowerCase(),t=I.filter(s=>`${s.label} ${s.hint} ${(s.keywords??[]).join(" ")}`.toLowerCase().includes(a));g=Math.min(g,Math.max(t.length-1,0));let n="";R.innerHTML=t.length?t.map((s,o)=>{const d=s.hint.startsWith("SECTION")?"Pages":"Actions",u=d===n?"":`<div class="command-group">${d}</div>`;n=d;const h=s.label.replace(/^Go to /,"").replace(/\b[a-z]/g,$=>$.toUpperCase());return`${u}
      <button class="command-item ${o===g?"selected":""}" type="button" role="option" aria-selected="${o===g}" data-command-index="${I.indexOf(s)}">
        <span class="command-item-copy"><b>${i(h)}</b></span><span class="command-item-enter" aria-hidden="true">↗</span>
      </button>`}).join(""):'<div class="command-empty"><b>No matching commands</b><span>Try another search term.</span></div>',m(".command-item").forEach(s=>s.addEventListener("mouseenter",()=>{g=Number(s.dataset.commandIndex??0),w(f?.value??"")})),m(".command-item").forEach(s=>s.addEventListener("click",()=>{I[Number(s.dataset.commandIndex??0)]?.action()}))},ue=()=>{b||(O=document.activeElement instanceof HTMLElement?document.activeElement:null,b=!0,D?.removeAttribute("hidden"),g=0,f&&(f.value="",w(),requestAnimationFrame(()=>f.focus())))};f?.addEventListener("input",()=>{g=0,w(f.value)});D?.addEventListener("click",e=>{e.target.matches("[data-command-close], .command-close-button, .command-close-button *")&&y()});window.addEventListener("keydown",e=>{const a=e.key.toLowerCase();if((e.metaKey||e.ctrlKey)&&a==="k"){e.preventDefault(),b?y():ue();return}if(b&&a==="escape"){e.preventDefault(),y();return}if(!b)return;const t=m(".command-item");if(a==="arrowdown"&&(e.preventDefault(),t.length&&(g=(g+1)%t.length,w(f?.value??""))),a==="arrowup"&&(e.preventDefault(),t.length&&(g=(g-1+t.length)%t.length,w(f?.value??""))),a==="enter"){e.preventDefault();const n=t[g];n&&I[Number(n.dataset.commandIndex??0)]?.action()}});w();const k=p("#sidsphere-egg"),q=p("#egg-close"),ve=p("#egg-return");let S=!1;const A=()=>{S&&(S=!1,k?.setAttribute("hidden",""),k?.setAttribute("aria-hidden","true"),document.body.classList.remove("egg-active"))},fe=()=>{S||(y(),B(),S=!0,k?.removeAttribute("hidden"),k?.setAttribute("aria-hidden","false"),document.body.classList.add("egg-active"),requestAnimationFrame(()=>q?.focus()))};q?.addEventListener("click",A);ve?.addEventListener("click",A);k?.addEventListener("click",e=>{e.target.matches("[data-egg-close]")&&A()});let E="",j;window.addEventListener("keydown",e=>{if(S&&e.key.toLowerCase()==="escape"){e.preventDefault(),A();return}e.metaKey||e.ctrlKey||e.altKey||e.key.length!==1||!/[a-z]/i.test(e.key)||(E=(E+e.key.toLowerCase()).slice(-9),window.clearTimeout(j),j=window.setTimeout(()=>{E=""},1800),E.endsWith("sidsphere")&&(E="",fe()))});let C=0;const P=p("#hero-role"),H=p("#hero-role-article");window.setInterval(()=>{C=(C+1)%r.roles.length,P&&(P.animate([{opacity:0,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)"}),P.textContent=r.roles[C].toUpperCase(),H&&(H.textContent=/^[aeiou]/i.test(r.roles[C])?"AN":"A"))},2200);const U=new IntersectionObserver(e=>e.forEach(a=>a.isIntersecting&&a.target.classList.add("visible")),{threshold:.12});m(".reveal").forEach(e=>U.observe(e));const be=m("[data-nav]"),ye=new IntersectionObserver(e=>e.forEach(a=>{if(!a.isIntersecting)return;const t=a.target.id;be.forEach(n=>n.classList.toggle("active",n.dataset.nav===t))}),{rootMargin:"-40% 0px -48% 0px"});m(".chapter").forEach(e=>ye.observe(e));const we=()=>{const e=m(".cert-card.is-hidden").length>0,a=p("#certificate-toggle");m(".cert-card").forEach((t,n)=>{n>3&&t.classList.toggle("is-hidden",!e)}),a&&(a.innerHTML=e?`<span>SHOW LESS</span>${v}`:`<span>VIEW MORE</span>${v}`),e&&m(".cert-card:not(.is-hidden)").forEach(t=>U.observe(t))};p("#certificate-toggle")?.addEventListener("click",we);const Ee=p("#mobile-menu"),L=p("#menu-toggle"),ke=p(".folio-header"),Y=e=>{Ee?.classList.toggle("open",e),ke?.classList.toggle("menu-open",e),L?.setAttribute("aria-expanded",String(e)),L?.setAttribute("aria-label",e?"Close navigation":"Open navigation")},B=()=>Y(!1);L?.addEventListener("click",()=>Y(L.getAttribute("aria-expanded")!=="true"));m(".mobile-links a").forEach(e=>e.addEventListener("click",B));m(".depth-card, .stage-3d").forEach(e=>{e.addEventListener("pointermove",a=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=e.getBoundingClientRect(),n=(a.clientX-t.left)/t.width-.5,s=(a.clientY-t.top)/t.height-.5;e.style.setProperty("--rx",`${(-s*8).toFixed(2)}deg`),e.style.setProperty("--ry",`${(n*10).toFixed(2)}deg`),e.style.setProperty("--mx",`${(n*30).toFixed(0)}px`),e.style.setProperty("--my",`${(s*30).toFixed(0)}px`)}),e.addEventListener("pointerleave",()=>{e.style.setProperty("--rx","0deg"),e.style.setProperty("--ry","0deg"),e.style.setProperty("--mx","0px"),e.style.setProperty("--my","0px")})});m(".magnetic").forEach(e=>{e.addEventListener("pointermove",a=>{const t=e.getBoundingClientRect(),n=(a.clientX-(t.left+t.width/2))*.08,s=(a.clientY-(t.top+t.height/2))*.08;e.style.transform=`translate(${n}px,${s}px)`}),e.addEventListener("pointerleave",()=>e.style.transform="")});const K=m(".language-switch-button"),Se=m("[data-language-panel]"),$e=e=>{K.forEach(a=>{const t=a.dataset.languageView===e;a.classList.toggle("active",t),a.setAttribute("aria-selected",String(t))}),Se.forEach(a=>{const t=a.dataset.languagePanel===e;a.classList.toggle("active",t),a.hidden=!t})};K.forEach(e=>e.addEventListener("click",()=>$e(e.dataset.languageView??"spoken")));m(".script-row").forEach(e=>{const a=e.querySelector("strong"),t=e.dataset.languageName??a?.textContent??"",n=e.dataset.languageSample??t;if(!a)return;const s=o=>{a.textContent=o};s(t),e.addEventListener("mouseenter",()=>s(n)),e.addEventListener("mouseleave",()=>s(t)),e.addEventListener("focus",()=>s(n)),e.addEventListener("blur",()=>s(t))});const l=p(".poster-grid");if(l){const e=matchMedia("(prefers-reduced-motion: reduce)");let a=!1,t=0,n=null,s=1,o=0,d=0,u=1,h=!1;new IntersectionObserver(([c])=>{a=c.isIntersecting},{threshold:.15}).observe(l);const $=c=>{if(t&&a&&!h&&!e.matches&&c>=d){const V=Math.min(c-t,50)/1e3,T=l.scrollWidth-l.clientWidth;if(T>0){const F=c<o,X=F?360:30,z=F?s:u,x=l.scrollLeft+z*X*V;x>=T?(l.scrollLeft=T,u=-1,o=0):x<=0?(l.scrollLeft=0,u=1,o=0):l.scrollLeft=x}}t=c,requestAnimationFrame($)};l.addEventListener("pointermove",c=>{c.pointerType!=="mouse"||h||e.matches||(n!==null&&Math.abs(c.clientX-n)>2&&(s=c.clientX>n?1:-1,o=performance.now()+650),n=c.clientX)}),l.addEventListener("pointerleave",()=>{n=null,o=0}),l.addEventListener("pointerdown",()=>{h=!0,d=performance.now()+1200}),window.addEventListener("pointerup",()=>{h=!1}),l.addEventListener("wheel",c=>{Math.abs(c.deltaY)>Math.abs(c.deltaX)&&(c.preventDefault(),l.scrollLeft+=c.deltaY),d=performance.now()+1400},{passive:!1}),l.addEventListener("touchstart",()=>{d=performance.now()+1400},{passive:!0}),l.addEventListener("focusin",()=>{d=Number.POSITIVE_INFINITY}),l.addEventListener("focusout",c=>{(!(c.relatedTarget instanceof Node)||!l.contains(c.relatedTarget))&&(d=performance.now()+1200)}),requestAnimationFrame($)}
//# sourceMappingURL=main-kLMEZFg8.js.map
