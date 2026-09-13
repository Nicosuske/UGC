"use client";
import { useState, useEffect } from "react";
import s from "./Nav.module.css";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#warum", label: "Warum ich" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.inner}>
        <a href="#top" className={s.logo}>
          NICO<span>.</span>
        </a>
        <nav className={s.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button className={s.burger} onClick={() => setOpen((o) => !o)} aria-label="Menü">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className={s.mobile}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
