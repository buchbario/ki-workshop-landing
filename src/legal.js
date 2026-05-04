import './style.css';
import './legal.css';

export function renderLegal({ title, eyebrow, body }) {
  document.getElementById('app').innerHTML = `
    <header class="nav">
      <div class="wrap nav__inner">
        <a href="/" class="nav__logo" aria-label="NLC KI Workshop">
          <img src="/logo.avif" alt="NLC KI Workshop Logo" />
        </a>
        <nav class="nav__links">
          <a href="/#programm">Programm</a>
          <a href="/#zielgruppe">Für wen</a>
          <a href="/#preis">Preis</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <a href="/" class="nav__cta">← Zur Startseite</a>
      </div>
    </header>

    <main class="legal">
      <div class="wrap">
        <header class="legal__head">
          <span class="eyebrow">${eyebrow}</span>
          <h1 class="legal__title">${title}</h1>
        </header>
        <article class="legal__body">${body}</article>
      </div>
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
            <a href="/#programm">Programm</a>
            <a href="/#zielgruppe">Für wen</a>
            <a href="/#preis">Preis</a>
            <a href="/#faq">FAQ</a>
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
  `;
}
