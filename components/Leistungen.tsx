"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./Leistungen.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Leistungen() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".lei-text", {
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".lei-text", start: "top 80%", once: true },
      });
      gsap.from(".lei-media", {
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".lei-media", start: "top 80%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section id="leistungen" className={s.section} ref={ref}>
      <div className={s.grid}>

        <div className={`${s.text} lei-text`}>
          <h2 className={s.heading}>Lass uns zusammenarbeiten</h2>
          <p className={s.location}>📍 Neubrandenburg, Mecklenburg-Vorpommern</p>

          <div className={s.blocks}>
            <div>
              <h3 className={s.blockTitle}>Themen, die zu mir passen</h3>
              <ul className={s.list}>
                <li>🥾 Outdoor-Ausrüstung</li>
                <li>👟 Lauf- &amp; Sportbekleidung</li>
                <li>🥤 Supplements</li>
                <li>🐕 Hundefutter</li>
                <li>🦴 Hundezubehör</li>
                <li>➕ Offen für andere Nischen — frag einfach</li>
              </ul>
            </div>
            <div>
              <h3 className={s.blockTitle}>Was du wissen solltest</h3>
              <ul className={s.list}>
                <li>Selbstständiger Online-Marketer im Hauptberuf</li>
                <li>Ich verwalte selbst Ads — Hooks &amp; Zielgruppenanalyse sind Alltag</li>
                <li>26 Jahre alt, vorher Bundespolizei und Bundeswehr</li>
                <li>Koda, mein Straßenhund von Kos, ist mit dabei</li>
                <li>Immer draußen: Wald, See, Calisthenics-Park — bei jedem Wetter</li>
              </ul>
            </div>
          </div>

          <p className={s.tagline}>Echter Typ, nicht aufgesetzt, gewissenhaft.</p>
          <a href="#kontakt" className={s.btn}>Kontakt aufnehmen</a>
        </div>

        <div className={`${s.media} lei-media`}>
          <video
            src="/videos/intro.mp4"
            autoPlay loop muted playsInline preload="auto"
            className={s.introVideo}
          />
          <div className={s.photoStack}>
            <img src="/fotos/wald-koda.jpg" alt="Nico mit Koda im Wald" className={s.photo} />
            <img src="/fotos/stadt-pferd-trim.jpg" alt="Nico in der Stadt" className={s.photo} style={{ objectPosition: "50% 30%" }} />
            <img src="/fotos/berg-sitzend.jpg" alt="Nico in den Bergen" className={s.photo} />
          </div>
        </div>

      </div>
    </section>
  );
}
