"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./OrganischeViews.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [
  { src: "/insights/view-2.jpg", alt: "595 Tsd. Aufrufe" },
  { src: "/insights/view-4.jpg", alt: "877 Tsd. Aufrufe auf TikTok", pos: "50% 100%" },
  { src: "/insights/view-3.jpg", alt: "446 Tsd. Aufrufe" },
  { src: "/insights/view-1.jpg", alt: "150 Tsd. Aufrufe" },
];

export default function OrganischeViews() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".view-img", {
        scale: 0.9, opacity: 0, duration: 0.8, ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".view-img", start: "top 85%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section className={s.section} ref={ref}>
      <div className={s.inner}>
        <p className={s.intro}>
          Auf <strong>@kodafromgreece</strong> — meinem Account über Koda, meinen Straßenhund aus Griechenland — stehe ich hin und wieder selbst vor der Kamera. 3,45 % Engagement, 24.000+ Follower auf Instagram &amp; TikTok zusammen, alles organisch. Heißt: Mein Gesicht, meine Stimme und meine Art zu sprechen halten Leute vor dem Video 😎
        </p>
        <h3 className={s.heading}>Organische Views 🤯</h3>
        <div className={s.grid}>
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`${s.img} view-img`}
              style={img.pos ? { objectPosition: img.pos } : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
