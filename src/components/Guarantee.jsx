import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import { CHECKOUT_URL } from "../constants.js";

export default function Guarantee() {
  const { t } = useTranslation();

  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-dorado shadow-md">
          <img
            src="https://manoscreadoras.lovable.app/assets/guarantee-seal-C68Txbw_.jpg"
            alt={t("guarantee.imgAlt")}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
          {t("guarantee.heading")}
        </h2>
        <p className="text-lg font-semibold uppercase tracking-wide text-terracota-oscuro">
          {t("guarantee.emphasis")}
        </p>
        <p className="max-w-xl text-negro-cafe/80">
          {t("guarantee.body")}
        </p>
        <a
          href={CHECKOUT_URL}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-terracota px-8 py-4 font-semibold uppercase tracking-wide text-crema shadow-lg shadow-terracota/30 transition hover:bg-terracota-oscuro"
        >
          {t("guarantee.cta")} <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </section>
  );
}
