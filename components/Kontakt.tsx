"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./Kontakt.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Kontakt() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".k-item", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".k-item", start: "top 80%", once: true },
      });
      gsap.from(".k-fr-left", {
        x: -50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".k-fr-left", start: "top 90%", once: true },
      });
      gsap.from(".k-fr-right", {
        x: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".k-fr-right", start: "top 90%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section id="kontakt" className={s.section} ref={ref}>
      <div className={s.inner}>
        <h2 className={`${s.heading} k-item`}>Lass uns quatschen</h2>
        <p className={`${s.sub} k-item`}>
          Schreib mir per Mail oder direkt auf Instagram. Ich melde mich zurück.
        </p>
        <p className={`${s.note} k-item`}>
          Nur Rohmaterial? Fertig geschnittenes Video? Mehrere Formate im Monat? Sag Bescheid.
        </p>
        <div className={`${s.btns} k-item`}>
          <a href="mailto:contact@nicosuske.com" className={s.btnPrimary}>
            contact@nicosuske.com
          </a>
          <a href="https://instagram.com/kodafromgreece" target="_blank" rel="noopener" className={s.btnOutline}>
            @kodafromgreece
          </a>
        </div>
      </div>

      {/* Freisteller-Cutouts — floating below the buttons like a signature element */}
      <div className={s.freisteller}>
        <img
          src="/fotos/shaker-freisteller.png"
          alt="Nico mit Shaker"
          className={`${s.frLeft} k-fr-left`}
        />
        <img
          src="/fotos/koda-freisteller.png"
          alt="Koda"
          className={`${s.frRight} k-fr-right`}
        />
      </div>
    </section>
  );
}
