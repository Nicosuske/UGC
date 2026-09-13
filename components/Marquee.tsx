import s from "./Marquee.module.css";

const TEXT =
  "Outdoor-Ausrüstung · Lauf- & Sportbekleidung · Supplements · Hundefutter · Hundezubehör · Und deine Nische · ";

export default function Marquee() {
  return (
    <div className={s.bar}>
      <div className={s.track}>
        <span>{TEXT}</span>
        <span>{TEXT}</span>
        <span>{TEXT}</span>
        <span>{TEXT}</span>
      </div>
    </div>
  );
}
