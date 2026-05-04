const TICKET_URL = 'https://www.digistore24.com/product/688172';

const modules = [
  {
    num: '01',
    title: 'Buchhaltung automatisieren — Belege, Rechnungen & Reports auf <em>Autopilot</em>',
    sub: 'Belege per Foto erfasst, Rechnungen automatisch erstellt, DATEV/Lexoffice live angebunden.',
    bullets: [
      'Belege per Foto in <strong>Sekunden</strong> erfasst',
      'Rechnungen automatisch erstellt &amp; versendet',
      'Monats-Reports per Knopfdruck ans Steuerbüro',
    ],
  },
  {
    num: '02',
    title: 'Instagram-Content & Postings <em>automatisch</em> erstellen und veröffentlichen',
    sub: 'Vom Briefing bis zum fertigen Post — automatisiert. Du brauchst keine Agentur mehr.',
    bullets: [
      '30 Posts/Reels in <strong>einer Stunde</strong>',
      'Auto-Posting auf Instagram, TikTok &amp; LinkedIn',
      'Markenkonsistenter Stil über alle Formate',
    ],
  },
  {
    num: '03',
    title: 'Live: Fotos & Videos mit KI generieren — vom Briefing bis zum <em>fertigen Reel</em>',
    sub: 'Foto-Shootings ohne Fotograf. Video-Reels in Minuten statt Tagen.',
    bullets: [
      'Foto-Shootings mit KI — ohne Fotograf',
      'Reels live aus Briefing generiert',
      'Voiceover &amp; Musik automatisiert',
    ],
  },
  {
    num: '04',
    title: 'Eigene Workflows mit <em>Claude AI</em> & Cowork bauen — kein Coding nötig',
    sub: 'Bau eigene KI-Agenten ohne Entwickler. Vom ersten Kontakt bis zum Termin.',
    bullets: [
      'Lead-Gen-Agent mit Web-Recherche',
      'Auto-Reply mit deinem Tone-of-Voice',
      'Termin-Buchung ohne Backoffice-Aufwand',
    ],
  },
  {
    num: '05',
    title: 'Prompt-Frameworks & der <em>KI-Stack 2026</em>, der wirklich Zeit und Geld spart',
    sub: 'Welche Tools brauchst du wirklich? Welche kannst du dir sparen? Klare Antworten.',
    bullets: [
      'Der definitive Claude-Prompt-Stack',
      'Tool-Stack-Audit für dein Business',
      'Deine eigene Prompt-Library zum Mitnehmen',
    ],
  },
];

const faq = [
  {
    q: 'Brauche ich technische Vorkenntnisse?',
    a: 'Nein. Der Workshop ist explizit für Founder, Geschäftsführer und Macher — nicht für Entwickler. Wir bauen reale Workflows ohne eine Zeile Code. Wenn du eine E-Mail schreiben kannst, kannst du das hier auch.',
  },
  {
    q: 'Wie viele Plätze sind noch frei?',
    a: 'Die Teilnehmerzahl ist bewusst klein gehalten. Bitte innerhalb von 3 Tagen buchen — danach müssen wir die finale Teilnehmerzahl ans Hotel melden und können in der Regel keine weiteren Plätze annehmen.',
  },
  {
    q: 'Bekomme ich eine Rechnung & ist das absetzbar?',
    a: 'Ja, du bekommst eine ordnungsgemäße Rechnung mit ausgewiesener Mehrwertsteuer (Abwicklung über Digistore24). Als Weiterbildung in der Regel zu 100 % steuerlich absetzbar. Sprich kurz mit deinem Steuerberater.',
  },
  {
    q: 'Was bringe ich mit?',
    a: 'Nur deinen Laptop und eine reale Aufgabe aus deinem Business, die du automatisieren willst. Den Rest stellen wir — inkl. Mittagessen, Snacks, Drinks und gemeinsamem Abendessen.',
  },
  {
    q: 'Wann genau ist der Workshop?',
    a: 'Freitag, 12. Juni 2026, von 10:00 bis 17:30 Uhr. Im Anschluss gemeinsames Abendessen zum Netzwerken.',
  },
  {
    q: 'Wo genau findet der Workshop statt?',
    a: 'In der Nähe von Frankfurt am Main. Die exakte Adresse erhältst du nach der Buchung per E-Mail. Hotel-Empfehlungen mit Sonderkonditionen senden wir mit.',
  },
  {
    q: 'Wie buche ich?',
    a: 'Über den "Spot sichern"-Button. Die Abwicklung läuft sicher über Digistore24 — du erhältst sofort eine Bestätigung per E-Mail.',
  },
];

