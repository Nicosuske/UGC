import s from "./page.module.css";

export const metadata = { title: "Datenschutz — Nico Suske" };

export default function Datenschutz() {
  return (
    <main className={s.page}>
      <a href="/" className={s.back}>← Zurück</a>
      <h1 className={s.h1}>Datenschutzerklärung</h1>
      <h2 className={s.h2}>Verantwortlicher</h2>
      <p className={s.p}>Nico Suske, Neubrandenburg — contact@nicosuske.com</p>
      <h2 className={s.h2}>Erhebung von Daten</h2>
      <p className={s.p}>Diese Website erhebt keine personenbezogenen Daten über Formulare oder Tracking-Tools. Beim Besuch werden von Ihrem Browser technisch notwendige Verbindungsdaten an den Server übertragen (IP-Adresse, Zeitstempel, aufgerufene Seite). Diese Daten werden nicht gespeichert oder ausgewertet.</p>
      <h2 className={s.h2}>Externe Links</h2>
      <p className={s.p}>Die Website enthält Links zu Instagram und E-Mail. Für die Inhalte externer Seiten ist ausschließlich der jeweilige Betreiber verantwortlich.</p>
      <h2 className={s.h2}>Kontakt</h2>
      <p className={s.p}>Bei Fragen zum Datenschutz: <a href="mailto:contact@nicosuske.com" className={s.link}>contact@nicosuske.com</a></p>
    </main>
  );
}
