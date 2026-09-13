"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./Portfolio.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const videos = [
  { src: "/videos/beispiel-3.mp4", title: "Laufschuh-Testimonial" },
  { src: "/videos/beispiel-2.mp4", title: "Produktüberzeugung für Supplement" },
  { src: "/videos/beispiel-1.mp4", title: "Problem-Solution Hundezubehör" },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".port-card", {
        y: 60, opacity: 0, duration: 0.85, ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: ".port-card", start: "top 83%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section id="portfolio" className={s.section} ref={ref}>
      <div className={s.inner}>
        <h2 className={s.heading}>UGC-Videos</h2>
        <p className={s.sub}>
          So könnte dein Produkt bei mir aussehen. Das hier sind eigene Beispielvideos zu drei Produkten.
        </p>
        <div className={s.grid}>
          {videos.map((v) => (
            <div key={v.src} className={`${s.card} port-card`}>
              <p className={s.cardTitle}>{v.title}</p>
              <video
                src={v.src}
                controls
                playsInline
                preload="metadata"
                className={s.video}
              />
            </div>
          ))}
        </div>
        <p className={s.note}>
          Das sind drei Produkte, keine Grenze. Ich arbeite genauso gern mit Marken aus anderen Nischen — sprich mich einfach an.
        </p>
      </div>
    </section>
  );
}
