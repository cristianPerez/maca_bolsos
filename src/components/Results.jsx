import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

// Las capturas cambian según idioma (i18n): results.images -> *-es.jpg / *-en.jpg
const altKeys = ["results.alt1", "results.alt2"];

export default function Results() {
  const { t } = useTranslation();
  const images = t("results.images", { returnObjects: true });

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            {t("results.kicker")}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("results.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            {t("results.subtitle")}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {images.map((src, i) => (
            <Reveal key={src} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl border border-dorado/30 shadow-lg">
                <img
                  src={src}
                  alt={t(altKeys[i])}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
