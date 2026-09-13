import s from "./page.module.css";

export const metadata = { title: "Impressum — Nico Suske" };

export default function Impressum() {
  return (
    <main className={s.page}>
      <a href="/" className={s.back}>← Zurück</a>
      <h1 className={s.h1}>Impressum</h1>
      <h2 className={s.h2}>Angaben gemäß § 5 TMG</h2>
      <p className={s.p}>Nico Suske<br />Neubrandenburg, Mecklenburg-Vorpommern<br />Deutschland</p>
      <h2 className={s.h2}>Kontakt</h2>
      <p className={s.p}>E-Mail: <a href="mailto:contact@nicosuske.com" className={s.link}>contact@nicosuske.com</a></p>
      <h2 className={s.h2}>Inhaltlich Verantwortlicher</h2>
      <p className={s.p}>Nico Suske (Anschrift wie oben)</p>
    </main>
  );
}
