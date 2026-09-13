"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./WarumIch.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const leftPhotos = [
  { src: "/fotos/wandern-aufstieg.jpg", alt: "Nico beim Aufstieg",      pos: "center 18%" },
  { src: "/fotos/wurzel.jpg",           alt: "Nico an einer Baumwurzel", pos: "center 22%" },
  { src: "/fotos/zelt-see.jpg",         alt: "Nico am Zelt am See",      pos: "center 35%" },
];

const rightPhotos = [
  { src: "/fotos/kiefernwald-koda.jpg", alt: "Nico mit Koda im Kiefernwald", pos: "center 20%" },
  { src: "/fotos/rucksack-huegel.jpg",  alt: "Nico mit Rucksack auf dem Hügel", pos: "center 15%" },
  { src: "/fotos/gipfel-stadt.jpg",     alt: "Nico mit Blick über die Stadt",   pos: "center 25%" },
];

const paragraphs = [
  "Ich bin selbstständiger Online-Marketer. Ich erstelle Ads, verwalte sie und werte sie aus. Ich weiß deshalb, was in ein Video gehört, was performt und wie eine Zielgruppe tickt.",
  "Vor dem Marketing war ich Bundespolizist, davor bei der Bundeswehr. Struktur, Verlässlichkeit und Deadlines sind für mich kein Thema.",
  "Männliche deutsche UGC-Creator sind in der Minderheit. Viele Männer fühlen sich von Werbung mit weiblichen Darstellerinnen nicht angesprochen, obwohl der Product-Market-Fit gegeben ist. Die Lücke möchte ich füllen.",
  "Ich rede mit dem Zuschauer wie mit einem Kumpel, dem ich ein Produkt empfehle, weil ich es selbst benutze. Ruhig, ehrlich, ohne Ausrufezeichen-Stimme.",
  "Nischen, die ich sowieso jeden Tag bediene: Outdoor, Sport und ein Straßenhund von Kos. Wald, See, Laufstrecke und Calisthenics-Park statt Sofa und Ringlicht.",
];

export default function WarumIch() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".w-left", { x: -60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".w-left", start: "top 80%", once: true } });
      gsap.from(".w-text", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".w-text", start: "top 80%", once: true } });
      gsap.from(".w-right", { x: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".w-right", start: "top 80%", once: true } });
    },
    { scope: ref }
  );

  return (
    <section id="warum" className={s.section} ref={ref}>
      <div className={s.grid}>

        <div className={`${s.photoCol} ${s.left} w-left`}>
          {leftPhotos.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} className={s.photo}
              style={{ objectPosition: p.pos }} />
          ))}
        </div>

        <div className={`${s.textCol} w-text`}>
          <h2 className={s.heading}>Warum ich?</h2>
          <div className={s.paragraphs}>
            {paragraphs.map((p, i) => (
              <React.Fragment key={i}>
                <p>{p}</p>
                {i < paragraphs.length - 1 && <hr className={s.divider} />}
              </React.Fragment>
            ))}
          </div>
          <div className={s.btnWrap}>
            <a href="#kontakt" className={s.btn}>Lass uns quatschen</a>
          </div>
        </div>

        <div className={`${s.photoCol} ${s.right} w-right`}>
          {rightPhotos.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} className={s.photo}
              style={{ objectPosition: p.pos }} />
          ))}
        </div>

      </div>
    </section>
  );
}
