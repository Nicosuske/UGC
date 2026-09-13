import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>Nico Suske</div>
        <div className={s.tagline}>UGC-Creator aus Neubrandenburg — Outdoor, Sport und Hunde-Marken.</div>
        <a href="mailto:contact@nicosuske.com" className={s.email}>contact@nicosuske.com</a>
        <div className={s.socials}>
          <a href="https://instagram.com/kodafromgreece" target="_blank" rel="noopener" aria-label="Instagram" className={s.icon}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="mailto:contact@nicosuske.com" aria-label="E-Mail" className={s.icon}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
          </a>
        </div>
        <div className={s.legal}>
          <span>© {new Date().getFullYear()} Nico Suske</span>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