const pains = [
  'Du verlierst <strong>Stunden pro Woche</strong> mit Belegen, Rechnungen und manuellen Reports.',
  'Dein Content kommt unregelmäßig — du willst posten, aber findest die Zeit nicht.',
  'Du weißt: KI kann viel, aber du hast keinen Plan, <strong>wo du anfängst</strong>.',
  'YouTube-Tutorials zeigen Demos, aber bei deinem konkreten Business-Case scheiterst du.',
  'Du nutzt ChatGPT — aber 80 % vom Potenzial bleibt liegen.',
];

const gains = [
  '<strong>10–20 Stunden/Woche</strong> zurückgewonnen durch automatisierte Backoffice-Workflows.',
  'Content läuft auf Autopilot — Posts, Reels, Fotos in Sekunden statt Stunden.',
  'Du hast einen <strong>klaren KI-Stack</strong> für 2026 — und weißt, was nicht reinmuss.',
  'Du baust eigene KI-Agenten für deine Use-Cases — ohne Entwickler.',
  'Du gehst raus mit <strong>funktionierenden Workflows</strong> in deinem Business — nicht mit Notizen.',
];

const yes = [
  'Du bist Founder, Geschäftsführer oder selbstständig.',
  'Du hast ein laufendes Business und willst Zeit zurückgewinnen.',
  'Du willst KI <strong>operativ einsetzen</strong> — nicht nur darüber reden.',
  'Du bist bereit, einen Tag all-in zu gehen — Hands-on, nicht Zuhören.',
  'Du willst Networking mit Foundern auf Augenhöhe.',
];

const no = [
  'Du suchst einen passiven Online-Kurs zum Nebenher-Schauen.',
  'Du willst KI „mal ausprobieren", hast aber kein konkretes Problem.',
  'Du erwartest, dass jemand anders die Arbeit für dich macht.',
  'Du suchst eine reine Tool-Demo ohne Strategie.',
];

