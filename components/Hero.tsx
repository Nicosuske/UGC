"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import s from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-title", { y: 80, opacity: 0, duration: 1.2 })
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, "-=0.7")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: containerRef }
  );

  return (
    <section id="top" className={s.hero} ref={containerRef}>
      <img
        src="/fotos/bergkamm.jpg"
        alt="Nico am Bergkamm"
        className={s.bg}
      />
      <div className={s.overlay} />
      <div className={s.content}>
        <h1 className={`${s.title} hero-title`}>Nico Suske</h1>
        <p className={`${s.sub} hero-sub`}>
          26 Jahre · UGC-Creator · Mecklenburgische Seenplatte
        </p>
        <p className={`${s.sub} hero-sub`}>
          Content, der verkauft, ohne wie Werbung zu klingen
        </p>
        <a href="#kontakt" className={`${s.cta} hero-cta`}>
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}
