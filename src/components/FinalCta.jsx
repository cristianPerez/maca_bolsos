import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import CountdownTimer from "./CountdownTimer.jsx";
import { CHECKOUT_URL } from "../constants.js";

export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="bg-terracota px-4 py-16 text-crema sm:py-24">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="animate-pulse rounded-full bg-negro-cafe/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
          {t("finalCta.badge")}
        </span>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          {t("finalCta.heading")}
        </h2>
        <p className="text-crema/90">
          {t("finalCta.subtitle")}
        </p>

        <a
          href={CHECKOUT_URL}
          className="mt-2 flex items-center gap-2 rounded-full bg-negro-cafe px-10 py-4 font-semibold uppercase tracking-wide text-crema shadow-lg transition hover:bg-negro-cafe/80"
        >
          {t("finalCta.cta")} <span aria-hidden="true">→</span>
        </a>

        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-crema/70">
            {t("finalCta.timerNote")}
          </p>
          <CountdownTimer variant="dark" />
        </div>
      </Reveal>
    </section>
  );
}