export function renderApp(root) {
  root.innerHTML = `
    <div class="topbar">
      <strong>Frühbucher-Preis aktiv:</strong> 599 € statt 999 € · nur solange Plätze verfügbar
      <a href="${TICKET_URL}" target="_blank" rel="noopener">Spot sichern →</a>
    </div>

    <header class="nav">
      <div class="wrap nav__inner">
        <a href="#top" class="nav__logo" aria-label="NLC KI Workshop">
          <img src="/logo.avif" alt="NLC KI Workshop Logo" />
        </a>
        <nav class="nav__links">
          <a href="#programm">Programm</a>
          <a href="#zielgruppe">Für wen</a>
          <a href="#preis">Preis</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="${TICKET_URL}" target="_blank" rel="noopener" class="nav__cta">Spot sichern →</a>
      </div>
    </header>

    <main id="top">
      <!-- HERO -->
      <section class="hero">
        <div class="wrap">
          <div class="hero__badges">
            <span class="pill pill--warm"><span class="pulse-dot"></span> 12.06.2026 · Nähe Frankfurt</span>
            <span class="pill">10:00 – 17:30 Uhr</span>
          </div>

          <h1 class="hero__title">
            Ein Tag <em>Claude AI</em> — und du gehst raus mit Workflows, die <span class="strike">irgendwann</span> ab Montag laufen.
          </h1>

          <p class="hero__lede">
            <strong>Buchhaltung, Content, Vertrieb — automatisiert.</strong> Kein trockener Vortrag, sondern hands-on Training mit echten Fallbeispielen. Direkt umsetzen statt nur zuhören.
          </p>

          <div class="hero__cta-row">
            <a href="${TICKET_URL}" target="_blank" rel="noopener" class="btn btn--primary btn--xl">
              Jetzt Spot sichern · 599 € <span class="arrow">→</span>
            </a>
            <a href="#programm" class="btn btn--ghost btn--xl">
              Programm ansehen
            </a>
            <div class="hero__cta-meta">
              <span><strong>All-Inclusive</strong> · Essen &amp; Drinks ganztägig</span>
              <span>Inkl. gemeinsamem Abendessen</span>
            </div>
          </div>

        </div>
      </section>

      <!-- PAIN / GAIN -->
      <section class="section" id="problem">
        <div class="wrap">
          <div class="section__head">
            <span class="eyebrow">Erkennst du dich wieder?</span>
            <h2 class="section__title">Du verschwendest <em>Zeit</em>, die du nicht zurückbekommst.</h2>
            <p class="section__lede">
              Die meisten Founder wissen, dass KI alles ändert. Sie wissen nur nicht, wo sie anfangen sollen — und verlieren jeden Monat tausende Euro an unproduktiven Stunden.
            </p>
          </div>

          <div class="compare">
            <div class="compare__col compare__col--bad">
              <div class="compare__head">Status quo · Ohne Workshop</div>
              <h3 class="compare__title">So sieht deine Woche heute aus.</h3>
              <div class="compare__list">
                ${pains.map(p => `
                  <div class="compare__item">
                    <span class="compare__icon">✕</span>
                    <span>${p}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="compare__col compare__col--good">
              <div class="compare__head">Nach dem Workshop</div>
              <h3 class="compare__title">So sieht deine Woche <em>danach</em> aus.</h3>
              <div class="compare__list">
                ${gains.map(g => `
                  <div class="compare__item">
                    <span class="compare__icon">✓</span>
                    <span>${g}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRAMM / MODULES -->
      <section class="section" id="programm">
        <div class="wrap">
          <div class="section__head">
            <span class="eyebrow">Das Programm · Hands-on</span>
            <h2 class="section__title">Was du am Abend wirklich <em>kannst</em>.</h2>
            <p class="section__lede">
              Kein Foliengewitter. 5 konkrete Module, die du am Montag in deinem Business einsetzt.
            </p>
          </div>

          <div class="modules">
            ${modules.map(m => `
              <div class="module">
                <div class="module__num">${m.num}</div>
                <div class="module__body">
                  <h3 class="module__title">${m.title}</h3>
                  <p class="module__sub">${m.sub}</p>
                  <ul class="module__list">
                    ${m.bullets.map(b => `<li><span>${b}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FOR WHOM -->
      <section class="section section--soft" id="zielgruppe">
        <div class="wrap">
          <div class="section__head">
            <span class="eyebrow">Ehrlichkeits-Check</span>
            <h2 class="section__title">Für wen ist dieser Workshop — und für wen <em>nicht</em>?</h2>
          </div>
          <div class="who">
            <div class="who__col who__col--yes">
              <div class="who__head">Dieser Workshop ist für dich</div>
              <h3 class="who__title">Perfekt, wenn…</h3>
              <ul class="who__list">
                ${yes.map(y => `<li><span class="who__icon">✓</span><span>${y}</span></li>`).join('')}
              </ul>
            </div>
            <div class="who__col who__col--no">
              <div class="who__head">Lieber nicht buchen</div>
              <h3 class="who__title">Nicht für dich, wenn…</h3>
              <ul class="who__list">
                ${no.map(n => `<li><span class="who__icon">✕</span><span>${n}</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- PRICING -->
      <section class="section" id="preis">
        <div class="wrap">
          <div class="section__head">
            <span class="eyebrow">Investition · Frühbucher aktiv</span>
            <h2 class="section__title">Spare <em>400 €</em> als Frühbucher.</h2>
            <p class="section__lede">
              599 € statt regulär 999 €. Sichere Abwicklung über Digistore24 — sofortige Bestätigung per E-Mail.
            </p>
          </div>

          <div class="price-only">
            <div class="price-single__col">
              <div class="price__badge">Frühbucher · spare 400 €</div>
              <div class="price__name">NLC KI Workshop · 12.06.2026</div>
              <div class="price__amount">
                <span class="price__big">599</span>
                <span class="price__currency">€</span>
                <span class="price__strike">999&nbsp;€</span>
              </div>
              <div class="price__sub">Brutto · inkl. 19 % MwSt. · einmalige Zahlung</div>
              <ul class="price__features">
                <li><span><strong>Ganztägiger Workshop</strong> · 10:00 – 17:30 Uhr</span></li>
                <li><span>Mittagessen, Snacks &amp; Drinks <strong>den ganzen Tag</strong></span></li>
                <li><span><strong>Gemeinsames Abendessen</strong> mit Speakern und Teilnehmern</span></li>
                <li><span>Top-Speaker live: Knedel, Yazici, Vorreiter u.a.</span></li>
                <li><span>Komplette Templates &amp; Prompt-Library zum Mitnehmen</span></li>
                <li><span>3+ funktionierende KI-Workflows in deinem Business</span></li>
              </ul>
              <a href="${TICKET_URL}" target="_blank" rel="noopener" class="price__cta price__cta--accent btn--xl">
                Jetzt Spot sichern → 599 €
              </a>
              <div class="price__deadline">Sichere Zahlung · sofortige Bestätigung per E-Mail</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section section--soft" id="faq">
        <div class="wrap">
          <div class="section__head">
            <span class="eyebrow">FAQ</span>
            <h2 class="section__title">Was du noch wissen <em>willst</em>.</h2>
          </div>

          <div class="faq">
            ${faq.map(({q, a}) => `
              <details class="faq__item">
                <summary class="faq__q">${q}</summary>
                <p class="faq__a">${a}</p>
              </details>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="final">
        <div class="wrap">
          <div class="hero__badges" style="justify-content: center;">
            <span class="pill pill--warm"><span class="pulse-dot"></span> Bitte innerhalb 3 Tagen buchen</span>
          </div>
          <h2 class="final__title">
            Ein Tag, der deine <em>nächsten 12 Monate</em> verändert.
          </h2>
          <p class="final__sub">
            Du hast zwei Optionen: Weiter Stunden in Belege, Content und manuelle Prozesse stecken — oder am 12.06. mit Workflows rausgehen, die für dich arbeiten.
          </p>
          <div class="final__cta">
            <a href="${TICKET_URL}" target="_blank" rel="noopener" class="btn btn--primary btn--xl">
              Jetzt Spot sichern · 599 € <span class="arrow">→</span>
            </a>
          </div>
          <div class="final__meta">12.06.2026 · 10:00–17:30 · Nähe Frankfurt · 100 % absetzbar</div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="wrap">
        <div class="footer__inner">
          <div class="footer__brand">
            <img src="/logo.avif" alt="NLC KI Workshop Logo" />
            <p>NLC KI Workshop · Hands-on KI-Training für Founder, Geschäftsführer und Macher. 12.06.2026 · Nähe Frankfurt am Main.</p>
          </div>
          <div class="footer__col">
            <h4>Workshop</h4>
            <a href="#programm">Programm</a>
            <a href="#zielgruppe">Für wen</a>
            <a href="#preis">Preis</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer__col">
            <h4>Kontakt</h4>
            <a href="mailto:info@nolimitclub.de">info@nolimitclub.de</a>
            <p>No Limit Club GmbH</p>
            <p>Mainz-Kastel</p>
          </div>
          <div class="footer__col">
            <h4>Rechtliches</h4>
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
            <a href="/agb.html">AGB</a>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© 2026 — No Limit Club GmbH</span>
          <span>Abwicklung über Digistore24</span>
        </div>
      </div>
    </footer>

    <div class="sticky-cta" data-visible="false">
      <div class="sticky-cta__info">
        <strong>12.06.2026</strong> · 599 € brutto
      </div>
      <a href="${TICKET_URL}" target="_blank" rel="noopener" class="sticky-cta__btn">Spot sichern →</a>
    </div>
  `;

  setupStickyCtaVisibility();
}

function setupStickyCtaVisibility() {
  const sticky = document.querySelector('.sticky-cta');
  const triggers = document.querySelectorAll('.hero__cta-row .btn--primary, .final__cta .btn--primary, .price__cta--accent');
  if (!sticky || !triggers.length || !('IntersectionObserver' in window)) return;

  const visibility = new Map();
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      visibility.set(entry.target, entry.isIntersecting);
    }
    const anyVisible = [...visibility.values()].some(Boolean);
    sticky.dataset.visible = anyVisible ? 'false' : 'true';
  }, { threshold: 0.1 });

  triggers.forEach((el) => {
    visibility.set(el, false);
    io.observe(el);
  });
}
