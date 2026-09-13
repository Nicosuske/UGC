"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./UeberMich.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const leftPhotos = [
  { src: "/fotos/bank-stadt.jpg", alt: "Nico in der Stadt", style: { width: "66%" } },
  { src: "/fotos/shaker-freisteller.png", alt: "Nico mit Shaker", style: { width: "72%", marginLeft: "5%", objectFit: "contain" as const } },
];

const rightPhotos = [
  { src: "/fotos/koda-freisteller.png", alt: "Koda", style: { width: "74%", marginLeft: "auto", objectFit: "contain" as const } },
  { src: "/fotos/koda-nico.jpg", alt: "Nico und Koda", style: { width: "60%" } },
];

const listItems = [
  "🏃 Laufen und Calisthenics im Freien",
  "🌲 Wald und See vor der Haustür",
  "🐕 Streuner (🇬🇷) privat nach Deutschland geholt",
  "☔ Bei jedem Wetter draußen",
  "💼 Selbstständig als Online-Marketer",
  "🛡️ Vorleben: Bundespolizei, davor Bundeswehr",
  "📱 @kodafromgreece auf Instagram & TikTok",
  "💪 Vorliebe für's Extreme",
];

export default function UeberMich() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".u-left", { x: -60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".u-left", start: "top 80%", once: true } });
      gsap.from(".u-text", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".u-text", start: "top 80%", once: true } });
      gsap.from(".u-right", { x: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".u-right", start: "top 80%", once: true } });
    },
    { scope: ref }
  );

  return (
    <section id="ueber-mich" className={s.section} ref={ref}>
      <div className={s.grid}>

        <div className={`${s.photoCol} ${s.left} u-left`}>
          {leftPhotos.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} className={s.photo} style={p.style} />
          ))}
        </div>

        <div className={`${s.textCol} u-text`}>
          <h2 className={s.heading}>Mehr über mich</h2>
          <p className={s.sub}>Nico, 26, Neubrandenburg</p>
          <ul className={s.list}>
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={`${s.photoCol} ${s.right} u-right`}>
          {rightPhotos.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} className={s.photo} style={p.style} />
          ))}
        </div>

      </div>
    </section>
  );
}
