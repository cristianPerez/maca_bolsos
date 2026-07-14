import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

const numbers = ["01", "02", "03", "04", "05", "06"];

export default function WhatYouGet() {
  const { t } = useTranslation();
  const items = t("whatYouGet.items", { returnObjects: true });

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            {t("whatYouGet.kicker")}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("whatYouGet.heading")}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-dorado/30 shadow-lg">
            {/* TODO: reemplazar esta imagen (stack-mockup.jpg) por el mockup final del stack de productos. */}
            <img
              src="/img/stack-mockup.jpg"
              alt={t("whatYouGet.imgAlt")}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-dorado/30 bg-dorado/30 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={numbers[i]} delay={i * 70}>
              <div className="h-full bg-crema p-7 transition hover:bg-arena/40">
                <span className="font-serif text-3xl font-semibold text-terracota/50">
                  {numbers[i]}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-negro-cafe">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-negro-cafe/70">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
