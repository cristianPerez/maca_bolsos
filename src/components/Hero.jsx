import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import { CHECKOUT_URL } from "../constants.js";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden bg-crema px-4 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-dorado/60 bg-arena/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-terracota-oscuro">
            {t("hero.badge")}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-negro-cafe sm:text-5xl md:text-6xl">
            {t("hero.titleA")}{" "}
            <span className="text-terracota-oscuro">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titleB")}
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-negro-cafe/80 sm:text-lg">
            {t("hero.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex items-center gap-2 rounded-full bg-verde-oliva/10 px-4 py-2 text-sm text-verde-oliva">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde-oliva opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-verde-oliva"></span>
            </span>
            <span className="font-medium">{t("hero.buyingNow")}</span>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href={CHECKOUT_URL}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-terracota px-8 py-4 text-center font-semibold uppercase tracking-wide text-crema shadow-lg shadow-terracota/30 transition hover:bg-terracota-oscuro sm:w-auto"
            >
              {t("hero.ctaPrimary")} <span aria-hidden="true">→</span>
            </a>
            <a
              href="#curso-por-dentro"
              className="w-full rounded-full border-2 border-terracota-oscuro px-8 py-4 text-center font-semibold text-terracota-oscuro transition hover:bg-terracota-oscuro hover:text-crema sm:w-auto"
            >
              {t("hero.ctaSecondary")} ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
