import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

export default function Community() {
  const { t } = useTranslation();
  const perks = t("community.perks", { returnObjects: true });

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-verde-oliva/10 p-8 sm:grid-cols-2 sm:p-12">
          <Reveal>
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-2xl border border-verde-oliva/40">
              <img
                src="https://manoscreadoras.lovable.app/assets/community-icon-BSSpcx-y.jpg"
                alt={t("community.iconAlt")}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-verde-oliva">
              {t("community.kicker")}
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
              {t("community.heading")}
            </h2>
            <p className="mt-4 text-negro-cafe/75">
              {t("community.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="flex flex-col gap-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-negro-cafe/85">
                  <span className="mt-0.5 text-verde-oliva">●</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
